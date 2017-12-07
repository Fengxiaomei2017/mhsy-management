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
    <hr />
    <ul>
      <li class='licla'
          v-for='(item,index) in shuju'
          @click='chakanbiaodan(index)'>{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        yonghu: ['廖雷', '乔智兰', '杨质彬', '何春兰'],
        shuju: ['用户信息', '用户', '音频数据', '微信账号', '微信用户', '设备状态', '设备用户', '设备微信', '设备', '日常数据']
      }
    },
    methods: {
      chakanshuju: function (index) {
        this.$router.push({path: '/quxiantu', query: {index: index}})
      },
      chakanbiaodan: function (index) {
        this.$router.push({path: '/yonghuxinxi', query: {index: index}})
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
