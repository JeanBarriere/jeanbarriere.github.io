<template>
  <div class="flex items-center justify-center">
    <div>
      <div class="sm:ml-24 mb-4 bg-gray-500 dark:bg-white bg-opacity-25 dark:bg-opacity-25 p-6 rounded-xl sm:rounded-bl-none max-w-md+">
        <p class="text-lg tracking-wide antialiased">
          Bonjour. I’m a digital nomad based in Amsterdam.
          I’m currently working at <a
            class="text-blue-500 focus:text-blue-600 dark:text-red-500 dark:focus:text-red-600 underline"
            href="https://storyscript.com"
            target="_blank"
            rel="noopener"
          >Storyscript</a>.
          You can find more about me <a
            class="text-blue-500 focus:text-blue-600 dark:text-red-500 dark:focus:text-red-600 underline"
            href="https://www.linkedin.com/in/jean-barriere/"
            target="_blank"
            rel="noopener"
          >here</a>, or follow my work <a
            class="text-blue-500 focus:text-blue-600 dark:text-red-500 dark:focus:text-red-600 underline"
            href="https://github.com/JeanBarriere"
            target="_blank"
            rel="noopener"
          >there</a>.
        </p>
      </div>
      <div class="w-24 h-24 rounded-full overflow-hidden border-img border-black dark:border-white mx-auto sm:mx-0">
        <img
          class="object-contain object-center rounded-full"
          src="/@/assets/me.jpeg"
          alt="me"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeTpl'
})
</script>
