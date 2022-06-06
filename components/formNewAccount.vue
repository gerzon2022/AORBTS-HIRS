<template>
<div id="app">

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
            <form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Fist name"
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
            src="https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
          ></v-img>
            <v-file-input class="bg-height"
                show-size
                truncate-length="17"
              ></v-file-input>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</div>

</template>

<script>

import { required, maxLength, email } from 'vuelidate/lib/validators'
import {validationMixin} from 'vuelidate'
export default {
 name: 'formNewAccount',
 
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