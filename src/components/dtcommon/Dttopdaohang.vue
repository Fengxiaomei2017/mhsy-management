<template>
  <div class='topdh'>
    <div class='topdhbox'>
      <div class='yonghu'>
        <a href='javascript: '>
          <i class='icon-add_circle'></i>
          <ul style='display: none;'>
            <li></li>
          </ul>
          <span>John Alex</span>
        </a>
      </div>
      <ul class='textdaohang'>
        <a href='javascript: '>
          <i class='icon-add_circle'></i>
          <span>Pages</span>
        </a>
        <a href='javascript: '>
          <i class='icon-add_circle'></i>
          <span>Inbox</span>
        </a>
        <a href='javascript: '>
          <i class='icon-add_circle'></i>
          <span>Upload</span>
        </a>
        <a href='javascript: '>
          <i class='icon-add_circle'></i>
          <span>Settings</span>
        </a>
        <a href='javascript: '>
          <i class='icon-add_circle'></i>
          <div style='display: none;'>
            <input type='text'>
            <button></button>
          </div>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
  }
</script>
<style scoped>
  .topdh {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #F2F3F2;
    border-bottom: 1px solid #DADADA;
  }
  .topdh .topdhbox {
    display: flex;
    width: 80%;
    min-width: 999px;
    margin: 0 auto;
  }
  .topdh .yonghu {
    flex: 0 0 50%;
  }
  .topdh .yonghu a {
    display: inline-block;
  }
  .topdh .textdaohang {
    flex: 1;
  }
  .topdh .textdaohang a {
    display: inline-block;
    width: 20%;
    color: #8F8F8F;
    text-align: center;
  }
  .topdh .textdaohang a:last-child {
    width: 10%;
  }
  .topdh .textdaohang a:hover {
    background-color: #FBFBFB;
  }
  .topdh .textdaohang a span {
    font-size: 0.9rem;
  }
</style>
