<template>
  <div class="home">
    <img src="~assets/img/logo.png">
    <el-button @click="btn">默认按钮</el-button>
    <el-button @click="demo">默认按钮</el-button>
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from 'index/components/HelloWorld.vue'
  import Vue from 'vue'
  import { Button } from 'element-ui'

  Vue.use(Button)
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    mounted () {
      console.log(1)
      // console.log(this.$ajax)
    },
    methods: {
      btn () {
        wx.miniProgram.redirectTo({
          url: `/pages/logs/main`
        })
      },
      demo () {
        wx.miniProgram.postMessage({data: {foo: 'bar'}})
      }
    }

  }
</script>
