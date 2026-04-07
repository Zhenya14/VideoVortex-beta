// =======================
// INIT FCM
// =======================
const messaging = firebase.messaging();

async function initPush() {
    try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") return;

        const token = await messaging.getToken({
            vapidKey: "BFkinse0q7x94PIX608Y9QsATJ0Ht2S-k6TeOpSFdB0sXIRLyxf1wKHTboOUHJY5tQB8wGMyMcoEQEV5fDu4sS4"
        });

        console.log("FCM TOKEN:", token);

        const user = firebase.auth().currentUser;

        if (user && token) {
            await database.ref("users/" + user.uid).update({
                fcmToken: token
            });
        }

    } catch (e) {
        console.error("initPush error:", e);
    }
}