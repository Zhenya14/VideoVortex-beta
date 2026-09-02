
const APP_VERSION = "7.1.0";

function clearLocalStorageExceptAuth() {
    const keepPrefixes = [
        "firebase:authUser:",
        "firebase:authEvent:",
        "firebase:previous_websocket_failure",
        "firebase:heartbeat"
    ];

    Object.keys(localStorage).forEach(key => {
        const keep = keepPrefixes.some(prefix => key.startsWith(prefix));

        if (!keep) {
            localStorage.removeItem(key);
        }
    });
}