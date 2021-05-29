<template>
  <div
    v-editable="blok"
    class="grid-row shadow-lg" data-aos="fade-in" 
>
    <img
     
      v-if="blok.image.filename"
      :src="blok.image.filename" :alt="blok.image.alt" :title="blok.image.alt" />

    <h1 class="text-5xl" v-if="blok.headline">{{ blok.headline }}</h1>
    <p class="mt-3" v-if="blok.description">
      {{blok.description}}
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
  },
}
</script>