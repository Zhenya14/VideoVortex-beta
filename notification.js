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