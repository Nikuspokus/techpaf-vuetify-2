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
        <div class="div-categoryContainer">
          <!-- <v-card
            elevation="12"
            height="100"
            width="170"
            color="#1256FF"
            class="mr-4"
          >
            <v-img
              src="../assets/images/gptw.jpg"
              contain
              style="align:left"
              class="picture1"
            ></v-img>

            <h2><strong>Best Workplace 2021</strong></h2>
            <v-spacer></v-spacer>
            <p>
              Il fait bon travailler chez SII et nous sommes cette année la
              meilleure société labellisée parmi les plus grandes entreprises
              auditées. Le bien-être et l’épanouissement au travail sont au cœur
              de notre stratégie d’entreprise et de nos préoccupations. s
            </p>
          </v-card> -->
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col cols="6" md="4">
                <v-card
                  elevation="12"
                  height="100"
                  width="170"
                  color="#1256FF"
                  class="mr-4"
                >
                  <v-img
                    src="../assets/images/gptw.jpg"
                    contain
                    style="align:left"
                    class="picture1"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                
                  <h2><strong>Best Workplace 2021</strong></h2>
                  <v-spacer></v-spacer>
                  <p>
                    Il fait bon travailler chez SII et nous sommes cette année
                    la meilleure société labellisée parmi les plus grandes
                    entreprises auditées. Le bien-être et l’épanouissement au
                    travail sont au cœur de notre stratégie d’entreprise et de
                    nos préoccupations. s
                  </p>
              
              </v-col>
            </v-row>
          </v-container>
        </div>
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
body {
  background-color: #ddd;
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

.picture2 {
  border: none;
  float: right;
  margin-right: 40px;
}

.clearfix {
  margin: 0, padding 0;
  width: 0;
  height: 0;
}
</style>
