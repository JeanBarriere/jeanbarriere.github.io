<template>
  <div class="relative">
    <div @click="showContent = !showContent">
      <slot
        name="toggler"
        :triggered="showContent"
      />
    </div>
    <transition
      :name="transitionName"
      class="absolute top-full mt-2 right-0"
    >
      <slot
        v-if="showContent"
        name="content"
        :close="close"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AActionable',
  props: {
    transitionName: { type: String, default: 'fade' }
  },
  data: () => ({ showContent: false }),
  methods: {
    close (): void {
      this.showContent = false
    }
  }
})
</script>
