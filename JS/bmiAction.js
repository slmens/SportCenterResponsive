// Bmi

document.addEventListener("DOMContentLoaded", function () {
  // bu iki inputa onchange eklicez
  // onchange de eğer valueları var ise
  // ikisini hesaplayıp bmiResult vericez

  const heigthInput = document.getElementById("bmiHeigth");
  const weigthInput = document.getElementById("bmiWeigth");
  const bmiResult = document.getElementById("bmiResult");
  const arrow = document.getElementById("bmiIndexSelection");

  heigthInput.addEventListener("change", function () {
    if (heigthInput.value * weigthInput.value !== 0) {
      const bmi =
        weigthInput.value /
        ((heigthInput.value / 100) * (heigthInput.value / 100));
      bmiResult.innerHTML = bmi.toFixed(2);

      arrow.classList.remove(
        "bmiIndexUnderweight",
        "bmiIndexNormal",
        "bmiIndexOverweight",
        "bmiIndexObese",
        "bmiIndexExtremelyObese"
      );

      if (bmi < 18.5) {
        arrow.classList.add("bmiIndexUnderweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        arrow.classList.add("bmiIndexNormal");
      } else if (bmi >= 25 && bmi <= 29.9) {
        arrow.classList.add("bmiIndexOverweight");
      } else if (bmi >= 30 && bmi <= 34.9) {
        arrow.classList.add("bmiIndexObese");
      } else if (bmi >= 35) {
        arrow.classList.add("bmiIndexExtremelyObese");
      }
    }
  });

  weigthInput.addEventListener("change", function () {
    if (heigthInput.value * weigthInput.value !== 0) {
      const bmi =
        weigthInput.value /
        ((heigthInput.value / 100) * (heigthInput.value / 100));
      bmiResult.innerHTML = bmi.toFixed(2);

      arrow.classList.remove(
        "bmiIndexUnderweight",
        "bmiIndexNormal",
        "bmiIndexOverweight",
        "bmiIndexObese",
        "bmiIndexExtremelyObese"
      );

      if (bmi < 18.5) {
        arrow.classList.add("bmiIndexUnderweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        arrow.classList.add("bmiIndexNormal");
      } else if (bmi >= 25 && bmi <= 29.9) {
        arrow.classList.add("bmiIndexOverweight");
      } else if (bmi >= 30 && bmi <= 34.9) {
        arrow.classList.add("bmiIndexObese");
      } else if (bmi >= 35) {
        arrow.classList.add("bmiIndexExtremelyObese");
      }
    }
  });
});

// Bmi end
