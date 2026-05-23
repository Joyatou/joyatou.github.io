// ハンバーガーメニューの開閉
(function () {
  const btn = document.getElementById("menubtn");
  const overlay = document.getElementById("menu-overlay");
  const nav = document.getElementById("topnav");
  if (!btn || !overlay) return;

  const setOpen = function (open) {
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    overlay.setAttribute("aria-hidden", String(!open));
    // メニューを開くときはヘッダーを必ず表示したままにする
    if (open && nav) nav.classList.remove("nav--hidden");
  };

  btn.addEventListener("click", function () {
    setOpen(!document.body.classList.contains("menu-open"));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

// ヒーローの夜景に重なる間だけ、ナビを透過モードにする
(function () {
  const nav = document.getElementById("topnav");
  const hero = document.querySelector(".hero");
  if (!nav || !hero) return;

  const navHeight = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-h");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        nav.classList.toggle("on-night", entry.isIntersecting);
      });
    },
    { rootMargin: "-" + navHeight + " 0px 0px 0px", threshold: 0 }
  );
  observer.observe(hero);
})();

// スクロールに合わせて要素をフェードインさせる
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
  );
  items.forEach(function (el) { observer.observe(el); });
})();

// スクロール方向に応じてヘッダーを隠す／出す（上端では常に表示）
(function () {
  const nav = document.getElementById("topnav");
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  const update = function () {
    ticking = false;
    // メニュー展開中はヘッダーを動かさない
    if (document.body.classList.contains("menu-open")) return;
    const y = window.scrollY;
    if (y < 80) {
      nav.classList.remove("nav--hidden");        // 上端では常に表示
    } else if (y > lastY + 6) {
      nav.classList.add("nav--hidden");           // 下スクロール：隠す
    } else if (y < lastY - 6) {
      nav.classList.remove("nav--hidden");        // 上スクロール：出す
    }
    lastY = y;
  };

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
