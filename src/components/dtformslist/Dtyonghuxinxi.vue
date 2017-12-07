<template>
  <div class='yhxinxi_box'>
    <div class='yhxinxi_biaoti'>
      <i class='icon-add_circle'></i>
      <span>Form Validations</span>
    </div>
    <div class='yhxinxi_list'
         v-for='(item,index) in xinxijson'>
           <div class='yhxinxi_text'>
                <span class='label'>{{yumingziduan[index]}}<span class='must'>*</span></span>
           </div>
           <div class='yhxinxi_input'
                v-if='!item.radio'>
                <input  class='shuru'
                        v-model='tijiaoxinxi[item.yuming]'>
                <small  class='field_notice'></small>
           </div>
           <form class='yhxinxi_input input_xuanze'
                 v-if='item.radio'>
              <label  class='radio_box'
                      v-for='option in item.option'>
                <input  type='radio'
                        v-model='tijiaoxinxi[item.yuming]'
                        name='xingbie'
                        :value='option'>{{option}}</label>
           </form>
    </div>
    <!-- <div class='yhxinxi_list'
         v-for='item in xinxijson'
         v-if='item.radio'>
         <div class='yhxinxi_text'>
              <span class='label'>{{item.yuming}}<span class='must'>*</span></span>
         </div>
         <form class='yhxinxi_input input_xuanze'>
            <label  class='radio_box'
                    v-for='option in item.option'>
              <input  type='radio'
                      v-model='tijiaoxinxi[item.yuming]'
                      name='xingbie'
                      :value='option'>{{option}}</label>
         </form>
         <small  class='field_notice'></small>
    </div> -->
    <!-- <div class='yhxinxi_list'>
         <div class='yhxinxi_text'>
              <span class='label'>性别<span class='must'>*</span></span>
         </div>
         <form class='yhxinxi_input input_xuanze'>
                <input  type='radio'
                        v-model='yonghuxinxi.Xingbie'
                        name='xingbie'
                        value='男'>男
                <input  type='radio'
                        v-model='yonghuxinxi.Xingbie'
                        name='xingbie'
                        value='女'>女
         </form>
         <small  class='field_notice'></small>
    </div> -->
    <!-- <div class='yhxinxi_list'>
         <div class='yhxinxi_text'>
              <span class='label'>用户编码<span class='must'>*</span></span>
         </div>
         <div class='yhxinxi_input'>
              <input  class='shuru'
                      v-model='yonghuxinxi.Yonghubianma'>
              <small  class='field_notice'>由字母组成</small>
         </div>
    </div>
    <div class='yhxinxi_list'>
         <div class='yhxinxi_text'>
              <span class='label'>年龄<span class='must'>*</span></span>
         </div>
         <div class='yhxinxi_input'>
              <input  class='shuru'
                      v-model='yonghuxinxi.Nianling'>
              <small  class='field_notice'></small>
         </div>
    </div>
    <div class='yhxinxi_list'>
         <div class='yhxinxi_text'>
              <span class='label'>地址<span class='must'>*</span></span>
         </div>
         <div class='yhxinxi_input'>
              <input  class='shuru'
                      v-model='yonghuxinxi.Dizhi'>
              <small  class='field_notice'></small>
         </div>
    </div> -->
    <!-- <div class='yhxinxi_list'>
         <div class='yhxinxi_text'>
              <span class='label'>体检<span class='must'>*</span></span>
         </div>
         <div class='yhxinxi_input'>
              <input  class='shuru'
                      v-model='yonghuxinxi.Tijian'>
              <small  class='field_notice'></small>
         </div>
    </div>
    <div class='yhxinxi_list'>
         <div class='yhxinxi_text'>
              <span class='label'>启动<span class='must'>*</span></span>
         </div>
         <div class='yhxinxi_input'>
              <input  class='shuru'
                      v-model='yonghuxinxi.Qidong'>
              <small  class='field_notice'></small>
         </div>
    </div>
    <div  class='yhxinxi_list'>
          <div class='yhxinxi_text'>
               <span class='label'>备注</span>
          </div>
          <div  class='yhxinxi_input'>
                <textarea class='shuru shrutext'
                          v-model='yonghuxinxi.Beizhu'></textarea>
                <small  class='field_notice'></small>
          </div>
    </div> -->
    <div class='yhxinxi_list'>
         <div class='yhxinxi_text'>
              <span class='label'>Submit</span>
         </div>
         <div class='yhxinxi_input input_xuanze'>
            <input   class='shuru'
                     type='Submit'
                     value='Validate'
                     @click='tijiaoyhxinxi'>
         </div>
    </div>
  </div>
</template>
<script>
  import {formdata} from '@/common/js/data.js'
  import {yonghuziduan} from '@/common/js/ziduan.js'
  export default {
    data () {
      return {
        yonghushuju: ['Yonghuxinxi', 'Yonghu', 'Yinpinshuju', 'Weixinzhanghao', 'Weixinyonghu', 'Shebeizhuangtai', 'Shebeiyonghu', 'Shebeiweixin', 'Shebei', 'Richangshuju'],
        bianma: '',
        xinxijson: [],
        tijiaoxinxi: {},
        yumingziduan: []
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.getbiaodanxinxi()
        this.getxinxijson()
        this.getyuming()
      })
    },
    methods: {
      getbiaodanxinxi: function () {
        let bianmaindex = this.$route.query.index
        this.bianma = this.yonghushuju[bianmaindex]
        console.log(this.bianma)
      },
      getxinxijson: function () {
        this.xinxijson = formdata(this.bianma)
        console.log(this.xinxijson)
      },
      getyuming: function () {
        for (let i = 0; i < this.xinxijson.length; i++) {
          for (let j in this.xinxijson[i]) {
            if (j === 'yuming') {
              let yuming = yonghuziduan(this.xinxijson[i][j])
              this.yumingziduan.push(yuming)
            }
          }
        }
        // console.log(this.yumingziduan)
      },
      tijiaoyhxinxi: function () {
        console.log(this.tijiaoxinxi)
      }
    }
  }
</script>
<style scoped>
  .yhxinxi_box {
    font-family: Droid Sans;
    border: 10px solid rgba(0,0,0,0);
  }
  .yhxinxi_box .yhxinxi_biaoti {
    height: 38px;
    padding-left: 10px;
    line-height: 38px;
    border: 1px solid #C9C9C9;
    border-radius: 3px 3px 0 0;
    box-shadow: inset 0 1px 0 #fff;
    background: linear-gradient(to bottom, #fff 0%,#f5f5f5 100%);
  }
  .yhxinxi_box .yhxinxi_list {
    display: flex;
    overflow: hidden;
    padding: 15px;
    width: auto;
    height: auto;
    border: 1px solid #dadada;
    border-top: 0;
    background-color: #FDFDFD;
  }
  .yhxinxi_box .yhxinxi_text {
    flex: 0 0 30%;
  }
  .yhxinxi_box .must {
    color: #FF6347;
    margin-left: 4px;
    font-weight: bold;
  }
  .yhxinxi_box .label {
    color: #8f8f8f;
    font-size: 13px;
    text-shadow: 0 1px 0 #fff;
  }
  .yhxinxi_box .field_notice {
    color: #AAAAAA;
    font-size: 11px;
    padding-top: 6px;
  }
  .yhxinxi_box .yhxinxi_input {
    flex: 1;
  }
  .yhxinxi_box .yhxinxi_input .shuru {
    width: 95%;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    font-size: 14px;
    color: #696969;
    background-color: #fff;
    text-shadow: 0 1px 0 #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 0 #fff;
    box-shadow: 0 1px 0 #fff;
  }
  .yhxinxi_box .input_xuanze {
    flex: 0 0 40%;
    color: #8f8f8f;
    font-size: 13px;
    text-shadow: 0 1px 0 #fff;
  }
  .yhxinxi_box .radio_box {
    margin-right: 10%;
  }
  input[type="radio"] {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    vertical-align: middle;
    box-sizing: border-box;
    cursor: pointer;
  }
  .yhxinxi_box .yhxinxi_input .shurutext {
    min-height: 60px;
    line-height: 24px;
    padding: 8px;
  }
</style>