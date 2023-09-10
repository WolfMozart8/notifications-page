<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Ref } from 'vue';
import Header from './components/layout/Header.vue';
import Main from './components/layout/Main.vue';
import { notificationList } from './components/notifications/Notifications_list';
import { INotification } from './models/INotification';
import { INTERACTION } from './models/INTERACTION';

const notifications: Ref<INotification[]> = ref(notificationList);

// const unreadNotifications: Ref<number> = ref();
const unreadNotifications = computed(() => {
  return notifications.value.filter((noti) =>
    typeof noti.read === "boolean" && !noti.read
  ).length
})


// watch(unreadNotifications, (newCount: number) => {
//   unreadNotifications.value = newCount
//   console.log(newCount)
// })

const markAllAsRead = (): void => {

  notifications.value = notifications.value.map((noti: INotification) => {
    const temporalNoti = { ...noti };

    temporalNoti.read = true
    return temporalNoti;
  });
}

onMounted(() => {
  setTimeout(() => {
    notifications.value = [
      {
        name: "Hello",
        avatarUrl: "avatar-jacob-thompson",
        interaction: INTERACTION.JOINED_YOUR_GROUP,
        interactionTarget: "Chess Club",
        read: false,
        timeAgo: "1 minute",
      },
      ...notifications.value
    ]
  }, 5000)
})



</script>

<template>
  <Header :unread-messages="unreadNotifications" @mark-all-as-read="markAllAsRead"></Header>
  <Main :notification-list="notifications"></Main>
</template>
