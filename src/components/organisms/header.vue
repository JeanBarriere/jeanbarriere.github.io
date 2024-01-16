<template>
  <nav class="flex flex-row gap-y-8 items-center justify-between print:hidden sticky top-12 z-10">
    <router-link :to="{ name: 'home' }">
      <logo class="h-8 w-24 cursor-pointer relative" />
    </router-link>
    <div class="flex items-center space-x-6">
      <router-link
        :to="{ name: 'resume' }"
        active-class="active"
        exact-active-class=""
      >
        <menu-icon
          name="resume"
          title="about me"
          animate="3s"
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
      <a
        href="https://github.com/JeanBarriere"
        target="_blank"
        rel="noopener"
      >
        <menu-icon
          name="github"
          title="github"
        />
      </a>
      <actionable>
        <template #toggler="{ triggered }">
          <menu-icon
            name="contrast"
            title="theme"
            :class=" { 'active': triggered }"
            animate="10s"
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Actionable from '@/components/atoms/actionable.vue'
import Logo from '@/components/atoms/logo.vue'
import MenuIcon from '@/components/molecules/menu-icon.vue'
import Selector from '@/components/molecules/selector.vue'

export default defineComponent({
  name: 'OHeader',
  components: { Actionable, Logo, MenuIcon, Selector },
  data: () => ({
    currentTheme: typeof window !== 'undefined' ? localStorage.getItem('currentTheme') ?? 'system' : 'system'
  } as { currentTheme: 'dark' | 'light' | 'system' }),
  watch: {
    currentTheme () {
      localStorage.setItem('currentTheme', this.currentTheme)
    }
  },
  created () {
    if (typeof window !== 'undefined') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event: MediaQueryListEvent) => {
        if (this.currentTheme === 'system') {
          this.setDocumentTheme(event.matches ? 'dark' : 'light')
        }
      })
      this.updateCurrentTheme()
    }
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

<style lang="css" scoped>
nav:before {
  content: '';
  @apply block absolute -top-12 -bottom-6 -inset-x-4 sm:-inset-x-6 backdrop-blur-lg border-b border-white/75 dark:border-black/75;
}
</style>
