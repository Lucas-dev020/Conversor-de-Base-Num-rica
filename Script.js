document.getElementById("convertBtn").addEventListener("click", () => {
  const number = document.getElementById("numberInput").value.trim();
  const baseFrom = parseInt(document.getElementById("baseFrom").value);
  const baseTo = parseInt(document.getElementById("baseTo").value);
  const resultOutput = document.getElementById("resultOutput");
//*GERMANO PASSOU AQUI
  if (number === "") {
    resultOutput.textContent = "Por favor, digite um número.";
    return;
  }

  try {
    const decimalValue = parseInt(number, baseFrom);
    if (isNaN(decimalValue)) throw new Error();

    const converted = decimalValue.toString(baseTo).toUpperCase();
    resultOutput.textContent = converted;
  } catch {
    resultOutput.textContent = "Entrada inválida para a base escolhida.";
  }
});
