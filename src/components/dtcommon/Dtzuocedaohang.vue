<template>
  <div class='zuocedh'>
    <ul id='zuocedhjs'>
      <li v-for='(item,index) in zuocedh'
          @click='qiehuandh(index)'>
        <i class='icon-add_circle'></i>
        <div class='text'>
          <span>{{item.text}}</span>
          <small>{{item.small}}</small>
        </div>
        <span class='kongbai'></span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        zuocedh: [],
        luyouaddr: ['/dashboard', '/inbox', '/charts', '/ui', '/table', '/forms']
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getshuju()
      })
    },
    methods: {
      initbgcolor: function () {
        document.getElementById('zuocedhjs').getElementsByTagName('li')[this.dhindex].className = 'changeColor'
      },
      getshuju: function () {
        this.zuocedh = [
          {'icon': './Icon/i_dashboard.png', 'text': 'Dashboard', 'small': 'General Info'},
          {'icon': './Icon/i_message.png', 'text': 'Inbox', 'small': 'Your Messages'},
          {'icon': './Icon/i_charts.png', 'text': 'Charts', 'small': 'Visual Data'},
          {'icon': './Icon/i_ui.png', 'text': 'UI', 'small': 'Kit elements'},
          {'icon': './Icon/i_table.png', 'text': 'Tables', 'small': 'Some Rows'},
          {'icon': './Icon/i_forms.png', 'text': 'Forms', 'small': 'Some Fields'}
        ]
      },
      qiehuandh: function (index) {
        this.$emit('jiantingdh', index)
        let lilist = document.getElementById('zuocedhjs').getElementsByTagName('li')
        for (let i = 0; i < lilist.length; i++) {
          lilist[i].className = ''
        }
        lilist[index].className = 'changeColor'
        let Path = this.luyouaddr[index]
        this.$router.push({path: Path})
        // this.dhindex = index
        // console.log(this.dhindex)
      }
    }
  }
</script>
<style scoped>
  .zuocedh ul {
    flex: 0 0 18%;
    font-size: 1.2rem;
  }
  .zuocedh ul li {
    position: relative;
    height: 40px;
    padding: 20px 8px;
    align-items: center;
  }
  .changeColor {
    background-color: #F9F9F9;
    border: 1px solid #DADADA;
    box-shadow: 0 2px 5px 0 #D2D2D2;
  }
  .zuocedh ul li i {
    vertical-align: middle;
    font-size: 1.8rem;
    color: #A9A9A9;
  }
  .zuocedh ul .text {
    display: inline-block;
    vertical-align: middle;
  }
  .zuocedh ul .text span {
    color: #9D9D9D;
  }
  .zuocedh ul .text small {
    display: block;
    font-size: 0.8rem;
    color: #B3B3B3;
  }
  .zuocedh .changeColor .kongbai {
    position: absolute;
    top: 0;
    right: -5px;
    display: inline-block;
    width: 10px;
    height: 80px;
    background-color: #F9F9F9;
  }
</style>
