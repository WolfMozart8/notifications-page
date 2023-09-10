<template>
    <header class="flex justify-between font-extrabold p-4">
        <div class="text-xl">Notifications <span class="bg-Blue text-White py-1 px-3 rounded-lg ml-2 select-none">{{ props.unreadMessages }}</span>
        </div>

        <button @click="$emit('mark-all-as-read')" class="text-Dark-grayish-blue font-medium hover:text-Blue">Mark all as read</button>
    </header>
</template>

<script setup lang="ts">


const props = defineProps<{unreadMessages: number}>();
// const emit = defineEmits(['mark-all-as-read']);

// const buttonClickEmit (): void {
//     emit('')
// }



</script>
