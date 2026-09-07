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

let selectedPhotos = [];
let selectedVideos = [];

// Відкрити модалки
openPhotoPicker.onclick = () => document.getElementById("photoModal").style.display = "flex";
openVideoPicker.onclick = () => document.getElementById("videoModal").style.display = "flex";

function closePhotoModal() {
  document.getElementById("photoModal").style.display = "none";
}

function closeVideoModal() {
  document.getElementById("videoModal").style.display = "none";
}

// Кнопки вибору файлів
pickPhotos.onclick = () => photoInput.click();
pickVideos.onclick = () => videoInput.click();

// Фото
photoInput.addEventListener("change", e => {
  for (const file of e.target.files) {
    if (file.type.startsWith("image/")) {
      selectedPhotos.push(file);
    }
  }
  renderPhotoPreviews();
});

// Відео
videoInput.addEventListener("change", e => {
  for (const file of e.target.files) {
    if (file.type.startsWith("video/")) {
      selectedVideos.push(file);
    }
  }
  renderVideoPreviews();
});
let storyBlob = null;
let stream = null;
let cameraActive = false;
let selectedStoryFile = null;

async function openCamera() {
  if (cameraActive) return;
  const bgGlassClose = document.querySelector(".bg-liquid-glass");
  const btnGlassClose = document.querySelector(".btn-liquid-glass");
  const camera = document.getElementById("story-camera");
  const video = document.getElementById("cameraPreview");

  camera.style.display = "block";
  bgGlassClose.style.display = "none";
  btnGlassClose.style.display = "none";

  stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  });

  video.srcObject = stream;
  await video.play();
  cameraActive = true;
}
function captureStop() {
  document.getElementById("story-camera").style.display = "none";
  document.querySelector(".bg-liquid-glass").style.display = "flex";
  document.getElementById("plus-button").style.display = "flex";
}


document.getElementById("galleryInput").addEventListener("change", (e) => {

    const file = e.target.files[0];
    if (!file) return;

    selectedStoryFile = file;
    previewStory(file);

});

let currentStoryFile = null;
let storyPreviewURL = null;
function openGallery() {
    document.getElementById("galleryInput").click();
}

function previewStory(file) {

    const container = document.getElementById("story-camera");
    const preview = document.getElementById("storyPreview");
    const camera = document.getElementById("cameraPreview");

    const bgGlassClose = document.querySelector(".bg-liquid-glass");
    const btnGlassClose = document.getElementById("plus-button");

    // Зберігаємо поточний файл
    currentStoryFile = file;

    // Показуємо вікно Story
    container.style.display = "block";

    if (bgGlassClose) {
        bgGlassClose.style.display = "none";
    }

    if (btnGlassClose) {
        btnGlassClose.style.display = "none";
    }

    // Зупиняємо камеру, якщо вона працювала
    if (camera.srcObject) {
        camera.srcObject.getTracks().forEach(track => track.stop());
        camera.srcObject = null;
    }

    camera.style.display = "none";

    // Очищаємо тільки область прев'ю
    preview.innerHTML = "";

    // Видаляємо старий ObjectURL
    if (storyPreviewURL) {
        URL.revokeObjectURL(storyPreviewURL);
    }

    storyPreviewURL = URL.createObjectURL(file);

    // =========================
    // ФОТО
    // =========================

    if (file.type.startsWith("image/")) {

        const img = document.createElement("img");

        img.src = storyPreviewURL;

        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";

        preview.appendChild(img);
    }

    // =========================
    // ВІДЕО
    // =========================

    else if (file.type.startsWith("video/")) {

        const video = document.createElement("video");

        video.src = storyPreviewURL;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.controls = false;

        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";

        preview.appendChild(video);

        video.play().catch(error => {
            console.error("Не вдалося відтворити відео:", error);
        });
    }

    else {
        console.error("Непідтримуваний тип файлу:", file.type);
        return;
    }

    console.log("Preview ready:", file.name);
}
async function publishStory() {
  const user = firebase.auth().currentUser;
  if (!user || !selectedStoryFile) return;
const uid = user.uid;
  const storyId = Date.now().toString();
  try {
    
    const snapshot = await database.ref("users/" + uid).once("value");
    const userData = snapshot.val() || {};

    let authorName;
    let authorAvatarUrl = null;

      authorName =
        `${userData.name || ""} ${userData.supername || ""}`.trim();

      const mainAvatar = userData.avatarId;

      if (mainAvatar) {
        try {
          authorAvatarUrl =
            await storage.ref(`avatars/${mainAvatar}.webp`).getDownloadURL();
        } catch {}
      }
  // STORAGE
  const ref = firebase.storage()
    .ref(`stories/${storyId}`);

  await ref.put(selectedStoryFile);

  const url = await ref.getDownloadURL();

  // DATABASE
  await firebase.database().ref(`stories/${storyId}`).set({
    uid: uid,
    url: url,
    name: authorName,
    authorColor: userData.color,
    avatar: authorAvatarUrl,
    type: selectedStoryFile.type.startsWith("video") ? "video" : "image",
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000
  });

  selectedStoryFile = null;

  alert("Story опубліковано ✅");
  captureStop();
} catch (err) {
    console.error("Помилка при отриманні даних користувача:", err);
    showNotificationModal();
    message.innerHTML = "Не вдалося отримати дані профілю." + err.message;
  }
}

// Рендер прев’ю фото
function renderPhotoPreviews() {
  const grid = document.getElementById("photoPreviewGrid");
  grid.innerHTML = "";

  selectedPhotos.forEach((file, index) => {
    const url = URL.createObjectURL(file);

    const div = document.createElement("div");
    div.className = "media-item";

    div.innerHTML = `
      <img src="${url}">
      <button class="remove-btn" onclick="removePhoto(${index})">✕</button>
    `;

    grid.appendChild(div);
  });
}

function removePhoto(i) {
  selectedPhotos.splice(i, 1);
  renderPhotoPreviews();
}

// Рендер прев’ю відео
function renderVideoPreviews() {
  const grid = document.getElementById("videoPreviewGrid");
  grid.innerHTML = "";

  selectedVideos.forEach((file, index) => {
    const url = URL.createObjectURL(file);

    const div = document.createElement("div");
    div.className = "media-item";

    div.innerHTML = `
      <video src="${url}" muted></video>
      <button class="remove-btn" onclick="removeVideo(${index})">✕</button>
    `;

    grid.appendChild(div);
  });
}

function removeVideo(i) {
  selectedVideos.splice(i, 1);
  renderVideoPreviews();
}
          const searchBox = document.getElementById("search-box");
const closeSearch = document.getElementById("close-search");
const searchInput = document.getElementById("search-input");

function openSearch() {
    searchBox.classList.add("open");
document.querySelector("nav").style.display = "none";
    setTimeout(() => searchInput.focus(), 150);
}

closeSearch.addEventListener("click", () => {
    searchBox.classList.remove("open");
    document.querySelector("nav").style.display = "flex";
    searchInput.value = "";
    searchAll();
});
async function searchAll() {
    const input = document.getElementById("search-input");
    if (!input) return;

    const query = input.value.toLowerCase().trim();

    // =========================
    // 🔎 ПОШУК ВІДЕО
    // =========================

    const videos = document.querySelectorAll(".video-item");

    videos.forEach(video => {
        const title = (video.dataset.title || "").toLowerCase();
        const description = (video.dataset.description || "").toLowerCase();
        const author = (video.dataset.author || "").toLowerCase();

        const matches =
            !query ||
            title.includes(query) ||
            description.includes(query) ||
            author.includes(query);

        const container = video.closest(".video-container");

        if (container) {
            container.style.display = matches ? "flex" : "none";
        }
    });

    // =========================
    // 👤 ПОШУК КОРИСТУВАЧІВ
    // =========================

    const usersContainer = document.getElementById("search-users");
    if (!usersContainer) return;

    usersContainer.innerHTML = "";

    if (!query) return;

    try {
        const snapshot = await database.ref("publicUsers").once("value");
        const users = snapshot.val() || {};

        Object.entries(users).forEach(([uid, user]) => {

            const name = (user.name || "").toLowerCase();
            const supername = (user.supername || "").toLowerCase();
            const username = (user.username || "").toLowerCase();

            const matches =
                name.includes(query) ||
                supername.includes(query) ||
                username.includes(query);

            if (!matches) return;

            const userElement = document.createElement("div");
            userElement.className = "search-user";

            userElement.innerHTML = `
                <div class="search-user-name">
                    ${sanitizeHTML(user.name || "")}
                    ${sanitizeHTML(user.supername || "")}
                </div>

                ${
                    user.username
                        ? `<div class="search-user-username">
                            @${sanitizeHTML(user.username)}
                           </div>`
                        : ""
                }

                ${
                    user.privateProfile
                        ? `<span>🔒 Приватний профіль</span>`
                        : ""
                }
            `;

            userElement.onclick = () => {
                window.location.href =
                    `profile.html?uid=${encodeURIComponent(uid)}`;
            };

            usersContainer.appendChild(userElement);
        });

    } catch (error) {
        console.error("Помилка пошуку користувачів:", error);
    }
}

     const prewiewInput = document.getElementById("action-btn");     
     const imgPrewiew = document.querySelector(".image-container img");
     prewiewInput.addEventListener('change', () => {
    // Перевіряємо через тернарний оператор, чи файл обрано
    const file = prewiewInput.files.length ? prewiewInput.files[0] : null;
    
    if (file) {
        // Створюємо тимчасовий URL для локального файлу
        const objectURL = URL.createObjectURL(file);
        
        // Замінюємо старе фото на нове у вікні редагування
        imgPrewiew.src = objectURL;
    }
});
        

document.addEventListener("DOMContentLoaded", () => {
    const previewWallpapersProfileInput = document.getElementById("set-wallpaper-profile");
    const imgPreview = document.querySelector(".profile-header");

    if (!previewWallpapersProfileInput || !imgPreview) {
        console.log("Елемент не знайдено");
        return;
    }

    previewWallpapersProfileInput.addEventListener("change", () => {
        const file = previewWallpapersProfileInput.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            imgPreview.style.backgroundImage = `url("${objectURL}")`;
            imgPreview.style.backgroundSize = "cover";
            imgPreview.style.backgroundPosition = "center";
        }
    });
});

        
const fileInput = document.getElementById("photo-file");
const fileName = document.getElementById("file-name");

fileInput.addEventListener("change", () => {
  const name = fileInput.files.length ? fileInput.files[0].name : "Файл не вибрано";
  fileName.textContent = "📸 " + name;
});

        
const videoInput = document.getElementById("video-file");
const videofileName = document.getElementById("video-file-name");

videoInput.addEventListener("change", () => {
  const name = videoInput.files.length ? videoInput.files[0].name : "Файл не вибрано";
  videofileName.textContent = "📽 " + name;
});



function isMobile() {
  return window.innerWidth <= 968;
}

function showTgPopup() {
  if (!localStorage.getItem("tg_popup_seen") && isMobile()) {
    document.getElementById("tg-popup").classList.remove("hidden");
  }
}

function closeTgPopup() {
  document.getElementById("tg-popup").classList.add("hidden");
  localStorage.setItem("tg_popup_seen", "1");
}

window.addEventListener("load", () => {
  setTimeout(showTgPopup, 1500);
});


let logoClickCount = 0;
let logoClickTimer = null;
let EggTimeout = null;
let snowInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const logo = document.getElementById("logo");

  /* ================= HALLOWEEN ================= */
  if (month === 10 && (day === 30 || day === 31)) {
    activateHalloweenMode();
    applyIcons(halloweenIcons);
  }

  if (month === 11 && day === 1) {
    deactivateHalloweenMode();
    restoreIcons();
  }

  /* ================= NEW YEAR ================= */
  const isNewYear =
    (month === 12 && day >= 15) ||
    (month === 1 && day <= 25);

  if (isNewYear) {
    activateGirland();
    activateNewYearMode();
    applyIcons(newyearIcons);

    if (logo && !logo.dataset.Bound) {
      logo.dataset.Bound = "true";

      let logoClickCount = 0;
      let logoClickTimer = null;

      logo.addEventListener("click", () => {
        logoClickCount++;

        clearTimeout(logoClickTimer);

        logoClickTimer = setTimeout(() => {
          logoClickCount = 0;
        }, 1200);

        if (logoClickCount === 3) {
          logoClickCount = 0;
          launchNewYearEgg();
        }
      });
    }

  } else {
    deactivateGirland();
    deactivateNewYearMode();
    restoreIcons();
  }

  /* ================= VALENTINE (OVERRIDE LAYER) ================= */
  const isValentine = month === 2 && (day === 13 || day === 14);
  const isIndependenceUkraine = month === 8 && (day === 23 || day === 24);
const isVyshyvanka = month === 5 && (day === 20 || day === 21);
  if (isValentine) {
    applyIcons(valentineIcons);
  }
  if (isVyshyvanka) {
    activateVyshyvankaMode();
    applyIcons(vyshyvankaIcons);
  } else {
    deactivateVyshyvankaMode();
    restoreIcons();
  }
  if (isIndependenceUkraine) {
    activateIndepedenceMode();
    applyIcons(independenceIcons);
  } else {
    deactivateIndepedenceMode();
    restoreIcons();
  }
  const is = (month === 4 && day >= 10  && day <= 25);
  // 🔔  egg по потрійному кліку на логотип
  if (is) {
    applyIcons(Icons);
  }
});


/* ================================
   🎃 HALLOWEEN
   ================================ */
function activateHalloweenMode() {
  document.body.classList.add("halloween");
  console.log("🎃 Halloween увімкнено!");
  styleButtons("#ff7518", "black");

  for (let i = 0; i < 5; i++) {
    const bat = document.createElement("div");
    bat.className = "bat";
    bat.textContent = "🦇";
    bat.style.position = "fixed";
    bat.style.top = Math.random() * 80 + "%";
    bat.style.left = Math.random() * 100 + "%";
    bat.style.fontSize = Math.random() * 30 + 20 + "px";
    bat.style.opacity = 0.8;
    bat.style.zIndex = 9999;
    document.body.appendChild(bat);
  }

  const fog = document.createElement("div");
  fog.className = "fog";
  fog.style.position = "fixed";
  fog.style.top = "0";
  fog.style.left = "0";
  fog.style.width = "100%";
  fog.style.height = "100%";
  fog.style.background =
    "radial-gradient(circle, rgba(255,165,0,0.1), rgba(0,0,0,0.8))";
  fog.style.pointerEvents = "none";
  fog.style.zIndex = 999;
  document.body.appendChild(fog);
}

function deactivateHalloweenMode() {
  document.body.classList.remove("halloween");
  document.querySelectorAll(".bat, .fog").forEach(el => el.remove());
  resetButtonColors();
}

/* ================================
   🎄 NEW YEAR
   ================================ */
function activateGirland() {
  const girland = document.getElementById("girland");
  if (girland) {
    girland.style.display = "block";
    girland.classList.add("lightrope");
  }
}

function deactivateGirland() {
  const girland = document.getElementById("girland");
  if (girland) {
    girland.classList.remove("lightrope");
    girland.style.display = "none";
  }
}

function activateNewYearMode() {
  document.body.classList.add("newyear");
  console.log("🎄 Новий Рік увімкнено!");
  startSnow();

  const logo = document.getElementById("logo");
  if (logo && !logo.dataset.originalSrc) logo.dataset.originalSrc = logo.src;
  if (logo) logo.src = "VideoVortex_new_year's_logo.jpg";

  styleButtons("#b0e6ff", "#00344f");
}

function deactivateNewYearMode() {
  document.body.classList.remove("newyear");
  stopSnow();
closeNewYearPopup();
  const logo = document.getElementById("logo");
  if (logo && logo.dataset.originalSrc) logo.src = logo.dataset.originalSrc;

  resetButtonColors();
}
function activateVyshyvankaMode() {

  const logo = document.getElementById("logo");
  if (logo && !logo.dataset.originalSrc) logo.dataset.originalSrc = logo.src;
  if (logo) logo.src = "VideoVortex_logo_embriodery.jpg";

  styleButtons("#8B0000", "#1C1C1C");
}
function deactivateVyshyvankaMode() {
  
  const logo = document.getElementById("logo");
  if (logo && logo.dataset.originalSrc) logo.src = logo.dataset.originalSrc;

  resetButtonColors();
}
  function activateIndepedenceMode() {

  const logo = document.getElementById("logo");
  if (logo && !logo.dataset.originalSrc) logo.dataset.originalSrc = logo.src;
  if (logo) logo.src = "VideoVortex_logo_indepedence.jpg";

  styleButtons("#0057B7", "#FFDD00");
}

function deactivateIndepedenceMode() {
  
  const logo = document.getElementById("logo");
  if (logo && logo.dataset.originalSrc) logo.src = logo.dataset.originalSrc;

  resetButtonColors();
}
/* ================================
   ❄️ SNOWFALL &  Egg
   ================================ */
function startSnow() {
  if (snowInterval) return;

  snowInterval = setInterval(() => {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.textContent = ["❄️", "❅", "❆"][Math.floor(Math.random() * 3)];
    flake.style.position = "fixed";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.top = "-10px";
    flake.style.fontSize = Math.random() * 25 + 10 + "px";
    flake.style.opacity = Math.random() * 0.8 + 0.2;
    flake.style.animation = "fall 4s linear forwards";
    flake.style.pointerEvents = "none";
    flake.style.zIndex = 9999;
    document.body.appendChild(flake);
    setTimeout(() => flake.remove(), 5000);
  }, 150);
}

function stopSnow() {
  clearInterval(snowInterval);
  snowInterval = null;
  document.querySelectorAll(".snowflake").forEach(f => f.remove());
}

function launchNewYearEgg() {
  startSnow();

  const popup = document.getElementById("newyear--egg");
  if (!popup) return;

  popup.style.display = "flex";

  if (EggTimeout) {
    clearTimeout(EggTimeout);
  }

  EggTimeout = setTimeout(() => {
    popup.style.display = "none";
  }, 120000);
}
function closeNewYearPopup() {
const popupClose = document.getElementById("newyear--egg");
popupClose.style.display = "none";
}
/* ================================
   🔳 ICON SYSTEM
   ================================ */
const halloweenIcons = {
  "account-desktop-link": (user) => `🕸<span class="icon-text">${user.name} ${user.supername}</span>`,
  "register-link": "🕸",
  "logout-link": "🚪",
  "auth-link": `🚪<span data-i18n="signIn">Увійти</span>`,
  "smart-post": `👻<span data-i18n="post">Дописи</span>`,
  "smart-video": `🦇<span data-i18n="video">Відео</span>`,
  "smart-settings": `🧪<span data-i18n="settings">Налаштування</span>`,
  "settings": `🧪<span data-i18n="settings">Налаштування</span>`,
  "post": `👻<span data-i18n="post">Дописи</span>`,
  "video": `🦇<span data-i18n="video">Відео</span>`,
  "plus-button": `<i class="icon">🎃</i>`,
  "plus-desktop-button": "🎃"
};

const newyearIcons = {
  "account-desktop-link": (user) => `⛄<span class="icon-text">${user.name} ${user.supername}</span>`,
  "register-link": "⛄",
  "logout-link": "🚪",
  "auth-link": `🚪<span data-i18n="signIn">Увійти</span>`,
  "smart-post": `❄️<span data-i18n="post">Дописи</span>`,
  "smart-video": `🎬<span data-i18n="video">Відео</span>`,
  "smart-settings": `🎁<span data-i18n="settings">Налаштування</span>`,
    "settings": `🎁<span data-i18n="settings">Налаштування</span>`,
  "post": `❄️<span data-i18n="post">Дописи</span>`,
  "video": `🎬<span data-i18n="video">Відео</span>`,
  "plus-button": `<i class="icon">🎄</i>`,
  "plus-desktop-button": "🎄"
};
const valentineIcons = {
  "account-desktop-link": (user) =>
    `❤️<span class="icon-text">${user.name} ${user.supername}</span>`,
  "register-link": "💖",
  "logout-link": "🚪",
  "auth-link": `💘<span data-i18n="signIn">Увійти</span>`,
  "smart-post": `💌<span data-i18n="post">Дописи</span>`,
  "smart-video": `💞<span data-i18n="video">Відео</span>`,
  "smart-settings": `💌<span data-i18n="settings">Налаштування</span>`,
  "settings": `💌<span data-i18n="settings">Налаштування</span>`,
  "post": `💌<span data-i18n="post">Дописи</span>`,
  "video": `💞<span data-i18n="video">Відео</span>`,
  "plus-button": `<i class="icon">💝</i>`,
  "plus-desktop-button": "💝"
};
const Icons = {
  "account-desktop-link": (user) =>
    `🐣<span class="icon-text">${user.name} ${user.supername}</span>`,
  "register-link": "🥚",
  "logout-link": "🚪",
  "auth-link": `🐰<span data-i18n="signIn">Увійти</span>`,
  "smart-post": `🌸<span data-i18n="post">Дописи</span>`,
  "smart-video": `🐥<span data-i18n="video">Відео</span>`,
  "smart-settings": `🐣<span data-i18n="settings">Налаштування</span>`,
  "settings": `🐣<span data-i18n="settings">Налаштування</span>`,
  "post": `🌸<span data-i18n="post">Дописи</span>`,
  "video": `🐥<span data-i18n="video">Відео</span>`,
  "plus-button": `<i class="icon">🧺</i>`,
  "plus-desktop-button": "🧺"
};
const vyshyvankaIcons = {
  "account-desktop-link": (user) =>
    `🧵<span class="icon-text">${user.name} ${user.supername}</span>`,
  "register-link": "🪡",
  "logout-link": "🚪",
  "auth-link": `🧶<span data-i18n="signIn">Увійти</span>`,
  "smart-post": `🪢<span data-i18n="post">Дописи</span>`,
  "smart-video": `📽️<span data-i18n="video">Відео</span>`,
  "smart-settings": `🧵🪡<span data-i18n="settings">Налаштування</span>`,
    "settings": `🧵🪡<span data-i18n="settings">Налаштування</span>`,
  "post": `🪢<span data-i18n="post">Дописи</span>`,
  "video": `📽️<span data-i18n="video">Відео</span>`,
  "plus-button": `<i class="icon">🧿</i>`,
  "plus-desktop-button": "🧿"
};
const independenceIcons = {
  "account-desktop-link": (user) =>
    `🇺🇦<span class="icon-text">${user.name} ${user.supername}</span>`,
  "register-link": "💙💛",
  "logout-link": "🚪",
  "auth-link": `🕊️<span data-i18n="signIn">Увійти</span>`,
  "smart-post": `📝<span data-i18n="post">Дописи</span>`,
  "smart-video": `📹<span data-i18n="video">Відео</span>`,
  "smart-settings": `💙💛🕊️<span data-i18n="settings">Налаштування</span>`,
  "settings": `💙💛🕊️<span data-i18n="settings">Налаштування</span>`,
  "post": `📝<span data-i18n="post">Дописи</span>`,
  "video": `📹<span data-i18n="video">Відео</span>`,
  "plus-button": `<i class="icon">🌾</i>`,
  "plus-desktop-button": "🌾",
  "logo-text": "VideoVortex 💙💛"
};
function applyIcons(set, user = null) {
  for (const [id, icon] of Object.entries(set)) {
    const el = document.getElementById(id);
    if (!el) continue;

    if (!el.dataset.originalHtml) {
      el.dataset.originalHtml = el.innerHTML;
    }

    el.querySelectorAll("i.material-symbols, .material-symbols").forEach(i => i.remove());

    if (typeof icon === "function") {
      if (!user) continue;
      el.innerHTML = icon(user);
      continue;
    }

    el.innerHTML = icon;
  }
}

function restoreIcons() {
  document.querySelectorAll("[data-original-html]").forEach(el => {
    el.innerHTML = el.dataset.originalHtml;
  });
}

/* ================================
   🎨 BUTTON COLORS
   ================================ */
function styleButtons(bg, color) {
  document.querySelectorAll("button, .btn").forEach(btn => {
    btn.dataset.originalBg = btn.style.backgroundColor;
    btn.dataset.originalColor = btn.style.color;
    btn.style.backgroundColor = bg;
    btn.style.color = color;
  });
}

function resetButtonColors() {
  document.querySelectorAll("button, .btn").forEach(btn => {
    if (btn.dataset.originalBg) btn.style.backgroundColor = btn.dataset.originalBg;
    if (btn.dataset.originalColor) btn.style.color = btn.dataset.originalColor;
  });
}

  
          let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();  // Забираємо стандартний банер
  deferredPrompt = e;   // Зберігаємо подію для виклику пізніше
  installBtn.style.display = 'flex'; // Показуємо кнопку
});

installBtn.addEventListener('click', async () => {
  installBtn.style.display = 'none'; // Ховаємо кнопку після кліку
  if (deferredPrompt) {
    deferredPrompt.prompt();          // Показуємо системний діалог встановлення
    const choiceResult = await deferredPrompt.userChoice;
    deferredPrompt = null;
    console.log('Встановлення: ', choiceResult.outcome);
  }
});
function showRulesModal() {
  const modal = document.getElementById("rules-update-modal");
  const lastAccepted = localStorage.getItem("rules_version");
  const currentVersion = "2025-10";

  if (lastAccepted !== currentVersion) {
    modal.style.display = "flex";
  }
}

function acceptRulesUpdate() {
  localStorage.setItem("rules_version", "2025-10");
  document.getElementById("rules-update-modal").style.display = "none";
}

window.addEventListener("load", showRulesModal);

const modal = document.getElementById("upload-modal");
const accountModal = document.getElementById("account-modal");
const editModal = document.getElementById("edit-modal");
const editWallpaperProfileModal = document.getElementById("edit-wallpaper-profile-modal");
const closeEditWallpaperProfileModal = document.querySelector(".close-edit-wallpaper-profile-modal");
const archiveModal = document.getElementById("archive-modal");
const closeArchiveModal = document.querySelector(".close-archive-modal");
const message = document.getElementById("message");
const notification = document.getElementById("notification-modal");
const closeAccountModal = document.querySelector(".close-account-modal");
const closeEditModal = document.querySelector(".close-edit-modal");
const plus = document.getElementById("plus-button");
const plusDesktop = document.getElementById("plus-desktop-button");
const deleteModal = document.getElementById("delete-account-modal");
const closeBtn = document.querySelector(".close-modal");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const editAccount = document.getElementById("edit-profile");
function showNotificationModal() {
  notification.style.display = "flex";
}
function closeNotificationModal() {
  notification.style.display = "none";
}
function requireAuth(action) {
    if (!auth.currentUser) {
      showNotificationModal();
        message.innerHTML = "Щоб виконати цю дію, увійдіть у акаунт.";
        window.location.href = "auth.html";
        return false;
    }
    return true;
}

// Відкриття модалок
plus?.addEventListener("click", () => {
    if (!requireAuth()) return;
    modal.style.display = "flex";
});
plusDesktop?.addEventListener("click", () => {
    if (!requireAuth()) return;
    modal.style.display = "flex";
});

// Закриття модалок
closeAccountModal?.addEventListener("click", () => accountModal.style.display = "none");
closeEditWallpaperProfileModal?.addEventListener("click", () => editWallpaperProfileModal.style.display = "none");
closeBtn?.addEventListener("click", () => modal.style.display = "none");
closeArchiveModal?.addEventListener("click", () => archiveModal.style.display = "none");
closeEditModal?.addEventListener("click", () => editModal.style.display = "none");
closeBtn?.addEventListener("click", () => modal.style.display = "none");
// Закриття при кліку поза модалкою
[modal, accountModal, archiveModal, editModal, editWallpaperProfileModal, deleteModal].forEach(m => {
    m?.addEventListener("click", e => {
        if (e.target === m) m.style.display = "none";
    });
});

// Перемикання вкладок
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        const tabId = btn.dataset.tab;
        document.getElementById(tabId)?.classList.add("active");
    });
});
function toggleSidebar() {
    var sidebar = document.querySelector('.menu');
    var content = document.querySelector('.content');

    if (sidebar.style.width === "240px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "240px";
        content.style.marginLeft = "240px";
    }
}

// Закриття меню
function closeSidebar() {
    var sidebar = document.querySelector('.menu');
    var content = document.querySelector('.content');

    sidebar.style.width = "0";
    content.style.marginLeft = "0";
}

let currentEditKey = null;
let maxTimeInMinutes = null;
let timeLeftInSeconds = null;
let sleepStart = null;
let sleepEnd = null;
let userAge = null;

 // Конвертуємо час в секунди
    let currentUser = null;
let currentUserEmail = null;
let currentUserRole = "user";
let currentUserStatus = "active";
    let showNSFW = false; // Track whether the user wants to view NSFW content

firebase.initializeApp({
  apiKey: "AIzaSyBkPYP3bnDy61NFjRSboRZrfTVNTdIMWbY",
  authDomain: "videovortex-235cd.firebaseapp.com",
  databaseURL: "https://videovortex-235cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "videovortex-235cd",
  storageBucket: "videovortex-235cd.appspot.com",
  messagingSenderId: "681594250269",
  appId: "1:681594250269:web:1176b21fcc8fe2a7d052f4"
});
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();
const messaging = firebase.messaging();

// ==========================
// Реєстрація Service Worker
// ==========================


// ==========================
// Запит дозволу на пуші
// ==========================
async function enablePushNotifications(userId) {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("❌ Користувач не дозволив сповіщення");
      return;
    }

    const token = await messaging.getToken({
      vapidKey: "BFkinse0q7x94PIX608Y9QsATJ0Ht2S-k6TeOpSFdB0sXIRLyxf1wKHTboOUHJY5tQB8wGMyMcoEQEV5fDu4sS4"
    });

    console.log("✅ Push токен:", token);

    // Збереження токена у Firebase
    database.ref("users/" + userId + "/pushToken").set(token);

  } catch (err) {
    console.error("❌ Помилка отримання токена:", err);
  }
}

// ==========================
// Отримання повідомлень коли сайт відкритий
// ==========================
messaging.onMessage((payload) => {
  console.log("📬 Нове повідомлення:", payload);
  const { title, body,  } = payload.notification;
  new Notification(title, { body,  });
});

 const addButton = document.getElementById("add");
const addIcon = addButton.querySelector("i");
const uploadDiv = document.getElementById("upload");

let isOpen = false;

// Задаємо transition один раз
uploadDiv.style.transition = "opacity 0.3s ease";
uploadDiv.style.opacity = 0;
uploadDiv.style.display = "none";

addIcon.style.transition = "transform 0.3s ease";

addButton.onclick = function() {
    if (!isOpen) {
        // Показати блок
        uploadDiv.style.display = "block";
        // Плавне з'явлення
        setTimeout(() => {
            uploadDiv.style.opacity = 1;
        }, 10);

        // Повернути іконку +
        addIcon.style.transform = "rotate(45deg)";

        isOpen = true;
    } else {
        // Плавне зникнення блоку
        uploadDiv.style.opacity = 0;
        addIcon.style.transform = "rotate(0deg)";

        // Сховати блок після завершення анімації
        setTimeout(() => {
            uploadDiv.style.display = "none";
        }, 300);

        isOpen = false;
    }
};
        document.getElementById("post").onclick = function() {
                     document.querySelector(".tab").style.display = 'none';
                     document.querySelector(".stories-bar").style.display = 'none';
           document.getElementById("video-container").style.display = 'none';
        document.getElementById("photo-container").style.display = 'flex';
        document.getElementById("author-info").style.display = 'none';
        }
            document.getElementById("video").onclick = function() {
                         document.querySelector(".tab").style.display = 'flex';
                         document.querySelector(".stories-bar").style.display = 'flex';
           document.getElementById("video-container").style.display = 'flex';
        document.getElementById("photo-container").style.display = 'none';
        document.getElementById("author-info").style.display = 'none';
        }
        document.getElementById("smart-post").onclick = function() {
                     document.querySelector(".tab").style.display = 'none';
                     document.querySelector(".stories-bar").style.display = 'none';
           document.getElementById("video-container").style.display = 'none';
           document.getElementById("author-info").style.display = 'none';
           document.getElementById("smart-video").classList.remove("button-liquid-glass");
           document.getElementById("account-link").classList.remove("button-liquid-glass");
          document.getElementById("smart-post").classList.add("button-liquid-glass");
        document.getElementById("photo-container").style.display = 'block';
                  document.getElementById("smart-settings").classList.remove("button-liquid-glass");
        document.querySelector(".settings-page").style.display = 'none';
        }
document.getElementById("smart-settings").onclick = function() {
           document.getElementById("video-container").style.display = 'none';
           document.querySelector(".tab").style.display = 'none';
           document.querySelector(".stories-bar").style.display = 'none';
           document.getElementById("author-info").style.display = 'none';
           document.getElementById("photo-container").style.display = 'none';
           document.getElementById("smart-video").classList.remove("button-liquid-glass");
           document.getElementById("account-link").classList.remove("button-liquid-glass");
          document.getElementById("smart-post").classList.remove("button-liquid-glass");
          document.getElementById("smart-settings").classList.add("button-liquid-glass");
        document.querySelector(".settings-page").style.display = 'block';
        }
        document.getElementById("settings").onclick = function() {
           document.getElementById("video-container").style.display = 'none';
           document.querySelector(".stories-bar").style.display = 'none';
           document.querySelector(".tab").style.display = 'none';
           document.getElementById("author-info").style.display = 'none';
           document.getElementById("photo-container").style.display = 'none';
        document.querySelector(".settings-page").style.display = 'block';
        }
        document.getElementById("popular").addEventListener("click", function() {
  document.getElementById("video-container").style.display = 'flex';
  document.getElementById("photo-container").style.display = 'none';
  document.querySelector(".settings-page").style.display = 'none';
  document.getElementById("popular").classList.add("tab-button-liquid-glass");
  document.getElementById("all").classList.remove("tab-button-liquid-glass");
});
document.getElementById("popular").addEventListener("click", loadPopularVideos);
document.getElementById("all").addEventListener("click", function() {
  document.getElementById("video-container").style.display = 'flex';
  document.getElementById("photo-container").style.display = 'none';
  document.querySelector(".settings-page").style.display = 'none';
  document.getElementById("popular").classList.remove("tab-button-liquid-glass");
  document.getElementById("all").classList.add("tab-button-liquid-glass");
});
document.getElementById("all").addEventListener("click", loadVideos);
        document.getElementById("account-desktop-link").onclick = function() {
                     document.querySelector(".tab").style.display = 'none';
                     document.querySelector(".stories-bar").style.display = 'none';
          document.getElementById("video-container").style.display = 'none';
           document.getElementById("photo-container").style.display = 'none';
           document.querySelector(".settings-page").style.display = 'none';
           document.getElementById("author-info").style.display = 'block';
        }
        document.getElementById("account-link").onclick = function() {
                     document.querySelector(".tab").style.display = 'none';
                     document.querySelector(".stories-bar").style.display = 'none';
           document.getElementById("video-container").style.display = 'none';
           document.getElementById("photo-container").style.display = 'none';
           document.getElementById("smart-settings").classList.remove("button-liquid-glass");
        document.querySelector(".settings-page").style.display = 'none';
           document.getElementById("smart-video").classList.remove("button-liquid-glass");
          document.getElementById("smart-post").classList.remove("button-liquid-glass");
          document.getElementById("account-link").classList.add("button-liquid-glass");
        document.getElementById("author-info").style.display = 'block';
        }
            document.getElementById("smart-video").onclick = function() {
                         document.querySelector(".tab").style.display = 'flex';
                         document.querySelector(".stories-bar").style.display = 'flex';
              document.getElementById("smart-video").classList.add("button-liquid-glass");
              document.getElementById("smart-post").classList.remove("button-liquid-glass");
              document.getElementById("account-link").classList.remove("button-liquid-glass");
           document.getElementById("video-container").style.display = 'flex';
           document.getElementById("smart-settings").classList.remove("button-liquid-glass");
        document.querySelector(".settings-page").style.display = 'none';
        document.getElementById("photo-container").style.display = 'none';
        document.getElementById("author-info").style.display = 'none';
        }

            function blockScreenForVerification() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    wrapper.innerHTML = `
        <style>
            .wrapper {
color: #e9ecf1;
  font-family: Inter, Segoe UI, Roboto, Arial;
  margin: 0;
  background: radial-gradient(ellipse at top, #0b0f17, #05060a);
    line-height: 1.6;
text-align: center;
    padding: 0 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
            }

            .wrapper button {
                all: unset;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                padding: 12px 28px;
                border-radius: 999px;

                background: #0b0b0b;
                color: white;
                border: 2px solid #2a2a2a;

                cursor: pointer;

                transition: 0.25s ease;
            }

            .wrapper button:hover {
                border-color: #f472b6;
                box-shadow: 0 0 18px rgba(244, 114, 182, .65);
                transform: translateY(-2px);
            }

            .wrapper button:active {
                border-color: #06b6d4;
                transform: scale(0.96);
            }

            #delete-account {
                color: #ff4d4d;
                border-color: #3a1a1a;
            }

            #logout-link-verification {
                color: #aaa;
                text-decoration: none;
                display: inline-flex;
                gap: 6px;
            }

            #logout-link-verification:hover {
                color: white;
            }
        </style>

        <h1>Підтвердьте вашу електронну пошту</h1>

        <p>
            Ми надіслали вам лист на пошту.
            Перевірте також "Спам".
        </p>

        <button onclick="resendVerification()">
            Надіслати лист ще раз
        </button>

        <button id="delete-account" onclick="deleteAccount()">
            <i class="material-symbols">person_remove</i>
            <span style="margin-left: 5px;">Видалити акаунт</span>
        </button>

        <a href="#" id="logout-link-verification" onclick="logout()">
            <i class="material-symbols">logout</i>
            <span class="icon-text">Вийти</span>
        </a>

        <p style="margin-top: 20px;">
            Після підтвердження просто зачекайте або перезавантажте сторінку.
        </p>
    `;

    document.body.replaceChildren(wrapper);
}

// Надіслати лист повторно
function resendVerification() {
    const user = auth.currentUser;
    if (user) {
        user.sendEmailVerification()
            .then(() => {
                alert("Лист підтвердження надіслано повторно!");
            })
            .catch((error) => {
              alert("Помилка надсилання листа:" + error.message);
            });
    }
}
function deleteAccountModal() {
  const deleteAccountModal = document.getElementById("delete-account-modal");
  deleteAccountModal.style.display = "flex";
}
function closeDeleteAccountModal() {
  const deleteAccountModal = document.getElementById("delete-account-modal");
  deleteAccountModal.style.display = "none";
}
async function saveWallpaperChanges() {
  const wallpaperInput = document.getElementById("set-wallpaper-profile").files[0];
  const user = firebase.auth().currentUser;
          

    try {
      const wallpaperId = `${user.uid}_${Date.now()}`;
        const storageRef = storage.ref(`wallpapers/${wallpaperId}.webp`);
        await storageRef.put(wallpaperInput);
        
        await database.ref("users/" + user.uid).update({ wallpaperId});
                const url = await storageRef.getDownloadURL();
          message.innerHTML = `
          <p data-i18n="wallpapers-save-successfully">Шпалери застосовано!
          </p>`;
          applyTranslations();
          showNotificationModal();
    } catch (error) {
        console.error(error);
        message.innerHTML = `
        <p data-i18n="wallpapers-save-error">Помилка при завантаженні шпалер.
        </p>`;
        applyTranslations();
        showNotificationModal();
    }
}
function deleteAccount() {
    const user = firebase.auth().currentUser;

    if (!user) {
      showNotificationModal();
        message.innerHTML = "Спочатку увійдіть у свій акаунт.";
        return;
    }

    if (!confirm("Ви впевнені, що хочете видалити акаунт? Усі ваші публікації будуть видалені назавжди. Цю дію неможливо скасувати.")) {
        return;
    }

    const uid = user.uid;
    const videosRef = firebase.database().ref("videos");
    const commentsRef = firebase.database().ref("comments");
    const usersRef = firebase.database().ref("users/" + uid);

    // ?? 1. Видаляємо всі відео користувача
    videosRef.once("value")
        .then(snapshot => {
            const deleteVideoPromises = [];

            snapshot.forEach(childSnapshot => {
                const videoData = childSnapshot.val();
                const videoKey = childSnapshot.key;

                if (videoData.email === user.email) {
                    const dbDelete = firebase.database().ref(`videos/${videoKey}`).remove();
                    const storageDelete = firebase.storage().ref(`videos/${videoKey}`).delete()
                        .catch(error => console.warn(`?? Не вдалося видалити файл з Storage (${videoKey}):`, error));

                    deleteVideoPromises.push(dbDelete, storageDelete);
                }
            });

            return Promise.all(deleteVideoPromises);
        })
        // ?? 2. Оновлюємо всі коментарі користувача
        .then(() => commentsRef.once("value"))
        .then(snapshot => {
            const updatePromises = [];

            snapshot.forEach(childSnapshot => {
                const commentData = childSnapshot.val();
                const commentKey = childSnapshot.key;

                // Якщо коментар належить поточному користувачу
                if (commentData.email === user.email) {
                    const update = commentsRef.child(commentKey).update({
                        email: "Видалений акаунт",
                        commentAuthor: "Видалений акаунт"
                    });
                    updatePromises.push(update);
                }
            });

            return Promise.all(updatePromises);
        })
        // ?? 3. Видаляємо користувача з бази даних
        .then(() => usersRef.remove())
        // ?? 4. Видаляємо сам акаунт
        .then(() => user.delete())
        // ?? 5. Повідомлення користувачу
        .then(() => {
          showNotificationModal();
            message.innerHTML = "? Акаунт і всі пов’язані дані успішно видалено.";
            location.reload();
        })
        .catch(error => {
            if (error.code === 'auth/requires-recent-login') {
                message.innerHTML = "Будь ласка, увійдіть знову перед видаленням акаунту.";
                showNotificationModal();
                firebase.auth().signOut();
            } else {
                console.error("? Помилка при видаленні акаунту:", error);
                showNotificationModal();
                message.innerHTML = "Сталася помилка при видаленні акаунту: " + error.message;
            }
        });
}

document.getElementById("show-nsfw-videos").addEventListener("change", function() {
if (auth.currentUser) {
        showNSFW = this.checked;  // Update the variable based on the checkbox state
        loadVideos();
} else {
  showNotificationModal();
message.innerHTML = "Сталася помилка при увімкненні функції показувати відео позначення як NSFW.";
}
    });
async function isUserBlockedByMe(targetUid) {

  const me = firebase.auth().currentUser;

  if (!me) return false;
  if (!targetUid) return false;

  try {

    const snap = await database
      .ref(`users/${me.uid}/blockedUsers/${targetUid}`)
      .once("value");

    return snap.exists();

  } catch {

    return false;

  }

}



async function didUserBlockMe(targetUid) {

  const me = firebase.auth().currentUser;

  if (!me) return false;
  if (!targetUid) return false;

  try {

    const snap = await database
      .ref(`users/${targetUid}/blockedUsers/${me.uid}`)
      .once("value");

    return snap.exists();

  } catch {

    return false;

  }

}
    function enableBanduraUI(role) {
    const banduraBlock = document.getElementById("bandura-options");
    if (!banduraBlock) return;

    if (role === "bandura" || role === "moderator") {
        banduraBlock.style.display = "block";
    } else {
        banduraBlock.style.display = "none";
    }
}
async function generateThumbnailFirstFrame(videoUrl) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.crossOrigin = "anonymous"; // тільки для CORS
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.src = videoUrl;

    // додаємо приховано в DOM
    video.style.position = "absolute";
    video.style.left = "-9999px";
    video.style.width = "1px";
    video.style.height = "1px";
    document.body.appendChild(video);

    const timeout = setTimeout(() => {
      document.body.removeChild(video);
      reject(new Error("Timeout: frame not decoded"));
    }, 10000);

    video.addEventListener("loadeddata", () => {
      video.currentTime = 0;
    }, { once: true });

    video.addEventListener("seeked", () => {
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        clearTimeout(timeout);
        document.body.removeChild(video);
        reject(new Error("No decoded frame"));
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);

      canvas.toBlob(blob => {
        clearTimeout(timeout);
        document.body.removeChild(video);
        if (!blob) {
          reject(new Error("Canvas tainted"));
        } else {
          resolve(blob);
        }
      }, "image/jpeg", 0.7);
    }, { once: true });

    video.addEventListener("error", () => {
      clearTimeout(timeout);
      document.body.removeChild(video);
      reject(new Error("Video load error"));
    }, { once: true });
  });
}

document.getElementById("domain-restrict-checkbox").onclick = function(event) {
    if (!currentUserEmail || !currentUserEmail.endsWith("@kfccte-nau.ukr.education")) {
        message.innerHTML = "Сталася помилка. ACCOUNT_IS_NOT_DOMAIN_KFCCTE-NAU.UKR.EDUCATION";
        event.preventDefault(); // Prevents checkbox from being checked
    }
}
function sanitizeHTML(str) {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
}
const loadedStoryUsers = new Set();

async function loadStories() {

    const storiesGallery =
        document.getElementById("stories-bar");

    if (!storiesGallery) return;

    const user =
        firebase.auth().currentUser;

    database.ref("stories").on("child_added", async snapshot => {

    const storyId = snapshot.key;
    const storiesData = snapshot.val();

    if (!storiesData) return;

    // storyId — це ID конкретної Story
    console.log("Story ID:", storyId);

    const isExpired =
        storiesData.expiresAt &&
        Date.now() > storiesData.expiresAt;

    if (isExpired) return;

    if (!storiesData.uid) return;

    const blockedYou =
        await isUserBlockedByMe(storiesData.uid);

    const blockedMe =
        await didUserBlockMe(storiesData.uid);

    if (blockedMe || blockedYou) return;

    if (storiesData.uid === currentUserUid) return;

    // Не дублювати автора
    if (loadedStoryUsers.has(storiesData.uid)) return;

    loadedStoryUsers.add(storiesData.uid);
const storyAvatarRing = document.createElement("div");
storyAvatarRing.classList.add("avatar-ring");
    // Створюємо аватар
    const storyItem = document.createElement("div");
    storyItem.classList.add("story-item");

    const storiesAvatar =
        document.createElement("img");

    storiesAvatar.classList.add("avatar-stories");

    if (storiesData.avatar) {
        storiesAvatar.style.backgroundImage =
            `url(${storiesData.avatar})`;

        storiesAvatar.style.backgroundSize = "cover";
        storiesAvatar.style.backgroundPosition = "center";
        storiesAvatar.style.backgroundRepeat = "no-repeat";
    }

    // Передаємо UID автора
    // і Story ID
    storiesAvatar.onclick = () => {
        openStories(
            storiesData.uid,
            storyId
        );
    };
   storyAvatarRing.appendChild(storiesAvatar);
    storyItem.appendChild(storyAvatarRing);

    const storiesAuthorName =
        document.createElement("div");

    storiesAuthorName.classList.add("name");

    storiesAuthorName.innerText =
        sanitizeHTML(storiesData.name);

    storyItem.appendChild(
        storiesAuthorName
    );

    storiesGallery.appendChild(
        storyItem
    );
});
}
function openYourStories(currentUserUid) {

const storiesView =
    document.getElementById("storyView");

if (!storiesView) return;

storiesView.innerHTML = "";
storiesView.style.display = "block";
document.querySelector(".bg-liquid-glass").style.display = "none";
  document.getElementById("plus-button").style.display = "none";
database.ref("stories")
    .once("value")
    .then(snapshot => {

        const stories = [];

        // =========================
        // ЗБИРАЄМО ВЛАСНІ STORIES
        // =========================

        snapshot.forEach(storySnapshot => {

            // ID конкретної Story
            const storyId =
                storySnapshot.key;

            // Дані конкретної Story
            const storyData =
                storySnapshot.val();

            if (!storyData) return;

            // Тільки Stories поточного користувача
            if (
                storyData.uid !==
                currentUserUid
            ) {
                return;
            }

            // Перевіряємо термін дії
            if (
                storyData.expiresAt &&
                Date.now() >
                storyData.expiresAt
            ) {
                return;
            }

            stories.push({

                storyId:
                    storyId,

                ...storyData

            });

        });

        // =========================
        // ЯКЩО STORIES НЕМАЄ
        // =========================

        if (
            stories.length === 0
        ) {

            console.log(
                "Власні Stories не знайдені"
            );

            storiesView.style.display =
                "none";

            return;

        }

        // =========================
        // СОРТУВАННЯ
        // =========================

        stories.sort(
            (a, b) =>
                (a.createdAt || 0) -
                (b.createdAt || 0)
        );

        console.log(
            "Власні Stories:",
            stories
        );

        // =========================
        // ПОКАЗ STORY
        // =========================

        function showStory(index) {

            // Stories закінчилися
            if (
                index >=
                stories.length
            ) {

                storiesView.innerHTML =
                    "";

                storiesView.style.display =
                    "none";

                return;

            }

            const storyData =
                stories[index];

            // Очищаємо попередню Story
            storiesView.innerHTML =
                "";

            // =========================
            // АВАТАР
            // =========================

            const storiesAvatar =
                document.createElement(
                    "div"
                );

            storiesAvatar.classList.add(
                "stories-avatar"
            );

            storiesAvatar.style.borderRadius =
                "64px";

            if (
                storyData.avatar
            ) {

                const avatarImg =
                    document.createElement(
                        "img"
                    );

                avatarImg.src =
                    storyData.avatar;

                avatarImg.classList.add(
                    "avatar-stories-view"
                );

                storiesAvatar.appendChild(
                    avatarImg
                );

            } else {

                // Якщо аватара немає
                storiesAvatar.innerText =
                    getInitials(
                        storyData.name || ""
                    );

                storiesAvatar.style.background =
                    storyData.authorColor ||
                    "#007aff";

            }

            // =========================
            // ІМ'Я АВТОРА
            // =========================

            const storiesAuthor =
                document.createElement(
                    "span"
                );

            storiesAuthor.classList.add(
                "stories-author"
            );
            storiesAuthor.innerHTML = `
            <p data-i18n='my-story'>
            Моя історія
            </p>`;

            storiesView.appendChild(
                storiesAuthor
            );

            storiesView.appendChild(
                storiesAvatar
            );

            // =========================
            // ФОТО
            // =========================

            if (
                storyData.type ===
                "image"
            ) {

                const img =
                    document.createElement(
                        "img"
                    );

                img.classList.add(
                    "story-img"
                );

                img.src =
                    storyData.url;

                img.style.width =
                    "100%";

                img.style.height =
                    "100%";

                img.style.objectFit =
                    "cover";

                storiesView.appendChild(
                    img
                );

                // Через 5 секунд
                // наступна Story
                setTimeout(
                    () => {

                        showStory(
                            index + 1
                        );

                    },
                    5000
                );

            }

            // =========================
            // ВІДЕО
            // =========================

            else if (
                storyData.type ===
                "video"
            ) {

                const video =
                    document.createElement(
                        "video"
                    );

                video.classList.add(
                    "story-video"
                );

                video.src =
                    storyData.url;

                video.autoplay =
                    true;

                video.loop =
                    false;

                video.muted =
                    true;

                video.playsInline =
                    true;

                video.controls =
                    false;

                video.style.width =
                    "100%";

                video.style.height =
                    "100%";

                video.style.objectFit =
                    "cover";

                storiesView.appendChild(
                    video
                );

                video.play()
                    .catch(
                        error => {

                            console.error(
                                "Не вдалося відтворити відео:",
                                error
                            );

                        }
                    );

                // Після завершення відео
                // показуємо наступну Story
                video.onended =
                    () => {

                        showStory(
                            index + 1
                        );

                    };

            }

        }

        // =========================
        // ПОЧИНАЄМО З ПЕРШОЇ STORY
        // =========================

        showStory(0);
applyTranslations();
    })
    .catch(
        error => {

            console.error(
                "Помилка завантаження власних Stories:",
                error
            );

            storiesView.style.display =
                "none";

        }
    );

}
function openStories(uid, startStoryId) {

const storiesView =
    document.getElementById("storyView");

if (!storiesView) return;

storiesView.innerHTML = "";
storiesView.style.display = "block";
document.querySelector(".bg-liquid-glass").style.display = "none";
  document.getElementById("plus-button").style.display = "none";
database.ref("stories")
    .once("value")
    .then(snapshot => {

        const stories = [];

        // =========================
        // ЗБИРАЄМО STORIES КОРИСТУВАЧА
        // =========================

        snapshot.forEach(storySnapshot => {

            // ID конкретної Story
            const storyId =
                storySnapshot.key;

            // Дані конкретної Story
            const storyData =
                storySnapshot.val();

            if (!storyData) return;

            // Перевіряємо термін дії
            if (
                storyData.expiresAt &&
                Date.now() >
                storyData.expiresAt
            ) {
                return;
            }

            // Додаємо Story
            stories.push({

                storyId:
                    storyId,

                ...storyData

            });

        });

        // =========================
        // ЯКЩО STORIES НЕМАЄ
        // =========================

        if (
            stories.length === 0
        ) {

            console.log(
                "Stories користувача не знайдені"
            );

            storiesView.style.display =
                "none";

            return;
        }

        // =========================
        // СОРТУВАННЯ
        // =========================

        stories.sort(
            (a, b) =>
                (a.createdAt || 0) -
                (b.createdAt || 0)
        );

        // =========================
        // ЗНАХОДИМО ПОЧАТКОВУ STORY
        // =========================

        let startIndex =
            stories.findIndex(
                story =>
                    story.storyId ===
                    startStoryId
            );

        if (
            startIndex === -1
        ) {
            startIndex = 0;
        }

        console.log(
            "Stories користувача:",
            stories
        );

        console.log(
            "Початкова Story:",
            stories[startIndex]
        );

        // =========================
        // ПОКАЗ STORY
        // =========================

        function showStory(index) {

            // Якщо Stories закінчилися
            if (
                index >=
                stories.length
            ) {

                storiesView.innerHTML =
                    "";

                storiesView.style.display =
                    "none";

                return;
            }

            const storyData =
                stories[index];

            storiesView.innerHTML =
                "";

            // =========================
            // АВАТАР КОРИСТУВАЧА
            // =========================

            const storiesAvatar =
                document.createElement(
                    "div"
                );

            storiesAvatar.classList.add(
                "stories-avatar"
            );
           storiesAvatar.style.borderRadius = "64px";
            if (
                storyData.avatar
            ) {

                const avatarImg =
                    document.createElement(
                        "img"
                    );

                avatarImg.src =
                    storyData.avatar;

                avatarImg.classList.add(
                    "avatar-stories-view"
                );

                storiesAvatar.appendChild(
                    avatarImg
                );

            }
            const storiesAuthor = document.createElement("span");
             storiesAuthor.classList.add("stories-author");
            
              storiesAuthor.innerHTML = sanitizeHTML(storyData.name);
            storiesView.appendChild(
                storiesAuthor
            );
            storiesView.appendChild(
                storiesAvatar
            );
           
            // =========================
            // ФОТО
            // =========================

            if (
                storyData.type ===
                "image"
            ) {

                const img =
                    document.createElement(
                        "img"
                    );
                img.classList.add("story-img");
                img.src =
                    storyData.url;

                img.style.width =
                    "100%";

                img.style.height =
                    "100%";

                img.style.objectFit =
                    "cover";

                storiesView.appendChild(
                    img
                );

                // Через 5 секунд
                // наступна Story
                setTimeout(
                    () => {

                        showStory(
                            index + 1
                        );

                    },
                    5000
                );

            }

            // =========================
            // ВІДЕО
            // =========================

            else if (
                storyData.type ===
                "video"
            ) {

                const video =
                    document.createElement(
                        "video"
                    );
                video.classList.add("story-video");
                video.src =
                    storyData.url;

                video.autoplay =
                    true;

                video.loop =
                    false;

                video.muted =
                    false;

                video.playsInline =
                    true;

                video.controls =
                    false;

                video.style.width =
                    "100%";

                video.style.height =
                    "100%";

                video.style.objectFit =
                    "cover";

                storiesView.appendChild(
                    video
                );

                video.play()
                    .catch(
                        error => {

                            console.error(
                                "Не вдалося відтворити відео:",
                                error
                            );

                        }
                    );

                // Після завершення
                // наступна Story
                video.onended =
                    () => {

                    showStory(
                            index + 1
                        );

                    };

            }

        }

        // =========================
        // ПОКАЗУЄМО ПОЧАТКОВУ STORY
        // =========================

        showStory(
            startIndex
        );

    })
    .catch(
        error => {

            console.error(
                "Помилка завантаження Stories:",
                error
            );

            storiesView.style.display =
                "none";

        }
    );

  }

function getSafeBanduraHTML(banduraExtra) {
    if (!banduraExtra) return "";
    const s = str => str ? sanitizeHTML(str) : "";

    let html = `<span style="color:#ffd700;">🎵 Бандура</span>`;
    html += `<span style="opacity:0.7;"> (${s(banduraExtra.style)}, ${s(banduraExtra.difficulty)})</span>`;

    if (banduraExtra.tempo) html += `<br>Темп: ${s(banduraExtra.tempo.toString())} BPM`;
    if (banduraExtra.event) html += `<br>Подія: ${s(banduraExtra.event)}`;
    if (banduraExtra.year) html += `<br>Рік: ${s(banduraExtra.year.toString())}`;
    if (banduraExtra.performer) html += `<br>Виконавець: ${s(banduraExtra.performer)}`;
    if (banduraExtra.tags) html += `<br>Теги: ${s(banduraExtra.tags)}`;
    if (banduraExtra.markers) html += `<br>Маркери: ${s(banduraExtra.markers)}`;

    return html;
}
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${hash % 360}, 65%, 55%)`;
}

function createThumbnail(file) {

 return new Promise(resolve => {

  const video = document.createElement("video");
  video.src = URL.createObjectURL(file);
  video.currentTime = 1;

  video.addEventListener("loadeddata", () => {

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    canvas.toBlob(blob => {
        resolve(blob);
    }, "image/jpeg", 0.7);

  });

 });
}
const migrateUsersToPublicUsers =
    firebase.functions().httpsCallable(
        "migrateUsersToPublicUsers"
    );

migrateUsersToPublicUsers()
    .then(result => {
        console.log("✅ Міграція:", result.data);
    })
    .catch(error => {
        console.error("❌ Міграція:", error);
    });
const avatarLibrary = document.getElementById("avatar-library");
async function deleteAllViewsHistory() {
  if (!confirm("Ви впевнені, що хочете видалити історію переглядів?")) return;

  const uid = auth.currentUser.uid;
  const deleteHistoryRef = database.ref("users/" + uid + "/history");

  try {
    await deleteHistoryRef.remove();

    showNotificationModal();
    message.innerHTML = "Історію переглядів успішно видалено.";
  } catch (error) {
    console.error("Помилка при видаленні історії:", error);

    showNotificationModal();
    message.innerHTML = "Помилка: " + error.message;
  }
}
async function loadYouStories(user) {
  const avatarStoriesYou = document.getElementById("avatar-stories-you");
  const uid = user.uid;

  try {
    const snapshot = await database.ref("users/" + uid).once("value");
    const userData = snapshot.val() || {};

    if (userData.avatarId) {
      try {
        const url = await firebase
          .storage()
          .ref(`avatars/${userData.avatarId}.webp`)
          .getDownloadURL();

        avatarStoriesYou.innerHTML = "";

        const img = document.createElement("img");
        img.src = url;
        img.alt = "Аватар користувача";

        avatarStoriesYou.appendChild(img);
      } catch (err) {
        console.error("Помилка завантаження аватара:", err);

        avatarStoriesYou.style.background = userData.color;
        avatarStoriesYou.innerText =
          userData?.name ? userData.name.charAt(0).toUpperCase() : "?";
      }
    } else {
      avatarStoriesYou.style.background = userData.color;
      avatarStoriesYou.innerText =
        userData?.name ? userData.name.charAt(0).toUpperCase() : "?";
    }
  } catch (err) {
    console.error("Помилка завантаження користувача:", err);
  }
}
const avatarLibraryEl = document.createElement("div");
function loadLibrary(user) {
    const authorInfo = document.getElementById("author-info");
    authorInfo.innerHTML = "";

    const uid = firebase.auth().currentUser.uid;
    const userRef = database.ref("users/" + uid);
    const historyRef = database.ref("users/" + uid + "/history");

    userRef.once("value")
        .then(snapshot => {
            const userData = snapshot.val() || {};

            // ▸ Основна панель автора


avatarLibraryEl.id = "avatar-library";
avatarLibraryEl.classList.add("avatar");
authorInfo.appendChild(avatarLibraryEl);

const fullNameLibrary = document.createElement("p");
fullNameLibrary.textContent = `${userData.name || ""} ${userData.supername || ""}`;
authorInfo.appendChild(fullNameLibrary);
const more = document.createElement("button");
more.classList.add("more-profile");
more.innerHTML = `<i class="material-symbols">more_vert</i>`;
authorInfo.appendChild(more);
const moreMenu = document.createElement("div");
        moreMenu.classList.add("more-menu");
        moreMenu.style.display = "none";
more.onclick = e => {
    e.stopPropagation();

    document.querySelectorAll(".more-menu").forEach(m => {
        if (m !== moreMenu) m.style.display = "none";
    });

    moreMenu.style.display =
        moreMenu.style.display === "block" ? "none" : "block";
};

authorInfo.addEventListener("click", e => {
    if (!e.target.closest(".more-menu") && !e.target.closest(".more-profile")) {
        document.querySelectorAll(".more-menu").forEach(m => {
            m.style.display = "none";
        });
    }
});
const editWallpaperProfile = document.createElement("button");
editWallpaperProfile.classList.add("edit-wallpaper-profile");
editWallpaperProfile.innerHTML = `<a style="padding:3px 0px; display:flex; border-radius: 50%; align-items:center; justify-content:center;"><i class="material-symbols">palette</i><span data-i18n="edit-wallpaper-profile">Редагувати шпалери профілю</span><sup class="badge-new-edit-wallpaper-profile" data-i18n="new">NEW</sup></a>`;
editWallpaperProfile.onclick = () => {
        showEditWallpaperProfileModal();
          
        }
moreMenu.appendChild(editWallpaperProfile);
        const copyLinkProfile = document.createElement("button");
        copyLinkProfile.classList.add("copy-link-profile");
        copyLinkProfile.innerHTML = `<a style="padding:3px 8px; display:flex; border-radius: 50%; align-items:center; justify-content:center;"><i class="material-symbols">link_2</i><span data-i18n="copy-link-profile">Копіювати посилання</span><sup class="badge-new-copy-link-profile" data-i18n="new">NEW</sup></a>`;
        copyLinkProfile.onclick = async () => {
        const profileUrl = `https://zhenya14.github.io/VideoVortex/profile.html?uid=${uid}`;

    try {
        // Копіюємо посилання у буфер обміну
        await navigator.clipboard.writeText(profileUrl);

        // Візуальний відгук на кнопці (збереження старої іконки та зміна тексту)
        const originalContent = copyLinkProfile.innerHTML;
        copyLinkProfile.innerHTML = `<a style="padding:3px 8px; display:flex; border-radius: 50%; align-items:center; justify-content:center;"><i class="material-symbols">check</i><p data-i18n="copied">Скопійовано</p></a>`; // якщо використовуєте material-icons, замініть на <i class="material-icons">check</i>
        copyLinkProfile.classList.add('copied-success'); // додаємо клас для зміни стилю (наприклад, зелений фон)

        // Повертаємо кнопку до початкового стану через 2 секунди
        setTimeout(() => {
            copyLinkProfile.innerHTML = originalContent;
            copyLinkProfile.classList.remove('copied-success');
        }, 2000);

    } catch (err) {
        console.error('Помилка копіювання посилання:', err);
        alert('Не вдалося скопіювати посилання автоматично.');
    }
          
        };
        moreMenu.appendChild(copyLinkProfile);
// Контейнер для кнопок управления профилем
const buttons = document.createElement("div");
buttons.classList.add("buttons-library");

// Кнопка "Изменить"
const editProfile = document.createElement("button");
editProfile.classList.add("edit");
// Заменили <p> на <span>, чтобы убрать дефолтные отступы абзаца
editProfile.innerHTML = `<i class="material-symbols">edit</i><span data-i18n="edit-profile">Змінити</span>`;
editProfile.onclick = showAccountModal;
buttons.appendChild(editProfile);

// Кнопка "Архив" (стиль Telegram)
const archive = document.createElement("button");
archive.classList.add("archive");
// Заменили <p> на <span> для идеального центрирования
archive.innerHTML = `
  <i class="material-symbols">archive</i>
  <span data-i18n="archive">Архів</span>
  <sup class="badge-new" data-i18n="new">NEW</sup>
`;
archive.onclick = () => {
  showArchiveModal();
};
buttons.appendChild(archive);
const yourProfile = document.createElement("button");
yourProfile.classList.add("your-profile");
// Заменили <p> на <span> для идеального центрирования
yourProfile.innerHTML = `
  <i class="material-symbols">account_circle</i>
  <span data-i18n="my-profile">Мій профіль</span>
  <sup class="badge-new" data-i18n="new">NEW</sup>
`;
yourProfile.onclick = () => {
  window.location.href = `profile.html?uid=${uid}`
}
buttons.appendChild(yourProfile);
authorInfo.appendChild(buttons);

// ▸ Контейнер для истории
const historyInfo = document.createElement("div");
historyInfo.classList.add("history-info");

const historyTitle = document.createElement("p");
historyTitle.innerHTML = `<span data-i18n="history">Історія переглядів</span><sup class="badge-new" data-i18n="new">NEW</sup>:`;

const deleteHistoryViews = document.createElement("button");
deleteHistoryViews.classList.add("delete-history-views");
deleteHistoryViews.innerHTML = `<i class="material-symbols">delete</i><span data-i18n="delete-history-views">Очистити історію переглядів</span>`;
deleteHistoryViews.onclick = () => {
  deleteAllViewsHistory();
};

historyInfo.appendChild(historyTitle);
historyInfo.appendChild(deleteHistoryViews);
authorInfo.appendChild(historyInfo);
authorInfo.appendChild(moreMenu);

// Добавляем все в главный контейнер библиотеки

            // ▸ Завантаження історії
            historyRef.once("value")
                .then(snapshot => {
                    const historyData = snapshot.val() || {};
                    if (Object.keys(historyData).length === 0) {
                        const emptyMsg = document.createElement("p");
                        emptyMsg.textContent = "Історія переглядів порожня";
                        historyInfo.appendChild(emptyMsg);
                        return;
                    }

                    Object.keys(historyData).forEach(videoKey => {
                        const video = historyData[videoKey];

                        // ▸ Контейнер одного відео в історії
                        const videoContainer = document.createElement("div");
                        videoContainer.classList.add("history-item");
                        videoContainer.style.display = "flex";
                        videoContainer.style.alignItems = "center";
                        videoContainer.style.marginBottom = "8px";
                        videoContainer.style.cursor = "pointer";

                        // ▸ Прев’ю
                        const thumbnail = document.createElement("img");
                        thumbnail.src = video.thumbnail || "default.jpg";
                        thumbnail.alt = video.title;
                        thumbnail.style.width = "80px";
                        thumbnail.style.height = "45px";
                        thumbnail.style.objectFit = "cover";
                        thumbnail.style.borderRadius = "6px";
                        thumbnail.style.marginRight = "10px";
                        videoContainer.appendChild(thumbnail);

                        // ▸ Текстова інформація
                        const info = document.createElement("div");
                        info.innerHTML = `
                            <p style="margin:0;font-weight:bold;">${video.title}</p>
                            <p style="margin:0;font-size:0.9em;color:#ccc;">Автор: ${video.author}</p>
                            <p style="margin:0;font-size:0.8em;color:#999;">Останній перегляд: ${new Date(video.lastPlayed).toLocaleString()}</p>
                        `;
                        videoContainer.appendChild(info);

                        // ▸ Клік на відео
                        videoContainer.onclick = () => {
                            window.location.href = `video.html?key=${videoKey}`;
                        };

                        historyInfo.appendChild(videoContainer);
                    });
                })
                .catch(err => console.error("Помилка завантаження історії:", err));

            applyTranslations();
        })
        .catch(err => console.error("Помилка завантаження даних користувача:", err));
}
const edit = document.getElementById("edit-profile");
edit.onclick = showAccountModal;
const blockedUsersBtn = document.getElementById("blocked-button");
blockedUsersBtn.onclick = () => {
                const user = firebase.auth().currentUser;
                if (!user) return alert("Спочатку увійдіть у акаунт");
                showBlockedUsersModal();
            };
function showBlockedUsersModal() {
  const modal = document.getElementById("blocked-users-modal");
  const list = document.getElementById("blockedUsersList");
  const user = firebase.auth().currentUser;

  if (!modal || !list) return console.error("Модальне вікно не знайдено");
  if (!user) return alert("Спочатку увійдіть у акаунт");

  const uid = user.uid;
  list.innerHTML = "";

  database.ref(`users/${uid}/blockedUsers`).once("value")
    .then(snapshot => {
      const blockedData = snapshot.val() || {};
      if (!Object.keys(blockedData).length) {
        const p = document.createElement("p");
        p.classList.add("modal-blocked");
        p.textContent = "Список порожній";
        list.appendChild(p);
      } else {
        Object.keys(blockedData).forEach(blockedUid => {
          const p = document.createElement("p");
          p.classList.add("modal-blocked");
          p.textContent = blockedData[blockedUid].userName || "Анонім";

          const unblockBtn = document.createElement("button");
          unblockBtn.textContent = "Розблокувати";
          unblockBtn.onclick = () => {
            database.ref(`users/${uid}/blockedUsers/${blockedUid}`).remove()
              .then(() => p.remove())
              .catch(console.error);
          };

          p.appendChild(unblockBtn);
          list.appendChild(p);
        });
      }
      modal.style.display = "flex";
    })
    .catch(console.error);

  // Закриття модалки по X
  document.querySelector(".close-blocked-modal")?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закриття по кліку поза модаллю
  window.addEventListener("click", (event) => {
    if (event.target === modal) modal.style.display = "none";
  });
}
function showAccountNotificationsModal() {
   const modal = document.getElementById("account-notifications-modal");
   const list = document.getElementById("accountNotificationsList");
   const user = firebase.auth().currentUser;

   if (!modal || !list) return console.error("Модальне вікно не знайдено");
   if (!user) return alert("Спочатку увійдіть у акаунт");

   const uid = user.uid;
   list.innerHTML = "";

   database.ref(`notifications/${uid}`).once("value")
     .then(snapshot => {
       const notificationsData = snapshot.val() || {};
       modal.style.display = "flex";
     })
     .catch(console.error);

   // Закриття модалки по X
   document.querySelector(".close-account-notifications-modal")?.addEventListener("click", () => {
     modal.style.display = "none";
   });

   // Закриття по кліку поза модаллю
   window.addEventListener("click", (event) => {
     if (event.target === modal) modal.style.display = "none";
   });
 }
function showEditWallpaperProfileModal() {
  document.getElementById("edit-wallpaper-profile-modal").style.display = "flex";
}
function showAccountModal() {
  document.getElementById("account-modal").style.display = "flex";
}
function showArchiveModal() {
  document.getElementById("archive-modal").style.display = "flex";
}

const videosLoaded = new Set(); // зверху скрипта

const videoMemoryCache = {};
const CACHE_TTL = 15 * 60 * 1000; // 15 хв

function setVideoCache(key, data) {
  localStorage.setItem("video_cache_" + key, JSON.stringify({
    data,
    time: Date.now()
  }));
}

function getVideoCache(key) {
  const raw = localStorage.getItem("video_cache_" + key);
  if (!raw) return null;

  const parsed = JSON.parse(raw);

  if (Date.now() - parsed.time > CACHE_TTL) {
    localStorage.removeItem("video_cache_" + key);
    return null;
  }

  return parsed.data;
}

function cacheImage(url) {
  if (!url) return;
  const img = new Image();
  img.src = url;
}function showBlockedScreen(text) {
    document.body.innerHTML = `
        <div style="
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:100vh;
            font-size:20px;
            text-align:center;
            gap:12px;
        ">
            <div>${text}</div>
            <button onclick="openAppeal?.()">Подати апеляцію</button>
        </div>
    `;
}
async function forceLogout() {
    try {
        await auth.signOut();
    } catch (e) {
        console.error(e);
    }

    currentUser = null;
    currentUserEmail = null;
    let currentUserUid = null;
    currentUserRole = "user";
    currentUserStatus = "active";

    localStorage.clear();
}
async function checkUserStatus(user) {
    if (!user) return false;

    const snap = await database.ref(`moderation/users/${user.uid}`).once("value");
    const data = snap.val();

    if (!data) return false;

    const status = data.status || "active";

    currentUserStatus = status;

    // 🔴 BAN / HARD BLOCK
    if (status === "banned" || status === "frozen_hard" || status === "disabled") {
        await forceLogout();
        showBlockedScreen("⛔ Акаунт заблоковано");
        return false;
    }

    // ❄️ SOFT FREEZE
    if (status === "frozen" || status === "frozen_soft") {
        await forceLogout();
        showBlockedScreen("❄️ Акаунт заморожено");
        return false;
    }

    return true;
}
async function loadPopularVideos() {
    const videoGallery = document.getElementById("video-gallery");
    if (!videoGallery) return;

    videoGallery.innerHTML = "";

    const showNSFWGlobal = typeof showNSFW !== "undefined" ? showNSFW : false;

    database.ref("videos").on("child_added", async snapshot => {
        const videoData = snapshot.val();
        const videoKey = snapshot.key;

        if (!videoData) return;

        // =====================
        // EXPIRE
        // =====================
        if (
            videoData.autoDelete24h &&
            videoData.expiresAt &&
            Date.now() > videoData.expiresAt
        ) return;

        // =====================
        // CACHE
        // =====================
        let videoDataRaw = videoMemoryCache[videoKey];

        if (!videoDataRaw) {
            const local = getVideoCache(videoKey);

            videoDataRaw = local || videoData;
            videoMemoryCache[videoKey] = videoDataRaw;
            setVideoCache(videoKey, videoDataRaw);
        } else {
            videoDataRaw = videoData;
            videoMemoryCache[videoKey] = videoData;
            setVideoCache(videoKey, videoData);
        }

        // =====================
        // FILTERS (до UI)
        // =====================

        // NSFW
        if (videoDataRaw.nsfw && !showNSFWGlobal) return;

        // SCORE
        if (!videoDataRaw.score || videoDataRaw.score < 15) return;

        // BLOCK (ОДИН РАЗ)
        if (videoDataRaw.authorUid) {
            try {
                const blockedYou = await isUserBlockedByMe(videoDataRaw.authorUid);
                const blockedMe = await didUserBlockMe(videoDataRaw.authorUid);

                if (blockedMe || blockedYou) return;
            } catch (e) {
                console.warn("Block error", e);
                return;
            }
        }

        // PRIVATE
        if (videoDataRaw.private && videoDataRaw.email !== currentUserEmail) return;

        // DOMAIN
        if (
            videoDataRaw.domainRestrict &&
            (!currentUserEmail ||
                !currentUserEmail.endsWith("@kfccte-nau.ukr.education"))
        ) return;

        // DUPLICATE
        if (document.querySelector(`[data-id="${videoKey}"]`)) return;

        // =====================
        // UI
        // =====================

        const videoWrapper = document.createElement("div");
        videoWrapper.className = "video-thumb-wrapper";

        const videoElement = document.createElement("img");
        videoElement.classList.add("video-item");
        videoElement.src = videoData.thumbnail || "default.jpg";
        videoElement.style.filter = videoData.nsfw ? "blur(20px)" : "none";

        cacheImage(videoElement.src);

        // 🔥 POPULAR (ТЕПЕР ПРАВИЛЬНО)
        if (videoDataRaw.score > 15) {
            const popular = document.createElement("div");
            popular.className = "stories-timer";

            const span = document.createElement("span");
            span.textContent = "🔥 Popular";

            popular.appendChild(span);
            videoWrapper.appendChild(popular);
        }

        // TIMER
        if (videoDataRaw.autoDelete24h && videoDataRaw.expiresAt) {
            const timer = document.createElement("div");
            timer.className = "stories-timer";

            const span = document.createElement("span");
            timer.appendChild(span);

            const interval = setInterval(() => {
                const diff = videoDataRaw.expiresAt - Date.now();

                if (diff <= 0) {
                    clearInterval(interval);
                    videoWrapper.remove();
                    return;
                }

                const h = Math.floor(diff / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                const s = Math.floor((diff % 60000) / 1000);

                span.textContent =
                    `${String(h).padStart(2, "0")}:` +
                    `${String(m).padStart(2, "0")}:` +
                    `${String(s).padStart(2, "0")}`;
            }, 1000);

            videoWrapper.appendChild(timer);
        }

        // CLICK
        videoElement.onclick = () => {
            const viewedKey = `viewed_${videoKey}`;

            if (!localStorage.getItem(viewedKey)) {
                database.ref("videos/" + videoKey).update({
                    views: (videoDataRaw.views || 0) + 1
                });
                localStorage.setItem(viewedKey, true);
            }

            window.location.href = `video.html?key=${videoKey}`;
        };

        // INFO
        const infoElement = document.createElement("div");
        infoElement.className = "video-info";

        const avatar = document.createElement("div");
        avatar.className = "avatar";

        if (videoDataRaw.authorAvatar) {
            avatar.style.backgroundImage = `url(${videoDataRaw.authorAvatar})`;
            avatar.style.backgroundSize = "cover";
avatar.style.backgroundPosition = "center";
avatar.style.backgroundRepeat = "no-repeat";
        } else {
            avatar.textContent = getInitials(videoDataRaw.author);
        }

        avatar.onclick = () => {
            window.location.href = `profile.html?uid=${videoDataRaw.authorUid}`;
        };

        const details = document.createElement("div");
        details.className = "video-details";

        details.innerHTML = `
            ${sanitizeHTML(videoDataRaw.title || "Без назви")}
            ${videoDataRaw.private ? "🔒" : ""}
            ${videoDataRaw.nsfw ? "NSFW" : ""}
        `;

        infoElement.appendChild(avatar);
        infoElement.appendChild(details);

        const container = document.createElement("div");
        container.className = "video-container";
        container.dataset.id = videoKey;

        videoWrapper.appendChild(videoElement);
        container.appendChild(infoElement);
        container.appendChild(videoWrapper);

        videoGallery.appendChild(container);
    });
}
async function unFreezeUser(uid) {

    try {

        const me = auth.currentUser;
        if (!me) return false;

        const meSnap = await database.ref(`users/${me.uid}`).once("value");
        if (meSnap.val()?.role !== "moderator") return false;

        const userSnap = await database.ref(`users/${uid}`).once("value");
        if (!userSnap.exists() || userSnap.val()?.role === "moderator") return false;

        // moderation state
        await database.ref(`moderation/users/${uid}`).set({
            status: null,
            frozenAt: firebase.database.ServerValue.TIMESTAMP
        });

        // videos safe update (NO root update)
        const snap = await database
            .ref("videos")
            .orderByChild("authorUid")
            .equalTo(uid)
            .once("value");

        const promises = [];

        snap.forEach(child => {
            promises.push(
                database.ref(`videos/${child.key}/authorStatus`).set(status)
            );
        });

        await Promise.all(promises);

        return true;

    } catch (e) {
        console.error(e);
        return false;
    }
}
async function freezeUser(uid, status = "frozen_soft") {

    const allowed = ["frozen_soft", "frozen_hard", "disabled"];
    if (!uid || !allowed.includes(status)) return false;

    try {

        const me = auth.currentUser;
        if (!me) return false;

        const meSnap = await database.ref(`users/${me.uid}`).once("value");
        if (meSnap.val()?.role !== "moderator") return false;

        const userSnap = await database.ref(`users/${uid}`).once("value");
        if (!userSnap.exists() || userSnap.val()?.role === "moderator") return false;

        // moderation state
        await database.ref(`moderation/users/${uid}`).set({
            status,
            frozenAt: firebase.database.ServerValue.TIMESTAMP
        });

        // videos safe update (NO root update)
        const snap = await database
            .ref("videos")
            .orderByChild("authorUid")
            .equalTo(uid)
            .once("value");

        const promises = [];

        snap.forEach(child => {
            promises.push(
                database.ref(`videos/${child.key}/authorStatus`).set(status)
            );
        });

        await Promise.all(promises);

        return true;

    } catch (e) {
        console.error(e);
        return false;
    }
}
      function needSupport() {
    const modal = document.getElementById("support-author-modal");
    const content = document.getElementById("support-information");

    if (!modal || !content) return;

    content.innerHTML = `
        <button style="display: none;"
            class="support-modal-close"
            onclick="closeSupportModal()"
            aria-label="Закрити"
        >
            ×
        </button>

        <div class="support-icon">💙</div>

        <h2>Ви не самі</h2>

        <p>
            Добре, що ви сказали про це.
            Спробуйте зараз звернутися до людини,
            якій довіряєте.
        </p>

        <p>
            Якщо вам безпосередньо загрожує небезпека,
            зверніться до місцевих екстрених служб
            або попросіть дорослого, якому довіряєте,
            залишитися поруч.
        </p>

        <div class="support-actions" style="display: none;">

            <button
                class="support-help"
                onclick="openSupportResources()"
            >
                Ресурси підтримки
            </button>

            <button
                class="support-ok"
                onclick="closeSupportModal()"
            >
                Закрити
            </button>

        </div>
    `;

    modal.classList.add("active");
}


function openSupportResources() {
    // Тут можна відкрити окрему сторінку VideoVortex
    window.location.href = "support.html";
}
async function closeSupportModal() {
    const modal = document.getElementById("support-author-modal");
    const user = firebase.auth().currentUser;

    if (!user) return;

    try {
        const ref = database.ref(`supportRequests/${user.uid}`);
        const snapshot = await ref.once("value");

        const requests = snapshot.val();

        if (requests) {
            const updates = {};

            Object.entries(requests).forEach(([key, request]) => {
                if (request?.status === "pending") {
                    updates[`${key}/status`] = "read";
                    updates[`${key}/timestamp`] =
                        firebase.database.ServerValue.TIMESTAMP;
                }
            });

            if (Object.keys(updates).length > 0) {
                await ref.update(updates);
            }
        }

        if (modal) {
            modal.style.display = "none";
        }

    } catch (error) {
        console.error("❌ Помилка закриття support:", error);
    }
                                   }
function clearFeedCache() {
  Object.keys(localStorage)
    .filter(k => k.startsWith("video_cache_"))
    .forEach(k => localStorage.removeItem(k));
}
function cleanupExpiredStories() {
    database.ref("stories").once("value", snap => {
        snap.forEach(child => {
            const s = child.val();

            if (s.expiresAt && Date.now() > s.expiresAt) {
                child.ref.remove();
            }
        });
    });
}
async function loadVideos() {
    const videoGallery = document.getElementById("video-gallery");
    if (!videoGallery) return;

    videoGallery.innerHTML = "";
    const showNSFWGlobal = showNSFW;

    database.ref("videos").on("child_added", async snapshot => {
        const videoData = snapshot.val();
        const videoKey = snapshot.key;

        const isExpired =
            videoData.autoDelete24h &&
            videoData.expiresAt &&
            Date.now() > videoData.expiresAt;

        if (isExpired) return;

        // =====================
        // FIXED CACHE LOGIC
        // =====================

        let videoDataRaw = videoMemoryCache[videoKey];

        if (!videoDataRaw) {
            const local = getVideoCache(videoKey);

            if (local) {
                videoDataRaw = local;
            } else {
                videoDataRaw = videoData;
                setVideoCache(videoKey, videoData);
            }

            videoMemoryCache[videoKey] = videoDataRaw;
        } else {
            // sync update fix
            videoDataRaw = videoData;
            videoMemoryCache[videoKey] = videoData;
            setVideoCache(videoKey, videoData);
        }

        // 🔹 1. Фільтри
        if (videoDataRaw.nsfw && !showNSFWGlobal) {
          clearFeedCache();
          return;
}
        if (videoDataRaw.authorUid) {
          const blockedYou = await isUserBlockedByMe(videoDataRaw.authorUid);
            const blockedMe = await didUserBlockMe(videoDataRaw.authorUid);
            if (blockedMe || blockedYou) {
              clearFeedCache();
              return;
            }
        }

        if (videoDataRaw.private && videoDataRaw.email !== currentUserEmail) {
           clearFeedCache();
          return;
        }

        if (
            videoDataRaw.domainRestrict &&
            (!currentUserEmail ||
                !currentUserEmail.endsWith("@kfccte-nau.ukr.education"))
        ) return;
        // 🔹 2. Запобігання дублюванню
        if (document.querySelector(`[data-id="${videoKey}"]`)) return;

        const videoWrapper = document.createElement("div");
        videoWrapper.className = "video-thumb-wrapper";

        const videoElement = document.createElement("img");
        videoElement.classList.add("video-item");
        videoElement.src = videoData.thumbnail || "default.jpg";
        videoElement.dataset.title = videoData.title || "";
        videoElement.dataset.description = videoData.description || "";
        videoElement.dataset.author = videoData.author || "";
        videoElement.style.filter = videoData.nsfw ? "blur(20px)" : "none";

        cacheImage(videoElement.src);

        // =====================
        // FIXED TIMER (NO LEAK)
        // =====================
if (videoDataRaw.score > 15) {
            const popular = document.createElement("div");
            popular.className = "stories-timer";

            const popularSpan = document.createElement("span");
            popularSpan.textContent = "🔥 Popular";
            popular.appendChild(popularSpan);
            videoWrapper.appendChild(popular);
}
        if (videoDataRaw.autoDelete24h && videoDataRaw.expiresAt) {
            const timer = document.createElement("div");
            timer.className = "stories-timer";

            const timeSpan = document.createElement("span");
            timer.appendChild(timeSpan);

            let interval;

            const update = () => {
                const diff = videoDataRaw.expiresAt - Date.now();

                if (diff <= 0) {
                    clearInterval(interval);
                    videoWrapper.remove();
                    return;
                }

                const h = Math.floor(diff / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                const s = Math.floor((diff % 60000) / 1000);

                timeSpan.textContent =
                    `${String(h).padStart(2, "0")}:` +
                    `${String(m).padStart(2, "0")}:` +
                    `${String(s).padStart(2, "0")}`;
            };

            update();
            interval = setInterval(update, 1000);

            videoWrapper.appendChild(timer);
        }

        // 🔹 4. Клік по відео
        videoElement.onclick = () => {
            const viewedKey = `viewed_${videoKey}`;

            if (!localStorage.getItem(viewedKey)) {
                const newViewCount = (videoDataRaw.views || 0) + 1;

                database.ref("videos/" + videoKey).update({ views: newViewCount })
                    .then(() => localStorage.setItem(viewedKey, true))
                    .catch(console.error);
            }

            const videoParams = new URLSearchParams({
                key: videoKey
            });

            window.location.href = `video.html?${videoParams.toString()}`;
        };

        // 🔹 6. Інформація
        const infoElement = document.createElement("div");
        infoElement.classList.add("video-info");



  const avatar = document.createElement("div");
avatar.className = "avatar";

const authorEl = document.createElement("span");
authorEl.textContent = videoDataRaw?.author || "Анонім";

        if (videoDataRaw.authorStatus == "frozen_soft") {
          avatar.innerText = "👻";
          avatar.style.background = `${videoDataRaw.authorColor}`;
          } else if (videoDataRaw.authorAvatar) {
            avatar.style.backgroundImage = `url(${videoDataRaw.authorAvatar})`;
            avatar.style.backgroundSize = "cover";
avatar.style.backgroundPosition = "center";
avatar.style.backgroundRepeat = "no-repeat";
          }  else {
            avatar.innerText = getInitials(videoDataRaw.author);
            avatar.style.background = `${videoDataRaw.authorColor}`;
        }

        avatar.onclick = () => {
            const infoParams = new URLSearchParams({
                uid: videoDataRaw.authorUid || "",
            });
            window.location.href = `profile.html?${infoParams.toString()}`;
        };

        const detailsElement = document.createElement("div");
        detailsElement.classList.add("video-details");

        const isFrozen = videoDataRaw.authorStatus === "frozen_soft";

detailsElement.innerHTML = `
    ${sanitizeHTML(videoDataRaw.title || "Без назви")}
    ${videoDataRaw.private ? "<span style='color: orange;'>🔒 <span data-i18n='private'></span></span>" : ""}
    ${videoDataRaw.nsfw ? "<span style='color: red;'>NSFW</span>" : ""}

    <br>

    Автор: ${
        isFrozen
            ? "❄️ <span data-i18n='account-deleted'>Видалений акаунт</span>"
            : sanitizeHTML(videoDataRaw.author || "Анонім")
    }

    ${videoDataRaw.owner === true && videoDataRaw.verifiedBadge
        ? `<img class='adaptive-stroke' src='${videoDataRaw.verifiedBadge}'>`
        : ""
    }

    <br>

    ${getSafeBanduraHTML(videoDataRaw.banduraExtra)}
    <div class='info-element'>
<p style='display: flex; justify-content: center; align-items: center;'><i class='material-symbols'>play_arrow</i>${videoDataRaw.views || 0}</p><span class='info-divider'>•</span>
 <p style='display: flex; justify-content: center; align-items: center;'><i class='material-symbols'>event</i>${videoDataRaw.publishDate || "—"}
</p></div>`;
    

        // 🔹 MENU
        const moreBtn = document.createElement("a");
        moreBtn.classList.add("more-btn");
        moreBtn.innerHTML = `<i class="material-symbols">more_vert</i>`;

        const actionMenu = document.createElement("div");
        actionMenu.classList.add("action-menu");
        actionMenu.style.display = "none";
if (currentUserRole === "moderator") {

            const freezeBtn = document.createElement("button");
            freezeBtn.textContent = "❄ Заморозити";

            freezeBtn.onclick = async () => {
                await freezeUser(videoDataRaw.authorUid, "frozen_soft");
            };
           const unFreezeBtn = document.createElement("button");
           
            unFreezeBtn.textContent = "Розморозити";
            unFreezeBtn.onclick = async () => {
                await unFreezeUser(videoDataRaw.authorUid);
            };
            const banBtn = document.createElement("button");
            banBtn.textContent = "⛔ Бан";

            banBtn.onclick = async () => {
                await freezeUser(videoDataRaw.authorUid, "frozen_hard");
            };

            actionMenu.appendChild(freezeBtn);
            actionMenu.appendChild(unFreezeBtn);
            actionMenu.appendChild(banBtn);
        }

        if (currentUserEmail === videoDataRaw.email || currentUserEmail === "zhuzhun2008@gmail.com") {
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = `<a style="padding:3px 8px; display:flex; border-radius: 50%; align-items:center; justify-content:center;">
                <i class="material-symbols">delete</i>Видалити</a>`;

            deleteButton.onclick = () => {
                deleteVideo(videoKey, videoDataRaw.url);
                actionMenu.style.display = "none";
            };

            actionMenu.appendChild(deleteButton);
        }

        if (currentUserEmail === videoDataRaw.email) {
            const editButton = document.createElement("button");
            editButton.innerHTML = `<a style="padding:3px 8px; display:flex; align-items:center; justify-content:center;">
                <i class="material-symbols">edit</i>Редагувати</a>`;

            editButton.onclick = () => {
                editVideo(videoKey, videoDataRaw);
                actionMenu.style.display = "none";
            };

            actionMenu.appendChild(editButton);
        }

        moreBtn.onclick = e => {
            e.stopPropagation();

            document.querySelectorAll(".action-menu").forEach(m => {
                if (m !== actionMenu) m.style.display = "none";
            });

            actionMenu.style.display =
                actionMenu.style.display === "block" ? "none" : "block";
        };

        // FIX: listener only once
        if (!videoGallery.dataset.listener) {
            videoGallery.addEventListener("click", e => {
                if (!e.target.closest(".action-menu") && !e.target.closest(".more-btn")) {
                    document.querySelectorAll(".action-menu").forEach(m => m.style.display = "none");
                }
            });

            videoGallery.dataset.listener = "true";
        }

        infoElement.appendChild(avatar);
        infoElement.appendChild(detailsElement);
        infoElement.appendChild(moreBtn);
        infoElement.appendChild(actionMenu);

        const container = document.createElement("div");
        container.classList.add("video-container");
        container.dataset.id = videoKey;

        container.appendChild(infoElement);
        videoWrapper.appendChild(videoElement);
        container.appendChild(videoWrapper);

        videoGallery.appendChild(container);
      applyTranslations();
    });
}
function cleanupExpiredVideos() {
    database.ref("videos").once("value", snap => {
        snap.forEach(child => {
            const v = child.val();

            if (v.autoDelete24h && v.expiresAt && Date.now() > v.expiresAt) {
                child.ref.remove();
            }
        });
    });
}


const randomComments = [
  "Класне відео! 🎬👍",
  "Дуже цікаво 🤓✨",
  "Дякую за контент 🙏💖",
  "Супер пояснення!👌📚",
  "Підтримую 💪🔥",
  "Топчик!⭐😎"
];
function formatTime(seconds) {
    seconds = Math.floor(seconds); // округлюємо до цілого числа
    const h = Math.floor(seconds / 3600); // години
    const m = Math.floor((seconds % 3600) / 60); // хвилини
    const s = seconds % 60; // секунди

    const mm = m.toString().padStart(2, "0");
    const ss = s.toString().padStart(2, "0");

    if (h > 0) {
        const hh = h.toString().padStart(2, "0");
        return `${hh}:${mm}:${ss}`;
    } else {
        return `${mm}:${ss}`;
    }
}
function insertRandomComment(videoKey) {
  const inputId = `comment-input-${videoKey}`;
  const input = document.getElementById(inputId);

  if (input) {
    const randomIndex = Math.floor(Math.random() * randomComments.length);
    input.value = randomComments[randomIndex];
  }
}
async function deleteArchive(url, archiveId) {
  if (!confirm("Ви впевнені, що хочете видалити цей архів?")) return;

  const uid = auth.currentUser.uid;

  try {
    // 1. Delete from Storage (ВАЖЛИВО: через реальний path)
    const storageRef = firebase.storage().refFromURL(url);
    await storageRef.delete();

    // 2. Delete only specific DB record
    await firebase.database()
      .ref(`users/${uid}/archive/${archiveId}`)
      .remove();

    // 3. UI update
    showNotificationModal();
    message.innerHTML = "Відео успішно видалено.";
    loadSecureFiles();

  } catch (error) {
    console.error("Помилка при видаленні відео:", error);
    showNotificationModal();
    message.innerHTML = "Помилка: " + error.message;
  }
}
async function deleteVideo(videoKey, videoURL) {
    if (!videoURL || !videoKey) {
        showNotificationModal();
        message.innerHTML = "Немає даних для видалення відео";
        return;
    }

    if (!confirm("Ви впевнені, що хочете видалити це відео?")) return;

    try {
        // 🔹 1. Storage delete
        const storageRef = storage.refFromURL(videoURL);
        await storageRef.delete();

        // 🔹 2. Delete video document
        await database.ref(`videos/${videoKey}`).remove();

        // 🔹 3. Delete all comments for this video
        const snapshot = await database.ref("comments")
            .orderByChild("videoKey")
            .equalTo(videoKey)
            .once("value");

        const updates = {};

        snapshot.forEach(child => {
            updates[`comments/${child.key}`] = null;
        });

        if (Object.keys(updates).length > 0) {
            await database.ref().update(updates);
        }

        // 🔹 4. UI update
        showNotificationModal();
        message.innerHTML = "Відео успішно видалено.";
        loadVideos();

    } catch (error) {
        console.error("Помилка при видаленні відео:", error);
        showNotificationModal();
        message.innerHTML = "Помилка: " + error.message;
    }
}
async function migrateUsersToSearch() {
    try {
        console.log("🔄 Починаємо міграцію...");

        const snapshot = await database
            .ref("users")
            .once("value");

        const users = snapshot.val() || {};
        const updates = {};

        let count = 0;

        Object.entries(users).forEach(([uid, user]) => {

            if (!user) return;

            updates[`userSearch/${uid}`] = {
                name: user.name || "",
                supername: user.supername || "",
                username: user.username || "",
                privateProfile: user.privateProfile === true
            };

            count++;
        });

        if (count === 0) {
            console.log("ℹ️ Користувачів для міграції немає.");
            return;
        }

        await database.ref().update(updates);

        console.log(
            `✅ Міграція завершена. Перенесено: ${count} користувачів.`
        );

    } catch (error) {
        console.error("❌ Помилка міграції:", error);
    }
}
migrateUsersToSearch();
function createSecondChannel() {
  const name = document.getElementById("second-channel-name").value.trim();
  if (!name) return showNotificationModal();
  message.innerHTML = "Введи назву";

  const uid = auth.currentUser.uid;

  database.ref(`users/${uid}/channels/second`).set({
    name,
    avatar: name.charAt(0).toUpperCase()
  });
showNotificationModal();
  message.innerHTML = "Другий канал створено ✅";
}
function editVideo(videoKey, videoDataRaw) {
  currentEditKey = videoKey;
  document.getElementById("edit-modal").style.display = 'flex';
const editPrewiew = document.querySelector(".image-container img");
editPrewiew.src = videoDataRaw.thumbnail;
  // Заповнюємо поля редагування
  document.getElementById("edit-video-title").value = videoDataRaw.title || '';
  document.getElementById("edit-video-description").value = videoDataRaw.description || '';
document.getElementById("edit-private-checkbox").checked = videoDataRaw.private || false;
}

function saveVideoChanges() {

  if (!currentEditKey) {
    showNotificationModal();
    message.innerHTML = "Відео не вибрано.";
    return;
  }

  const newTitle = document.getElementById("edit-video-title").value.trim();
  const newPrivate = document.getElementById("edit-private-checkbox").checked;
  const newDescription = document.getElementById("edit-video-description").value.trim();
  const newPreview = document.getElementById("action-btn").files[0];

  if (!newTitle) {
    showNotificationModal();
    message.innerHTML = "Назва не може бути порожньою!";
    return;
  }

  function updateVideo(thumbnailURL = null) {

    const updateData = {
      title: newTitle,
      description: newDescription,
      private: newPrivate
    };

    if (thumbnailURL) {
      updateData.thumbnail = thumbnailURL;
    }

    database.ref("videos/" + currentEditKey).update(updateData)
      .then(() => {

        showNotificationModal();
        message.innerHTML = "✅ Відео оновлено!";

        document.getElementById("edit-modal").style.display = "none";

        currentEditKey = null;

        loadVideos();

      })
      .catch(error => {

        showNotificationModal();
        message.innerHTML =
          "❌ Помилка при оновленні відео: " + error.message;

      });
  }

  // Якщо вибрана нова превʼюшка
  if (newPreview) {

    const thumbRef = storage.ref(
      `thumbnails/${Date.now()}_${newPreview.name}`
    );

    thumbRef.put(newPreview)
      .then(() => {
        return thumbRef.getDownloadURL();
      })
      .then(url => {
        updateVideo(url);
      })
      .catch(error => {

        showNotificationModal();
        message.innerHTML =
          "❌ Помилка завантаження превʼюшки: " + error.message;

      });

  } else {

    updateVideo();

  }
}
function loadChannelSelect() {
    const select = document.getElementById("video-channel-select");
    if (!select) return;

    const user = firebase.auth().currentUser;
    if (!user) return;

    const uid = user.uid;
    select.innerHTML = "";

    database.ref(`users/${uid}`).once("value").then(snapshot => {
        const userData = snapshot.val();
        if (!userData) return;

        // 🔹 Основний канал
        const mainName = `${userData.name || ""} ${userData.supername || ""}`.trim();

        const mainOption = document.createElement("option");
        mainOption.value = "main";
        mainOption.textContent = mainName || "Основний канал";
        mainOption.dataset.name = mainName;
        mainOption.dataset.avatar = userData.avatar || "";
        select.appendChild(mainOption);

        // 🔹 Другий канал
        if (userData.channels && userData.channels.second) {
            const second = userData.channels.second;

            const secondOption = document.createElement("option");
            secondOption.value = "second";
            secondOption.textContent = second.name || "Другий канал";
            secondOption.dataset.name = second.name || "Другий канал";
            secondOption.dataset.avatar = second.avatar || "";
            select.appendChild(secondOption);
        }
    });
}
function getActiveChannelData() {
    const select = document.getElementById("video-channel-select");
    if (!select) return null;

    const option = select.options[select.selectedIndex];
    if (!option) return null;

    return {
        key: option.value,       // main | second
        name: option.dataset.name,
        avatar: option.dataset.avatar || ""
    };
}
async function convertToMp4(file, onStatus) {
  if (!window.ffmpeg.loaded) {
    onStatus?.("Завантаження відео-движка…");
    await window.ffmpeg.load(); // БЕЗ coreURL тут
  }

  onStatus?.("Підготовка файлу…");
  const data = await window.fetchFile(file);
  window.ffmpeg.FS("writeFile", "input.mp4", data);

  onStatus?.("Конвертація у MP4 (H.264)…");
  await window.ffmpeg.run(
    "-i", "input.mp4",
    "-c:v", "libx264",
    "-preset", "veryfast",
    "-pix_fmt", "yuv420p",
    "-movflags", "faststart",
    "-c:a", "aac",
    "-b:a", "128k",
    "output.mp4"
  );

  const out = window.ffmpeg.FS("readFile", "output.mp4");
  return new File([out.buffer], "converted.mp4", { type: "video/mp4" });
}
document.getElementById("video-file").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // якщо вже mp4 — нічого не робимо
  if (file.type === "video/mp4") return;

  const statusEl = document.getElementById("progress-text");
  document.getElementById("progress-container").style.display = "block";

  try {
    const converted = await convertToMp4(file, (status) => {
      statusEl.innerText = status;
    });

    // 🔁 ПІДМІНА ФАЙЛУ В INPUT
    const dt = new DataTransfer();
    dt.items.add(converted);
    e.target.files = dt.files;

    statusEl.innerText = "Готово до  ✔";
  } catch (err) {
    console.error("❌ Конвертація не вдалася:", err);
   showNotificationModal();
    message.innerHTML = "Помилка конвертації відео";
  }
});
function updateUploadUI(id, progress, timeLeftSec) {
  const el = document.getElementById(id);
  if (!el) return;

  const percent = el.querySelector(".upload-progress-text");
  const time = el.querySelector(".upload-time-left");

  if (percent) percent.innerText = `${Math.round(progress)}%`;
  if (time) time.innerText = `~${Math.round(timeLeftSec)}s left`;
}
function addVideoToFeed(video) {
  const container = document.getElementById("video-gallery");

  if (!container) {
    console.warn("videos-feed container not found");
    return;
  }

  const card = document.createElement("div");
  card.className = "video-card";
  card.id = video.id;

  card.innerHTML = `
    <img src="${video.thumbnail}" class="video-thumb"/>

    <div class="video-meta">
      <div class="video-title">${video.title}</div>
      <div class="video-author">${video.author}</div>

      ${
        video.uploading
          ? `
        <div class="upload-status">
          <div class="upload-progress-text">0%</div>
          <div class="upload-time-left">calculating...</div>
        </div>
      `
          : ""
      }
    </div>
  `;

  container.prepend(card);
}
function finalizeUpload(tempId, data) {
  const el = document.getElementById(tempId);
  if (!el) return;

  el.querySelector(".upload-box")?.remove();

  el.querySelector("h3").innerText = data.title;
  el.querySelector("p").innerText = data.author;

  el.id = data.realId;
}
function createPublishVideo({ id, title, author, thumbnail }) {
  const videoGallery = document.getElementById("video-gallery");
  if (!videoGallery) return;

  const el = document.createElement("div");
  el.className = "video-details";
  el.id = id;

  el.innerHTML = `
    <img src="${thumbnail}" style="width:120px;" />

    <div>${title}</div>
    <div>${author}</div>

    <div id="${id}-status">Очікування...</div>

    <progress id="${id}-progress" value="0" max="100"></progress>
  `;

  videoGallery.prepend(el);
  return el;
}
async function uploadVideo() {
  const startTime = Date.now();

  const isBandura =
    document.getElementById("bandura-video")?.checked || false;

  const autoDelete24h =
    document.getElementById("auto-delete-24h")?.checked || false;

  const banduraExtra = isBandura ? {
    style: document.getElementById("bandura-style").value || "Соло",
    key: document.getElementById("bandura-key").value || "",
    difficulty: document.getElementById("bandura-difficulty").value || "Початковий",
    tempo: document.getElementById("bandura-tempo").value || "",
    slowMode: document.getElementById("bandura-slow").checked,
    event: document.getElementById("bandura-event").value || "",
    year: document.getElementById("bandura-year").value || "",
    performer: document.getElementById("bandura-performer").value || "",
    tags: document.getElementById("bandura-tags").value || "",
    markers: document.getElementById("bandura-markers").value || ""
  } : null;

  const videoTitle = document.getElementById("video-title").value;
  const videoDescription = document.getElementById("video-description").value;
  const videoFile = document.getElementById("video-file").files[0];

  const isNSFW = document.getElementById("nsfw").checked;
  const safeVideo = document.getElementById("save-video-checkbox").checked;
  const disabledComments = document.getElementById("disabled-comments-checkbox").checked;
  const privateVideo = document.getElementById("private-checkbox").checked;
  const domainRestrict = document.getElementById("domain-restrict-checkbox")?.checked || false;

  if (!videoTitle || !videoFile) {
    showNotificationModal();
    message.innerHTML = "Будь ласка, заповніть всі поля!";
    return;
  }

  const user = firebase.auth().currentUser;

  if (!user) {
    showNotificationModal();
    message.innerHTML = "Потрібно увійти в акаунт";
    return;
  }

  const uid = user.uid;

  try {
    const snapshot = await database.ref("users/" + uid).once("value");
    const userData = snapshot.val() || {};

    const selectedChannel =
      document.getElementById("video-channel-select").value || "main";

    let authorName;
    let authorAvatarUrl = null;

    if (selectedChannel === "second" && userData.channels?.second) {
      authorName = userData.channels.second.name || "Другий канал";

      const secondAvatar = userData.channels.second.avatarId;

      if (secondAvatar) {
        try {
          authorAvatarUrl =
            await storage.ref(`avatars/${secondAvatar}.webp`).getDownloadURL();
        } catch {}
      }

    } else {
      authorName =
        `${userData.name || ""} ${userData.supername || ""}`.trim() ||
        "Основний канал";

      const mainAvatar = userData.avatarId;

      if (mainAvatar) {
        try {
          authorAvatarUrl =
            await storage.ref(`avatars/${mainAvatar}.webp`).getDownloadURL();
        } catch {}
      }
    }

    const storageRef =
      storage.ref(`videos/${Date.now()}_${videoFile.name}`);

    const uploadTask = storageRef.put(videoFile);

    const tempId = "temp_" + Date.now();
    const tempThumbnailUrl = URL.createObjectURL(videoFile);

    createPublishVideo({
      id: tempId,
      title: videoTitle,
      author: "Uploading...",
      thumbnail: tempThumbnailUrl,
      uploading: true
    });
    const progressContainer =
      document.getElementById("progress-container");

    progressContainer.style.display = "block";

    localStorage.setItem("activeUpload", JSON.stringify({
      fileName: videoFile.name,
      fileSize: videoFile.size,
      bytesTransferred: 0,
      startedAt: Date.now(),
      status: "uploading"
    }));

    uploadTask.on(
      "state_changed",

      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        const timeElapsed =
          (Date.now() - startTime) / 1000;

        const speed =
          snapshot.bytesTransferred / (timeElapsed || 0.001);

        const remainingBytes =
          snapshot.totalBytes - snapshot.bytesTransferred;

        const timeLeftSec =
          remainingBytes / Math.max(speed, 1);

        updateUploadUI(tempId, progress, timeLeftSec);

        const uploadData =
          JSON.parse(localStorage.getItem("activeUpload"));

        if (uploadData) {
          uploadData.bytesTransferred =
            snapshot.bytesTransferred;

          localStorage.setItem(
            "activeUpload",
            JSON.stringify(uploadData)
          );
        }

        document.getElementById("time-left").innerText =
          `${Math.round(timeLeftSec)}s`;

        document.getElementById("upload-progress").value =
          progress;

        document.getElementById("progress-text").innerText =
          `Завантаження: ${Math.round(progress)}%`;
      },

      error => {
        console.error(error);
        showNotificationModal();
        message.innerHTML = "Помилка завантаження відео.";
      },

      async () => {
        const uploadData =
          JSON.parse(localStorage.getItem("activeUpload"));

        if (uploadData) {
          uploadData.status = "processing";

          localStorage.setItem(
            "activeUpload",
            JSON.stringify(uploadData)
          );
        }

        try {
          const downloadURL =
            await uploadTask.snapshot.ref.getDownloadURL();

          const thumbnailBlob =
            await createThumbnail(videoFile);

          const thumbRef =
            storage.ref(`thumbnails/${Date.now()}_${videoFile.name}.jpg`);

          await thumbRef.put(thumbnailBlob);

          const thumbnailURL =
            await thumbRef.getDownloadURL();

          const now = new Date();

          const currentDate =
            `${now.getDate().toString().padStart(2,'0')}.` +
            `${(now.getMonth()+1).toString().padStart(2,'0')}.` +
            `${now.getFullYear()}`;

          const ref = await database.ref("videos").push({
            title: videoTitle,
            author: authorName,
            authorAvatar: authorAvatarUrl,
            authorUid: uid,
            authorColor: userData.color,
            videoColor: randomGradient(),
            email: user.email,

            disabledComments,
            url: downloadURL,
            thumbnail: thumbnailURL,
            description: videoDescription,
            saveVideo: safeVideo,

            views: 0,
            private: privateVideo,
            domainRestrict,
            nsfw: isNSFW,

            createdAt: Date.now(),
            autoDelete24h,
            publishDate: currentDate,

            banduraExtra,
            expiresAt: autoDelete24h
              ? Date.now() + 86400000
              : null
          });

          finalizeUpload(tempId, {
            realId: ref.key,
            title: videoTitle,
            author: authorName
          });

          URL.revokeObjectURL(tempThumbnailUrl);

          localStorage.removeItem("activeUpload");
document.getElementById("upload-modal").style.display = "none";
          showPopup();

          document.getElementById("message-notification").innerHTML =
            "Відео завантажено!";

          progressContainer.style.display = "none";

          

        } catch (err) {
          console.error(err);
          showNotificationModal();
          message.innerHTML =
            "Помилка при завантаженні відео або мініатюри. " +
            err.message;
        }
      }
    );

  } catch (err) {
    console.error("Помилка при отриманні даних користувача:", err);
    showNotificationModal();
    message.innerHTML = "Не вдалося отримати дані профілю." + err.message;
  }
}



// Просте шифрування/дешифрування (можна замінити на AES)


// Відкрити форму редагування імені
function editName() {
  document.getElementById("form-edit-name").style.display = "block";
  document.getElementById("name").style.display = "none";
  document.getElementById("button-name").style.display = "none";

  const currentName = document.getElementById("name").textContent.replace("Ім'я: ", "");
  document.getElementById("edit-name").value = currentName;
}

// Відкрити форму редагування прізвища
function editSuperName() {
  document.getElementById("form-edit-supername").style.display = "block";
  document.getElementById("supername").style.display = "none";
  document.getElementById("button-supername").style.display = "none";

  const currentSuperName = document.getElementById("supername").textContent.replace("Прізвище: ", "");
  document.getElementById("edit-supername").value = currentSuperName;
}

// Зберегти зміну імені
function saveEditName() {
  const newName = document.getElementById("edit-name").value.trim();
  const user = firebase.auth().currentUser;

  if (!user) {
    showNotificationModal();
    message.innerHTML = "Будь ласка, увійдіть.";
    return;
  }

  const uid = user.uid;
  database.ref("users/" + uid).update({ name: newName })
    .then(() => {
      showNotificationModal();
      message.innerHTML = "Ім’я змінено!";
      document.getElementById("form-edit-name").style.display = "none";
      document.getElementById("name").style.display = "block";
      document.getElementById("button-name").style.display = "block";
      document.getElementById("name").textContent = "Ім'я: " + newName;
      updateVideosAuthor();
      updatePhotosAuthor();
      updateCommentsAuthor();
      updateNameBlockedUsers();
    })
    .catch(err => {
      showNotificationModal();
      message.innerHTML = "Помилка: " + err.message;
    });
}

// Зберегти зміну прізвища
function saveEditSuperName() {
  const newSuperName = document.getElementById("edit-supername").value.trim();
  const user = firebase.auth().currentUser;

  if (!user) {
    showNotificationModal();
    message.innerHTML = "Будь ласка, увійдіть.";
    return;
  }

  const uid = user.uid;
  database.ref("users/" + uid).update({ supername: newSuperName })
    .then(() => {
      showNotificationModal();
      message.innerHTML = "Прізвище змінено!";
      document.getElementById("form-edit-supername").style.display = "none";
      document.getElementById("supername").style.display = "block";
      document.getElementById("button-supername").style.display = "block";
      document.getElementById("supername").textContent = "Прізвище: " + newSuperName;
      updateVideosAuthor();
      updatePhotosAuthor();
      updateCommentsAuthor();
      updateNameBlockedUsers();
    })
    .catch(err => {
      showNotificationModal();
      message.innerHTML = "Помилка: " + err.message;
    });
}
function loadPhotoChannelSelect() {
    const select = document.getElementById("photo-channel-select");
    if (!select) return;

    const user = firebase.auth().currentUser;
    if (!user) return;

    const uid = user.uid;
    select.innerHTML = "";

    database.ref(`users/${uid}`).once("value").then(snapshot => {
        const userData = snapshot.val();
        if (!userData) return;

        // 🔹 Основний канал
        const mainName = `${userData.name || ""} ${userData.supername || ""}`.trim();

        const mainOption = document.createElement("option");
        mainOption.value = "main";
        mainOption.textContent = mainName || "Основний канал";
        mainOption.dataset.name = mainName;
        mainOption.dataset.avatar = userData.avatar || "";
        select.appendChild(mainOption);

        // 🔹 Другий канал
        if (userData.channels && userData.channels.second) {
            const second = userData.channels.second;

            const secondOption = document.createElement("option");
            secondOption.value = "second";
            secondOption.textContent = second.name || "Другий канал";
            secondOption.dataset.name = second.name || "Другий канал";
            secondOption.dataset.avatar = second.avatar || "";
            select.appendChild(secondOption);
        }
    });
}
function getActivePhotoChannelData() {
    const select = document.getElementById("photo-channel-select");
    if (!select) return null;

    const option = select.options[select.selectedIndex];
    if (!option) return null;

    return {
        key: option.value,       // main | second
        name: option.dataset.name,
        avatar: option.dataset.avatar || ""
    };
  }