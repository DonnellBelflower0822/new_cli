<template>
  <div class="home">
    <img src="~assets/img/logo.png">
    <el-button>默认按钮</el-button>
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from 'module1/components/HelloWorld.vue'
  import Vue from 'vue'
  import { Button } from 'element-ui'

  Vue.use(Button)
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    mounted () {
      // console.log(this.$ajax)
    }
  }
</script>
