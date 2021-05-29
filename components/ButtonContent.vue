<template>
  <div
    v-editable="blok"
    class="grid-row" data-aos="fade-in">

<div class="row">
  <!-- Using value -->
  <div class="col-6">
  <h1 v-b-toggle="'collapse-1'" class="m-1 collaspeelementfirst"  :class="isActive ? null : 'collapsed'"
      :aria-expanded="isActive ? 'true' : 'false'"  @click="isActive = !isActive">{{blok.web_headline}}</h1>
</div>
  <!-- Element to collapse -->
  <b-collapse id="collapse-1">
    <div class="col-12 collapsible-content">
      <p>{{blok.web_content}}</p>
      <div class="col-3 collapsbile-image-container mt-3" v-for="webimages in blok.web_images" :key="webimages.filename" >
      <img :src="webimages.filename" class="img-fluid" :alt="webimages.filename">
      </div>
    </div>
  </b-collapse>

  <div class="col-6">

   <h1 v-b-toggle="'collapse-2'"  class="m-1 collaspeelementsecond" :class="{ active: isActive }">{{blok.design_headline}}</h1>
</div>
  <!-- Element to collapse -->
   <b-collapse id="collapse-2">
    <div class="col-12 collapsible-content">
      <p>{{blok.design_content}}</p>
      <div class="col-3 collapsbile-image-container mt-3" v-for="designimages in blok.design_images" :key="designimages.filename" >
      <img :src="designimages.filename" class="img-fluid" :alt="designimages.filename">
      </div>
    </div>
  </b-collapse>
  </div>
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

  data(){
 return {
   isActive: Boolean,
  testid: String,

 }
},

    mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      console.log('collapseId:', collapseId)
      console.log('isJustShown:', isJustShown)
      this.isActive = isJustShown;
      this.testid = collapseId;
    })
  },
  
computed: {
    isActiveElement: function() {
        return this.isActive ? 'd-block' : 'd-block';
    }
}

}
</script>