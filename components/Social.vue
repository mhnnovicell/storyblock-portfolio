<template>
  <div v-editable="blok" class="grid-row shadow-lg" data-aos="fade-in">
    <h1 class="text-5xl text-center" v-if="blok.contact_headline">
      {{ blok.contact_headline }}
    </h1>
    <p class="mt-3" v-if="blok.contact_content">
      {{ blok.contact_content }}
    </p>
    <a :href="`mailto:${blok.email_value.email}`" class="secondary">
      {{ blok.email_value.email }}
    </a>
    <p class="mt-4" v-if="blok.social_text_content">
      {{ blok.social_text_content }}
    </p>

    <div class="d-flex mt-3">
      <a
        :href="blok.github_link.url"
        target="_blank"
        class="mr-4 text-white"
        rel="noopener"
      >
        <b-icon-github font-scale="2"></b-icon-github>
      </a>
      <a
        :href="blok.linkedin_link.url"
        target="_blank"
        class="mr-4 text-white"
        rel="noopener"
      >
        <b-icon-linkedin font-scale="2"></b-icon-linkedin>
      </a>

      <a
        :href="blok.facebook_link.url"
        target="_blank"
        class="mr-4 text-white"
        rel="noopener"
      >
        <b-icon-facebook font-scale="2"></b-icon-facebook>
      </a>
      <a
        :href="blok.instagram_link.url"
        target="_blank"
        class="text-white"
        rel="noopener"
      >
        <b-icon-instagram font-scale="2"></b-icon-instagram>
      </a>
    </div>
  </div>
</template>

<script>
import {
  BIcon,
  BIconLinkedin,
  BIconFacebook,
  BIconInstagram,
  BIconGithub,
} from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconLinkedin,
    BIconFacebook,
    BIconInstagram,
    BIconGithub,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
