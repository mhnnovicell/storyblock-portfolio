<template>
  <div v-editable="blok" class="grid-row shadow" data-aos="fade-in">
    <b-card-group deck>
      <div
        class="col-12 col-sm-6 d-flex mt-3 mb-3"
        v-if="blok.heading_work_second"
      >
        <b-card :title="blok.heading_work_second">
          <b-card-text>
            {{ blok.text_work_second }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_work_second }}
          </b-card-text>
        </b-card>
      </div>

      <div
        class="col-12 col-sm-6 d-flex mt-3 mb-3"
        v-if="blok.heading_work_third"
      >
        <b-card :title="blok.heading_work_third">
          <b-card-text>
            {{ blok.text_work_third }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_work_third }}
          </b-card-text>
        </b-card>
      </div>

      <div
        class="col-12 col-sm-6 d-flex mt-3 mb-3"
        v-if="blok.heading_work_fourth"
      >
        <b-card :title="blok.heading_work_fourth">
          <b-card-text>
            {{ blok.text_work_fourth }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_work_fourth }}
          </b-card-text>
        </b-card>
      </div>

      <div
        class="col-12 col-sm-6 d-flex mt-3 mb-3"
        v-if="blok.heading_work_fifth"
      >
        <b-card :title="blok.heading_work_fifth">
          <b-card-text>
            {{ blok.text_work_fifth }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_work_fifth }}
          </b-card-text>
        </b-card>
      </div>

      <div
        class="col-12 col-sm-6 d-flex mt-3 mb-3"
        v-if="blok.heading_work_sixth"
      >
        <b-card :title="blok.heading_work_sixth">
          <b-card-text>
            {{ blok.text_work_sixth }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_work_sixth }}
          </b-card-text>
        </b-card>
      </div>

      <div
        class="col-12 col-sm-6 d-flex mt-3 mb-3"
        v-if="blok.heading_work_seventh"
      >
        <b-card :title="blok.heading_work_seventh">
          <b-card-text>
            {{ blok.text_work_seventh }}
          </b-card-text>
          <b-card-text>
            {{ blok.year_work_seventh }}
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
