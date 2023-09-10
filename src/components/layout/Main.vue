<template>
	<main v-for="notification in props.notificationList" class="p-3 flex flex-col gap-2">
		<Notification :user="notification"/>
	</main>
</template>

<script setup lang="ts">
import Notification from "../notifications/Notification.vue";
import { INotification } from "../../models/INotification";

// Main list of notifications
const props = defineProps<{notificationList: INotification[]}>();

</script>
