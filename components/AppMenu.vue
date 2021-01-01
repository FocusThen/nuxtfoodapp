<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/" exact>
          <AppLogo />
        </nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
    <div class="smallnum" v-if="lengthOfCart">{{ lengthOfCart }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";
import { mapGetters } from "vuex";

export default {
  components: { AppLogo },
  computed: {
    ...mapGetters(["lengthOfCart"])
  }
};
</script>

<style lang="scss" scoped></style>
