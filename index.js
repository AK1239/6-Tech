const navbar = document.querySelector(".navbar");
const menuRef = document.querySelector(".nav-menu");
const menuOpenButton = document.querySelector(".nav-mob-open");
const menuCloseButton = document.querySelector(".nav-mob-close");
let acc = document.getElementsByClassName("accordion");
let i;

const openMenu = () => {
  menuRef.style.right = "0";
};

const closeMenu = () => {
  menuRef.style.right = "-350px";
};

menuOpenButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
