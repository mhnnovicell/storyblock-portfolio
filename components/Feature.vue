<template>
  <div
    v-editable="blok"
    data-aos="fade-in">
 <nuxt-img
    v-if="blok.image.filename"
            class="img-fluid"
              provider="cloudinary"
              :src="blok.image.filename.replace('https://res.cloudinary.com/mikkelraev/image/upload', '')"
              :alt="blok.image.filename.replace('https://res.cloudinary.com/mikkelraev/image/upload', '')"
              sizes="xs:100vw sm:100vw md:100vw lg:25vw xl:25vw"
              :modifiers="{ 
                    format: 'webp',
            quality: 80,
            height: 75}"
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
      required: true
    }
  }
}
</script>