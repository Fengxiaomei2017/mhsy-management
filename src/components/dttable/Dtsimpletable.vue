<template>
  <div class='simpletable_box'>
      <div class='simp_biaoti'>
        <i class='icon-add_circle'></i>
        <span>Simple Table</span>
      </div>
      <table>
        <tr>
          <th v-for='item in simp_table.simptr'>{{item}}</th>
        </tr>
        <tr v-for='item in simp_table.simpth'>
          <td v-for='value in item'>{{value}}</td>
        </tr>
      </table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        simp_table: {
          'simptr': ['Name', 'Side', 'Role'],
          'simpth': [
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
  .simpletable_box {
    border: 10px solid rgba(0,0,0,0);
  }
  .simpletable_box .simp_biaoti {
    height: 38px;
    line-height: 38px;
    border: 1.5px solid #C9C9C9;
    border-radius: 3px 3px 0 0;
    box-shadow: inset 0 1px 0 #ffffff;
    border-bottom: 0;
    background-color: #FAFAFA;
  }
  .simpletable_box table {
    width: 100%;
    border: 1.5px solid #C9C9C9;
    border-radius: 0 0 3px 3px;
    border-collapse: separate;  /*border-radius才有效*/
  }
  .simpletable_box tr:not(:first-child),.simpletable_box tr:not(:last-child) {
    border: 0.5px solid #E0E0E0;
  }
  .simpletable_box th:not(:last-child),.simpletable_box td:not(:last-child) {
    border-right: 1px solid #E0E0E0;
  }
  .simpletable_box tr:nth-child(2n) {
    background-color: #FDFDFD;
  }
  .simpletable_box th {
    font-family: Oswald;
    font-size: 13px;
    font-weight: normal;
    line-height: 28px;
    background-color: #F5F5F5;
    text-shadow: 0 1px 0 #FFFFFF;
  }
  .simpletable_box .simp_biaoti,.simpletable_box td {
    padding-left: 10px;
  }
  .simpletable_box td {
    font-size: 14px;
    line-height: 32px;
    color: #696969;
  }
</style>
