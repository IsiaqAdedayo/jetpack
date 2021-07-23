let showMenu = document.querySelector(".navMobile");
let target = document.querySelector(".mobile-nav");

showMenu.addEventListener('click', () => {
    if (target.style.display === "block") {
        target.style.display  = "none";
  } else  {
        target.style.display = "block";
        // height.style.minHeight = curHeight + "57.5vh"
  }
})