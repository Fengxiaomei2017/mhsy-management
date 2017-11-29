<template>
<div class='charts'>
  <div class='mychartjs' :style='{width: "90%", height: "400px"}'></div>
</div>
</template>
<script>
  import {xietangshuju} from '@/common/js/data.js'
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/markPoint')
  require('echarts/lib/component/markLine')
  require('echarts/lib/component/legendScroll')
  export default {
    data () {
      return {
        yonghu: ['Liaolei', 'Qiaozhilan', 'Yangzhibin', 'Hechunlan'],
        yonghuxietang: [],
        num: 0,
        Title: '',
        X_data: [],
        Y_kongfu: [],
        Y_canhou: []
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.getyonghuindex()
        this.getxietangshuju()
        this.geteveryvalue(this.num)
        this.drawline()
      })
    },
    methods: {
      getyonghuindex: function () {
        this.num = this.$route.query.index
      },
      getxietangshuju: function () {
        for (let i = 0; i < this.yonghu.length; i++) {
          let shuju = xietangshuju(this.yonghu[i])
          this.yonghuxietang.push(shuju)
        }
      },
      geteveryvalue: function (num) {
        for (let i in this.yonghuxietang[num]) {
          if (i === 'title') {
            this.Title = this.yonghuxietang[num][i]
          }
          if (i === 'x_data') {
            this.X_data = this.yonghuxietang[num][i]
          }
          if (i === 'y_kongfu') {
            this.Y_kongfu = this.yonghuxietang[num][i]
          }
          if (i === 'y_canhou') {
            this.Y_canhou = this.yonghuxietang[num][i]
          }
        }
      },
      drawline: function () {
        let chartjs = document.getElementsByClassName('mychartjs')[0]
        let mychart = echarts.init(chartjs)

        mychart.setOption({
          title: {
            text: this.Title
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['空腹血糖', '餐后血糖']
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.X_data
          },
          yAxis: {
            // type: 'value',
            // axisLabel: {
            //   formatter: '{value} (mmol/L)'
            // }
          },
          series: [
            {
              name: '空腹血糖',
              type: 'line',
              data: this.Y_kongfu,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name: '餐后血糖',
              type: 'line',
              data: this.Y_canhou,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            }
          ]
        })
      }
    }
  }
</script>
<style scoped>

</style>
