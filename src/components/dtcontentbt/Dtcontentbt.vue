<template>
  <div class='tabletop'>
    <div class='top_menu'>
      <div class='sz_wrapper'>
        <span>Settings</span><button><i class='icon-add_circle'></i></button>
        <ul style='display: none;'>
          <li>New File</li>
          <li>Files Left</li>
          <li>Browse Files</li>
        </ul>
        <span class='sz_help'>
          Help
        </span>
      </div>
      <div class='bt_wrapper'>
        <i :class='icon'></i>
        <div class='fbt_wrapper'>
          <h3>{{bt}}</h3>
          <small>{{fbt}}</small>
        </div>
      </div>
    </div>
    <div class='separator'>
      <span class='separator_icon'></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['biaotishuju'],
    data () {
      return {
        icon: 'icon-add_circle',
        bt: 'Tables',
        fbt: 'Some Rows and Columns'
      }
    },
    watch: {
      biaotishuju () {
        this.icon = this.biaotishuju.icon
        this.bt = this.biaotishuju.bt
        this.fbt = this.biaotishuju.fbt
      }
    }
  }
</script>
<style scoped>
  .tabletop {
    border: 10px solid rgba(0,0,0,0);
  }
  .sz_wrapper {
    float: right;
  }
  .bt_wrapper .icon-add_circle {
    display: inline-block;
    vertical-align: top;
    font-size: 1.2rem;
  }
  .bt_wrapper .fbt_wrapper {
    display: inline-block;
  }
</style>
