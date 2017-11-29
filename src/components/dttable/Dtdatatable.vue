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
                  id='search'></li>
        <li>
          <label>Show entries</label>
          <select v-model='selected'>
            <option v-for='item in pagenum'
                    :value='item'>{{item}}</option>
          </select>
        </li>
      </ul>
      <table>
        <tr>
          <th v-for='item in data_tr'>{{item}}</th>
        </tr>
        <tr v-for='item in alldata'>
          <td v-for='value in item'>{{value}}</td>
        </tr>
      </table>
      <div class='data_bottom'>
        <p class='table_tishi'>
          Showing {{beginnum}} to {{overnum}} of {{total}} entries
        </p>
        <ul class='table_qiehuan'>
          <li>第一页</li>
          <li @click='prepage'>上一页</li>
          <li v-for='item in page'>{{item}}</li>
          <li @click='nextpage'>下一页</li>
          <li>最后一页</li>
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
        page: 5,
        total: 15,
        selected: 10
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getalldata()
      })
    },
    methods: {
      getalldata: function () {
        this.oldalldata = datatable()
        this.getpagedata()
      },
      getpagedata: function () {
        this.alldata = this.oldalldata.slice(0, this.selected)
      },
      nextpage: function () {
        this.alldata = this.oldalldata.slice()
      },
      prepage: function () {
        this.alldata = this.oldalldata.slice()
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
</style>
