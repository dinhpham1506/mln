const app = document.getElementById("app");

function showMainMenu() {
  playMusic("menu");
  app.innerHTML = `
    <main class="screen menu-screen screen-enter" data-screen="menu">
      <div class="menu-backdrop"></div>
      <button class="hamburger-button" data-action="toggle-menu" aria-label="Ẩn hiện menu">
        ${icon("menu")}
      </button>

      <aside class="side-menu" aria-label="Menu chính">
        <button class="side-item active" data-action="menu">${icon("home")}<span>Trang chủ</span></button>
        <button class="side-item" data-action="guide">${icon("book")}<span>Hướng dẫn chơi</span></button>
        <button class="side-item" data-action="team">${icon("team")}<span>Thông tin nhóm</span></button>
        <button class="side-item" data-action="settings">${icon("gear")}<span>Cài đặt</span></button>
        <button class="side-item" data-action="feedback">${icon("chat")}<span>Đóng góp ý kiến</span></button>
        <button class="side-item" data-action="exit">${icon("exit")}<span>Thoát</span></button>
      </aside>

      <div class="corner-actions">
        <span class="corner-logo">M</span>
        <button class="corner-button" data-sound-toggle aria-label="Tắt âm thanh" title="Tắt âm thanh">
          <span class="sound-glyph">${icon("volume")}</span>
        </button>
        <button class="corner-button" data-action="settings" aria-label="Cài đặt" title="Cài đặt">${icon("gear")}</button>
      </div>

      <section class="hero-panel">
        <h1 class="game-title">M là ai?</h1>
        <p class="game-subtitle">Một câu chuyện tương tác về tuổi trẻ,<br />áp lực và hành trình tìm lại chính mình.</p>
        <div class="hero-divider" aria-hidden="true"><span></span></div>
        <button class="start-button" data-action="start">
          ${icon("play")}
          <span>Bắt đầu</span>
        </button>
        <p class="start-hint">✦ Bấm Bắt đầu để vào cốt truyện</p>
        <div class="quick-actions">
          <button data-action="guide">${icon("book")}<span>Hướng dẫn chơi</span></button>
          <button data-action="team">${icon("team")}<span>Thông tin nhóm</span></button>
        </div>
      </section>
    </main>
  `;
  bindButtons();
  updateSoundButtons();
}

function showScene(sceneId) {
  const scene = storyData[sceneId];
  if (!scene) {
    console.error(`Scene not found: ${sceneId}`);
    return;
  }

  playMusic(getSceneTrack(scene));
  app.innerHTML = `
    <main class="screen story-screen screen-enter mood-${scene.mood || "normal"}" data-screen="story">
      <div class="scene-layers">${renderImages(scene.images || [])}</div>
      <div class="scene-vignette"></div>
      <div class="topbar">
        <div class="topbar-group">
          <button class="btn btn-secondary btn-icon-only ui-symbol" data-action="menu" aria-label="Về menu" title="Về menu">
            <span class="btn-icon">${icon("menu")}</span>
          </button>
        </div>
        <div class="topbar-group">
          <span class="story-logo">M</span>
          <button class="btn btn-secondary btn-icon-only ui-symbol" data-sound-toggle aria-label="Tắt âm thanh" title="Tắt âm thanh">
            <span class="sound-glyph">${icon("volume")}</span>
          </button>
          <button class="btn btn-secondary btn-icon-only ui-symbol" data-action="settings" aria-label="Cài đặt" title="Cài đặt">
            <span class="btn-icon">${icon("gear")}</span>
          </button>
        </div>
      </div>
      <div class="scene-title">${escapeHtml(scene.title || "")}</div>
      ${renderTextBox(scene)}
      <div class="button-area ${scene.type === "choice" ? "choice-layout" : ""}">
        ${renderButtons(scene.buttons || [])}
      </div>
    </main>
  `;
  bindButtons();
  updateSoundButtons();
}

function renderImages(images) {
  return images
    .slice(0, 3)
    .map((image) => {
      const type = image.type || "background";
      const animation = image.animation ? `anim-${image.animation}` : "anim-none";
      const position = image.position || "center";
      return `<img class="scene-layer ${type} ${animation}" src="${escapeAttr(image.src)}" alt="" style="object-position:${escapeAttr(position)}" onerror="this.classList.add('hidden')" />`;
    })
    .join("");
}

function renderTextBox(scene) {
  const box = scene.textBox || {};
  const style = scene.textStyle || {};
  const positionStyle = getTextBoxPosition(box);
  const font = getFontFamily(style.fontFamily);
  const inlineStyle = [
    positionStyle,
    box.width ? `width:${box.width}` : "",
    style.fontSize ? `font-size:${style.fontSize}` : "",
    style.color ? `color:${style.color}` : "",
    style.align ? `text-align:${style.align}` : "",
    style.lineHeight ? `line-height:${style.lineHeight}` : "",
    `font-family:${font}`
  ]
    .filter(Boolean)
    .join(";");

  return `
    <section class="text-box ${box.background || "darkBlur"}" style="${escapeAttr(inlineStyle)}">
      <div class="speaker">${escapeHtml(scene.speaker || "")}</div>
      <div class="dialog dialog-${scene.dialogType || "narrator"}">${escapeHtml(scene.text || "")}</div>
    </section>
  `;
}

function renderButtons(buttons) {
  return buttons.map((button) => createButton(button)).join("");
}

function createButton(button, extraClass = "") {
  const type = button.type || "secondary";
  const data = button.next ? `data-next="${escapeAttr(button.next)}"` : `data-action="${escapeAttr(button.action || "")}"`;
  return `
    <button class="btn btn-${type} ${extraClass}" ${data}>
      <span>${escapeHtml(button.label || "")}</span>
    </button>
  `;
}

function bindButtons() {
  app.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      playClickSound();
      const next = button.dataset.next;
      const action = button.dataset.action;
      if (next) {
        transitionToScene(next);
        return;
      }
      if (action) runAction(action);
    });
  });

  app.querySelectorAll("[data-sound-toggle]").forEach((button) => {
    button.addEventListener("click", toggleSound);
  });
}

function runAction(action) {
  if (action === "start" || action === "restart") {
    transitionToScene("start");
    return;
  }

  const actions = {
    menu: showMainMenu,
    guide: showGuide,
    team: showTeamInfo,
    settings: showSettings,
    feedback: showFeedback,
    exit: showMainMenu,
    "toggle-menu": toggleMenu
  };
  actions[action]?.();
}

function showGuide() {
  showModal(
    "Hướng dẫn chơi",
    `<ul>
      <li>Đọc truyện và bấm “Tiếp tục” để chuyển cảnh.</li>
      <li>Ở một số cảnh, bạn sẽ được chọn hướng đi cho nhân vật M.</li>
      <li>Mỗi lựa chọn sẽ dẫn tới một kết thúc khác nhau.</li>
      <li>Hãy chơi lại để khám phá đủ các kết thúc.</li>
    </ul>`
  );
}

function showTeamInfo() {
  showModal(
    "Thông tin về nhóm",
    `<p><strong>Tên dự án:</strong> M là ai?</p>
    <p><strong>Môn học:</strong> Triết học Mác - Lênin</p>
    <p><strong>Chủ đề:</strong> Con người và bản chất con người</p>
    <p><strong>Thành viên nhóm:</strong></p>
    <ul>
      <li>1. ...</li>
      <li>2. ...</li>
      <li>3. ...</li>
    </ul>
    <p><strong>Vai trò:</strong> Kịch bản, thiết kế ảnh, frontend, thuyết trình.</p>`
  );
}

function showSettings() {
  showModal(
    "Cài đặt",
    `<p>Âm thanh có thể bật hoặc tắt bằng nút ở góc phải màn hình.</p>
    <p>Ảnh nền menu dùng file <strong>images/menu/main_menu_bg.png</strong>. Ảnh cảnh truyện dùng các đường dẫn trong <strong>js/storyData.js</strong>.</p>`
  );
}

function showFeedback() {
  showModal(
    "Đóng góp ý kiến",
    `<p>Ghi lại góp ý của nhóm vào phần này nếu cần mở rộng sau.</p>
    <p>MVP hiện tại tập trung vào trải nghiệm đọc truyện, lựa chọn nhánh, âm thanh và chuyển cảnh.</p>`
  );
}

function toggleMenu() {
  app.querySelector(".menu-screen")?.classList.toggle("menu-collapsed");
}

function showModal(title, content) {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeAttr(title)}">
      <h2>${escapeHtml(title)}</h2>
      ${content}
      ${createButton({ type: "primary", icon: "↩", label: "Quay lại", action: "close-modal" })}
    </section>
  `;
  document.body.appendChild(modal);
  modal.querySelector("[data-action='close-modal']").addEventListener("click", () => {
    playClickSound();
    modal.remove();
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.remove();
  });
}

function restartGame() {
  transitionToScene("start");
}

function transitionToScene(sceneId) {
  const screen = app.querySelector(".screen");
  if (!screen) {
    showScene(sceneId);
    return;
  }
  screen.classList.add("screen-exit");
  window.setTimeout(() => showScene(sceneId), 320);
}

function getSceneTrack(scene) {
  if (scene.audio) return scene.audio;
  if (scene.type === "ending") return "ending";
  if (scene.mood === "pressure" || scene.mood === "lonely") return "tension";
  return "story";
}

function icon(name) {
  const icons = {
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v18H7.5A3.5 3.5 0 0 0 4 23z"/><path d="M4 5.5v17"/><path d="M12 2v18"/></svg>',
    team: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11a4 4 0 1 0-8 0"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M19 8a3 3 0 0 1 0 6"/><path d="M5 8a3 3 0 0 0 0 6"/></svg>',
    gear: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.04.04a2 2 0 1 1-2.83 2.83l-.04-.04A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6V20a2 2 0 1 1-4 0v-.06a1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.88.34l-.04.04a2 2 0 1 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H4a2 2 0 1 1 0-4h.06a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.88l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6V4a2 2 0 1 1 4 0v.06a1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.88-.34l.04-.04a2 2 0 1 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.4 9c.2.36.4.7.6 1H20a2 2 0 1 1 0 4h-.06c-.2.3-.4.64-.54 1z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.8-5A8 8 0 1 1 21 12z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>',
    exit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17 15 12l-5-5"/><path d="M15 12H3"/><path d="M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/></svg>',
    volume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8a5 5 0 0 1 0 8"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
  };
  return icons[name] || "";
}

function getTextBoxPosition(box) {
  const position = box.position || "bottom";
  const customX = box.x || "50%";
  const customY = box.y || "50%";
  const positions = {
    bottom: "left:50%;bottom:112px;transform:translateX(-50%)",
    top: "left:50%;top:82px;transform:translateX(-50%)",
    left: "left:36px;top:50%;transform:translateY(-50%)",
    right: "right:36px;top:50%;transform:translateY(-50%)",
    center: "left:50%;top:50%;transform:translate(-50%,-50%)",
    custom: `left:${customX};top:${customY};transform:translate(-50%,-50%)`
  };
  return positions[position] || positions.bottom;
}

function getFontFamily(key) {
  const fonts = {
    sans: "var(--font-sans)",
    serif: "var(--font-serif)",
    handwriting: "var(--font-handwriting)",
    mono: "var(--font-mono)",
    cinematic: "var(--font-cinematic)"
  };
  return fonts[key] || fonts.sans;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
