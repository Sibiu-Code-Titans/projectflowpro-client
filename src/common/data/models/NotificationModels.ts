export interface NotificationModel {
  detail: string;
  severity: "info" | "success" | "warn" | "error";
  summary: string;
}
