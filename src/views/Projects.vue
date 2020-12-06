<template>
  <projects-tpl />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsTpl from '/@/components/templates/projects.vue'

export default defineComponent({
  name: 'Projects',
  components: { ProjectsTpl }
})
</script>
