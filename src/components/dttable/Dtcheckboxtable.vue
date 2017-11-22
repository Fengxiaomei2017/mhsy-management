<template>
  <div class='checkboxtable_box'>
      <div class='check_biaoti'>
        <i class='icon-add_circle'></i>
        <span>checkboxable Columns</span>
      </div>
      <table>
        <tr>
          <th class='input_th'><input type='checkbox'></th>
          <th class='cla_th'
              v-for='item in check_table.checktr'>{{item}}</th>
        </tr>
        <tr v-for='item in check_table.checkth'>
          <td class='input_th'><input type='checkbox'></td>
          <td class='cla_td'
              v-for='value in item'>{{value}}</td>
        </tr>
      </table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        check_table: {
          'checktr': ['Name', 'Side', 'Role'],
          'checkth': [
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
          ]
        }
      }
    }
  }
</script>
<style scoped>
  .checkboxtable_box {
    border: 10px solid rgba(0,0,0,0);
  }
  .checkboxtable_box table {
    width: 100%;
    border: 1.5px solid #C9C9C9;
    border-radius: 0 0 3px 3px;
    border-collapse: separate;  /*border-radius才有效*/
  }
  table input {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: 1px solid #CBCBCB;
    box-shadow: 1px 1px 2px #fff inset;
  }
  .checkboxtable_box tr {
    display: flex;
  }
  .checkboxtable_box tr:not(:first-child),.checkboxtable_box tr:not(:last-child) {
    border: 0.5px solid #E0E0E0;
  }
  .checkboxtable_box tr .input_th,.checkboxtable_box tr .input_td {
    flex: 0 0 60px;
    text-align: center;
  }
  .checkboxtable_box tr .cla_th,.checkboxtable_box tr .cla_td {
    flex: 1;
  }
  .checkboxtable_box tr:nth-child(2n) {
    background-color: #FDFDFD;
  }
  .checkboxtable_box th:not(:last-child),.checkboxtable_box td:not(:last-child) {
    border-right: 1px solid #E0E0E0;
  }
  .checkboxtable_box th {
    font-family: Oswald;
    font-size: 13px;
    font-weight: normal;
    line-height: 28px;
    text-shadow: 0 1px 0 #FFFFFF;
    background: linear-gradient(to bottom, #fefefe 0%,#f2f2f2 100%);
  }
  .checkboxtable_box td {
    font-size: 14px;
    line-height: 32px;
    color: #696969;
  }
  .checkboxtable_box .check_biaoti,.checkboxtable_box tr .cla_th,.checkboxtable_box tr .cla_td {
    padding-left: 10px;
  }
  .checkboxtable_box .check_biaoti {
    height: 38px;
    line-height: 38px;
    border: 1.5px solid #C9C9C9;
    border-radius: 3px 3px 0 0;
    box-shadow: inset 0 1px 0 #ffffff;
    border-bottom: 0;
    background-color: #FAFAFA;
  }
</style>
