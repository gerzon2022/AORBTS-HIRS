<template>
    <div>
      <v-container>
         <v-row>
            <v-autocomplete
                v-model="friends"
                :disabled="isUpdating"
                :items="people"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                multiple
                >
                 <template v-slot:selection="data">
                                <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                close
                                @click="data.select"
                                @click:close="remove(data.item)"
                                >
                                <v-avatar left>
                                    <v-img :src="data.item.avatar"></v-img>
                                </v-avatar>
                                {{ data.item.name }}
                                </v-chip>
                            </template>
                               <template v-slot:item="data">
                                <template v-if="typeof data.item !== 'object'">
                                <v-list-item-content v-text="data.item"></v-list-item-content>
                                </template>
                                <template v-else>
                                <v-list-item-avatar>
                                    <img :src="data.item.avatar">
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                                </v-list-item-content>
                                </template>
                            </template>
            </v-autocomplete>
         </v-row>
         <v-row>
            <v-col
                        class="d-flex"
                        cols="12"
                        sm="4"
                    >
                        <v-select
                        :items="year"
                        label="Year"
                        ></v-select>
                    </v-col>
                  
                     <v-col
                    cols="12"
                    sm="4"
                    md="4"
                    >
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="dateRangeText"
                            label="Date range"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="dates"
                            range
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>
         </v-row>
      </v-container>
      
    <v-divider></v-divider>
    <v-card-actions>
      
      <v-spacer></v-spacer>
      <v-btn
       
        :loading="isUpdating"
        color="blue-grey darken-3"
        depressed
        @click="isUpdating = true"
      >
        <v-icon left>
          mdi-filter
        </v-icon>
        Apply Filter
      </v-btn>
       <v-btn
        :loading="isUpdating"
        color="blue-grey darken-3"
        depressed
        @click="isUpdating = true"
      >
        <v-icon left>
          mdi-download
        </v-icon>
       Download
      </v-btn>
    </v-card-actions>
   <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    </div>
</template>

<script>
  export default {
    data () {

      const srcs = {
        1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      }

      return {
        headers: [
        {
          text: 'EMP ID',
          align: 'start',
          sortable: false,
          value: 'ID',
        },
        { text: 'Name', value: 'name' },
        { text: 'Days Worked', value: 'worked' },
        { text: 'Absents', value: 'absents' },
        { text: 'Undertime', value: 'undertime' },
        { text: 'Overtime', value: 'overtime' },
        { text: 'Details', value: 'details' },
      ],
      desserts: [
        {
          ID: '1223121',
          name: 'Cardo Dalisay',
          worked: 159,
          absents: 6.0,
          undertime: 24,
          overtime: 4.0,
          details: 'With Med Cert',
        },
         {
          ID: '12231222',
          name: 'Joffrey Baratheon',
          worked: 159,
          absents: 6.0,
          undertime: 24,
          overtime: 4.0,
          details: 'With Med Cert',
        },
         {
          ID: '12223123',
          name: 'Jon Snow',
          worked: 159,
          absents: 6.0,
          undertime: 24,
          overtime: 4.0,
          details: 'With Med Cert',
        },
         {
          ID: '12323124',
          name: 'Daenerys Targaryen',
          worked: 159,
          absents: 6.0,
          undertime: 24,
          overtime: 4.0,
          details: 'With Med Cert',
        },
   
      ],
           dates: ['2019-09-10', '2019-09-20'],
        autoUpdate: true,
        friends: ['Sandra Adams', 'Britta Holt'],
        isUpdating: false,
        name: 'Midnight Crew',
        people: [
          { header: 'Group 1' },
          { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
          { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
          { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
          { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
          { divider: true },
          { header: 'Group 2' },
          { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
          { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
          { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
          { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
        ],
        title: 'The summer breeze',
        year :['2021', '2022'],
        cycle :['Semi-monthly', 'Monthly'],

      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      }
    },

    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
    computed: {
        dateRangeText () {
            return this.dates.join(' ~ ')
        },
        },
    methods: {
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>