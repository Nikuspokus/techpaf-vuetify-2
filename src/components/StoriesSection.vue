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
      <v-layout class="mt-7">
        <div class="col-6 mx-auto mr-3">
          <v-card elevation="12" height="260" width="680" color="#1256FF" class=" mx-auto">
            <div >
              <v-img
                height="260"
                src="../assets/images/gptw.jpg"
                contain
              ></v-img>
            </div>
          </v-card>
          <v-layout column class="mt-8 ">
            <h2 class=" mx-auto"><strong>Best Workplacexxxtttxx 2021</strong></h2>
            <br>
            <div class=" m-auto">
              <p>
              Il fait bon travailler chez SII et nous sommes cette année la
              meilleure société labellisée parmi les plus grandes entreprises
              auditées. Le bien-être et l’épanouissement au travail sont au cœur
              de notre stratégie d’entreprise et de nos préoccupations. Nous
              étions déjà troisièmes l’année passée et c’est la quatrième année
              consécutive que SII obtient ce label. Cette première place vient
              donc récompenser la cohérence et la durabilité de notre démarche
              </p>
            </div>
          </v-layout>
        </div>
        <!-- //////////////////////////////autre////////////////////////// -->
        <!-- <div class="col">
          <v-card
            elevation="12"
            height="260"
            width="680"
            color="#1256FF"
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
            <h2 class=""><strong>Best Workplacexxxxx 2021</strong></h2>
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
        </div> -->
        <v-divider vertical color="0197bf"></v-divider>

        <div class="col-6 mx-auto">
          <!-- <v-container style="background-color: blue" class="mx-auto"> -->
          <!-- <v-container class="mx-auto">
            <div class="row ">
              <div class="col-4 mx-auto">
                <v-card elevation="12" color="#1256FF" class="mx-auto">
                  <v-img src="../assets/images/gptw.jpg"></v-img>
                </v-card>
              </div>
              <div class="col-8">
                <h2>
                  <strong><em>1. </em>Best Workplace 2021</strong>
                </h2>
                <v-spacer></v-spacer>
                <p class="overFlow">
                  Il fait bon travailler chez SII et nous sommes cette année la
                  meilleure société labellisée parmi les plus grandes
                  entreprises auditées. Le bien-être et l’épanouissement au
                  travail sont au cœur de notre stratégie d’entreprise et de nos
                  préoccupations.
                </p>
              </div>
            </div>
          </v-container> -->
          <!-- <v-container style="background-color: blue" class="mx-auto"> -->
          <!-- <v-container class="mx-auto">
            <div class="row ">
              <div class="col-4 mx-auto">
                <v-card elevation="12" color="#1256FF" class="mx-auto">
                  <v-img src="../assets/images/gptw.jpg"></v-img>
                </v-card>
              </div>
              <div class="col-8">
                <h2>
                  <strong><em>1. </em>Best Workplace 2021</strong>
                </h2>
                <v-spacer></v-spacer>
                <p class="overFlow">
                  Il fait bon travailler chez SII et nous sommes cette année la
                  meilleure société labellisée parmi les plus grandes
                  entreprises auditées. Le bien-être et l’épanouissement au
                  travail sont au cœur de notre stratégie d’entreprise et de nos
                  préoccupations.
                </p>
              </div>
            </div>
          </v-container> -->
          <!-- <v-container class="mx-auto">
            <div class="row ">
              <div class="col-4 mx-auto">
                <v-card elevation="12" color="#1256FF" class="mx-auto">
                  <v-img src="../assets/images/gptw.jpg"></v-img>
                </v-card>
              </div>
              <div class="col-8">
                <h2>
                  <strong><em>1. </em>Best Workplace 2021</strong>
                </h2>
                <v-spacer></v-spacer>
                <p class="overFlow">
                  Il fait bon travailler chez SII et nous sommes cette année la
                  meilleure société labellisée parmi les plus grandes
                  entreprises auditées. Le bien-être et l’épanouissement au
                  travail sont au cœur de notre stratégie d’entreprise et de nos
                  préoccupations.
                </p>
              </div>
            </div>
          </v-container> -->
          <pagination />
        </div>
      </v-layout>

      <v-spacer></v-spacer>
    </v-cols>
    <v-spacer class="mt-8"></v-spacer>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  name: "StoriesSection",

  components: {
    Pagination,
  },
};
</script>

<style>

.returnLine {
  white-space: pre;
}
body {
  background-color: #ddd;
}

h2 {
  font-size: 16px;
}

p {
  font-size: 12px;
}
.div-categoryContainer {
  box-sizing: border-box;
  margin: 10px auto 10px;
  padding: 10px;
  width: 80%;
  min-height: 300px;

  font-family: sans-serif;
  font-size: 1em;
  color: #333;

  background-color: #eee;
}

.picture1 {
  border: none;
}

.clearfix {
  margin: 0, padding 0;
  width: 0;
  height: 0;
}

.overFlow {
  width: 380px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
