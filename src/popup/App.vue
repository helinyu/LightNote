<template>
  <div class="popup-wrapper" :style="wrapperStyle">
    阿斯蒂芬黄金卡了还是地方接口
    <Footer />
  </div>
</template>

<script lang="js">
import { defineComponent, provide, ref, reactive, computed } from "vue";
import Footer from './Footer/index.vue'
export default ({
  components: {
    Footer,
  }
});

</script>

<style>
.popup-wrapper {

  width: 500px;
  height: 500px;
  background-color: rgb(89, 161, 185);
  /* position: fixed;
  right: 0px;
  top: 1vh;
  width: 500px;
  min-width: 500px;
  height: 98vh;
  overflow-y: scroll;
  background-color: rgba(100, 108, 255, 0.8);
  opacity: 1;
  border-radius: 10px;
  z-index: 9999; */

  /* .popup-close {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    color: white;
  } */
}
</style>
