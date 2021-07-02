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
      <template v-slot:default="props">
        <v-row v-for="item in props.items" :key="item.titre">
          <div class="col-4 mx-auto">
            <v-card elevation="12" class="mx-auto">
              <!-- <img :src="item.url" alt="No Image" title="Order Now" /> -->
              <v-img src="../assets/images/gptw.jpg" />
            </v-card>
          </div>
          <div class="col-8">
            <h2>
              <strong> {{ item.titre }}</strong>
            </h2>
            <v-spacer></v-spacer>
            <p class="overFlow">
              {{ item.text }}
            </p>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn rounded right class="mt-1 pa-1">Voir +</v-btn>
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
          titre: "1. Best Workplace 2021",
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
