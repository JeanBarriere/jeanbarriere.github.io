<template>
  <div class="select-none min-h-screen max-h-screen flex flex-col items-stretch justify-between mx-auto py-12 px-10 max-w-6xl overflow-hidden">
    <nav class="flex items-center justify-between h-8">
      <router-link :to="{ name: 'home' }">
        <logo class="h-8 w-24 cursor-pointer" />
      </router-link>
      <div class="flex items-center space-x-6">
        <a
          href="https://medium.com/@barriere.j"
          target="_blank"
          rel="noopener"
        >
          <menu-icon
            name="book"
            title="blog"
          />
        </a>
        <router-link
          :to="{ name: 'projects' }"
          active-class="active"
          exact-active-class=""
        >
          <menu-icon
            name="chip"
            title="my projects"
          />
        </router-link>
        <a
          href="mailto:jean@barriere.io"
          target="_blank"
          rel="noopener"
        >
          <menu-icon
            name="bubble"
            title="email me"
          />
        </a>
        <actionable absolute>
          <template #toggler="{ triggered }">
            <menu-icon
              name="contrast"
              title="theme"
              :class=" { 'active': triggered }"
            />
          </template>
          <template #content="{ close }">
            <selector
              v-click-outside="close"
              :items="['system', 'dark', 'light']"
              :current="currentTheme"
              @select="onThemeChange($event); close()"
            />
          </template>
        </actionable>
      </div>
    </nav>
    <div class="flex flex-1 flex-col items-center justify-around mt-16 mb-8">
      <h2 class="text-6xl">
        jean barriere
      </h2>
      <div class="relative w-full h-64">
        <div class="absolute inset-0">
          <router-view
            v-slot="{ Component }"
          >
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
import Logo from './assets/logo.vue'
import MenuIcon from './components/MenuIcon.vue'
import Actionable from './components/Actionable.vue'
import Selector from './components/Selector.vue'

export default defineComponent({
  name: 'App',
  components: {
    Logo,
    Actionable,
    MenuIcon,
    Selector
  },
  data: () => ({
    currentTheme: localStorage.getItem('currentTheme') ?? 'system'
  } as { currentTheme: 'dark' | 'light' | 'system' }),
  watch: {
    currentTheme () {
      localStorage.setItem('currentTheme', this.currentTheme)
    }
  },
  created () {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event: MediaQueryListEvent) => {
      if (this.currentTheme === 'system') {
        this.setDocumentTheme(event.matches ? 'dark' : 'light')
      }
    })
    this.updateCurrentTheme()
  },
  methods: {
    setDefaultTheme (): void {
      const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.setDocumentTheme(darkTheme ? 'dark' : 'light')
    },
    setDocumentTheme (theme: 'dark' | 'light'): void {
      if (theme === 'dark') {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    },
    onThemeChange (theme: 'dark' | 'light' | 'system'): void {
      this.currentTheme = theme
      this.updateCurrentTheme()
    },
    updateCurrentTheme (): void {
      if (this.currentTheme === 'system') {
        this.setDefaultTheme()
      } else {
        this.setDocumentTheme(this.currentTheme)
      }
    }
  }
})
</script>

<style lang="css">
@import './index.css';

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-100 ease-in;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}

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
