<template>
  <div
    v-editable="blok"
    class="grid-row shadow" data-aos="fade-in" 
>
<!-- <div class="row">
<div class="col-4">
     <b-card v-if="blok.heading" :title="blok.heading" :sub-title="blok.text">
    <b-card-text v-if="blok.year" class="text-white">
      {{blok.year}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary text-white">Link til HF</a>
  </b-card>
    </div>
    <div class="col-4">
         <b-card v-if="blok.heading_education_second" :title="blok.heading_education_second" :sub-title="blok.text_education_second">
    <b-card-text v-if="blok.year_education_second" class="text-white">
      {{blok.year_education_second}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary text-white">Link til HF</a>
  </b-card>
    </div>
    <div class="col-4">

             <b-card v-if="blok.heading_education_third" :title="blok.heading_education_third" :sub-title="blok.text_education_third">
    <b-card-text v-if="blok.year_education_third" class="text-white">
      {{blok.year_education_third}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary text-white">Link til HF</a>
  </b-card>
    </div>
    </div> -->
  <b-card-group deck>
    <b-card v-if="blok.heading" :title="blok.heading" img-top>
      <b-card-text v-if="blok.text">
     {{blok.text}}
      </b-card-text>
    <b-card-text v-if="blok.year">
     {{blok.year}}
      </b-card-text>

    </b-card>

    <b-card v-if="blok.heading_education_second" :title="blok.heading_education_second" img-top>
      <b-card-text>
     {{blok.text_education_second}}
      </b-card-text>
      <b-card-text>
     {{blok.year_education_second}}
      </b-card-text>
    </b-card>

    <b-card v-if="blok.heading_education_third" :title="blok.heading_education_third" img-top>
      <b-card-text>
     {{blok.text_education_third}}

      </b-card-text>
            <b-card-text>
     {{blok.year_education_third}}

      </b-card-text>

    </b-card>
  </b-card-group>


  </div>
</template>


 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },

  methods:{
    getImgSizes: function (event) {

    }

  }
}
</script>

