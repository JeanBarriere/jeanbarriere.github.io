<template>
  <home-tpl />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeTpl from '@/components/templates/home.vue'

export default defineComponent({
  name: 'VHome',
  components: { HomeTpl }
})
</script>
