<template>
  <div
    v-editable="blok"
    class="grid-row" data-aos="fade-in">

<div class="row">
  <!-- Using value -->
  <div class="col-6">
  <h1 v-b-toggle="'collapse-1'" class="m-1">{{blok.web_headline}}</h1>
</div>
  <!-- Element to collapse -->
  <b-collapse id="collapse-1">
    <div class="col-12">
      <p>{{blok.web_content}}</p>
      <div class="col-3" v-for="webimages in blok.web_images" :key="webimages.filename" >
      <img :src="webimages.filename" class="img-thumbnail">
      </div>
    </div>
  </b-collapse>

  <div class="col-6">

   <h1 v-b-toggle="'collapse-2'" class="m-1">{{blok.design_headline}}</h1>
</div>
  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <div class="col-12">
      <p>test</p>
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
}
</script>