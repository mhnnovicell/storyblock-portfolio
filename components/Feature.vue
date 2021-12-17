<template>
  <div v-editable="blok" data-aos="fade-in">
    <nuxt-img
      v-if="blok.image.filename"
      class="img-fluid"
      provider="cloudinary"
      :src="this.$nuxt.cloudinary.baseURL + blok.image.filename"
      :alt="this.$nuxt.cloudinary.baseURL + blok.image.filename"
      sizes="sm:100vw md:50vw lg:400px"
      :modifiers="{
        format: 'webp',
        quality: 80,
      }"
      loading="lazy"
    />
    <h1 class="text-lg">{{ blok.name }}</h1>
    <p class="text-gray-600">
      {{ blok.description }}
    </p>
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
}
</script>
