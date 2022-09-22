<script>
import TheHomeSlider from '@/components/TheHomeSlider.vue'
import CustomCursor from '@/components/CustomCursor.vue'

export default{
  components: {
    TheHomeSlider,
    CustomCursor
  },

  data(){
    return{
      hoverClass:[
        "swiper-pagination-bullet",
      ],    
    }
  }
}

</script>

<template>
  <main>
    <TheHomeSlider />
    <CustomCursor :hoverClass="hoverClass"/>
  </main>
</template>
