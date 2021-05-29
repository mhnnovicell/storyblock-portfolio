<template>
  <div v-editable="blok" class="shadow-lg rounded-custom statements-container" data-aos="fade-in">
    <b-carousel
      id="carousel-fade statements-carousel"
      fade
      indicators
      :interval="10000"
      img-width="1920"
      img-height="1440"
    >
      <b-carousel-slide
        :img-src="blok.asiento_image.filename"
        id="asiento-card"
        :img-alt="blok.asiento_name"
      >
        <b-card
          :title="blok.asiento_name"
          tag="article"
          class="mb-4 w-100"
          align="center"
          title-tag="h2"
        >
          <h4>{{ blok.asiento_title }}</h4>
          <b-card-text>
            {{ blok.asiento_text }}
          </b-card-text>

          <b-button :href="blok.asiento_link.url" variant="primary"
            >Se mere</b-button
          >
        </b-card>
      </b-carousel-slide>
      <b-carousel-slide
        :img-src="blok.brasidan_image.filename"
        id="brasidan-card"
        :img-alt="blok.brasidan_name"
      >
        <b-card
          :title="blok.brasidan_name"
          tag="article"
          class="mb-4 w-100"
          align="center"
          title-tag="h2"
        >
          <h4>{{ blok.brasidan_title }}</h4>

          <b-card-text>
            {{ blok.brasidan_text }}
          </b-card-text>

          <b-button :href="blok.brasidan_link.url" variant="primary"
            >Se mere</b-button
          >
        </b-card>
      </b-carousel-slide>
      <b-carousel-slide
        :img-src="blok.db_image.filename"
        id="db-card"
        :img-alt="blok.db_name"
      >
        <b-card
          :title="blok.db_name"
          tag="article"
          class="mb-4 w-100"
          align="center"
          title-tag="h2"
        >
          <h4>{{ blok.db_title }}</h4>

          <b-card-text>
            {{ blok.db_text }}
          </b-card-text>
        </b-card></b-carousel-slide
      >
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
