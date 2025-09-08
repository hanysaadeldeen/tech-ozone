<template>
    <div class="rounded-2xl  py-3 flex justify-center items-center" :style={ backgroundColor: background }>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{ background: string }>()
</script>

<style scoped></style>