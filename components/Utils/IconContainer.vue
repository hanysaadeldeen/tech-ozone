<template>
    <div class="rounded-2xl  p-3 flex justify-center items-center w-fit" :style="{ backgroundColor: background }">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{ background: string }>()
</script>

<style scoped></style>