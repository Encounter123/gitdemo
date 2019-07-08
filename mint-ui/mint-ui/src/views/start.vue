<template>
  <div>
    <div @click="btn">这是一个按钮</div>  
    <mt-button  @click="btn" type="danger">按钮</mt-button>
  </div>
</template>
<script>
import Vue from 'vue'
import {  Button, Header } from "mint-ui";
Vue.component(Button.name, Button)
// window.Toast = Toast

/**
 * 文档地址
 * @param {type} 
 * @return: 
 */
// Vue文档：https://vue.docschina.org/v2/guide
// mint-ui文档：http://mint-ui.github.io

export default {
  data (){
    return {

    }
  },
  components :{
    // 'mt-button':Button
  },
  methods:{
    btn(){
      console.log(12)
      Toast('提示信息')
    }
  },
  created(){
    Toast('提示信息')
  }
}
</script>

