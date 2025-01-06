<template>
  <button
    class="font-semibold"
    :class="
      variant === 'secondary'
        ? 'text-white underline underline-offset-8 decoration-green decoration-[3px] hover:text-green'
        : 'py-3 px-8 bg-green text-purple-900 hover:text-green hover:bg-transparent hover:border-2 hover:border-green hover:py-2.5 hover:px-[1.875rem]'
    "
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant?: 'primary' | 'secondary'
}

defineProps<Props>()
</script>
<script lang="ts">
export default {
  name: 'BaseButton',
}
</script>
