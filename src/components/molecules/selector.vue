<template>
  <div class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white p-2 absolute top-full mt-4 right-0 rounded leading-snug font-sans text-sm whitespace-no-wrap">
    <ul class="px-4 py-2 space-y-2">
      <li
        v-for="(item, idx) of items"
        :key="idx"
        class="flex flex-row items-center space-x-2 cursor-pointer"
        @click="selectItem(parseInt(idx))"
      >
        <span
          class="bg-blue-500 dark:bg-red-500 bg-opacity-25 dark:bg-opacity-25 rounded-full w-4 h-4 border-2 border-opacity-25 border-white dark:border-white dark:border-opacity-25"
          :class="{ selected, 'bg-opacity-100 dark:bg-opacity-100': selected === parseInt(idx) }"
        />
        <span
          class="text-gray-700 dark:text-white"
          v-text="item"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MSelector',
  props: {
    items: { type: Object, required: true },
    current: { type: String, required: false, default: '' }
  },
  emits: ['select'],
  data: () => ({ showContent: false, selected: 0 }),
  created () {
    this.selected = this.items.indexOf(this.current)
  },
  methods: {
    selectItem (idx: number): void {
      this.selected = idx
      this.$emit('select', this.items[this.selected])
    }
  }
})
</script>
