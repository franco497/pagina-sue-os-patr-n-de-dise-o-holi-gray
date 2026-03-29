// Botón para colapsar aside izquierdo en tablet
const collapseLeftBtn = document.getElementById("collapse-left-btn");
const leftAside = document.querySelector(".collapsible-aside");

if (collapseLeftBtn && leftAside) {
  collapseLeftBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    leftAside.classList.toggle("collapsed");

    // Cambiar aria-label para accesibilidad
    const isCollapsed = leftAside.classList.contains("collapsed");
    collapseLeftBtn.setAttribute(
      "aria-label",
      isCollapsed ? "Expandir menú" : "Colapsar menú",
    );

    // Opcional: guardar estado
    if (window.innerWidth >= 541 && window.innerWidth <= 800) {
      localStorage.setItem("leftAsideCollapsed", isCollapsed);
    }
  });
}

// Función para cargar estado guardado
function loadLeftAsideState() {
  const savedState = localStorage.getItem("leftAsideCollapsed");
  const isTablet = window.innerWidth >= 541 && window.innerWidth <= 800;

  if (savedState !== null && isTablet && leftAside) {
    if (savedState === "true") {
      leftAside.classList.add("collapsed");
    } else {
      leftAside.classList.remove("collapsed");
    }
  }
}

// Escuchar cambios de tamaño de ventana
window.addEventListener("resize", function () {
  const isTablet = window.innerWidth >= 541 && window.innerWidth <= 800;

  if (!isTablet && leftAside) {
    // Si no es tablet, restaurar el aside a su estado normal
    leftAside.classList.remove("collapsed");
    leftAside.style.minWidth = "";
    leftAside.style.width = "";
    leftAside.style.padding = "";
    leftAside.style.visibility = "";
  } else if (isTablet && leftAside) {
    // Si es tablet, aplicar estado guardado
    loadLeftAsideState();
  }
});

// Inicializar
loadLeftAsideState();


