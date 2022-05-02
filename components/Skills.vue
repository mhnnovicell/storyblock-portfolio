<template>
  <div v-editable="blok" class="grid-row shadow" data-aos="fade-in">
    <b-card-group deck>
      <div class="col-12 col-xl-4 d-flex mt-3 mb-3" v-if="blok.heading">
        <b-card :title="blok.heading" img-top>
          <b-card-text v-if="blok.text">
            {{ blok.text }}
          </b-card-text>
          <b-card-text v-if="blok.year">
            {{ blok.year }}
          </b-card-text>
        </b-card>
      </div>

      <div
        class="col-12 col-xl-4 d-flex mt-3 mb-3"
        v-if="blok.heading_education_second"
      >
        <b-card :title="blok.heading_education_second" img-top>
          <b-card-text>
            {{ blok.text_education_second }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_education_second }}
          </b-card-text>
        </b-card>
      </div>

      <div
        class="col-12 col-xl-4 d-flex mt-3 mb-3"
        v-if="blok.heading_education_third"
      >
        <b-card :title="blok.heading_education_third" img-top>
          <b-card-text>
            {{ blok.text_education_third }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_education_third }}
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getImgSizes: function (event) {},
  },
}
</script>
