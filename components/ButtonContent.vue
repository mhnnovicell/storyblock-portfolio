<template>
  <div v-editable="blok" class="grid-row" data-aos="fade-in">
    <div class="row">
      <!-- Using value -->
      <transition>
        <div
          class="col-6"
          :class="secondElementActive === true ? 'd-none' : 'd-flex'"
        >
          <a
            v-b-toggle="'collapse-1'"
            class="m-1 collaspeelementfirst h1"
            :aria-expanded="firstElementIsActive ? 'true' : 'false'"
            @click="firstElementIsActive = !firstElementIsActive"
          >
            {{ blok.web_headline }}
          </a>
        </div>
      </transition>
      <!-- Element to collapse -->
      <b-collapse id="collapse-1">
        <div class="col-12 collapsible-content mt-3 ml-1">
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

      <transition>
        <div
          class="col-6"
          :class="firstElementIsActive === true ? 'd-none' : 'd-flex'"
        >
          <a
            v-b-toggle="'collapse-2'"
            class="m-1 collaspeelementsecond h1"
            @click="secondElementActive = !secondElementActive"
            :aria-expanded="secondElementActive ? 'true' : 'false'"
          >
            {{ blok.design_headline }}
          </a>
        </div>
      </transition>
      <!-- Element to collapse -->
      <b-collapse id="collapse-2">
        <div class="col-12 collapsible-content mt-3 ml-1">
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
      firstElementIsActive: false,
      secondElementActive: false,
      testid: String,
    }
  },

  // mounted() {
  //   this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
  //     console.log('collapseId:', collapseId)
  //     console.log('isJustShown:', isJustShown)
  //     this.firstElementIsActive = isJustShown
  //     this.testid = collapseId
  //     this.firstElementIsActiveElement
  //   })
  // },

  // computed: {
  //   firstElementIsActiveElement: function () {
  //     console.log("this.firstElementIsActive", this.firstElementIsActive)
  //           console.log("this.secondElementActive", this.secondElementActive)

  //     return this.firstElementIsActive ? 'd-block' : 'd-block'
  //   },
  // },
}
</script>

<style scoped lang="scss">
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.collaspeelementfirst,
.collaspeelementsecond {
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur(13px);
  padding: 7px;

  &:hover {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  &:active {
  }
}
</style>
