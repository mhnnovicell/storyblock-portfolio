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

  <swiper ref="mySwiper" :options="swiperOptions"  >
            <swiper-slide v-for="webimages in blok.web_images" :key="webimages.filename">
            <img :src="webimages.filename">

      </swiper-slide>
                <div id="overlay" class="swiper-slide-caption">
          <div class="shell">
            <h1>{{blok.web_headline}}</h1>
 
          </div>
        </div>

            <swiper-slide v-for="designimages in blok.design_images" :key="designimages.filename">
            <img :src="designimages.filename">
      </swiper-slide>
                <div id="overlay" class="swiper-slide-caption">
          <div class="shell">
            <h1>{{blok.design_headline}}</h1>
 
          </div>
        </div>

    <div class="swiper-pagination" slot="pagination"></div>
       <!-- <div class="swiper-button-prev" slot="button-prev" v-on:click="gotoPreviousSlide"></div>
            <div class="swiper-button-next" slot="button-next" v-on:click="gotoNextSlide"></div> -->
  </swiper>


  <swiper class="swiper" id="testhest" :options="swiperOptionSecond">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
           <div class="swiper-button-prev" slot="button-prev" v-on:click="gotoPreviousSlide"></div>
            <div class="swiper-button-next" slot="button-next" v-on:click="gotoNextSlide"></div>
  </swiper>


  </div>
</template>
 
<script>
  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

// import { Carousel, Slide } from 'vue-carousel';

import { Swiper, SwiperSlide, directive, Navigation } from 'vue-awesome-swiper'


Swiper.use([Navigation])


// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

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

  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },

  data() {
      return {
        swiperOptions: {
 


              breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    //Make changes to options down here
    640: {
      slidesPerView: 2,
          slidesPerColumn: 4,
          slidesPerGroup: 4,

      slidesPerColumnFill: 'row',
        grabCursor: true,

    }
  },

           pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

          // Some Swiper option/callback...
        },
              swiperOptionSecond: {
          slidesPerView: 10,
      slidesPerColumnFill: 'row',

          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },

        computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)


    },

        methods: {
          gotoNextSlide(){
            this.$refs.mySwiper.$swiper.slideNext(1000, false);
            console.log(this.$refs.mySwiper.$swiper.slideNext(1000, false))
          },

               gotoPreviousSlide(){
this.$refs.mySwiper.$swiper.slidePrev(1000, false);
          }
    }

}
</script>

<style lang="scss" scoped>

  #testhest {
    height: 430px;
    margin-left: auto;
    margin-right: auto;
    width:500px;

    .swiper-slide {
      height: 200px;
    }
  }
</style>