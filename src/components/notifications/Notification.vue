<template>
    <!-- main notification div, if is unread add a background -->
    <div :class="{ 'bg-Very-light-grayish-blue dark:bg-dark-notification': !props.user.read }" class="flex gap-2 p-4 ">
        <!-- avatar -->
        <img class="w-10 h-10" :src="`./images/${props.user.avatarUrl}.webp`" alt="avatar">
        <!-- text div -->
        <div class="flex-1">
            <p class="text-Grayish-blue font-medium">
                <!-- name -->
                <a class="mr-[0.5ch] font-extrabold text-Very-dark-blue dark:text-White hover:text-Blue dark:hover:text-Blue"
                    href="#">{{ props.user.name }}</a>
                <!-- interaction message -->
                {{ props.user.interaction }}
                <!-- add a url if available, also if (real) link is available is added to href -->
                <a v-if="props.user.interactionTarget" :href="props.user.interactionTargetUrl ? props.user.interactionTargetUrl : '#'"
                    class="ml-[0.5ch] text-Dark-grayish-blue font-extrabold hover:text-Blue">{{ props.user.interactionTarget }}</a>
                <!-- add red dot if is unread -->
                <span v-if="!props.user.read" class="w-3 h-3 bg-Red inline-block rounded-full ml-2"
                    aria-hidden="true"></span>
            </p>
            <!-- time ago -->
            <p class="text-Grayish-blue">{{ props.user.timeAgo }} ago</p>
            <!-- message if available -->
            <article v-if="props.user.message"
                class="border-Light-grayish-blue-2 border-[1px] p-4 mt-4 text-Dark-grayish-blue hover:bg-Light-grayish-blue-2">
                {{ props.user.message }}
            </article>
        </div>
        <!-- image link if available -->
        <a href="#" v-if="props.user.interactionImgUrl">
            <img class="w-10 h-10 " :src="`./images/${props.user.interactionImgUrl}.webp`" :alt="props.user.interactionImgUrl">
        </a>
    </div>
</template>

<script setup lang="ts">

import { INotification } from '../../models/INotification';

// Receive a INotification as props
const props = defineProps<{ user: INotification }>();


</script>
