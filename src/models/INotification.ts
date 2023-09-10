import { INTERACTION } from "./INTERACTION";

export interface INotification {
    avatarUrl: string;
    name: string;
    interaction: INTERACTION;
    interactionTarget?: string;
    interactionTargetUrl?: string;
    interactionImgUrl?: string;
    message?: string;
    timeAgo: string;
    read: boolean;
}
