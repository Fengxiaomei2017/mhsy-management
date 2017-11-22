<template>
  <div class='tubiaodhbox'>
    <div calss='tubiaodh'>
      <div class='ul_button'>
        <ul>
          <li class='big_button'
              v-for='item in icons'>
            <div class='out_border'>
              <div class='button_wrapper'>
                <div class='in_border'>
                  <a href='javascript:'
                     class='the_button'><i :class='item'></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class='logobox'>
        <a href='javascript: '
           title='Kanrisha Home'>
          <img src='./kanrisha_logo.png' alt='logo'>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        icons: ['icon-add_circle', 'icon-add_circle', 'icon-add_circle', 'icon-add_circle']
      }
    }
  }
</script>
<style scoped>
  .tubiaodhbox {
    width: 80%;
    min-width: 999px;
    margin: 70px auto 0 auto;
  }
  .tubiaodhbox .tubiaodh {
    width: 100%;
    height: 90px;
  }
  .tubiaodhbox .ul_button {
    float: right;
    width: 50%;
  }
  .tubiaodhbox .big_button {
    position: relative;
    display: inline-block;
    align-items: center;
    background: url('separator_long.png') repeat-x scroll 0 43px;
    padding: 0 18px;
    margin-right: -18px;
  }
  .out_border {
    width: 86px;
    height: 86px;
    background-color: #dadada; /* Old browsers */
    background: -moz-linear-gradient(top,  #dadada 0%, #f8f8f8 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#dadada), color-stop(100%,#f8f8f8)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,  #dadada 0%,#f8f8f8 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top,  #dadada 0%,#f8f8f8 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top,  #dadada 0%,#f8f8f8 100%); /* IE10+ */
    background: linear-gradient(to bottom,  #dadada 0%,#f8f8f8 100%); /* W3C */
    position: relative;
    border-radius: 43px;
  }

  .button_wrapper {
    width: 84px;
    height: 84px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f1f1; /* Old browsers */
    background: -moz-linear-gradient(top,  #f2f1f1 0%, #fdfdfd 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f2f1f1), color-stop(100%,#fdfdfd)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,  #f2f1f1 0%,#fdfdfd 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top,  #f2f1f1 0%,#fdfdfd 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top,  #f2f1f1 0%,#fdfdfd 100%); /* IE10+ */
    background: linear-gradient(to bottom,  #f2f1f1 0%,#fdfdfd 100%); /* W3C */
    border-radius: 42px;
  }

  .in_border {
    width: 68px;
    height: 68px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #e5e5e5; /* Old browsers */
    background: -moz-linear-gradient(top,  #e5e5e5 0%, #bcbcbc 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#e5e5e5), color-stop(100%,#bcbcbc));  Chrome,Safari4+
    background: -webkit-linear-gradient(top,  #e5e5e5 0%,#bcbcbc 100%);
    background: -o-linear-gradient(top,  #e5e5e5 0%,#bcbcbc 100%);
    background: -ms-linear-gradient(top,  #e5e5e5 0%,#bcbcbc 100%);
    background: linear-gradient(to bottom,  #e5e5e5 0%,#bcbcbc 100%);
    border-radius: 34px;
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);
  }

  .in_border:active {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.24);
  }

  .the_button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 66px;
    height: 66px;
    background: #fafafa;  Old browsers
    background: -moz-linear-gradient(top,  #fafafa 0%, #eaeaea 100%);  FF3.6+
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fafafa), color-stop(100%,#eaeaea)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,  #fafafa 0%,#eaeaea 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top,  #fafafa 0%,#eaeaea 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top,  #fafafa 0%,#eaeaea 100%); /* IE10+ */
    background: linear-gradient(to bottom,  #fafafa 0%,#eaeaea 100%); /* W3C */
    border-radius: 33px;
  }

  .the_button i {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 2rem;
    text-align: center;
  }

  .the_button:hover i {
    color: #F7810C;
  }

  .tubiaodhbox .logobox {
    width: 50%;
    height: 120px;
  }
  .tubiaodhbox .logobox a {
    align-items: center;
    height: 120px;
  }
  .tubiaodhbox .logobox a img {
    display: flex;
    height: 90px;
  }
</style>
