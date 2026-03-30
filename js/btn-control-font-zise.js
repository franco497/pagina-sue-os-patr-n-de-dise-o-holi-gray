// detectar tablet
function isTablet() {
  return window.innerWidth >= 541 && window.innerWidth <= 800;
}

const fontOptions = document.querySelectorAll(
  '.font-controls input[type="radio"]',
);

// cargar tamaño guardado
function loadFontSize() {
  const savedSize = localStorage.getItem("fontSize");

  document.body.classList.remove("font-medium", "font-large");

  if (isTablet()) {
    const size = savedSize === "font-large" ? "large" : "medium";

    document.body.classList.add(`font-${size}`);

    const selected = document.querySelector(
      `.font-controls input[value="${size}"]`,
    );

    if (selected) selected.checked = true;
  }
}

// evento radios
fontOptions.forEach((option) => {
  option.addEventListener("change", () => {
    if (!isTablet()) return;

    const size = option.value;

    document.body.classList.remove("font-medium", "font-large");
    document.body.classList.add(`font-${size}`);

    localStorage.setItem("fontSize", `font-${size}`);
  });
});

// resize optimizado
let resizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(loadFontSize, 150);
});

// iniciar
loadFontSize();
