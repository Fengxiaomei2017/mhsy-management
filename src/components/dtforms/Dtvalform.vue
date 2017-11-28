<template>
  <div class='valform_box'>
    <div class='valform_biaoti'>
      <i class='icon-add_circle'></i>
      <span>Form Validations</span>
    </div>
    <div class='valform_list'
         v-for='item in valformshuju'
         v-if='(item.datatype && item.datatype!="radio")'>
         <div class='valform_text'>
              <span class='label'>{{item.databt}}<span class='must'>*</span></span>
         </div>
         <div class='valform_input'>
              <input  class='Input'
                      :type='item.datatype'>
              <small  class='field_notice'>{{item.valuetishi}}</small>
         </div>
    </div>
    <div class='valform_list'
         v-for='item2 in valformshuju'
         v-if='item2.datatype=="radio"'
         >
         <div class='valform_text'>
              <span class='label'>{{item2.databt}}<span class='must'>*</span></span>
         </div>
         <form class='valform_input input_xuanze'>
              <label  v-for='value in item2.xuanze'
                      class='radio_box'>
                <input  :type='item2.datatype'
                        name='xingbie'
                        :value='value'>{{value}}</label>
                <small  class='field_notice'>{{item2.valuetishi}}</small>
         </form>
    </div>
    <div  class='valform_list'
          v-for='item3 in valformshuju'
          v-if='!item3.datatype'>
          <div class='valform_text'>
               <span class='label'>{{item3.databt}}<span class='must'>*</span></span>
          </div>
          <div  class='valform_input'>
                <textarea class='Input Inputtext'>Term Of use:
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper sagittis dui, nec tempor lorem ultrices vel. Quisque et nisl velit, vitae ullamcorper nisi. Sed feugiat sollicitudin rhoncus. Quisque ac euismod velit. Phasellus accumsan laoreet mi, at suscipit arcu sagittis at. Aenean quis enim sed mauris posuere dignissim nec ut sem. Proin pulvinar arcu vitae mi mollis interdum. Mauris laoreet mollis dapibus. Proin fermentum molestie sapien, non molestie enim fringilla ac.</textarea>
                <small  class='field_notice'>{{item3.valuetishi}}</small>
          </div>
    </div>
    <div class='valform_list'>
         <div class='valform_text'>
              <span class='label'>Are you agree?<span class='must'>*</span></span>
         </div>
         <div class='valform_input input_xuanze'>
            <input  class='chexkbox'
                    type='checkbox'>Check this box</label>
         </div>
    </div>
    <div class='valform_list'>
         <div class='valform_text'>
              <span class='label'>Submit</span>
         </div>
         <div class='valform_input input_xuanze'>
            <input   class='Input'
                     type='Submit'
                     value='Validate'>
         </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        valformshuju: []
      }
    },
    mounted: function () {
      this.getvalformshuju()
    },
    methods: {
      getvalformshuju: function () {
        this.valformshuju = [
          {
            'databt': 'Full Name',
            'datatype': 'text',
            'valuetishi': ''
          },
          {
            'databt': 'Password',
            'datatype': 'text',
            'valuetishi': 'a-z-A-Z-0-9'
          },
          {
            'databt': 'Birthday Date',
            'datatype': 'date',
            'valuetishi': ''
          },
          {
            'databt': 'Email ',
            'datatype': 'text',
            'valuetishi': 'Try typing a wrong email, without @ for ex .'
          },
          {
            'databt': 'Website',
            'datatype': 'text',
            'valuetishi': 'Try typing a wrong Url ..'
          },
          {
            'databt': 'Address',
            'datatype': 'text',
            'valuetishi': ''
          },
          {
            'databt': 'Phone',
            'datatype': 'text',
            'valuetishi': 'Format: 18088888000'
          },
          {
            'databt': 'Budget',
            'datatype': 'number',
            'valuetishi': 'Min 0$ | Ps: Try focus and using Up and Down Key ..'
          },
          {
            'databt': 'Sex',
            'datatype': 'radio',
            'xuanze': ['Male', 'Female'],
            'valuetishi': ''
          },
          {
            'databt': 'Term of Use',
            'valuetishi': 'Read-Only'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .valform_box {
    font-family: Droid Sans;
    border: 10px solid rgba(0,0,0,0);
  }
  .valform_box .valform_biaoti {
    height: 38px;
    padding-left: 10px;
    line-height: 38px;
    border: 1px solid #C9C9C9;
    border-radius: 3px 3px 0 0;
    box-shadow: inset 0 1px 0 #fff;
    background: linear-gradient(to bottom, #fff 0%,#f5f5f5 100%);
  }
  .valform_box .valform_list {
    display: flex;
    overflow: hidden;
    padding: 15px;
    width: auto;
    height: auto;
    border: 1px solid #dadada;
    border-top: 0;
    background-color: #FDFDFD;
  }
  .valform_box .valform_text {
    flex: 0 0 30%;
  }
  .valform_box .must {
    color: #FF6347;
    margin-left: 4px;
    font-weight: bold;
  }
  .valform_box .label {
    color: #8f8f8f;
    font-size: 13px;
    text-shadow: 0 1px 0 #fff;
  }
  .valform_box .field_notice {
    color: #AAAAAA;
    font-size: 11px;
    padding-top: 6px;
  }
  .valform_box .valform_input {
    flex: 1;
  }
  .valform_box .valform_input .Input {
    width: 95%;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    font-size: 14px;
    color: #696969;
    background-color: #fff;
    text-shadow: 0 1px 0 #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 0 #fff;
    box-shadow: 0 1px 0 #fff;
  }
  .valform_box .input_xuanze {
    flex: 0 0 40%;
    color: #8f8f8f;
    font-size: 13px;
    text-shadow: 0 1px 0 #FFFFFF;
  }
  .valform_box .radio_box {
    margin-right: 10%;
  }
  input[type="radio"] {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    vertical-align: middle;
    box-sizing: border-box;
    cursor: pointer;
  }
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .valform_box .valform_input .Inputtext {
    min-height: 160px;
    line-height: 24px;
    padding: 8px;
  }
</style>
