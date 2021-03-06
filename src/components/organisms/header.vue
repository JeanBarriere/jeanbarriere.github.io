<template>
  <nav class="flex flex-col sm:flex-row space-y-12 sm:space-y-0 items-center justify-between h-8">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Actionable from '/@/components/atoms/actionable.vue'
import Logo from '/@/components/atoms/logo.vue'
import MenuIcon from '/@/components/molecules/menu-icon.vue'
import Selector from '/@/components/molecules/selector.vue'

export default defineComponent({
  name: 'OHeader',
  components: { Actionable, Logo, MenuIcon, Selector },
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
