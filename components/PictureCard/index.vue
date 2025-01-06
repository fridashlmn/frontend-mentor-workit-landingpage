<template>
  <div
    class="flex md:flex-row flex-col md:items-end items-center justify-between pt-28 lg:px-40 md:px-11 px-5"
  >
    <img
      src="~/assets/images/image-founder.webp"
      class="lg:w-1/3 w-72 lg:mb-24 lg:-mr-16 md:mb-[19.5rem] md:-mr-24 -mb-12"
    />
    <div
      class="bg-purple-900 lg:max-w-fit md:max-w-[31.5rem] w-full h-min relative lg:p-16 md:p-12 p-8 md:text-left text-center"
    >
      <h2 class="md:text-5xl text-3xl text-white tracking-wide">
        Be the first to test
      </h2>
      <p class="text-white text-base py-8">
        Hi, I'm Louis Graham, the founder of the company. Book a demo call with
        me to become a beta tester for our app and kickstart your company. Apply
        for access below and I’ll be in touch to schedule a call.
      </p>
      <BaseButton>Apply for access</BaseButton>
      <BgPattern3
        class="md:absolute md:block hidden lg:-bottom-14 lg:right-40 md:-bottom-24 md:right-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '~/components/BaseButton/index.vue'
import BgPattern3 from 'assets/images/bg-pattern-3.svg?component'

export default {
  name: 'PictureCard',
  components: {
    BaseButton,
    BgPattern3,
  },
}
</script>
