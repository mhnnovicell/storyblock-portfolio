<template>
  <div
    v-editable="blok"
    class="grid-row shadow-lg"
    data-aos="fade-in"
    :class="
      blok.image.filename ==
      'https://res.cloudinary.com/mikkelraev/image/upload/v1579431282/mikkelraev.dk/mikkel-edited-smaller.png'
        ? 'p-0'
        : ''
    "
  >
    <nuxt-img
      v-if="blok.image.filename"
      provider="cloudinary"
      :src="
        blok.image.filename.replace(
          'https://res.cloudinary.com/mikkelraev/image/upload',
          ''
        )
      "
      :alt="
        blok.image.filename.replace(
          'https://res.cloudinary.com/mikkelraev/image/upload',
          ''
        )
      "
      :title="
        blok.image.filename.replace(
          'https://res.cloudinary.com/mikkelraev/image/upload',
          ''
        )
      "
      :format="blok.image.alt === 'logo' ? 'svg' : 'webp'"
      :sizes="
        blok.image.alt === 'logo'
          ? 'xs:25vw sm:25vw md:25vw lg:25vw'
          : 'xs:100vw sm:100vw md:100vw lg:100vw'
      "
      :width="blok.image.alt === 'logo' ? '' : '1200'"
      :height="blok.image.alt === 'logo' ? '' : '800'"
      :modifiers="{
        quality: 80,
      }"
      loading="lazy"
    />

    <h1 class="text-5xl" v-if="blok.headline">{{ blok.headline }}</h1>
    <p class="mt-3" v-if="blok.description">{{ blok.description }}</p>
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
