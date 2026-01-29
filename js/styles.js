(function () {
  const css = ["css/base.css", "css/fonts.css"];

  css.forEach(function (file) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    document.head.appendChild(link);
  });
})();

(function () {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = mouseX;
  let posY = mouseY;

  const speed = 0.1;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    cursor.style.transform =
      "translate(" + posX + "px," + posY + "px) translate(-50%, -50%)";

    requestAnimationFrame(animate);
  }

  animate();
})();