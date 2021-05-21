<template>
  <div>
    <v-cols class="cols">
      <v-layout row>
        <v-flex>
          <div class="title">Featured Project</div>
        </v-flex>
        <v-flex text-right>
          <v-btn depressed class="text-none" color="grey lighten-4">
            <span class="grey--text">Popular Stories</span>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout justify-start class="mt-7">
      <div>
        <v-card
          elevation="12"
          height="260"
          width="680"
          color="blue"
          class="mr-4"
        >
        <div>

          <v-img
            height="260"
            src="https://images.unsplash.com/photo-1525138079-9424be9df411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          ></v-img>
        </div>
        </v-card>
        <v-layout column class="mt-8">

      <div class="container">Sii Technologies
      </div>
      <div class="container">sdfsdfsdfsdfsdfsdfsdffsdfsdfsdf
      </div>
      <div class="container">sdfsdfsdfsdfsdfsdfsdffsdfsdfsdf
      </div>
        </v-layout>
      

      </div>
        <v-divider vertical color="0197bf" class="mx-10"></v-divider>

      <v-pagination
      circle
      
      v-model="page"
      :length="6"
    ></v-pagination>
      </v-layout>

      <v-spacer></v-spacer>
    </v-cols>
    <v-spacer class="mt-8"></v-spacer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
