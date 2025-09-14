<template>
    <section class="DownloadCenter max-2xl:px-6">

        <div
            class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
            <h1 class=" text-xl md:text-2xl lg:text-3xl text-TextD font-semibold text-center">
                نماذج من أعمالنا في القطاع الصحي
            </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div class="boxShadow rounded-3xl group overflow-hidden cursor-pointer" v-for="value in 6">
                <img src="~/assets/img/Sectors/Work1.svg" alt="Work1" width="376" height="376"
                    class="w-full h-full brightness-75 group-hover:brightness-100 transition-all ease-in-out duration-300 rounded-3xl group-hover:scale-110" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>