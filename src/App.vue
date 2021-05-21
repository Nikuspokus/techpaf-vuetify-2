<template>
  <v-app>
    <nav>
      <v-app-bar flat app clipped-right color="green" class="BG-app" clipped>
        <v-app-bar-nav-icon
          class="mx-6"
          color="white"
          @click="drawer = !drawer"
        >
        </v-app-bar-nav-icon>
          <v-layout>
            <div>
              <v-img
                width="130px"
                lazy-src="./assets/images/logo-text-techpaf-blanc.png"
                src="./assets/images/logo-text-techpaf-blanc.png"
              ></v-img>
            </div>
          </v-layout>

        <v-spacer></v-spacer>
      
        <div class="d-flex align-center">
          <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="message"
            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
            :prepend-icon="icon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
          <!-- <v-card
            color="grey lighten-4"
            outlined
            width="300px"
            class="pa-2 ml-4"
            rounded
          >
            <v-layout>
              <v-flex>
                <v-icon color="grey">mdi-magnify</v-icon>
                <span class="ml-2 grey--text">Search</span>
              </v-flex>
              <v-flex class="text-right">
                <v-icon color="grey">mdi-microphone-outline</v-icon>
              </v-flex>
            </v-layout>
          </v-card> -->
        </div>
        <v-spacer></v-spacer>

        <v-btn dark depressed color="#E7596F" class="text-none mr-5">
          <span class="mr-2">
            <v-icon class="mr-2">mdi-plus</v-icon>Create New Post
          </span>
        </v-btn>
        <v-divider vertical></v-divider>
        <!-- <v-btn icon class="mr-2">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn> -->
        <v-btn icon class="mx-5" color="white">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <!-- <v-avatar size="30">
        <img
          lazy-src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="John"
        />
      </v-avatar>
      <v-icon>mdi-menu-down</v-icon> -->
      </v-app-bar>

      <!-- <profile-right-nav /> -->
      <v-navigation-drawer
        color="blue lighten-5"
        class="pa-1"
        app
        fixed
        v-model="drawer"
      >
        <v-layout class="pa-1 mt-4">
          <div class="displayed">
            <v-img
              width="50px"
              height="50px"
              lazy-src="./assets/images/logo-techpaf-noir.png"
              src="./assets/images/logo-techpaf-noir.png"
            ></v-img>
          </div>
        </v-layout>
        <v-layout class="mt-6">
          <v-flex>
            <v-layout>
              <v-flex text-center>
                <!-- <v-card class="text-center" width="70" style="border-radius: 50%" outlined> -->
                <v-avatar class="outlined" size="80">
                  <v-avatar size="70">
                    <v-img
                      lazy-src="./assets/images/photo_profil_nico_linkedin.jpg"
                      src="./assets/images/photo_profil_nico_linkedin.jpg"
                    />
                  </v-avatar>
                </v-avatar>

                <!-- </v-card> -->

                <div class="mt-4 title">Nicolas Marquillier</div>
                <!-- <div class="mt-1 subtitle-2 grey--text">New York, NY</div> -->
                <!-- <div class="mt-5">
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
                </div> -->
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-list nav dense class="mt-10">
          <v-list-item-group v-model="group" active-class="#E7596F--text">
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
              <v-list-item-title>CR Réunion</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group prepend-icon="mdi-information-outline">
            <template v-slot:activator>
              <v-list-item-title>Infos Pratiques</v-list-item-title>
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
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <ProfilePage />
      </v-content>
    </nav>
  </v-app>
</template>

<script>
import ProfilePage from "./pages/ProfilePage";
// import MainNav from "./components/MainNav";
// import ProfileRightNav from "./components/ProfileRightNav";
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    ProfilePage,
  },

  data: () => ({
    drawer: false,
    password: 'Password',
      show: false,
      message: 'Hey!',
      marker: true,
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
      computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    },
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
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.BG-app {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}
.displayed {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.v-avatar.outlined {
  border: 2px solid #0197bf;
  background-color: transparent;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
</style>
