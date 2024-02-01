const dropdownButton = document.getElementById("dropdownContainer");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  var scrollY = window.scrollY;

  if (scrollY > 10) {
    console.log("a");
    if (navbar.style.backgroundColor === "transparent") {
      //navbar.style.position = "fixed";
      //navbar.style.backgroundColor = "#355592";
    }
  } else {
    navbar.style.position = "relative";
    navbar.style.backgroundColor = "transparent";
  }
});

dropdownButton.addEventListener("click", () => {
  console.log(window.innerWidth);
  console.log(window.outerWidth);
  makeBlock();
});

function makeBlock() {
  const dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display =
    dropdownContent.style.display === "none" ? "block" : "none";
}

/*function makeTransparent(navbar) {
  navbar.style.backgroundColor =
    navbar.style.backgroundColor === "transparent" ? "#355592" : "transparent";
}*/
