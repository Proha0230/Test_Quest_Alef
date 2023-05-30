<template>
  <navbar></navbar>
  <router-view/>
  <footer-view></footer-view>
</template>


<script>
import navbar from './views/navbar.vue';
import footerView from './views/footerView.vue';

export default{
  setup(){


    return{}
  },
  components:{navbar, footerView}
}

</script>

<style>

</style>
