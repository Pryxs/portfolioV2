<script>
import { RouterView } from 'vue-router'
import { ref } from "vue"
import RobotError from '@/assets/robot-error.svg?component'

export default {
  components: {
    RouterView,
    RobotError
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
  <div v-else class="advice">
    <span class="advice_title">Oooops</span>
    <p class="advice_message">Vous devriez essayer avec un écran plus <strong>grand</strong> !</p>
    <div class="advice_image">
      <RobotError/>
    </div>
  </div>
</template>

<style lang="scss">
  .advice{
    background-color: #222;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Cabin', sans-serif;
    padding: 1rem;
    text-align: center;

    &_title{
      font-size: 40px;
    }

    &_message{
      font-size: 24px;

      strong{
        color: $primary-color;
      }
    }

    &_image{
      margin-top: 4rem;

      svg{
        transform: scale(1.6);
      }
    }
  }
</style>
