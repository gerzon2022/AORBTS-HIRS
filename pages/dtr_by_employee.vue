<template>
 <div>
   <h1>DTR Managment by Employee</h1>
   <a href="https://sweldomo.ph/knowledge-base/dtr-management-by-employee/">Refer on this one</a>
   <filterDTRByEmp />
 </div>
 
</template>

<script>
import filterDTRByEmp from '@/components/filterDTRByEmp.vue'
export default {
  name: 'InspirePage',
  components:{
    filterDTRByEmp
  }

}
</script>
