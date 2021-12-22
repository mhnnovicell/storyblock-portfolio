<template>
  <div v-editable="blok" class="grid-row" data-aos="fade-in">
    <div class="row">
      <!-- Using value -->
      <div class="col-6">
        <h1
          v-b-toggle="'collapse-1'"
          class="m-1 collaspeelementfirst"
          :class="isActive ? null : 'collapsed'"
          :aria-expanded="isActive ? 'true' : 'false'"
          @click="isActive = !isActive"
        >
          {{ blok.web_headline }}
        </h1>
      </div>
      <!-- Element to collapse -->
      <b-collapse id="collapse-1">
        <div class="col-12 collapsible-content">
          <p>{{ blok.web_content }}</p>
          <div
            class="col-3 collapsbile-image-container mt-3"
            v-for="webimages in blok.web_images"
            :key="webimages.filename"
          >
            <nuxt-img
              class="img-fluid"
              provider="cloudinary"
              :src="
                webimages.filename.replace(
                  'https://res.cloudinary.com/mikkelraev/image/upload',
                  ''
                )
              "
              :alt="
                webimages.filename.replace(
                  'https://res.cloudinary.com/mikkelraev/image/upload',
                  ''
                )
              "
              sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
              :modifiers="{
                quality: 80,
              }"
              loading="lazy"
              format="svg"
            />

            <!-- <img :src="webimages.filename" class="img-fluid" :alt="webimages.filename"> -->
          </div>
        </div>
      </b-collapse>

      <div class="col-6">
        <h1
          v-b-toggle="'collapse-2'"
          class="m-1 collaspeelementsecond"
          :class="{ active: isActive }"
        >
          {{ blok.design_headline }}
        </h1>
      </div>
      <!-- Element to collapse -->
      <b-collapse id="collapse-2">
        <div class="col-12 collapsible-content">
          <p>{{ blok.design_content }}</p>
          <div
            class="col-3 collapsbile-image-container mt-3"
            v-for="designimages in blok.design_images"
            :key="designimages.filename"
          >
            <nuxt-img
              class="img-fluid"
              provider="cloudinary"
              :src="
                designimages.filename.replace(
                  'https://res.cloudinary.com/mikkelraev/image/upload',
                  ''
                )
              "
              :alt="
                designimages.filename.replace(
                  'https://res.cloudinary.com/mikkelraev/image/upload',
                  ''
                )
              "
              sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
              :modifiers="{
                format: 'webp',
                quality: 80,
              }"
              loading="lazy"
              format="svg"
            />
            <!-- <img :src="designimages.filename" class="img-fluid" :alt="designimages.filename" /> -->
          </div>
        </div>
      </b-collapse>
    </div>
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

  data() {
    return {
      isActive: Boolean,
      testid: String,
    }
  },

  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      console.log('collapseId:', collapseId)
      console.log('isJustShown:', isJustShown)
      this.isActive = isJustShown
      this.testid = collapseId
    })
  },

  computed: {
    isActiveElement: function () {
      return this.isActive ? 'd-block' : 'd-block'
    },
  },
}
</script>
