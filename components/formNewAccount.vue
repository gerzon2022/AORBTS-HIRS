<template>

<div id="app">
  {{test}}
   <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
        >
          <v-card
            class="pa-1"
            outlined
            tile
          >
            <form @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Fist name"
                name="fname"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
                 <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Middle name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
                 <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Last name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="Aorbts E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <!-- <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox> -->
          
              <v-btn
                class="mr-4"
                @click="submit"
              >
                submit
              </v-btn>
              <v-btn @click="clear">
                clear
              </v-btn>
             
            </form>
          </v-card>
        </v-col>
        
         <v-col
         
          cols="12"
          sm="6"
        >
          <v-card
            class="pa-1"
            outlined
            tile
          >
          <v-img class="profile-img"
            contain
            lazy-src="https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
            max-height="300"
            max-width="500"
            :src="imageUrl"
          ></v-img>
            <v-file-input class="bg-height"
                show-size
                truncate-length="17"
                v-model="image" 
                type="file" 
                label="Upload Profile Picture" 
                hint="Add a picture of your Profile" 
                outlined dense @change="onFileChange"
              ></v-file-input>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</div>

</template>

<script>

import { required, maxLength, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'


export default {


  name: 'FormNewAccount',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    // select: { required },
    // checkbox: {
    //   checked (val) {
    //     return val
    //   }
    // }
  },
  
  data(){
    return{
  
    name: '',
    email: '',
    select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4',
    // ],
    checkbox: false,
     test:'',
    image: undefined,
      // to save image url
    imageUrl: ''
   
    }
   
  }
  ,
   async fetch () {
    this.test = await this.$http.$get('/api/test')
    console.log(this.test)
  },
  
  computed: {
    // checkboxErrors () {
    //   const errors = []
    //   if (!this.$v.checkbox.$dirty) return errors
    //   !this.$v.checkbox.checked && errors.push('You must agree to continue!')
    //   return errors
    // },
    // selectErrors () {
    //   const errors = []
    //   if (!this.$v.select.$dirty) return errors 
    //   !this.$v.select.required && errors.push('Item is required')
    //   return errors
    // },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
     async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
          const data = await this.$http.$post('/api/users', { name: this.name, email: this.email, image:this.image }, {
          debug: true,
          retry: 2,
          serverTimeout: 5000
          })
          this.test=data
      }
     },
      createImage(file) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        this.imageUrl = e.target.result;
      }
      reader.readAsDataURL(file);
    },
    onFileChange(file) {
      if (!file) {
        return;
      }
      this.createImage(file);
      
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }

}
</script>

<style lang="scss" scoped>
  #app{
    width: 900px;
    height: 400px;
    margin-right: auto;
    margin-left:auto;
    form{
      padding: 10px;
      height: 370px;
 
    }
   .profile-img{
     height: 100%;
   }
   .grey.lighten-5{
     padding: 5px;
   
   }
    
  }

</style>