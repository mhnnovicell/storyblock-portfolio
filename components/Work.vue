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
         <b-card v-if="blok.heading_work_second" :title="blok.heading_work_second" :sub-title="blok.text_work_second">
    <b-card-text v-if="blok.year_work_second" class="text-white">
      {{blok.year_work_second}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary text-white">Link til HF</a>
  </b-card>
    </div>
    <div class="col-4">

             <b-card v-if="blok.heading_work_third" :title="blok.heading_work_third" :sub-title="blok.text_work_third">
    <b-card-text v-if="blok.year_work_third" class="text-white">
      {{blok.year_work_third}}

    </b-card-text>
    <a href="https://aarhusakademi.dk/hf/" class="card-link link-secondary text-white">Link til HF</a>
  </b-card>
    </div>
    </div> -->
  <b-card-group deck>


    <b-card v-if="blok.heading_work_second" :title="blok.heading_work_second">
      <b-card-text>
     {{blok.text_work_second}}
      </b-card-text>
      <b-card-text>
     {{blok.year_work_second}}
      </b-card-text>
    </b-card>

    <b-card v-if="blok.heading_work_third" :title="blok.heading_work_third">
      <b-card-text>
     {{blok.text_work_third}}

      </b-card-text>
            <b-card-text>
     {{blok.year_work_third}}

      </b-card-text>

    </b-card>

        <b-card v-if="blok.heading_work_fourth" :title="blok.heading_work_fourth">
      <b-card-text>
     {{blok.text_work_fourth}}

      </b-card-text>
            <b-card-text>
     {{blok.year_work_fourth}}

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

