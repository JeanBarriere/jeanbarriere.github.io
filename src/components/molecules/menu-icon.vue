<template>
  <div class="relative">
    <icon
      :name="name"
      class="cursor-pointer"
      v-bind="$attrs"
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
    />
    <transition name="fade">
      <span
        v-if="showTooltip"
        class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white p-2 absolute bottom-full mb-2 left-0 rounded leading-snug font-sans text-sm whitespace-nowrap"
        v-text="title"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon, { icons } from '@/components/atoms/icon.vue'

export default defineComponent({
  name: 'MMenuIcon',
  components: {
    Icon
  },
  props: {
    name: { type: String, required: true, validator: (v: string) => Object.keys(icons).includes(v) },
    title: { type: String, required: true }
  },
  data: () => ({ showTooltip: false })
})
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-100 ease-in;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
