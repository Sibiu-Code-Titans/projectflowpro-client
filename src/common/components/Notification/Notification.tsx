import { Toast } from "primereact/toast";
import { memo, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { NotificationModel } from "../../data/models/NotificationModels";
import { NotificationReducerActions } from "../../data/reducers/notificationReducer/notificationActions";

const Notification = () => {
  const dispatch = useDispatch();
  const toast = useRef<Toast>(null);

  const notificationData = useAppSelector<NotificationModel | undefined>(
    (s) => s.notificationReducer.notificationData,
  );

  const showNotification = () => {
    if (!notificationData) return;

    const { detail, severity, summary } = notificationData;

    toast.current?.show({
      severity,
      summary,
      detail,
    });
  };

  const clearNotification = () => {
    if (!notificationData) return;

    dispatch(NotificationReducerActions.clearNotification());
  };

  useEffect(() => {
    showNotification();

    return () => clearNotification();
  }, [notificationData]);

  return useMemo(
    () => (
      <div className="card justify-content-center flex">
        <Toast ref={toast} />
      </div>
    ),
    [],
  );
};

export default memo(Notification);
