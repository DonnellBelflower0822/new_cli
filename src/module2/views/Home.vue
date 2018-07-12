<template>
  <div class="home">
    <img src="~assets/img/logo.png">
    <ul>
      <li v-for="(item,index) in tmp"
          :key="index">
        {{item}}
      </li>
    </ul>
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from 'index/components/HelloWorld.vue'
  // 此列表数据只是这个组件用，
  // 但由于直接写在data里面会是此页面太长
  // 所以把tmp数据写在当前目录的data.js文件
  import { tmp } from './data'

  export default {
    name: 'home',
    data () {
      return {
        tmp
      }
    },
    components: {
      HelloWorld
    }
  }
</script>
