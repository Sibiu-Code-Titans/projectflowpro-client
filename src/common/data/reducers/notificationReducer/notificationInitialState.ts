import { NotificationModel } from "../../models/NotificationModels";

export interface NotificationInitialStateInterface {
  notificationData: NotificationModel | undefined;
}

export const NotificationReducerInitialState: Readonly<NotificationInitialStateInterface> =
  {
    notificationData: undefined,
  };
