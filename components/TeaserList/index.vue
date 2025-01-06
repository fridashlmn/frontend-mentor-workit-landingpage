<template>
  <ul
    class="flex lg:flex-row flex-col lg:px-40 md:px-11 px-5 md:pt-52 pt-32 pb-16"
  >
    <li
      v-for="item in listItems"
      :key="item.number"
      class="flex lg:flex-col md:flex-row flex-col items-center lg:pr-8 last:pr-0 pb-8"
    >
      <div
        class="flex items-center justify-center font-serif text-2xl aspect-square lg:mb-14 md:mb-0 mb-6 lg:mr-0 md:mr-14 w-14 h-14 md:w-12 md:h-12 border-2 border-b-purple-900 rounded-full"
      >
        {{ item.number }}
      </div>
      <div>
        <h3 class="text-3xl lg:text-center md:text-left text-center">
          {{ item.title }}
        </h3>
        <p
          class="lg:text-center md:text-left text-center text-base lg:pt-7 md:pt-7 pt-4"
        >
          {{ item.content }}
        </p>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
const listItems = [
  {
    number: 1,
    title: 'Actionable insights',
    content:
      'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
  },
  {
    number: 2,
    title: 'Data-driven decisions',
    content:
      'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
  },
  {
    number: 3,
    title: 'Always affordable',
    content:
      'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
  },
]
</script>
<script lang="ts">
export default {
  name: 'TeaserList',
}
</script>
