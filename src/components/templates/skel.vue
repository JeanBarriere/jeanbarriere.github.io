<template>
  <div class="select-none min-h-screen max-h-screen flex flex-col items-stretch justify-between mx-auto py-12 px-4 sm:px-10 max-w-6xl overflow-hidden">
    <o-header />
    <div class="flex flex-1 flex-col items-center justify-around mt-16 mb-8">
      <h2 class="text-6xl px-10 sm:p-0">
        jean barriere
      </h2>
      <div class="relative w-full h-64">
        <div class="absolute inset-0">
          <router-view v-slot="{ Component }">
            <transition
              name="slide"
              :duration="{ enter: 600, leave: 300 }"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OHeader from '/@/components/organisms/header.vue'

export default defineComponent({
  name: 'App',
  components: {
    OHeader
  }
})
</script>

<style lang="css">
.slide-enter-active {
  @apply transition-all delay-300 duration-300 ease-in-out transform opacity-0 translate-x-32;
}

.slide-leave-active {
  @apply transition-all duration-300 ease-in-out transform;
}

.slide-leave-to {
  @apply translate-x-32 opacity-0;
}

.slide-enter-to {
  @apply translate-x-0 opacity-100;
}
</style>
