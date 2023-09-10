<template>
  <Header :unread-messages="unreadNotifications" @mark-all-as-read="markAllAsRead"></Header>
  <Main :notification-list="notifications"></Main>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Ref } from 'vue';


import Header from './components/layout/Header.vue';
import Main from './components/layout/Main.vue';
import { notificationList } from './components/notifications/Notifications_list';
import { INotification } from './models/INotification';
import { INTERACTION } from './models/INTERACTION';

const notifications: Ref<INotification[]> = ref(notificationList);

const unreadNotifications = computed(() => {
  return notifications.value.filter((noti) =>
    typeof noti.read === "boolean" && !noti.read
  ).length
})

// turns all read = false to true (i.e unread notifications to 0)
const markAllAsRead = (): void => {

  notifications.value = notifications.value.map((noti: INotification) => {
    const temporalNoti = { ...noti };

    temporalNoti.read = true
    return temporalNoti;
  });
}

// Add new notifications
onMounted(() => {
  setTimeout(() => {
    notifications.value = [
      {
        name: "Jacob Thompson",
        avatarUrl: "avatar-jacob-thompson",
        interaction: INTERACTION.FOLLOWED_YOU,
        interactionTarget: "Frontend Mentor Profile",
        interactionTargetUrl: "https://www.frontendmentor.io/profile/WolfMozart8",
        read: false,
        timeAgo: "1 minute",
      },
      ...notifications.value
    ]
  }, 8000)

  setTimeout(() => {
    notifications.value = [
      {
        name: "Anna Kim",
        avatarUrl: "avatar-anna-kim",
        interaction: INTERACTION.FOLLOWED_YOU,
        interactionTarget: "Frontend Mentor Profile",
        interactionTargetUrl: "https://www.frontendmentor.io/profile/WolfMozart8",
        read: false,
        timeAgo: "1 minute",
      },
      ...notifications.value
    ]
  }, 16000)
  setTimeout(() => {
    notifications.value = [
      {
        name: "Nathan Peterson",
        avatarUrl: "avatar-nathan-peterson",
        interaction: INTERACTION.SENT_YOU_PM,
        message: "Hi! \n I had a look at your FrontendMentor projects, and I'm genuinely impressed! Your attention to detail and ability to create beautiful, functional web interfaces shine through. Keep up the great work, and I look forward to seeing more of your projects! \n Best regards,",
        read: false,
        timeAgo: "1 minute",
      },
      ...notifications.value
    ]
  }, 24000)
})
</script>
