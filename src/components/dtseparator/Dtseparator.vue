<template>
  <div class='separator_wrapper'>
    <div class='separator'>
      <span class='separator_icon'></span>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style scoped>
  .separator_wrapper {
    border: 10px solid rgba(0,0,0,0);
  }
  .separator {
    background: url('./separator_line.png') repeat-x scroll 0 14px transparent;
  }
  .separator_icon {
    display: block;
    width: 10%;
    height: 20px;
    margin: 0 auto;
    padding: 2px;
    vertical-align: middle;
    background: url('./separator_circle.png') no-repeat scroll center center #F9F9F9;
  }
</style>
