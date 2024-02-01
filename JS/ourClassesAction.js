// Classes
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".ourClassesButton");
  const triangles = document.querySelectorAll(".triangle");
  const img = document.querySelector("#ourClassesImg");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      removeAllChoosen(buttons);
      removeAllTriangles(triangles);

      switch (button.id) {
        case "btn1":
          button.classList.add("choosen");
          img.src = "../assets/yoga.jpg";
          document.querySelector("#btn1tri").classList.remove("destroy-tri");
          break;
        case "btn2":
          button.classList.add("choosen");
          img.src = "../assets/group.webp";
          document.querySelector("#btn2tri").classList.remove("destroy-tri");
          break;
        case "btn3":
          button.classList.add("choosen");
          img.src = "../assets/solo.jpg";
          document.querySelector("#btn3tri").classList.remove("destroy-tri");
          break;
        case "btn4":
          button.classList.add("choosen");
          img.src = "../assets/stret.webp";
          document.querySelector("#btn4tri").classList.remove("destroy-tri");
          break;
      }
    });
  });
});

function removeAllChoosen(buttons) {
  buttons.forEach((button) => {
    button.classList.remove("choosen");
  });
}

function removeAllTriangles(triangles) {
  triangles.forEach((triangle) => {
    triangle.classList.add("destroy-tri");
  });
}
