// detectar tablet
function isTablet() {
  return window.innerWidth >= 541 && window.innerWidth <= 800;
}

const fontButtons = document.querySelectorAll(".font-controls button");

// cargar tamaño guardado
function loadFontSize() {
  const savedSize = localStorage.getItem("fontSize");

  // limpiar clases
  document.body.classList.remove("font-medium", "font-large");

  // limpiar botones activos
  fontButtons.forEach((b) => b.classList.remove("active"));

  // SOLO aplicar en tablet
  if (isTablet()) {
    if (savedSize === "font-large") {
      document.body.classList.add("font-large");
      document.querySelector('[data-size="large"]')?.classList.add("active");
    } else {
      document.body.classList.add("font-medium");
      document.querySelector('[data-size="medium"]')?.classList.add("active");
    }
  }
}

// evento botones
fontButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!isTablet()) return;

    fontButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const size = btn.dataset.size;

    document.body.classList.remove("font-medium", "font-large");

    const className = `font-${size}`;
    document.body.classList.add(className);

    localStorage.setItem("fontSize", className);
  });
});

// optimización resize (evita múltiples ejecuciones)
let resizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(loadFontSize, 150);
});

// inicializar
loadFontSize();