import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2ABDE3',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
      },
    },
  },
})

export default vuetify

// import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';

// Vue.use(Vuetify);

// export default new Vuetify({
// });

