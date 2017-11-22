<template>
  <div class='resizetable_box'>
      <div class='simp_biaoti'>
        <i class='icon-add_circle'></i>
        <span>Resizeable Columns</span>
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
  .resizetable_box {
    border: 10px solid rgba(0,0,0,0);
  }
  .resizetable_box .simp_biaoti {
    height: 38px;
    line-height: 38px;
    border: 1.5px solid #C9C9C9;
    border-radius: 3px 3px 0 0;
    box-shadow: inset 0 1px 0 #ffffff;
    border-bottom: 0;
    background-color: #FAFAFA;
  }
  .resizetable_box table {
    width: 100%;
    border: 1.5px solid #C9C9C9;
    border-radius: 0 0 3px 3px;
    border-collapse: separate;  /*border-radius才有效*/
  }
  .resizetable_box tr {
    display: flex;
  }
  .resizetable_box tr:not(:first-child),.resizetable_box tr:not(:last-child) {
    border: 0.5px solid #E0E0E0;
  }
  .resizetable_box tr th,.resizetable_box tr td {
    flex: 1;
  }
  .resizetable_box tr:nth-child(2n) {
    background-color: #FDFDFD;
  }
  .resizetable_box th:not(:last-child),.resizetable_box td:not(:last-child) {
    border-right: 1px solid #E0E0E0;
  }
  .resizetable_box th {
    font-family: Oswald;
    font-size: 13px;
    font-weight: normal;
    line-height: 28px;
    background-color: #F5F5F5;
    text-shadow: 0 1px 0 #FFFFFF;
  }
  .resizetable_box .simp_biaoti,.resizetable_box td {
    padding-left: 10px;
  }
  .resizetable_box td {
    font-size: 14px;
    line-height: 32px;
    color: #696969;
  }
</style>
