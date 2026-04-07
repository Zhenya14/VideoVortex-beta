// =======================
// PERMISSION
// =======================
function canNotify() {
    return Notification.permission === "granted";
}

async function requestNotifyPermission() {
    if (Notification.permission === "default") {
        return await Notification.requestPermission();
    }
    return Notification.permission;
}

// =======================
// SHOW NOTIFICATION
// =======================
function showNotification(title, body) {
    if (!canNotify()) return;

    new Notification(title, {
        body: body,
        icon: "/VideoVortex_logo.ico"
    });
}

// =======================
// REAL-TIME LISTENER
// =======================
function startCommentNotifications() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    database.ref("comments")
        .on("child_added", (snap) => {
            const c = snap.val();

            if (!firebase.auth().currentUser) return;

            // тільки власнику відео
            if (c.videoOwner !== firebase.auth().currentUser.email) return;

            // не показувати власні коментарі
            if (c.email === firebase.auth().currentUser.email) return;

            showNotification(
                "Новий коментар 💬",
                `${c.commentAuthor}: ${c.comment}`
            );
        });
}
// ================= FCM INIT =================
const messaging = firebase.messaging();

async function initPush() {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    const token = await messaging.getToken({
      vapidKey: "ТУТ_VAPID_KEY"
    });

    console.log("TOKEN:", token);

    const user = firebase.auth().currentUser;
    if (user) {
      await database.ref("users/" + user.uid).update({
        fcmToken: token
      });
    }

  } catch (e) {
    console.error(e);
  }
}

// ================= SEND PUSH =================
async function sendPush(token, title, body) {
  await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key=SERVER_KEY"
    },
    body: JSON.stringify({
      to: token,
      notification: {
        title: title,
        body: body
      }
    })
  });
}