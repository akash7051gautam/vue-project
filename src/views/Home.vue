<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="flex justify-center">
      <div class="border border-gray-400 w-full">
        <vueper-slides autoplay :arrows="false">
          <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content"
            :image="slide.image" :autoplay="true" />
        </vueper-slides>
      </div>
    </div>

    <div class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 justify-center w-full m-auto  hover:shadow-sm">
      <DesignList />
    </div>

    <load-more></load-more>
    
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";
  import DesignList from '@/components/Designs/index.vue';

  export default {
    name: "Home",
    components: {
      HelloWorld,
      VueperSlides,
      VueperSlide,
      DesignList
    },
    computed: {
      slides() {
        return this.$store.getters['designs/slides'];
      },
      designs() {
        return this.$store.getters['designs/designs'];
      }
    },

  };
</script>