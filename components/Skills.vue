<template>
  <div
    v-editable="blok"
    class="grid-row shadow" data-aos="fade-in" 
>
<div class="row">
<div class="col-4">
     <b-card v-if="blok.heading" :title="blok.heading" :sub-title="blok.text">
    <b-card-text v-if="blok.year" class="text-dark">
      {{blok.year}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary">Link til HF</a>
  </b-card>
    </div>
    <div class="col-4">
         <b-card v-if="blok.heading_education_second" :title="blok.heading_education_second" :sub-title="blok.text_education_second">
    <b-card-text v-if="blok.year_education_second" class="text-dark">
      {{blok.year_education_second}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary">Link til HF</a>
  </b-card>
    </div>
    <div class="col-4">

             <b-card v-if="blok.heading_education_third" :title="blok.heading_education_third" :sub-title="blok.text_education_third">
    <b-card-text v-if="blok.year_education_third" class="text-dark">
      {{blok.year_education_third}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary">Link til HF</a>
  </b-card>
    </div>
    </div>
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
}
</script>

