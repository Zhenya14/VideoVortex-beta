  const messageNotification = document.getElementById("message-ai");
  const notificationAI = document.getElementById("notification-ai-modal");
                  
function showNotificationAIModal() {
  notificationAI.style.display = "flex";
}
function closeNotificationAIModal() {
  notificationAI.style.display = "none";
}
async function generateDescription() {
  const textTitle = document.getElementById("video-title");
  const description = document.getElementById("video-description");
  const language =
        document.getElementById("language-select").value;
  const text = textTitle.value?.trim();

  if (!text) {
      showNotificationAIModal();
    messageNotification.innerHTML = "Введи назву.";
    return;
  }

 description.value = "⏳ Генерується...";

  let response;

  try {
    response = await fetch(
      "https://us-central1-videovortex-235cd.cloudfunctions.net/generateDescription",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          text,
          language
          
        }),
      }
    );
  } catch (networkError) {
    console.error("NETWORK ERROR:", networkError);
    description.value = "❌ Network error (CORS / function down)";
    return;
  }

  // 🔴 якщо HTTP помилка (400/500)
  const raw = await response.text();

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("NON-JSON RESPONSE:", raw);
    description.value = "❌ Invalid server response";
    return;
  }

  if (!response.ok) {
    console.error("SERVER ERROR:", data);
    description.value = "❌ Server error: " + (data.error || raw);
    return;
  }

  if (!data?.result) {
    console.error("BAD RESPONSE:", data);
    textarea.value = "❌ Empty AI response";
    return;
  }

  description.value = data.result;
}

function randomGradient() {

const gradients = [

/* Сині — темні, контрастні */
"linear-gradient(135deg,#0f2027,#2c5364,#00c9ff)",
"linear-gradient(135deg,#141e30,#243b55)",
"linear-gradient(135deg,#1e3c72,#2a5298)",

/* Червоні — глибокі (краще читається білий текст) */
"linear-gradient(135deg,#200122,#6f0000)",
"linear-gradient(135deg,#8e0e00,#1f1c18)",
"linear-gradient(135deg,#cb2d3e,#0f0f0f)",

/* Помаранчеві — затемнені */
"linear-gradient(135deg,#e65c00,#1a1a1a)",
"linear-gradient(135deg,#ff512f,#dd2476,#1a1a1a)",
"linear-gradient(135deg,#2c3e50,#fd746c)",

/* Жовто-золоті — з темною базою */
"linear-gradient(135deg,#1a1a1a,#f7971e,#ffd200)",
"linear-gradient(135deg,#2b2b2b,#f9d423)",
"linear-gradient(135deg,#000000,#b79891,#94716b)",

/* Зелені — темні tech-style */
"linear-gradient(135deg,#0f9b0f,#000000)",
"linear-gradient(135deg,#134e5e,#71b280)",
"linear-gradient(135deg,#1c1c1c,#00c853)",

/* Фіолетові — premium/dark */
"linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
"linear-gradient(135deg,#1b1b2f,#53354a,#903749)",
"linear-gradient(135deg,#4a00e0,#8e2de2,#0f0f0f)",

/* Рожеві — але затемнені (не “цукеркові”) */
"linear-gradient(135deg,#20002c,#cbb4d4)",
"linear-gradient(135deg,#0f0f0f,#ff0844,#ffb199)",
"linear-gradient(135deg,#4b134f,#c94b4b)",

/* Бірюзові / tech */
"linear-gradient(135deg,#000000,#0f9b0f,#00c9ff)",
"linear-gradient(135deg,#1d4350,#243b55,#a43931)",
"linear-gradient(135deg,#0f2027,#203a43,#2c5364)",

/* Темні (найкраща читабельність білого тексту) */
"linear-gradient(135deg,#000000,#434343)",
"linear-gradient(135deg,#141414,#1f1f1f,#3a3a3a)",
"linear-gradient(135deg,#0a0a0a,#2c2c2c)",

];

return gradients[Math.floor(Math.random()*gradients.length)];

}
function march8Banner() {
    const d = new Date();

    if (!(d.getDate() === 8 && d.getMonth() === 2)) return;
    if (localStorage.getItem("march8banner")) return;

    const banner = document.getElementById("march8-banner");

    if (!banner) return;

    setTimeout(() => {
        banner.classList.add("show");
    }, 1500);

    localStorage.setItem("march8banner", "shown");

    const closeBtn = document.getElementById("march8-close");

    if (closeBtn) {
        closeBtn.onclick = () => {
            banner.classList.remove("show");
        };
    }

    const uploadBtn = document.getElementById("march8-upload");

    if (uploadBtn) {
        uploadBtn.onclick = () => {
            const modal = document.getElementById("upload-modal");

            if (modal) modal.style.display = "flex";
        };
    }
}

march8Banner();

function flowersEffect() {
    const d = new Date();

    if (!(d.getDate() === 8 && d.getMonth() === 2)) return;

    const container = document.getElementById("flowers-container");

    if (!container) return;

    const interval = setInterval(() => {

        const flower = document.createElement("div");

        flower.className = "flower";
        flower.textContent = "🌸";

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 8000);

    }, 300);

    setTimeout(() => {
        clearInterval(interval);
    }, 20000);
}

flowersEffect();

function easterBanner() {
    const d = new Date();

    if (!(d.getDate() === 8 && d.getMonth() === 2)) return;
    if (localStorage.getItem("easterBanner")) return;

    const banner = document.getElementById("easter-banner");

    if (!banner) return;

    setTimeout(() => {
        banner.classList.add("show");
    }, 1500);

    localStorage.setItem("easterBanner", "shown");

    const closeBtn = document.getElementById("easter-close");

    if (closeBtn) {
        closeBtn.onclick = () => {
            banner.classList.remove("show");
        };
    }

    const uploadBtn = document.getElementById("easter-upload");

    if (uploadBtn) {
        uploadBtn.onclick = () => {
            const modal = document.getElementById("upload-modal");

            if (modal) modal.style.display = "flex";
        };
    }
}

easterBanner();

function sEffect() {
    const d = new Date();

    if (!(d.getDate() === 12 && d.getMonth() === 3)) return;

    const container = document.getElementById("easter-container");

    if (!container) return;

    const interval = setInterval(() => {

        const effect = document.createElement("div");

        effect.className = "effect";
        effect.textContent = "🌸🐣";

        effect.style.left = Math.random() * 100 + "vw";
        effect.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        container.appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 8000);

    }, 300);

    setTimeout(() => {
        clearInterval(interval);
    }, 20000);
}

flowersEffect();


function isNewVersion(current, saved) {

    const currentParts =
        current.split(".").map(Number);

    const savedParts =
        saved.split(".").map(Number);

    for (
        let i = 0;
        i < Math.max(currentParts.length, savedParts.length);
        i++
    ) {

        const c = currentParts[i] || 0;
        const s = savedParts[i] || 0;

        if (c > s) return true;
        if (c < s) return false;
    }

    return false;
}

function checkUpdateButton() {

    const lastVersion =
        localStorage.getItem("lastUpdateVersion") || "0.0.0";

    const updateBtn =
        document.getElementById("update-app-btn");

    if (!updateBtn) return;

    if (isNewVersion(APP_VERSION, lastVersion)) {

        updateBtn.style.display = "block";

    } else {

        updateBtn.style.display = "none";
    }
}

function updateMenuPosition() {

    const updateBtn =
        document.getElementById("update-app-btn");

    const smartMenu =
        document.querySelector(".smart-menu");

    const bgGlass =
        document.querySelector(".bg-liquid-glass");

    const btnGlass =
        document.getElementById("plus-button");

    if (
        !updateBtn ||
        !btnGlass ||
        !smartMenu ||
        !bgGlass
    ) return;

    if (updateBtn.style.display !== "none") {

        smartMenu.style.bottom = "30px";
        bgGlass.style.bottom = "30px";
        btnGlass.style.bottom = "60px";

    } else {

        smartMenu.style.bottom = "10px";
        bgGlass.style.bottom = "10px";
        btnGlass.style.bottom = "20px";
    }
}

window.addEventListener("DOMContentLoaded", () => {

    checkUpdateButton();

    updateMenuPosition();
});

function showUpdateButton() {

    const btn =
        document.getElementById("update-app-btn");

    if (!btn) return;

    btn.style.display = "block";

    updateMenuPosition();
}

function hideUpdateButton() {

    const btn =
        document.getElementById("update-app-btn");

    if (!btn) return;

    btn.style.display = "none";

    updateMenuPosition();
}

document
    .getElementById("update-app-btn")
    ?.addEventListener("click", () => {

        clearLocalStorageExceptAuth();

        localStorage.setItem(
            "lastUpdateAt",
            new Date().toISOString()
        );

        localStorage.setItem(
            "lastUpdateVersion",
            APP_VERSION
        );

        hideUpdateButton();

        location.reload();
    });