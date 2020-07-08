<template>
  <div class="tab-bar-item" @click="changeRoute">
    <div class="img" v-show="!isActive"><slot name="img"></slot></div>
    <div class="img" v-show="isActive"><slot name="img-active"></slot></div>
    <div class="text" :class="{active: isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props:{
     link:String
     
    },
    methods: {
      changeRoute(){
        this.$router.replace(this.link)
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.link) == -1 ? false : true
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 5px;

    /* 可以解决图片下面的3px */
    vertical-align: middle;
  }

  .tab-bar-item .text{
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
   .tab-bar-item .active{
     color: deeppink;
   }
</style>
