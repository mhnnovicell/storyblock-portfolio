<template>
  <div
    v-editable="blok"
   >

  <!-- <VueSlickCarousel v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel> -->

<!-- <carousel>
  <slide>
    Slide 1 Content
  </slide>
  <slide>
    Slide 2 Content
  </slide>
</carousel> -->

  </div>
</template>
 
<script>
  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

// import { Carousel, Slide } from 'vue-carousel';


export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
//       components: { VueSlickCarousel },

//           data() {
//       return {
//         settings: {
// "dots": true,
//   "infinite": false,
//   "speed": 500,
//   "slidesToShow": 1,
//   "slidesToScroll": 4,
//   "initialSlide": 0,
//   "centerMode": true,
//   "centerPadding": "20px",
//   "responsive": [
//     {
//       "breakpoint": 1024,
//       "settings": {
//         "slidesToShow": 3,
//         "slidesToScroll": 3,
//         "infinite": true,
//         "dots": true
//       }
//     },
//     {
//       "breakpoint": 600,
//       "settings": {
//         "slidesToShow": 2,
//         "slidesToScroll": 2,
//         "initialSlide": 2
//       }
//     },
//     {
//       "breakpoint": 480,
//       "settings": {
//         "slidesToShow": 1,
//         "slidesToScroll": 1
//       }
//     }
//   ]
//         },
//       }
//     },


  // components: {
  //   Carousel,
  //   Slide,
  // }



}
</script>