document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const resultDiv = document.getElementById("result");

  btn.addEventListener("click", function () {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      resultDiv.innerHTML = "⚠️ Please enter valid height and weight!";
      resultDiv.style.color = "red";
      return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    let status = "";
    let color = "";

    if (bmi < 18.5) {
      status = "Underweight";
      color = "#00bcd4";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal weight";
      color = "#4CAF50";
    } else if (bmi >= 25 && bmi < 29.9) {
      status = "Overweight";
      color = "#FF9800";
    } else {
      status = "Obese";
      color = "#F44336";
    }

    resultDiv.innerHTML = `
      <p>Your BMI is <strong>${bmi.toFixed(1)}</strong></p>
      <p>Status: <strong style="color:${color}">${status}</strong></p>
    `;
  });
});
