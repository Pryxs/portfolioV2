<script>
import { RouterView } from 'vue-router'
import { ref } from "vue"

export default {
  components: {
    RouterView,
  },

  data: function () {
    return {
      windowWidth: ref(window.innerWidth),
    }
  },

  mounted () {
    window.addEventListener('resize', this.onWidthChange); 
  },

  methods:{
    onWidthChange: function() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<template>
  <RouterView v-if="windowWidth > 785"/>
  <div v-else>nop</div>
</template>

<style>

</style>
