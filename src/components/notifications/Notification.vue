<template>
    <div :class="{ 'bg-Very-light-grayish-blue dark:bg-dark-notification': !props.user.read }" class="flex gap-2 p-4 ">
        <img class="w-10 h-10" :src="`/src/assets/images/${props.user.avatarUrl}.webp`" alt="avatar">
        <div class="flex-1">

            <p class="text-Grayish-blue font-medium">
                <a class="font-extrabold text-Very-dark-blue dark:text-White hover:text-Blue dark:hover:text-Blue"
                    href="#">{{ props.user.name }}</a>
                {{ props.user.interaction }}
                <a v-if="props.user.interactionTarget" href="#"
                    class="text-Dark-grayish-blue font-extrabold hover:text-Blue">{{ props.user.interactionTarget }}</a>
                <span v-if="!props.user.read" class="w-3 h-3 bg-Red inline-block rounded-full ml-2"
                    aria-hidden="true"></span>
            </p>
            <p class="text-Grayish-blue">{{ props.user.timeAgo }} ago</p>
            <article v-if="props.user.message"
                class="border-Light-grayish-blue-2 border-[1px] p-4 mt-4 text-Dark-grayish-blue hover:bg-Light-grayish-blue-2">
                {{ props.user.message }}
            </article>
        </div>
        <a href="#" v-if="props.user.interactionImgUrl">
            <img class="w-10 h-10 " :src="`/src/assets/images/${props.user.interactionImgUrl}.webp`" :alt="props.user.interactionImgUrl">
        </a>
    </div>
</template>

<script setup lang="ts">

import { INotification } from '../../models/INotification';

// const props = defineProps<INotification>();
const props = defineProps<{ user: INotification }>();


</script>
