<template>
  <div class='table'>
    <Simpletable></Simpletable>
    <Resizetable></Resizetable>
    <Checkboxtable></Checkboxtable>
    <Tabstable></Tabstable>
    <Separaror></Separaror>
    <Datatable></Datatable>
  </div>
</template>
<script>
  import Simpletable from './Dtsimpletable.vue'
  import Resizetable from './Dtresizetable.vue'
  import Checkboxtable from './Dtcheckboxtable.vue'
  import Separaror from '@/components/dtseparator/Dtseparator.vue'
  import Tabstable from './Dttabstable.vue'
  import Datatable from './Dtdatatable.vue'
  export default{
    components: {
      Simpletable,
      Resizetable,
      Checkboxtable,
      Tabstable,
      Separaror,
      Datatable
    }
  }
</script>
<style scoped>
</style>
