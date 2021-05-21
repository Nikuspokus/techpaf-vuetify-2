<template>
  <div>
    <v-cols>
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
            color="#1256FF"
            class="mr-4"
          >
            <div>
              <v-img
                height="260"
                src="../assets/images/gptw.jpg"
                contain
              ></v-img>
            </div>
          </v-card>
          <v-layout column class="mt-8 ">
            <h2 class=""><strong>Best Workplace 2021</strong></h2>
            <v-spacer></v-spacer>
            <div class="" style=" width: 550px">
              Il fait bon travailler chez SII et nous sommes cette année la
              meilleure société labellisée parmi les plus grandes entreprises
              auditées. Le bien-être et l’épanouissement au travail sont au cœur
              de notre stratégie d’entreprise et de nos préoccupations. Nous
              étions déjà troisièmes l’année passée et c’est la quatrième année
              consécutive que SII obtient ce label. Cette première place vient
              donc récompenser la cohérence et la durabilité de notre démarche
            </div>
          </v-layout>
        </div>
        <v-divider vertical color="0197bf" class="mx-10"></v-divider>

        <v-pagination circle v-model="page" :length="6"></v-pagination>
      </v-layout>

      <v-spacer></v-spacer>
    </v-cols>
    <v-spacer class="mt-8"></v-spacer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
}
.returnLine {
  white-space: pre;
}
</style>
