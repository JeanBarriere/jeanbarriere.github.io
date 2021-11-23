<template>
  <resume-tpl />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResumeTpl from '@/components/templates/resume.vue'

export default defineComponent({
  name: 'VResume',
  components: { ResumeTpl }
})
</script>
