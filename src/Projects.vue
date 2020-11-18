<template>
  <div class="w-full overflow-hidden">
    <h3 class="font-light tracking-wider font-sans text-xl subpixel-antialiased leading-none mb-8">
      latest work
    </h3>
    <div>
      <div
        class="bg-gradient-to-br from-teal-400 to-blue-500 dark:from-teal-500 dark:to-red-600 w-64 h-64 text-white flex items-center justify-center"
      >
        <span class="font-medium text-3xl subpixel-antialiased">coming soon</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Projects',
  data: () => ({ isDown: false, startX: 0, scrollLeft: 0 }),
  methods: {
    onMousedown (e: MouseEvent) {
      const slider = this.$refs.slider as HTMLElement
      this.isDown = true
      this.startX = e.pageX - slider.offsetLeft
      this.scrollLeft = slider.scrollLeft
    },
    onMouseleave () {
      this.isDown = false
    },
    onMouseup () {
      this.isDown = false
    },
    scroll (e: Event) {
      console.log(e)
    },
    onMousemove (e: MouseEvent) {
      if (!this.isDown) return
      const slider = this.$refs.slider as HTMLElement

      e.preventDefault()

      const x = e.pageX - slider.offsetLeft
      const walk = (x - this.startX) * 2.25

      slider.scrollLeft = this.scrollLeft - walk
    }
  }
})
</script>
