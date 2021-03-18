<template>
  <div
    v-editable="blok"
    class="py-2 text-center">
    <img
      class="mx-auto"
      v-if="blok.image.filename" :src="blok.image.filename">
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