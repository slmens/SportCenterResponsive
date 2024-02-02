const dropdownButton = document.getElementById("dropdownContainer");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  var scrollY = window.scrollY;

  if (scrollY > 90) {
    navbar.style.backgroundColor = "#355493";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

dropdownButton.addEventListener("click", () => {
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
