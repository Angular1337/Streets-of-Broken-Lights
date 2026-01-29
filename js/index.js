const mainIntro = document.getElementById("main__intro");
const container = mainIntro ? mainIntro.parentElement : null;

function updateLeft() {
  if (!mainIntro || !container) return;
  const style = getComputedStyle(mainIntro);
  const marginTopPx = parseFloat(style.marginTop);
  container.style.paddingLeft = marginTopPx + "px";
}

updateLeft();

window.addEventListener("resize", updateLeft);