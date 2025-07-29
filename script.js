function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  console.log({menu, icon}); // should not be null
  menu?.classList.toggle("open");
  icon?.classList.toggle("open");
}

