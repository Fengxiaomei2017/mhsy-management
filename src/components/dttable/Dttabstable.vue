<template>
  <div class='tabstable_box'>
      <div class='tabstable_biaoti'>
        <div class='tabs_bt'>
          <i class='icon-add_circle'></i>
          <span>Table Tabs</span>
        </div>
        <ul class='tabs_ul'>
          <li>
            <span  class='tabsonejs'
                   :class='{tabsonecolor: istabsonecolor}'
                   title='Tab 1'
                   @click='showtabone'>Table 1</span></li>
          <li>
            <span  class='tabstwojs'
                   :class='{tabstwocolor: istabstwocolor}'
                   title='Tab 2'
                   @click='showtabtwo'>Table 2</span></li>
        </ul>
      </div>
      <div class='table_wrpper'>
        <table  class='tables'
                v-show='tableone'>
          <tr>
            <th v-for='item in tabs_table.tabstr'>{{item}}</th>
          </tr>
          <tr v-for='item in tabs_table.tabs1_th'>
            <td v-for='value in item'>{{value}}</td>
          </tr>
        </table>
        <table  class='tables'
                v-show='tabletwo'>
          <tr>
            <th v-for='item in tabs_table.tabstr'>{{item}}</th>
          </tr>
          <tr v-for='item in tabs_table.tabs2_th'>
            <td v-for='value in item'>{{value}}</td>
          </tr>
        </table>
      </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tabs_table: {
          'tabstr': ['Name', 'Side', 'Role'],
          'tabs1_th': [
            {
              'Name': 'Obi Wan Kenobi',
              'Side': 'Light',
              'Role': 'Jedi'
            },
            {
              'Name': 'Greedo',
              'Side': 'South',
              'Role': 'Scumbag'
            },
            {
              'Name': 'Obi Wan Kenobi',
              'Side': 'Light',
              'Role': 'Jedi'
            },
            {
              'Name': 'Greedo',
              'Side': 'South',
              'Role': 'South'
            }
          ],
          'tabs2_th': [
            {
              'Name': 'Obi Wan Kenobi',
              'Side': 'Light',
              'Role': 'Jedi'
            },
            {
              'Name': 'Greedo',
              'Side': 'South',
              'Role': 'Scumbag'
            },
            {
              'Name': 'Obi Wan Kenobi',
              'Side': 'Light',
              'Role': 'Jedi'
            },
            {
              'Name': 'Greedo',
              'Side': 'South',
              'Role': 'South'
            },
            {
              'Name': 'Jade',
              'Side': 'Feng',
              'Role': 'Xie'
            }
          ]
        },
        tableone: true,
        tabletwo: false,
        istabsonecolor: true,
        istabstwocolor: false
      }
    },
    methods: {
      showtabone: function () {
        this.tableone = true
        this.tabletwo = false

        this.istabstwocolor = false
        this.istabsonecolor = true
      },
      showtabtwo: function () {
        this.tableone = false
        this.tabletwo = true

        this.istabstwocolor = true
        this.istabsonecolor = false
      }
    }
  }
</script>
<style scoped>
  .tabstable_box {
    border: 10px solid rgba(0,0,0,0);
  }
  .tabstable_box .tabstable_biaoti {
    display: flex;
    height: 38px;
    line-height: 38px;
    border: 1.5px solid #C9C9C9;
    border-radius: 3px 3px 0 0;
    box-shadow: inset 0 1px 0 #ffffff;
    border-bottom: 0;
    background-color: #FAFAFA;
  }
  .tabstable_box .tabstable_biaoti .tabs_bt {
    flex: 1;
  }
  .tabstable_box .tabstable_biaoti .tabs_ul {
    flex: 0 0 150px;
    font-size: 0;
  }
  .tabstable_box .tabs_ul li {
    display: inline-block;
    width: 74px;
    font-size: 13px;
    border-left: 1px solid #DADADA;
  }
  .tabstable_box .tabs_ul li span {
    display: block;
    height: 38px;
    text-align: center;
  }
  .tabstable_box .tabs_ul li .tabsonecolor {
    background-color: #F2F2F2;
  }
  .tabstable_box .tabs_ul li .tabstwocolor {
    background-color: #F2F2F2;
  }
  .tabstable_box .tables {
    width: 100%;
    border: 1.5px solid #C9C9C9;
    border-radius: 0 0 3px 3px;
    border-collapse: separate;  /*border-radius才有效*/
  }
  .tabstable_box tr {
    display: flex;
  }
  .tabstable_box tr:not(:first-child),.tabstable_box tr:not(:last-child) {
    border: 0.5px solid #E0E0E0;
  }
  .tabstable_box tr th,.tabstable_box tr td {
    flex: 1;
  }
  .tabstable_box tr:nth-child(2n) {
    background-color: #FDFDFD;
  }
  .tabstable_box th:not(:last-child),.tabstable_box td:not(:last-child) {
    border-right: 1px solid #E0E0E0;
  }
  .tabstable_box th {
    font-family: Oswald;
    font-size: 13px;
    font-weight: normal;
    line-height: 28px;
    background-color: #F5F5F5;
    text-shadow: 0 1px 0 #FFFFFF;
  }
  .tabstable_box .tabstable_biaoti,.tabstable_box td {
    padding-left: 10px;
  }
  .tabstable_box td {
    font-size: 14px;
    line-height: 32px;
    color: #696969;
  }
</style>
