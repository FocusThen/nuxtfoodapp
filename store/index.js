import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  foodData: [],
  cart: []
});

export const getters = {
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0);
  },
  lengthOfCart: state => {
    return state.cart.length;
  }
};

export const mutations = {
  updateFoodData: (state, data) => {
    state.foodData = data;
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4();
    state.cart.push(formOutput);
  }
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.foodData.length) return;

    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          commit("updateFoodData", data);
        });
    } catch (error) {
      console.log(error);
    }
  }
};
