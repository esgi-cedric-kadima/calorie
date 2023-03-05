<template>
  <section>
    <div class="align-center">
      <h1>
        Consomation : <br>
        <small>
          Totale aliments consomées : {{ this.consomation.length }}
        </small>
      </h1>
      <h5>
    <span v-for="(ligne, index) in this.total" :key="index">
      {{ ligne.name }} totale : {{ ligne.value }} {{ ligne.unitName }} <br>
    </span>
      </h5>
    </div>
    <div>
      <v-container v-if="consomation.length > 0">
        <v-row>
          <v-col>
            <v-list v-on:click="redirection" class="cardRedirection">
              <v-list-item
                  v-for="aliment in consomation"
                  :key="aliment.fcid"
                  :title="aliment.description"
                  :subtitle="aliment.brandOwner + ' - ' +  aliment.foodCategory"
              >
                <hr>
                <ul v-for="(nutrient, index) in aliment.foodNutrients" :key="index" class="text-caption">
                  <li v-if="nutrient.nutrientName === 'Energy'">{{ nutrient.nutrientName }}: {{ nutrient.value }}
                    {{ nutrient.unitName }}
                  </li>
                  <li v-if="nutrient.nutrientName === 'Protein'">{{ nutrient.nutrientName }}: {{
                      nutrient.value
                    }} {{ nutrient.unitName }}
                  </li>
                  <li v-if="nutrient.nutrientName === 'Total lipid (fat)'">{{ nutrient.nutrientName }}:
                    {{ nutrient.value }}
                    {{
                      nutrient.unitName
                    }}
                  </li>
                  <li v-if="nutrient.nutrientName === 'Sugars, total including NLEA'">{{
                      nutrient.nutrientName
                    }}: {{ nutrient.value }} {{ nutrient.unitName }}
                  </li>
                  <li v-if="nutrient.nutrientName === 'Calcium, Ca'">{{ nutrient.nutrientName }}: {{
                      nutrient.value
                    }} {{ nutrient.unitName }}
                  </li>
                  <li v-if="nutrient.nutrientName === 'Total lipid (fat)'">{{ nutrient.nutrientName }}: {{
                      nutrient.value
                    }} {{
                      nutrient.unitName
                    }}
                  </li>
                </ul>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue';
import {useConsomationStore} from "@/stores/consomationStore";

export default defineComponent({
  name: "ConsomationView",
  setup() {
    const consomationStore = useConsomationStore();
    return {
      consomation: consomationStore.alimentsConsomation
    };
  },
  data() {
    return {
      total: [
        {
          name: 'Energy',
          value: 0,
          unitName: 'kcal'
        },
        {
          name: 'Protein',
          value: 0,
          unitName: 'g'
        },
        {
          name: 'Total lipid (fat)',
          value: 0,
          unitName: 'g'
        },
        {
          name: 'Sugars, total including NLEA',
          value: 0,
          unitName: 'g'
        },
        {
          name: 'Calcium, Ca',
          value: 0,
          unitName: 'mg'
        },
        {
          name: 'Total lipid (fat)',
          value: 0,
          unitName: 'g'
        }
      ],
      listConsomation: []
    };
  },
  methods: {
    totalNutrients() {
      for (let i = 0; i < this.consomation.length; i++) {
        for (let j = 0; j < this.consomation[i].foodNutrients.length; j++) {
          // console.log(this.aliments[i].foodNutrients[j].nutrientNumber);
          // this.total.push(this.aliments[i].foodNutrients[j].nutrientNumber + this.aliments[i].foodNutrients[j].nutrientNumber);
          if (this.consomation[i].foodNutrients[j].nutrientName === 'Energy') {
            this.total[0].value += this.consomation[i].foodNutrients[j].value;
          }
          if (this.consomation[i].foodNutrients[j].nutrientName === 'Protein') {
            this.total[1].value += this.consomation[i].foodNutrients[j].value;
          }
          if (this.consomation[i].foodNutrients[j].nutrientName === 'Total lipid (fat)') {
            this.total[2].value += this.consomation[i].foodNutrients[j].value;
          }
          if (this.consomation[i].foodNutrients[j].nutrientName === 'Sugars, total including NLEA') {
            this.total[3].value += this.consomation[i].foodNutrients[j].value;
          }
          if (this.consomation[i].foodNutrients[j].nutrientName === 'Calcium, Ca') {
            this.total[4].value += this.consomation[i].foodNutrients[j].value;
          }
          if (this.consomation[i].foodNutrients[j].nutrientName === 'Total lipid (fat)') {
            this.total[5].value += this.consomation[i].foodNutrients[j].value;
          }
        }
      }
    },
    redirection() {
      for (let aliment = 0; aliment < this.consomation.length; aliment++) {
        this.$router.push({
          name: 'item',
          params: {alimentId: this.consomation[aliment].fdcId, alimentScore: this.consomation[aliment].score}
        });
        console.log(this.consomation[aliment].fdcId);
      }
    }
  },
  mounted() {
    this.totalNutrients();
  }
});
</script>

<style scoped>
section:hover {
  cursor: pointer;
}

</style>