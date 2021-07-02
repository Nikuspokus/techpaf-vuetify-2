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

        <v-form class="mt-6">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  type="text"
                  v-model="message"
                  background-color="white"
                  rounded
                  filled
                  dense
                  prepend-inner-icon="mdi-magnify"
                  clear-icon="mdi-close-circle"
                  clearable
                  class="hidden-sm-and-down"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-spacer></v-spacer>
        <div class="mr-5">

          <Popup/>
        </div>

        <!-- <v-btn
          dark
          depressed
          rounded
          color="#0c5085"
          class="text-none mr-5 BG-btn"
        >
          <span class="mr-2">
            <v-icon class="mr-2">mdi-plus</v-icon>Create New Post
          </span>
        </v-btn> -->
        <v-divider vertical color="white"></v-divider>
        <v-btn icon class="mx-5" color="white">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer class="pa-1 BG-drawer" app fixed v-model="drawer">
        <v-layout class="pa-1 mt-4">
          <div class="displayed">
            <v-img
              width="50px"
              height="50px"
              lazy-src="./assets/images/logo-techpaf-blanc.png"
              src="./assets/images/logo-techpaf-blanc.png"
            ></v-img>
          </div>
        </v-layout>
        <v-layout class="mt-6">
          <v-flex>
            <v-layout>
              <v-flex text-center>
                <v-avatar class="outlined" size="80">
                  <v-avatar size="70">
                    <v-img
                      lazy-src="./assets/images/photo_profil_nico_linkedin.jpg"
                      src="./assets/images/photo_profil_nico_linkedin.jpg"
                    />
                  </v-avatar>
                </v-avatar>

                <!-- </v-card> -->

                <div class="mt-4 title" style="color: white">
                  Nicolas Marquillier
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-list nav dense class="mt-10">
          <v-list-item-group>
            <v-list-group prepend-icon="mdi-language-javascript">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >JS</v-list-item-title
                >
              </template>
              <v-list-item>
                <v-list-item-icon prepend-icon="mdi-language-javascript">
                  <v-icon style="color: white">mdi-lightbulb-on-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >Trucs & Astuces</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-angular</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu">Angular</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon class="item-menu" style="color: white"
                    >mdi-jquery</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title class="item-menu">JQuery</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-nodejs</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu">NodeJS</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-vuejs</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu">VueJS</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >CR Réunion</v-list-item-title
                >
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-language-php">
              <template v-slot:activator>
                <v-list-item-title class="item-menu">PHP</v-list-item-title>
              </template>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-lightbulb-on-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >Trucs & Astuces</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >CR Réunion</v-list-item-title
                >
              </v-list-item>
            </v-list-group>
          </v-list-item-group>

          <v-list-item-group active-class="#E7596F--text" style="color: white">
            <v-list-group prepend-icon="mdi-language-java">
              <template v-slot:activator>
                <v-list-item-title class="item-menu">Java</v-list-item-title>
              </template>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-lightbulb-on-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >Trucs & Astuces</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-leaf</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu">STRUTS</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-leaf</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu">Spring</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >CR Réunion</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-lightbulb-on-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >Trucs & Astuces</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-leaf</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu">STRUTS</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-leaf</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu">Spring</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >CR Réunion</v-list-item-title
                >
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-dot-net">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >.Net</v-list-item-title
                >
              </template>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-lightbulb-on-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >Trucs & Astuces</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item-menu"
                  >CR Réunion</v-list-item-title
                >
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-head-cog">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >IA / ML</v-list-item-title
                >
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
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-dot-net">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >YPO</v-list-item-title
                >
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
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-leaf">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >Green IT</v-list-item-title
                >
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
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-material-design">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >UX / UI</v-list-item-title
                >
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
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-account-voice">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >Speak'up</v-list-item-title
                >
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
          </v-list-item-group>
          <v-list-item-group active-class="#E7596F--text">
            <v-list-group prepend-icon="mdi-information-outline">
              <template v-slot:activator>
                <v-list-item-title class="#C2CDD8--text item-menu"
                  >Infos Pratiques</v-list-item-title
                >
              </template>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: red">mdi-lightbulb-on-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Trucs & Astuces</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>CR Réunion</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <ProfilePage />
      </v-main>
    </nav>
  </v-app>
</template>

<script>
import ProfilePage from "./pages/ProfilePage";
import Popup from './components/Popup.vue';
// import MainNav from "./components/MainNav";
// import ProfileRightNav from "./components/ProfileRightNav";
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    Popup,
    ProfilePage
  },

  data: () => ({
    drawer: false,
    password: "Password",
    show: false,
    message: "",
    marker: true,
    iconIndex: 0,
    icons: [
      "mdi-emoticon",
      "mdi-emoticon-cool",
      "mdi-emoticon-dead",
      "mdi-emoticon-excited",
      "mdi-emoticon-happy",
      "mdi-emoticon-neutral",
      "mdi-emoticon-sad",
      "mdi-emoticon-tongue",
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },

  methods: {
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
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
.BG-drawer {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
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

.BG-btn {
  background-color: #ffffff;
}

v-list-item-title {
  color: #fff;
}

.item-menu {
  color: white;
}

i.v-icon.v-icon {
  color: #fff;
}
.hidden-sm-and-down .v-icon {
  color: #0197bf !important;
}
</style>
