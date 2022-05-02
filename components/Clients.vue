<template>
  <div
    v-editable="blok"
    class="shadow-lg rounded-custom clients-container"
    data-aos="fade-in"
  >
    <b-carousel
      id="carousel-clients"
      v-model="slide"
      :interval="0"
      controls
      indicators
      img-width="1920"
      img-height="1440"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="carousel-clients"
    >
      <b-carousel-slide
        v-for="vegansearchimages in blok.vegansearch_image"
        :key="vegansearchimages.filename"
        :caption="blok.vegansearch_headline"
        v-b-modal="blok.vegansearch_headline"
        text-html="<span class='pointer'>Læs mere</span>"
      >
        <template #img>
          <nuxt-img
            provider="cloudinary"
            :src="
              vegansearchimages.filename.replace(
                'https://res.cloudinary.com/mikkelraev/image/upload',
                ''
              )
            "
            :alt="blok.vegansearch_headline"
            sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
            :modifiers="{
              quality: 80,
            }"
            loading="lazy"
            format="webp"
            class="d-block img-fluid w-100"
          /> </template
      ></b-carousel-slide>

      <!-- The modal -->
      <b-modal :id="blok.vegansearch_headline" centered ok-only ok-title="Luk">
        <b-container>
          <b-row class="mb-1">
            <b-col cols="12" class="mb-3">
              <h3>{{ blok.vegansearch_headline }}</h3>
            </b-col>
            <b-col
              cols="12"
              v-for="vegansearchimages in blok.vegansearch_image"
              :key="vegansearchimages.filename"
            >
              <nuxt-img
                provider="cloudinary"
                :src="
                  vegansearchimages.filename.replace(
                    'https://res.cloudinary.com/mikkelraev/image/upload',
                    ''
                  )
                "
                :alt="blok.vegansearch_headline"
                sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
                :modifiers="{
                  quality: 80,
                }"
                loading="lazy"
                format="webp"
                class="modal-img"
              />
            </b-col>
            <b-col cols="12" class="mt-3">
              <div class="mt-3 text-white">{{ blok.vegansearch_text }}</div>
            </b-col>
            <b-col cols="12" class="mt-3">
              <a
                :href="blok.vegansearch_link.url"
                target="_blank"
                class="secondary"
                >Se siden</a
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
        v-for="kurtnimages in blok.kurtn_image"
        :key="kurtnimages.filename"
        :caption="blok.kurtn_headline"
        text-html="<span class='pointer'>Læs mere</span>"
        v-b-modal="blok.kurtn_headline"
      >
        <template #img>
          <nuxt-img
            provider="cloudinary"
            :src="
              kurtnimages.filename.replace(
                'https://res.cloudinary.com/mikkelraev/image/upload',
                ''
              )
            "
            :alt="blok.kurtn_headline"
            sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
            :modifiers="{
              quality: 80,
            }"
            loading="lazy"
            format="webp"
            class="d-block img-fluid w-100"
          /> </template
      ></b-carousel-slide>

      <!-- The modal -->
      <b-modal :id="blok.kurtn_headline" centered ok-only ok-title="Luk">
        <b-container>
          <b-row class="mb-1">
            <b-col cols="12" class="mb-3">
              <h3>{{ blok.kurtn_headline }}</h3>
            </b-col>
            <b-col
              cols="12"
              v-for="kurtnimages in blok.kurtn_image"
              :key="kurtnimages.filename"
            >
              <nuxt-img
                provider="cloudinary"
                :src="
                  kurtnimages.filename.replace(
                    'https://res.cloudinary.com/mikkelraev/image/upload',
                    ''
                  )
                "
                :alt="blok.kurtn_headline"
                sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
                :modifiers="{
                  quality: 80,
                }"
                loading="lazy"
                format="webp"
                class="modal-img"
              />
            </b-col>
            <b-col cols="12" class="mt-3">
              <div class="mt-3 text-white">{{ blok.kurtn_text }}</div>
            </b-col>
            <b-col cols="12" class="mt-3">
              <a :href="blok.kurtn_link.url" target="_blank" class="secondary"
                >Se siden</a
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

      <!-- Slides with img slot -->
      <b-carousel-slide
        v-for="brasidanimages in blok.brasidan_image"
        :key="brasidanimages.filename"
        :caption="blok.brasidan_headline"
        text-html="<span class='pointer'>Læs mere</span>"
        v-b-modal="blok.brasidan_headline"
      >
        <template #img>
          <nuxt-img
            provider="cloudinary"
            :src="
              brasidanimages.filename.replace(
                'https://res.cloudinary.com/mikkelraev/image/upload',
                ''
              )
            "
            :alt="blok.brasidan_headline"
            sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
            :modifiers="{
              quality: 80,
            }"
            loading="lazy"
            format="webp"
            class="d-block img-fluid w-100"
          /> </template
      ></b-carousel-slide>

      <!-- The modal -->
      <b-modal :id="blok.brasidan_headline" centered ok-only ok-title="Luk">
        <b-container>
          <b-row class="mb-1">
            <b-col cols="12" class="mb-3">
              <h3>{{ blok.brasidan_headline }}</h3>
            </b-col>
            <b-col
              cols="12"
              v-for="brasidanimages in blok.brasidan_image"
              :key="brasidanimages.filename"
            >
              <nuxt-img
                provider="cloudinary"
                :src="
                  brasidanimages.filename.replace(
                    'https://res.cloudinary.com/mikkelraev/image/upload',
                    ''
                  )
                "
                :alt="blok.brasidan_headline"
                sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
                :modifiers="{
                  quality: 80,
                }"
                loading="lazy"
                format="webp"
                class="modal-img"
              />
            </b-col>
            <b-col cols="12" class="mt-3">
              <div class="mt-3 text-white">{{ blok.brasidan_text }}</div>
            </b-col>
            <b-col cols="12" class="mt-3">
              <a
                :href="blok.braisdan_link.url"
                target="_blank"
                class="secondary"
                >Se siden</a
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="asientoimages in blok.asiento_image"
        :key="asientoimages.filename"
        :caption="blok.asiento_headline"
        text-html="<span class='pointer'>Læs mere</span>"
        v-b-modal="blok.asiento_headline"
      >
        <template #img>
          <nuxt-img
            provider="cloudinary"
            :src="
              asientoimages.filename.replace(
                'https://res.cloudinary.com/mikkelraev/image/upload',
                ''
              )
            "
            :alt="blok.asiento_headline"
            sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
            :modifiers="{
              quality: 80,
            }"
            loading="lazy"
            format="webp"
            class="d-block img-fluid w-100"
          /> </template
      ></b-carousel-slide>

      <!-- The modal -->
      <b-modal :id="blok.asiento_headline" centered ok-only ok-title="Luk">
        <b-container>
          <b-row class="mb-1">
            <b-col cols="12" class="mb-3">
              <h3>{{ blok.asiento_headline }}</h3>
            </b-col>
            <b-col
              cols="12"
              v-for="asientoimages in blok.asiento_image"
              :key="asientoimages.filename"
            >
              <nuxt-img
                provider="cloudinary"
                :src="
                  asientoimages.filename.replace(
                    'https://res.cloudinary.com/mikkelraev/image/upload',
                    ''
                  )
                "
                :alt="blok.asiento_headline"
                sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
                :modifiers="{
                  quality: 80,
                }"
                loading="lazy"
                format="webp"
                class="modal-img"
              />
            </b-col>
            <b-col cols="12" class="mt-3">
              <div class="mt-3 text-white">{{ blok.asiento_text }}</div>
            </b-col>
            <b-col cols="12" class="mt-3">
              <a :href="blok.asiento_link.url" target="_blank" class="secondary"
                >Se siden</a
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="animalinfoimages in blok.animalinfo_image"
        :key="animalinfoimages.filename"
        :caption="blok.animalinfo_headline"
        text-html="<span class='pointer'>Læs mere</span>"
        v-b-modal="blok.animalinfo_headline"
      >
        <template #img>
          <nuxt-img
            provider="cloudinary"
            :src="
              animalinfoimages.filename.replace(
                'https://res.cloudinary.com/mikkelraev/image/upload',
                ''
              )
            "
            :alt="blok.animalinfo_headline"
            sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
            :modifiers="{
              quality: 80,
            }"
            loading="lazy"
            format="webp"
            class="d-block img-fluid w-100"
          /> </template
      ></b-carousel-slide>

      <!-- The modal -->
      <b-modal :id="blok.animalinfo_headline" centered ok-only ok-title="Luk">
        <b-container>
          <b-row class="mb-1">
            <b-col cols="12" class="mb-3">
              <h3>{{ blok.animalinfo_headline }}</h3>
            </b-col>
            <b-col
              cols="12"
              v-for="animalinfoimages in blok.animalinfo_image"
              :key="animalinfoimages.filename"
            >
              <nuxt-img
                provider="cloudinary"
                :src="
                  animalinfoimages.filename.replace(
                    'https://res.cloudinary.com/mikkelraev/image/upload',
                    ''
                  )
                "
                :alt="blok.animalinfo_headline"
                sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
                :modifiers="{
                  quality: 80,
                }"
                loading="lazy"
                format="webp"
                class="modal-img"
              />
            </b-col>
            <b-col cols="12" class="mt-3">
              <div class="mt-3 text-white">{{ blok.animalinfo_text }}</div>
            </b-col>
            <b-col cols="12" class="mt-3">
              <a
                :href="blok.animalinfo_link.url"
                target="_blank"
                class="secondary"
                >Se siden</a
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="beeroclockimages in blok.beeroclock_image"
        :key="beeroclockimages.filename"
        :caption="blok.beeroclock_headline"
        text-html="<span class='pointer'>Læs mere</span>"
        v-b-modal="blok.beeroclock_headline"
      >
        <template #img>
          <nuxt-img
            provider="cloudinary"
            :src="
              beeroclockimages.filename.replace(
                'https://res.cloudinary.com/mikkelraev/image/upload',
                ''
              )
            "
            :alt="blok.beeroclock_headline"
            sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
            :modifiers="{
              quality: 80,
            }"
            loading="lazy"
            format="webp"
            class="d-block img-fluid w-100"
          /> </template
      ></b-carousel-slide>

      <!-- The modal -->
      <b-modal :id="blok.beeroclock_headline" centered ok-only ok-title="Luk">
        <b-container>
          <b-row class="mb-1">
            <b-col cols="12" class="mb-3">
              <h3>{{ blok.beeroclock_headline }}</h3>
            </b-col>
            <b-col
              cols="12"
              v-for="beeroclockimages in blok.beeroclock_image"
              :key="beeroclockimages.filename"
            >
              <nuxt-img
                provider="cloudinary"
                :src="
                  beeroclockimages.filename.replace(
                    'https://res.cloudinary.com/mikkelraev/image/upload',
                    ''
                  )
                "
                :alt="blok.beeroclock_headline"
                sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
                :modifiers="{
                  quality: 80,
                }"
                loading="lazy"
                format="webp"
                class="modal-img"
              />
            </b-col>
            <b-col cols="12" class="mt-3">
              <div class="mt-3 text-white">{{ blok.beeroclock_text }}</div>
            </b-col>
            <b-col cols="12" class="mt-3">
              <a
                :href="blok.beeroclock_link.url"
                target="_blank"
                class="secondary"
                >Se siden</a
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal>
    </b-carousel>
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
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
