<template>
  <loading :active="isLoading" :is-full-page="fullPage" :loader="loader"/>
  <div v-if="!isLoading" class="">
    <nav-bar v-if="$route.path !== '/login'"></nav-bar>
    <router-view />

    <!-- <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox> -->

  </div>
</template>
<script>

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";


export default {
  data(){
    return {
      isLoading: true,
      fullPage: false,
      loader: "bars"
    }
  },
  components: {
    Loading,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    // const btn = document.querySelector("button.mobile-menu-button");
		// 		const menu = document.querySelector(".mobile-menu");

		// 		btn.addEventListener("click", () => {
		// 			menu.classList.toggle("hidden");
		// 		});
  },
};
</script>


<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgba(236, 72, 153, var(--tw-text-opacity));
}
</style> -->
