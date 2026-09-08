import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";

const TASK_NOTIFICATION_BASE = 100000000;

function getTaskNotificationId(taskId) {
  const cleanId = String(taskId)
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(-8);

  let hash = 0;

  for (let i = 0; i < cleanId.length; i++) {
    hash = (hash * 31 + cleanId.charCodeAt(i)) % 90000000;
  }

  return TASK_NOTIFICATION_BASE + hash;
}

export async function requestNotificationPermission() {
  if (!Capacitor.isNativePlatform()) {
    return false;
  }

  const permissions = await LocalNotifications.checkPermissions();

  if (permissions.display === "granted") {
    return true;
  }

  const result = await LocalNotifications.requestPermissions();

  return result.display === "granted";
}

export async function scheduleTaskNotification(task) {
  if (!Capacitor.isNativePlatform()) {
    return;
  }

  if (!task?._id || !task?.dueDate || !task?.reminderTime) {
    return;
  }

  if (task.completed) {
    await cancelTaskNotification(task._id);
    return;
  }

  const granted = await requestNotificationPermission();

  if (!granted) {
    console.warn("Life OS notification permission was not granted.");
    return;
  }

  const date = new Date(task.dueDate);

  const [hours, minutes] = task.reminderTime
    .split(":")
    .map(Number);

  date.setHours(hours, minutes, 0, 0);

  if (date.getTime() <= Date.now()) {
    console.log("Task reminder time has already passed.");
    return;
  }

  const notificationId = getTaskNotificationId(task._id);

  await LocalNotifications.cancel({
    notifications: [{ id: notificationId }],
  });

  await LocalNotifications.schedule({
    notifications: [
      {
        id: notificationId,
        title: "🌼 Life OS Reminder",
        body: `⏰ ${task.title}`,
        schedule: {
          at: date,
        },
        sound: "default",
        extra: {
          type: "task",
          taskId: task._id,
        },
      },
    ],
  });

  console.log(
    `🔔 Task notification scheduled for ${date.toLocaleString()}`
  );
}

export async function cancelTaskNotification(taskId) {
  if (!Capacitor.isNativePlatform() || !taskId) {
    return;
  }

  const notificationId = getTaskNotificationId(taskId);

  await LocalNotifications.cancel({
    notifications: [{ id: notificationId }],
  });
}
