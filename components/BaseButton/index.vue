<template>
  <button
    class="font-semibold py-3 px-8"
    :class="
      variant === 'secondary'
        ? '!p-0 text-white underline underline-offset-8 decoration-green decoration-[3px] hover:text-green'
        : 'bg-green text-purple-900 hover:text-green hover:bg-transparent hover:border-2 hover:border-green hover:py-2.5 hover:px-[1.875rem]'
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
