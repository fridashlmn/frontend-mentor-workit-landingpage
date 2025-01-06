<template>
  <div class="max-w-screen min-h-screen h-screen w-full">
    <header
      class="relative z-10 bg-purple-900 flex items-center justify-between lg:pt-14 lg:px-40 md:px-11 pt-8 px-5 -mb-1"
    >
      <LogoLight />
      <BaseButton variant="secondary">Apply for access</BaseButton>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="flex flex-col items-center lg:py-28 py-20">
      <LogoDark />
      <div class="flex justify-center pt-14">
        <FacebookIcon class="iconHover w-5 mr-7" />
        <TwitterIcon class="iconHover w-5 mr-7" />
        <InstagramIcon class="iconHover w-5" />
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import BaseButton from './components/BaseButton/index.vue'
import LogoDark from 'assets/images/logo-dark.svg?component'
import LogoLight from 'assets/images/logo-light.svg?component'
import TwitterIcon from 'assets/images/icon-twitter.svg?component'
import FacebookIcon from 'assets/images/icon-facebook.svg?component'
import InstagramIcon from 'assets/images/icon-instagram.svg?component'

export default {
  components: {
    BaseButton,
    LogoDark,
    LogoLight,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
  },
}
</script>
