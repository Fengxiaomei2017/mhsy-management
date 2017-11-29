<template>
  <div class='content'>
    <Zuocedaohang class='left_content' v-on:jiantingdh='getdhvalue'></Zuocedaohang>
    <div class='right_content'>
      <Contentbt :biaotishuju='biaotishuju'></Contentbt>
      <Separaror></Separaror>
      <router-view/>
    </div>
  </div>
</template>
<script>
  import {biaoti} from '@/common/js/data.js'
  import Zuocedaohang from './Dtzuocedaohang'
  import Contentbt from './Dtcontentbt.vue'
  import Separaror from './Dtseparator.vue'
  export default {
    data () {
      return {
        biaotiziduan: [
          'Dashboard', 'Inbox', 'Charts', 'UI', 'Tables', 'Forms'
        ],
        biaotishuju: {}
      }
    },
    methods: {
      getdhvalue: function (index) {
        this.biaotishuju = biaoti(this.biaotiziduan[index])
        // console.log(this.biaotishuju)
      }
    },
    components: {
      Zuocedaohang,
      Contentbt,
      Separaror
    }
  }
</script>
<style scoped>
  .content {
    display: flex;
    width: 80%;
    min-width: 999px;
    margin: 0 auto 20px auto;
    overflow: hidden;
  }
  .content .left_content {
    flex: 0 0 15%;
  }
  .content .right_content {
    flex: 1;
    padding: 10px;
    color: #9D9D9D;
    background-color: #F9F9F9;
    border: 1px solid #DADADA;
    box-shadow: -1px 0 1px 0 #D2D2D2;
  }
</style>
