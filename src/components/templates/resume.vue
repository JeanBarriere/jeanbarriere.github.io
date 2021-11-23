<template>
  <div class="w-full">
    <h2 class="font-bold tracking-widest font-sans text-2xl sm:text-3xl subpixel-antialiased leading-none mb-12">
      Frontend Engineer
    </h2>
    <h3 class="font-light tracking-wider font-sans text-xl subpixel-antialiased leading-none mb-8">
      Experience
    </h3>
    <div class="select-text flex flex-col items-stretch">
      <section
        v-for="(exp, idx) of experiences"
        :key="`exp-${idx}`"
        class="my-8"
      >
        <div class="flex row items-end justify-between mb-2">
          <component
            :is="exp.website ? 'a' : 'h4'"
            :href="exp.website"
            :target="exp.website ? '_blank' : undefined"
            :rel="exp.website ? 'noopener' : undefined"
            class="font-light font-display tracking-wider text-2xl sm:text-3xl antialiased"
          >
            {{ exp.company }}
          </component>
          <span class="font-light tracking-wider text-md font-sans antialiased whitespace-nowrap">{{ exp.from }} - {{ exp.to }}</span>
        </div>
        <h5 class="font-bold tracking-widest text-md sm:text-lg font-sans antialiased mb-4">
          {{ exp.position }}
        </h5>
        <p class="font-sans tracking-wide leading-normal text-md antialiased text-justify mb-6 whitespace-pre-line">
          {{ exp.content }}
        </p>
        <div class="flex row items-center justify-end">
          <div class="flex row space-x-6 items-center justify-start glitch">
            <menu-icon
              v-for="(skill, sIdx) in skillsFiltered(exp.skills)"
              :key="`exp-${idx}-skill-${sIdx}`"
              :name="skill.icon"
              :title="skill.name"
              dur="5s"
              :style="`--filtername: url(#filter-${skill.icon})`"
            />
          </div>
        </div>
      </section>
    </div>
    <h3 class="font-light tracking-wider font-sans text-xl subpixel-antialiased leading-none mt-12 mb-8">
      Education
    </h3>
    <div class="flex row justify-start xl:justify-between flex-wrap gap-4 select-text">
      <div
        v-for="(education, idx) in educations"
        :key="`educ-${idx}`"
        class="bg-gradient-to-t from-white to-gray-200 dark:from-black border rounded-md border-gray-300 dark:border-gray-700 dark:to-gray-800 w-full sm:w-64 h-64 text-black dark:text-white flex flex-col items-start justify-start p-4"
      >
        <span class="font-bold text-lg tracking-widest subpixel-antialiased">{{ education.type }}</span>
        <span class="font-light text-4xl subpixel-antialiased mt-4">{{ education.title }}</span>
        <span
          v-if="education.sub"
          class="font-light text-lg subpixel-antialiased mb-auto"
        >{{ education.sub }}</span>
        <span class="font-light text-md subpixel-antialiased mt-auto self-end">{{ education.year }}</span>
        <div class="flex flex-row justify-between self-stretch">
          <span class="font-normal text-sm subpixel-antialiased inline-flex">{{ education.school }}</span>
          <span class="font-normal text-sm subpixel-antialiased inline-flex">{{ education.details }}</span>
        </div>
      </div>
    </div>
    <h3 class="font-light tracking-wider font-sans text-lg subpixel-antialiased leading-none mt-12 mb-8">
      hobbies
    </h3>
    <div class="flex row space-x-6 items-center justify-start glitch">
      <template
        v-for="hobby in hobbies"
        :key="`hobby-${hobby.name}`"
      >
        <menu-icon
          class="block"
          :name="hobby.icon"
          :title="hobby.name"
          dur="3s"
          :style="`--filtername: url(#filter-${hobby.icon})`"
        />
        <span
          class="hidden print:block tracking-wide font-sans text-md subpixel-antialiased leading-normal"
        >
          {{ hobby.name }}
        </span>
      </template>
    </div>
    <div class="flex items-center justify-center p-12">
      <logo class="h-4 w-12 text-gray-600" />
    </div>
    <!-- <h3 class="font-light tracking-wider font-sans text-xl subpixel-antialiased leading-none my-8">
      Latest work
    </h3>
    <div class="pb-24">
      <div class="bg-gradient-to-br from-gray-400 to-blue-500 dark:from-gray-400 dark:to-red-500 w-64 h-64 text-white flex items-center justify-center">
        <span class="font-medium text-3xl subpixel-antialiased">coming soon</span>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuIcon from '@/components/molecules/menu-icon.vue'
import Logo from '@/components/atoms/logo.vue'

export default defineComponent({
  name: 'ResumeTpl',
  components: { MenuIcon, Logo },
  data: () => ({
    skills: [
      { name: 'Typescript', icon: 'typescript' },
      { name: 'NodeJS', icon: 'nodejs' },
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'Archlinux', icon: 'archlinux' },
      { name: 'Github', icon: 'github' },
      { name: 'Rust', icon: 'rust' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'PHP', icon: 'php' },
      { name: 'Go', icon: 'golang' }
    ],
    hobbies: [
      { name: 'Literature', icon: 'quill' },
      { name: 'Art', icon: 'palette' },
      { name: 'Cinema', icon: 'coupon' },
      { name: 'Vinyls', icon: 'album' },
      { name: 'Culture & Civilisation', icon: 'earth' },
      { name: 'Travel', icon: 'compass' }
    ],
    educations: [
      { school: 'EPITECH', year: 2019, type: 'MASTER', title: 'Information Technology', sub: 'GPA 4.0', details: 'Paris, FR' },
      { school: 'SIIT', year: 2018, type: 'EXCHANGE SEMESTER', title: 'Computer Science', details: 'Bangkok, TH' },
      { school: 'EPITECH', year: 2017, type: 'BACHELOR', title: 'Information Technology', sub: 'GPA 3.77', details: 'Bordeaux, FR' },
      { school: 'Guez de Balzac', year: 2014, type: 'BACCALAUREATE', title: 'Science', sub: 'Opt. Maths & Ancient Greek', details: 'Angoulême, FR' }
    ],
    experiences: [
      {
        company: 'Story.ai',
        website: 'https://story.ai',
        from: 'Sept. 2018',
        to: 'Dec. 2021',
        position: 'Software Engineer',
        skills: ['Typescript', 'NodeJS', 'Vue.js', 'Rust', 'Go', 'Github'],
        content: `I was one of the core members of the team and had a lot of different challenges and opportunities to learn. I started by maintaining all the web platforms \
          using Vue.js and our GraphQL API. After a first shift of the company, which introduced horizontal teamwork, \
          I had the opportunity to learn about Kubernetes, Helm, Terraform, managing Docker images and Microservices in multiple languages (python, golang, javascript), \
          while improving our frontend studio.
          The second shift of the company brought Rust and its ecosystem. This gave me the opportunity to experience the build of \
          a wasm product. While working on that, I was still helping out on backend tasks which was leveraging Node and Typescript.`
      },
      {
        company: 'Freelance Developer',
        from: 'Aug. 2016',
        to: 'Apr. 2019',
        position: 'Web & Mobile Developer',
        skills: ['Typescript', 'Vue.js', 'Kotlin', 'Archlinux'],
        content: `Started working as a Freelancer independently from school work. I've had 3 major clients:
          - « Le Web Français », for who I kept working after my internship on the customer products I was already handling.
          - « TRIB Rating », a financial rating company and product on which I was in charge of the Vue.js architecture and early-on developments.
          - « Fresh'Apero », a Bordeaux-based company selling Alcohol. I made their Android application using Kotlin. It included tracking and payment features.
          `
      },
      {
        company: 'Le Web Français',
        website: 'https://lewebfrancais.fr',
        from: 'Mar. 2017',
        to: 'Aug. 2017',
        position: 'Software Developer',
        skills: ['NodeJS', 'Vue.js', 'PHP', 'Kotlin'],
        content: `Web and Mobile developer as part of an internship during my 3rd year of Bachelor in Bordeaux.
        This Digital agency had different customer needs and a very small team. I was in charge of some of the Android applications,
        as well as some of the Web applications we were developing. It included working with Vue.js and Symfony.`
      },
      {
        company: 'Epitech',
        website: 'https://epitech.eu',
        from: 'Feb. 2016',
        to: 'Mar. 2017',
        position: 'Teaching Assistant',
        skills: ['Archlinux', 'Github'],
        content: `Worked during my second and third years in this school as a Teaching assistant.
        I was in charge of some of the activities and the management of the pedagogic schedule. My role was also to give grades post-deliveries.
        The courses I was involved were mostly about C, SQL, Networking and System Administration`
      },
      {
        company: 'Wondrworld',
        from: 'Jul. 2015',
        to: 'Nov. 2015',
        position: 'Junior Developer',
        skills: ['NodeJS', 'Github'],
        content: `Web and Mobile developer as part of an internship during my 2nd year of Bachelor at EPITECH. The social-media startup was \
          based in Bordeaux, and it was focused around sharing travel pictures.
          I was given the opportunity to work on their landing page (Angular) and the Android application (Java)`
      }
    ]
  }),
  computed: {
    skillsFiltered () {
      return (skills: string[]) => {
        return this.skills.filter(s => skills.includes(s.name))
      }
    }
  }
})
</script>
