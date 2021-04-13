<template>
  <div
    v-editable="blok"
    class="grid-row" data-aos="fade-in" 
>
    <img
     
      v-if="blok.image.filename"
      :src="blok.image.filename" />

    <h1 class="text-5xl" v-if="blok.headline">{{ blok.headline }}</h1>
    <p v-if="blok.description">
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