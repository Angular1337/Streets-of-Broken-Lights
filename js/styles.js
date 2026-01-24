(function () {
  const css = ["/css/base.css", "/css/fonts.css"];

  css.forEach(function (file) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    document.head.appendChild(link);
  });
})();
