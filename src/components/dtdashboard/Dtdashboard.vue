<template>
  <div class='dashboard'>
    <h3>用户列表</h3>
    <hr/>
    <ul>
      <li v-for='(item,index) in yonghu'
          class='licla'
          title='查看血糖数据曲线图'
          @click='chakanshuju(index)'>{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        yonghu: ['廖雷', '乔智兰', '杨质彬', '何春兰']
      }
    },
    methods: {
      chakanshuju: function (index) {
        this.$router.push({path: '/quxiantu', query: {index: index}})
      }
    }
  }
</script>
<style scoped>
  .dashboard {
    margin: 0 10px;
  }
  hr {
    margin: 10px 0;
    border: 0.5px solid #DEDBDB;
  }
  .dashboard .licla {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
</style>
