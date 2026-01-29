(function () {
  const css = ["css/base.css", "css/fonts.css"];

  css.forEach(function (file) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    document.head.appendChild(link);
  });
})();

(function() {
  "use strict";

  function initAnimation() {
    var header = document.getElementsByTagName("header")[0];
    var main = document.getElementsByTagName("main")[0];

    if (!header || !main) return;

    header.style.transform = "translateY(-150%)";
    main.style.opacity = "0";

    var headerY = -150;
    var velocity = 0;
    var targetY = 0;
    var stiffness = 0.025;
    var damping = 0.5;

    var mainOpacity = 0;
    var speedMain = 0.025;

    function animate() {
      var needNextFrame = false;

      var force = (targetY - headerY) * stiffness;
      velocity += force;
      velocity *= damping;
      headerY += velocity;
      header.style.transform = "translateY(" + headerY + "%)";

      if (Math.abs(headerY - targetY) > 0.1 || Math.abs(velocity) > 0.1) {
        needNextFrame = true;
      }

      if (Math.abs(headerY - targetY) <= 0.1 && mainOpacity < 1) {
        mainOpacity += speedMain;
        if (mainOpacity > 1) mainOpacity = 1;
        main.style.opacity = mainOpacity.toString();
        needNextFrame = true;
      }

      if (needNextFrame) requestAnimationFrame(animate);
    }

    animate();
  }

  if (document.readyState === "complete") {
    initAnimation();
  } else {
    window.addEventListener("load", initAnimation);
  }
})();

(function () {
  "use strict";

  function initCursor() {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let posX = mouseX + window.pageXOffset;
    let posY = mouseY + window.pageYOffset;

    const speed = 0.15;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function animate() {
      const targetX = mouseX + window.pageXOffset;
      const targetY = mouseY + window.pageYOffset;

      posX += (targetX - posX) * speed;
      posY += (targetY - posY) * speed;

      cursor.style.top = posY + "px";
      cursor.style.left = posX + "px";

      requestAnimationFrame(animate);
    }

    animate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCursor);
  } else {
    initCursor();
  }
})();

const body__arrow = document.getElementById('body__arrow');

let isVisible = false;

body__arrow.animate(
  [{ opacity: 1 }, { opacity: 0 }],
  { duration: 0, fill: 'forwards' }
);

window.addEventListener('scroll', () => {
  if (window.scrollY > 100 && !isVisible) {
    isVisible = true;
    body__arrow.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 250, fill: 'forwards' }
    );
  }

  if (window.scrollY <= 100 && isVisible) {
    isVisible = false;
    body__arrow.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 250, fill: 'forwards' }
    );
  }
});

body__arrow.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});