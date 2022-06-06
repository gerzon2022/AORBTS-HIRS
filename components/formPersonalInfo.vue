<template>


 <form>

   <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
         class="col"
          cols="12"
          sm="4"
        >
          <v-card
            class="pa-1"
            outlined
            tile
          >
            <h3>Personal Information</h3>
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Birth date"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Place of Birth"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-select
                v-model="select"
                :items="gender"
                :error-messages="selectErrors"
                label="Gender"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
          </v-card>
        </v-col>
        
         <v-col
          class="col"
          cols="12"
          sm="4"
        >
          <v-card
            class="pa-1"
            outlined
            tile
          >
          <h3>Address Information</h3>
          <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Address"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
               <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="City/Municipality"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
               <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Province"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
               <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Zip Code"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
          </v-card>
        </v-col>
        <v-col
         class="col"
            cols="12"
            sm="4"
          >
            <v-card
              class="pa-1"
              outlined
              tile
            >
              <h3>Incase of emergency:</h3>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
               <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Relationship"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
               <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Address"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
               <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Phone no."
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <!-- <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox> -->
            </v-card>
          </v-col>
      </v-row>
    </v-container>
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
 


</template>

<script>

import { required, maxLength, email } from 'vuelidate/lib/validators'
import {validationMixin} from 'vuelidate'
export default {
 name: 'formPersonalInfo',
 
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4',
    // ],
    gender:[
      'Male',
      'Female'
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
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
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

<style lang="scss" scoped>
  #app{
    
    height: 500px;
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
    padding:5px;
       
      .pa-1{
        margin:1px;
        border: 0px;
        
       
      }
      .col{
        background:#1e1e1e;
        border-right: .6px solid rgb(189, 187, 187);
        padding-right: 1em;
      }
   }
    
  }
 
</style>