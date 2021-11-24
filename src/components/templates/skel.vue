<template>
  <div class="select-none min-h-screen flex flex-col items-stretch justify-between mx-auto py-12 px-4 sm:px-10 max-w-6xl print:py-0">
    <o-header />
    <div class="flex flex-1 flex-col items-start justify-start relative z-0">
      <!-- https://freefrontend.com/css-text-glitch-effects/ -->
      <div class="px-10 sm:p-0 my-24 print:my-8 flex w-full items-start justify-between">
        <h2
          class="text-5xl md:text-8xl antialiased glitch-name print:text-6xl print:animation-none"
          style="--stacks: 3"
        >
          <span style="--index: 1">jean barriere</span>
          <span style="--index: 2">jean barriere</span>
          <span style="--index: 3">jean barriere</span>
        </h2>
        <div class="hidden print:flex flex-col items-end justify-end gap-y-2">
          <a
            href="//github.com/jeanbarriere"
            target="_blank"
            rel="noopener"
            class="flex items-center flex-row-reverse gap-4 font-medium font-display tracking-wider text-lg antialiased"
          >
            <icon name="github" /><span>@JeanBarriere</span>
          </a>
          <a
            href="//linkedin.com/in/jean-barriere"
            target="_blank"
            rel="noopener"
            class="flex items-center flex-row-reverse gap-4 font-medium font-display tracking-wider text-lg antialiased"
          >
            <icon name="book" /><span>/in/jean-barriere</span>
          </a>
          <a
            href="mailto:jean@barriere.io"
            target="_blank"
            rel="noopener"
            class="flex items-center flex-row-reverse gap-4 font-medium font-display tracking-wider text-lg antialiased"
          >
            <icon name="bubble" /><span>jean&#64;barriere.io</span>
          </a>
        </div>
      </div>
      <div
        class="relative w-full"
      >
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OHeader from '@/components/organisms/header.vue'
import Icon from '@/components/atoms/icon.vue'

export default defineComponent({
  name: 'SkelTpl',
  components: {
    OHeader,
    Icon
  }
})
</script>

<style lang="css">
.slide-enter-active {
  @apply transition-all delay-300 duration-300 ease-in-out transform opacity-0 -translate-y-64;
}

.slide-leave-active {
  @apply transition-all duration-300 ease-in-out transform;
}

.slide-leave-to {
  @apply -translate-y-32 opacity-0;
}

.slide-enter-to {
  @apply translate-y-0 opacity-100;
}

.glitch-name {
  overflow: visible;
  display: grid;
  grid-template-columns: 1fr;
}

.glitch-name span {
  @apply font-display;
  grid-row-start: 1;
  grid-column-start: 1;
}

@media screen {
  .glitch-name span {
    --stack-height: calc(33% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: glitch 2.5s ease infinite 5s alternate-reverse;
  }
}

.glitch-name span:nth-child(odd) { --glitch-translate: 8px; }
.glitch-name span:nth-child(even) { --glitch-translate: -8px; }

@keyframes glitch {
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  4%, 28% {  text-shadow: none; transform: none; }
  29% {
    text-shadow: -5px 3px 0 red, -10px -9px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  38% {
    text-shadow: 2px -3px 0 red, -2px 12px 0 blue;
  }
  39%, 100% {  text-shadow: none; transform: none; }
}
</style>
