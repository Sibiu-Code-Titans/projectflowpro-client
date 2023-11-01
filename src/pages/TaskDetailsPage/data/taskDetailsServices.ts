import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import supabase from "../../../common/data/config/supabaseClient";
import { NotificationReducerActions } from "../../../common/data/reducers/notificationReducer/notificationActions";
import { TaskDetailsNavbarDto } from "./models/TaskDetailsModels";

export const getTaskDetailsNavbarData = async (
  taskId: string | undefined,
  { dispatch }: { dispatch: Dispatch<AnyAction> },
) => {
  const { data, error } = await supabase
    .from("task_details")
    .select("title")
    .eq("id", taskId)
    .single();

  if (error) {
    console.log(error);

    dispatch(
      NotificationReducerActions.setNotification({
        detail: "Getting task details data has failed.",
        severity: "error",
        summary: "Details failed!",
      }),
    );

    return { error };
  }

  const responseData = data as TaskDetailsNavbarDto;

  return { data: responseData };
};

export const getTaskDetailsInfoBarData = async (
  taskId: string | undefined,
  { dispatch }: { dispatch: Dispatch<AnyAction> },
) => {
  const { data, error } = await supabase
    .from("task_details")
    .select("created_at, last_update, end_date, progress")
    .eq("id", taskId)
    .single();

  if (error) {
    console.log(error);

    dispatch(
      NotificationReducerActions.setNotification({
        detail: "Getting task details data has failed.",
        severity: "error",
        summary: "Details failed!",
      }),
    );

    return { error };
  }

  const responseData = data;

  return { data: responseData };
};
