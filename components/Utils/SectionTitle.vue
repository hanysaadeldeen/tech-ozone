<template>
    <div
        class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
        <div class="glassy  boxShadow
        border broder-[#0928920A] rounded-full  text-lg font-medium py-2 px-8 md:py-4 md:px-12"
            :class="isWhite ? 'text-white' : 'text-Secondary'">
            {{ btnText }}
        </div>
        <h1 class=" text-xl md:text-2xl lg:text-3xl font-semibold text-center"
            :class="isWhite ? 'text-white' : 'text-TextD'">{{ description }}</h1>
    </div>
</template>

<script setup lang="ts">


defineProps<{
    btnText: string
    description: string
    isWhite?: boolean
}>()
</script>

<style scoped></style>