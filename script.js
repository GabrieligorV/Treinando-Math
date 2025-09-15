function ajustarAltura() {
  const header = document.querySelector('header');
  document.documentElement.style.setProperty(
    '--header-height',
    `${header.offsetHeight}px`,
  );
}

window.addEventListener('resize', ajustarAltura);
window.addEventListener('load', ajustarAltura);
