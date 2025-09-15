<template>
    <div
        class="question boxShadow bg-white rounded-xl   px-6 py-6 md:px-10  lg:py-8 w-full flex flex-col gap-4 mt-6 md:mt-8 lg:mt-10">
        <div class="flex justify-between items-center gap-2 ">
            <p class="md:text-base lg:text-lg font-medium text-TextD">
                {{ $t(question) }}
            </p>
            <i class="fa-solid fa-chevron-down cursor-pointer text-TextMD text-xl" v-if="!toggleQuestion"
                @click="toggleQuestion = !toggleQuestion"></i>
            <i class="fa-solid fa-chevron-up cursor-pointer text-TextMD text-xl" v-if="toggleQuestion"
                @click="toggleQuestion = !toggleQuestion"></i>
        </div>
        <span class="text-TextMD text-sm md:text-base font-normal" v-if="toggleQuestion">
            {{ $t(answer) }}
        </span>
    </div>
</template>

<script setup lang="ts">

interface Props {
    id: number;
    question: string,
    answer: string,
    toggle: boolean
}

const props = defineProps<Props>();
const toggleQuestion = ref<boolean>(props.toggle);

</script>

<style scoped></style>