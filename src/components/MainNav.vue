<template>
  <v-navigation-drawer
    color="blue lighten-5"
    class="pa-1"
    app
    mini-variant
    mini-variant-width="200px"
    dense
    v-model="drawer"
  >
    <v-layout class="pa-1">
      <div class="displayed">
        <v-img
          width="130px"
          lazy-src="../assets/images/logo-test-typo-2.png"
          src="../assets/images/logo-test-typo-2.png"
        ></v-img>
      </div>
    </v-layout>
    <v-layout class="mt-10">
      <v-flex>
        <v-layout>
          <v-flex text-center>
            <!-- <v-card class="text-center" width="70" style="border-radius: 50%" outlined> -->
            <v-avatar class="outlined" size="80">
              <v-avatar size="70">
                <v-img
                  lazy-src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
                />
              </v-avatar>
            </v-avatar>

            <!-- </v-card> -->

            <div class="mt-4 title list-item">Emma Watson</div>
            <div class="mt-1 subtitle-2 grey--text">New York, NY</div>
            <div class="mt-5">
              <v-layout>
                <v-flex>
                  <div class="subtitle-2">Post</div>
                  <div class="subtitle-2 grey--text">116</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Followers</div>
                  <div class="subtitle-2 grey--text">48m</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Following</div>
                  <div class="subtitle-2 grey--text">48m</div>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-list nav dense class="mt-10">
      <v-list-item-group active-class="#E7596F--text">
        <v-list-group prepend-icon="mdi-language-javascript">
          <template v-slot:activator>
            <v-list-item-title>JS</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-icon prepend-icon="mdi-language-javascript">
              <v-icon>mdi-lightbulb-on-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Trucs & Astuces</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-angular</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Angular</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-jquery</v-icon>
            </v-list-item-icon>
            <v-list-item-title>JQuery</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-nodejs</v-icon>
            </v-list-item-icon>
            <v-list-item-title>NodeJS</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-vuejs</v-icon>
            </v-list-item-icon>
            <v-list-item-title>VueJS</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>CR Réunion</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
      <v-list-group prepend-icon="mdi-language-php">
        <template v-slot:activator>
          <v-list-item-title>PHP</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-language-java">
        <template v-slot:activator>
          <v-list-item-title>Java</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-leaf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>STRUTS</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-leaf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Spring</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-leaf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>STRUTS</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-leaf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Spring</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-dot-net">
        <template v-slot:activator>
          <v-list-item-title>.Net</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-head-cog">
        <template v-slot:activator>
          <v-list-item-title>IA / ML</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-dot-net">
        <template v-slot:activator>
          <v-list-item-title>YPO</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-leaf">
        <template v-slot:activator>
          <v-list-item-title>Green IT</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-material-design">
        <template v-slot:activator>
          <v-list-item-title>UX / UI</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-account-voice">
        <template v-slot:activator>
          <v-list-item-title>Speak'up</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="list-item">CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-information-outline">
        <template v-slot:activator>
          <v-list-item-title class="list-item">Infos Pratiques</v-list-item-title>
        </template>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="list-item">Trucs & Astuces</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="list-item">CR Réunion</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Fee Request",
          icon: "mdi-cash-multiple",
          method: () => this.feeRequest(),
        },
        {
          title: "Profile",
          icon: "mdi-account-badge-horizontal",
          method: () => this.profile(),
        },
      ],
    };
  },
};
</script>

<style>
.v-avatar.outlined {
  border: 2px solid #e7596f;
  background-color: transparent;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.list-item {
  color: white;
}

.displayed {
  display: block;
  margin-left: auto;
  margin-right: auto;
}


</style>
