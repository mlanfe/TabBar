<template>
  <div class="tab-bar">
    <slot/>
  </div>
</template>

<script>
  import TabBarItem from './TabBarItem'

  export default {
    name: 'TabBar',
    components:{
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar{
    position: fixed;
    display: flex;
    bottom: 0;
    right: 0;
    left: 0;
    height: 49px;

    background-color: #f6f6f6;
      border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);
  }
  
</style>
