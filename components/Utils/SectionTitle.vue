<template>
    <div class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-6 lg:gap-8">
        <div class="glassy  boxShadow
        
        border broder-[#0928920A] rounded-full text-Secondary text-lg font-medium py-4 px-12">
            {{ btnText }}
        </div>
        <h1 class="text-TextD text-xl md:text-2xl lg:text-3xl font-semibold text-center">{{ description }}</h1>
    </div>
</template>

<script setup lang="ts">


defineProps<{
    btnText: string
    description: string
}>()
</script>

<style scoped></style>