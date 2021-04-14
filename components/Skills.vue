<template>
  <div
    v-editable="blok"
    class="grid-row" data-aos="fade-in" 
>

    <h1 class="text-5xl" v-if="blok.heading">{{ blok.heading }}</h1>
    <p v-if="blok.text">
      {{blok.text}}
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

