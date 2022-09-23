<template>
  <div class="about">
    <swiper
      :direction="'vertical'"
      :slides-per-view="1"
      :modules="modules" 
      :navigation="true"
      :mousewheel="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="swiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel } from 'swiper';

//   // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

//   // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/effect-fade';
  import 'swiper/css/mousewheel';
  

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Mousewheel, Navigation, EffectFade]
      };
    },
};
</script>

<style lang="scss">
  .about{
    width: 300px;
    background: salmon;

    .swiper{
      height: 300px;
    }
  }
</style>
