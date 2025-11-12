document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("checkBtn");
  const symptomInput = document.getElementById("symptomInput");
  const resultBox = document.getElementById("resultBox");
  const resultBody = document.getElementById("resultBody");

  const database = {
    fever: {
      diagnosis: "Possible viral or bacterial infection",
      treatment: "Stay hydrated, rest, and take paracetamol if needed."
    },
    headache: {
      diagnosis: "Could be tension, migraine, or dehydration",
      treatment: "Rest, hydrate, and use pain relievers if necessary."
    },
    cough: {
      diagnosis: "Common cold or respiratory infection",
      treatment: "Cough syrup, rest, and steam inhalation recommended."
    },
    fatigue: {
      diagnosis: "Lack of sleep, stress, or poor nutrition",
      treatment: "Sleep well, eat balanced meals, and manage stress."
    },
    nausea: {
      diagnosis: "Digestive disturbance or viral infection",
      treatment: "Eat light, stay hydrated, and rest your stomach."
    },
    sore_throat: {
      diagnosis: "Viral or bacterial infection (e.g., strep throat)",
      treatment: "Warm salt water gargle, stay hydrated, lozenges, and rest."
    },
    back_pain: {
      diagnosis: "Muscle strain, poor posture, or spinal issue",
      treatment: "Apply heat, gentle stretches, good posture, and rest."
    },
    skin_rash: {
      diagnosis: "Allergic reaction or infection",
      treatment: "Apply soothing cream and consult a dermatologist if spreading."
    },
    chest_pain: {
      diagnosis: "May indicate heart or respiratory problem",
      treatment: "Seek medical attention immediately if severe or persistent."
    },
    dizziness: {
      diagnosis: "Could be dehydration or low blood pressure",
      treatment: "Sit down, drink water, and rest."
    }
  };

  checkBtn.addEventListener("click", () => {
    const symptom = symptomInput.value.trim().toLowerCase();
    resultBody.innerHTML = "";

    if (symptom === "") {
      alert("⚠️ Please enter a symptom before checking.");
      return;
    }

    const result = database[symptom];

    if (result) {
      resultBox.style.display = "block";
      resultBody.innerHTML = `
        <tr>
          <td>${symptom}</td>
          <td>${result.diagnosis}</td>
          <td>${result.treatment}</td>
        </tr>
      `;
    } else {
      resultBox.style.display = "block";
      resultBody.innerHTML = `
        <tr>
          <td colspan="3" style="color:red;">No diagnosis found for "${symptom}".<br>
          Please consult a healthcare professional.</td>
        </tr>
      `;
    }
  });
});
