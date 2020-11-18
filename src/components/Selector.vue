<template>
  <div class="bg-black text-white dark:text-black dark:bg-white bg-opacity-75 dark:bg-opacity-50 p-2 absolute top-full mt-4 right-0 rounded-md leading-snug font-sans text-sm whitespace-no-wrap">
    <ul class="px-4 py-2 space-y-2">
      <li
        v-for="(item, idx) of items"
        :key="idx"
        class="flex flex-row items-center space-x-2 cursor-pointer"
        @click="selectItem(idx)"
      >
        <span
          class="bg-blue-300 bg-opacity-25 rounded-full w-4 h-4 border-2 border-opacity-25 border-white dark:border-white dark:border-opacity-25"
          :class="{ selected, 'bg-opacity-100': selected === idx }"
        />
        <span
          class="text-white"
          v-text="item"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Actionable',
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
