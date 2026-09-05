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