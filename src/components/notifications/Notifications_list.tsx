import { INTERACTION } from "../../models/INTERACTION";
import { INotification } from "../../models/INotification";
export const notificationList: INotification[] = [
  {
    name: "Mark Webber",
    avatarUrl: "avatar-mark-webber",
    interaction: INTERACTION.RECENT_POST_REACTION,
    interactionTarget: "My first tournament today!",
    read: false,
    timeAgo: "1 minute",
  },
  {
    name: "Angela Gray",
    avatarUrl: "avatar-angela-gray",
    interaction: INTERACTION.FOLLOWED_YOU,
    read: false,
    timeAgo: "5 minutes",
  },
  {
    name: "Jacob Thompson",
    avatarUrl: "avatar-jacob-thompson",
    interaction: INTERACTION.JOINED_YOUR_GROUP,
    interactionTarget: "Chess Club",
    read: false,
    timeAgo: "5 minutes",
  },
  {
    name: "Rizky Hasanuddin",
    avatarUrl: "avatar-rizky-hasanuddin",
    interaction: INTERACTION.SENT_YOU_PM,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: true,
    timeAgo: "5 minutes",
  },
  {
    name: "Kimberly Smith",
    avatarUrl: "avatar-kimberly-smith",
    interaction: INTERACTION.COMMENTED_ON_YOUR_PICTURE,
    interactionImgUrl: "image-chess",
    read: true,
    timeAgo: "1 day",
  },
  {
    name: "Nathan Peterson",
    avatarUrl: "avatar-nathan-peterson",
    interaction: INTERACTION.RECENT_POST_REACTION,
    interactionTarget: "5 end-game strategies to increase your win rate",
    read: true,
    timeAgo: "2 days",
  },
  {
    name: "Anna Kim",
    avatarUrl: "avatar-anna-kim",
    interaction: INTERACTION.LEFT_THE_GROUP,
    interactionTarget: "Chess Club",
    read: true,
    timeAgo: " 2 weeks",
  },
];
