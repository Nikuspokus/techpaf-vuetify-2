<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <!-- <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template> -->

      <template v-slot:default="props">
        <v-row  v-for="item in props.items" :key="item.titre">
          <div class="col-4 mx-auto">
                <v-card elevation="12" class="mx-auto">
                   <!-- <img :src="item.url" alt="No Image" title="Order Now" /> -->
                  <v-img src="../assets/images/gptw.jpg"/>
                </v-card>
              </div>
              <div class="col-8">
                <h2>
                  <strong> {{ item.titre }}</strong>
                </h2>
                <v-spacer></v-spacer>
                <p class="overFlow">
                  {{item.text}}
                </p>
                <v-row>
                  <v-spacer></v-spacer>
                <v-btn rounded right class="mt-2">sdfsdf</v-btn>
                </v-row>
              </div>
          
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-4" align="center" justify="center">
          <v-spacer></v-spacer>
          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn class="mx-3" icon @click="formerPage" elevation="0">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn class="mx-3" @click="nextPage" icon elevation="0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPageArray: [3, 6, 9],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 3,
      sortBy: "titre",
      keys: ["Titre", "url", "Text", "Link"],
      items: [
        {
          titre: "1. Best Wopmopmorkplace 2021",
          // src: '@assets/images/gptw.jpg',
          url: "../assets/gptw.jpg",
          text:
            "Il fait bon travailler chez SII et nous sommes cette année la meilleure société labellisée parmi les plus grandes entreprises auditées. Le bien-être et l’épanouissement au travail sont au cœur de notre stratégie d’entreprise et de nos préoccupations.",
          link: "www.google.fr",
        },
        {
          titre: "2. Best Workplace 2021",
          image: "../../assets/images/gptw.jpg",
          text:
            "Il fait bon travailler chez SII et nous sommes cette année la meilleure société labellisée parmi les plus grandes entreprises auditées. Le bien-être et l’épanouissement au travail sont au cœur de notre stratégie d’entreprise et de nos préoccupations.",
          link: "www.google.fr",
        },
        {
          titre: "3. Best Workplace 2021",
          image: "../assets/images/gptw.jpg",
          text:
            "Il fait bon travailler chez SII et nous sommes cette année la meilleure société labellisée parmi les plus grandes entreprises auditées. Le bien-être et l’épanouissement au travail sont au cœur de notre stratégie d’entreprise et de nos préoccupations.",
          link: "www.google.fr",
        },
        {
          titre: "4. Best Workplace 2021",
          image: "../assets/images/gptw.jpg",
          text:
            "Il fait bon travailler chez SII et nous sommes cette année la meilleure société labellisée parmi les plus grandes entreprises auditées. Le bien-être et l’épanouissement au travail sont au cœur de notre stratégie d’entreprise et de nos préoccupations.",
          link: "www.google.fr",
        },
        {
          titre: "5. Best Workplace 2021",
          image: "../assets/images/gptw.jpg",
          text:
            "Il fait bon travailler chez SII et nous sommes cette année la meilleure société labellisée parmi les plus grandes entreprises auditées. Le bien-être et l’épanouissement au travail sont au cœur de notre stratégie d’entreprise et de nos préoccupations.",
          link: "www.google.fr",
        },
        {
          titre: "6. Best Workplace 2021",
          image: "../assets/images/gptw.jpg",
          text:
            "Il fait bon travailler chez SII et nous sommes cette année la meilleure société labellisée parmi les plus grandes entreprises auditées. Le bien-être et l’épanouissement au travail sont au cœur de notre stratégie d’entreprise et de nos préoccupations.",
          link: "www.google.fr",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
