<template>
	<main v-for="notification in props.notificationList" class="p-3 flex flex-col gap-2">
		<Notification :user="notification"/>
	</main>
</template>

<script setup lang="ts">
// import { INotification } from "../../models/INotification.ts";
// import { INTERACTION } from "../../models/INTERACTION";

import Notification from "../notifications/Notification.vue";
import { INotification } from "../../models/INotification";

// const unreadMessages: number = notificationList.filter((noti) => {
// 	typeof noti.read === "boolean" && !noti.read
// }).length;
const props = defineProps<{notificationList: INotification[]}>();
// const props = defineProps<{totalUnread: unreadMessages}>;

// const noti: INotification = {
// 	name: "Julop asd",
// 	read: false,
// 	avatarUrl: "/src/assets/images/avatar-jacob-thompson.webp",
// 	interaction: INTERACTION.RECENT_POST_REACTION,
// 	timeAgo: 4

// }
</script>
