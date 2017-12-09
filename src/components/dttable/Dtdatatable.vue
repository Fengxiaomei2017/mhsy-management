<template>
  <div class='datatable_box'>
      <div class='datatable_biaoti'>
        <i class='icon-add_circle'></i>
        <span>DataTables</span>
      </div>
      <ul class='search_page'>
        <li>
          <label for='search'>Search:</label>
          <input  type='text'
                  id='search'
                  v-model='search'></li>
        <li>
          <label>Show entries</label>
          <select v-model='selected'>
            <option v-for='item in pagenum'
                    :key='item'
                    :value='item'>{{item}}</option>
          </select>
        </li>
      </ul>
      <table>
        <tr>
          <th v-for='item in data_tr'
              :key='item'>{{item}}</th>
        </tr>
        <tr v-for='item in list'>
          <td v-for='value in item'
              :key='value'>{{value}}</td>
        </tr>
      </table>
      <div class='data_bottom'>
        <p class='table_tishi'>
          Showing {{beginnum}} to {{overnum}} of {{total}} entries
        </p>
        <ul class='table_qiehuan'>
          <li @click='firstpage'>第一页</li>
          <li @click='prepage'>上一页</li>
          <li v-if='allpage'
              v-for='(item, index) in allpage'
              :key='item'
              @click='qiehuanpage(index)'>{{item}}</li>
          <li @click='nextpage'>下一页</li>
          <li @click='endpage'>最后一页</li>
        </ul>
      </div>
  </div>
</template>
<script>
  import {datatable} from '@/common/js/data.js'
  export default {
    data () {
      return {
        data_tr: ['Rendering engine', 'Browser', 'Platform', 'CSS grade'],
        pagenum: [10, 25, 50, 100],
        oldalldata: [],
        alldata: [],
        beginnum: 1,
        overnum: 10,
        total: 15,
        selected: 10,
        beginpage: 0,
        overpage: 0,
        allpage: 1,
        search: ''
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.getalldata()
        this.getallpage()
      })
    },
    computed: {
      endpagetoubu: function () {
        return (parseInt(this.oldalldata.length / this.selected) * this.selected)
      },
      nextpagetoubu: function () {
        return this.beginpage + this.selected
      },
      nextpageweibu: function () {
        return this.beginpage + this.selected
      },
      prepagetoubu: function () {
        return this.overpage - this.selected
      },
      aginnextpagetoubu: function () {
        return this.overpage + this.selected
      },
      // 查询功能
      list: function () {
        var arr = []
        for (let i = 0; i < this.alldata.length; i++) {
          if (this.alldata[i].Renderingengine.indexOf(this.search) !== -1) {
            arr.push(this.alldata[i])
          }
        }
        return arr
      }
    },
    methods: {
      getalldata: function () {
        this.oldalldata = datatable()
        // console.log(this.oldalldata)
        this.getpagedata()
        this.beginpage = this.selected
      },
      getallpage: function () {
        this.allpage = Math.ceil(this.oldalldata.length / this.selected) - 1
      },
      getpagedata: function () {
        this.alldata = this.oldalldata.slice(0, this.selected)
      },
      nextpage: function () {
        this.alldata = this.oldalldata.slice(this.beginpage, this.nextpageweibu)
        this.overpage = this.beginpage
        this.beginpage = this.nextpagetoubu
        if (this.beginpage > this.oldalldata.length) {
          this.beginpage = this.oldalldata.length - 1
        }
      },
      prepage: function () {
        this.alldata = this.oldalldata.slice(this.prepagetoubu, this.overpage)
        this.overpage = this.prepagetoubu
        this.beginpage = this.aginnextpagetoubu
        if (this.overpage <= this.selected) {
          this.overpage = this.selected
        }
        console.log('开始位置:' + this.aginnextpagetoubu)
        console.log('结束位置：' + this.overpage)
      },
      firstpage: function () {
        this.getpagedata()
      },
      endpage: function () {
        console.log(this.endpagetoubu)
        this.alldata = this.oldalldata.slice(this.endpagetoubu)
      },
      qiehuanpage: function (index) {
        this.alldata = this.oldalldata.slice(this.selected * index, this.selected * (index + 1))
      }
    },
    watch: {
      selected () {
        this.getpagedata(this.selected)
      }
    }
  }
</script>
<style scoped>
  .datatable_box {
    border: 10px solid rgba(0,0,0,0);
  }
  .datatable_box .datatable_biaoti,.datatable_box .search_page {
    font-family: Oswald;
    font-size: 14px;
    text-shadow: 0 1px 0 #fff;
  }
  .datatable_box .datatable_biaoti {
    height: 38px;
    line-height: 38px;
    font-weight: bold;
    color: #9a9a9a;
    background-color: #FAFAFA;
    border: 1.5px solid #C9C9C9;
    border-radius: 3px 3px 0 0;
    box-shadow: inset 0 1px 0 #fff;
  }
  .datatable_box .search_page {
    display: flex;
    height: 60px;
    padding-left: 10px;
    color: #8f8f8f;
    line-height: 60px;
    border: 1.5px solid #C9C9C9;
    border-top: 0;
    border-bottom: 0;
  }
  .datatable_box .search_page li:first-child {
    flex: 1;
  }
  .datatable_box .search_page input {
    width: 180px;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: 0 1px 0 #fff;
    background-color: #fff;
  }
  .datatable_box .search_page li:last-child {
    flex: 0 0 200px;
  }
  .datatable_box table {
    width: 100%;
    color: #696969;
    font-size: 14px;
    border: 1.5px solid #C9C9C9;
    border-radius: 0 0 3px 3px;
  }
  .datatable_box tr:nth-child(2n) {
    background-color: #FDFDFD;
  }
  .datatable_box tr:not(:first-child),.datatable_box tr:not(:last-child) {
    border: 1px solid #E0E0E0;
  }
  .datatable_box th:not(:last-child),.datatable_box td:not(:last-child) {
    border-right: 1px solid #E0E0E0;
  }
  .datatable_box th {
    font-family: Oswald;
    font-size: 13px;
    font-weight: normal;
    line-height: 28px;
    background-color: #F5F5F5;
  }
  .datatable_box .datatable_biaoti,.datatable_box td {
    padding-left: 10px;
  }
  .datatable_box td {
    font-size: 14px;
    line-height: 32px;
    color: #696969;
  }
  .datatable_box .data_bottom {
    display: flex;
    padding: 0 15px;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #C9C9C9;
    background: #fdfdfd;
    background: -moz-linear-gradient(top, #fdfdfd 0%, #f4f4f4 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fdfdfd), color-stop(100%,#f4f4f4));
    background: -webkit-linear-gradient(top, #fdfdfd 0%,#f4f4f4 100%);
    background: -o-linear-gradient(top, #fdfdfd 0%,#f4f4f4 100%);
    background: -ms-linear-gradient(top, #fdfdfd 0%,#f4f4f4 100%);
    background: linear-gradient(to bottom, #fdfdfd 0%,#f4f4f4 100%);
    -webkit-box-shadow: inset 0 1px 0 #fff, 0 -2px 3px #E6E6E6;
    border: 1px solid #C9C9C9;
    box-shadow: inset 0 1px 0 #fff, 0 -2px 3px #E6E6E6;
  }
  .data_bottom .table_tishi,.data_bottom .table_qiehuan {
    font-family: Droid Sans;
    font-size: 13px;
    color: #8f8f8f;
    text-shadow: 0 1px 0 #fff;
  }
  .data_bottom .table_tishi {
    flex: 0 0 35%;
  }
  .data_bottom .table_qiehuan {
    flex: 1;
    text-align: right;
  }
  .data_bottom .table_qiehuan li {
    display: inline-block;
    height: 26px;
    margin: 0 3px;
    padding: 0 10px;
    line-height: 26px;
    font-size: 12px;
    font-family: Oswald;
    color: #8f8f8f;
    background: linear-gradient(to bottom, #fcfcfc 0%,#f2f2f2 100%);
    border: 1px solid #CBCBCB;
    border-radius: 3px;
    box-shadow: 0 1px 0 #fff, 0 1px 0 #fff inset;
    text-shadow: 0 1px 0 #fff;
    box-shadow: 0 2px 3px #EAEAEA;
    cursor: pointer;
  }
  .data_bottom .table_qiehuan li:hover {
    font-weight: bold;
    color: #6E83A5;
    border: 1px solid #6E83A5;
  }
</style>
