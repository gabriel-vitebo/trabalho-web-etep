document.getElementById("calculateButton").addEventListener("click", function () {
  const name = document.getElementById("studentName").value;
  const grade1 = parseFloat(document.getElementById("grade1").value);
  const grade2 = parseFloat(document.getElementById("grade2").value);

  if (!name || isNaN(grade1) || isNaN(grade2)) {
    document.getElementById("result").textContent = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const average = ((grade1 + grade2) / 2).toFixed(2);
  document.getElementById("result").textContent = `${name}, sua média é ${average}`;
});
