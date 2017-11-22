<template>
  <div>
    <Topdaohang></Topdaohang>
    <Tubiaodaohang></Tubiaodaohang>
    <Contentview></Contentview>
  </div>
</template>
<script>
  import Topdaohang from '@/components/dtcommon/Dttopdaohang'
  import Tubiaodaohang from '@/components/dtcommon/Dttubiaodaohang'
  import Contentview from '@/components/dtcommon/Dtcontent'
  export default{
    components: {
      Topdaohang,
      Tubiaodaohang,
      Contentview
    }
  }
</script>
<style scoped>
</style>
