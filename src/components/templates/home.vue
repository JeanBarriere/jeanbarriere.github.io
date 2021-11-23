<template>
  <div class="flex items-center justify-start">
    <div>
      <div class="py-2 mt-2 mb-4 max-w-xl">
        <p class="text-3xl tracking-wide antialiased">
          👋 Bonjour. I’m a digital nomad based in Amsterdam and am currently looking for a new challenge.<br><br>
          If your company is making an impact and you're looking for passionate developers, don't hesitate to contact me!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeTpl',
  methods: {
    emailMe: function () {
      window.open('mailto:jean@barriere.io')
    }
  }
})
</script>
