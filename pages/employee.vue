<template>
 <div id="app">
    <div class="container">
    <h1>Add Employee</h1>
    <a href="https://sweldomo.ph/knowledge-base/how-to-add-employees-individually-2/">Refer on this one</a>

    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 basil--text">
          
        </h1>
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab
          
          v-for="(item, index) in tab_items"
          :key="index"
         
        >
          {{ item.tab_title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item 
         
          v-for="(item, index) in tab_items"
          :key="index"
        >
          <v-card
           class="tab-item"
            color="basil"
            flat
          > 
          
            <v-card-text>
            
            {{ item.text }}
            </v-card-text>
            <formNewAccount v-if="index==0"/>
            <formPersonalInfo v-if="index==1"/>
            <formEmploymentDetails v-if="index==2"/>
            
          </v-card>
        </v-tab-item>
        
      </v-tabs-items>
    </v-card>
  </div>
  
</div>
   
</template>

<script>
import formNewAccount from '@/components/formNewAccount.vue'
import formPersonalInfo from '@/components/formPersonalInfo.vue'
import formEmploymentDetails from '@/components/formEmploymentDetails.vue'

export default {
  name: 'InspirePage',


 components:{
   formNewAccount,
   formPersonalInfo,
   formEmploymentDetails
 },
  data(){

    return {
      showNextBtn: true,
      showPrevBtn:false,
      showSaveBtn:false,
      tab: null,
      tab_items: [
        {
          tab_title:'Account No',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
          tab_title:'Personal Information',
          text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
          tab_title:'Employment',
          text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
      ],
    
    }
    
},
methods:{

}

}
</script>
<style lang="scss" scoped>
  .tab-item{
    height: 500px;
  }
</style>
