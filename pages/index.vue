<template>
  <div class="w-screen overflow-x-clip">
    <div class="bg-purple-100">
      <div
        class="z-00 bg-purple-900 rounded-t-none rounded-b-[50%] relative w-[175%] -left-[37%]"
      >
        <div
          class="z-0 flex flex-col items-center justify-items-center lg:pb-96 md:pb-48 pb-40 pt-14"
        >
          <h1 class="text-center">
            <span class="font-serif text-white lg:text-7xl text-5xl">Data</span>
            <span
              class="inline-block font-serif lg:ml-3 ml-2 text-white lg:text-7xl text-5xl underline decoration-green decoration-2 underline-offset-8"
            >
              tailored
            </span>
            <span class="font-serif text-white lg:text-7xl text-5xl">
              to
              <br />
              your needs.
            </span>
          </h1>
          <BaseButton variant="primary" class="mt-10">Learn more</BaseButton>
          <img
            src="~/assets/images/image-hero.webp"
            alt="hero image"
            class="absolute lg:h-[441px] md:h-72 h-48 lg:top-96 top-80 z-30"
          />
          <BgPattern1
            class="absolute md:block hidden lg:top[4rem] lg:left-[24rem] top-0 left-[4.25rem]"
          />
          <BgPattern2
            class="absolute md:block hidden lg:bottom-[15rem] lg:right-[30.5rem] bottom-16 right-48"
          />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center z-0 bg-purple-100 rounded-t-none rounded-b-[50%] relative w-[175%] -left-[37%]"
    >
      <TeaserList class="w-screen" />
    </div>
    <PictureCard />
  </div>
</template>

<script lang="ts">
import TeaserList from '~/components/TeaserList/index.vue'
import PictureCard from '~/components/PictureCard/index.vue'
import BgPattern1 from 'assets/images/bg-pattern-1.svg?component'
import BgPattern2 from 'assets/images/bg-pattern-2.svg?component'

export default {
  name: 'HomePage',
  components: {
    PictureCard,
    TeaserList,
    BgPattern1,
    BgPattern2,
  },
}
</script>
