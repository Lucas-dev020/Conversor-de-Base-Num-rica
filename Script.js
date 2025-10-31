document.getElementById("convertBtn").addEventListener("click", () => {
  //Obtém o número digitado e remove espaços no início/fim.
  const number = document.getElementById("numberInput").value.trim();
  //Obtém a base de origem (ex: 10, 2, 16) como um número inteiro.
  const baseFrom = parseInt(document.getElementById("baseFrom").value);
  // 3. Obtém a base de destino desejada como um número inteiro.
  const baseTo = parseInt(document.getElementById("baseTo").value);
  // 4. Referência ao elemento onde o resultado será exibido.
  const resultOutput = document.getElementById("resultOutput");
//*GERMANO PASSOU AQUI

// 5. Verifica se o campo de número está vazio.
  if (number === "") {
    resultOutput.textContent = "Por favor, digite um número.";
    return;
  }
// 6. Bloco para tentar a conversão e capturar erros.
  try {
    // 7. Converte o número (string) da 'baseFrom' para o valor decimal (Base 10).
    const decimalValue = parseInt(number, baseFrom);
    // 8. Se o valor decimal não for um número válido (NaN), lança um erro.
    if (isNaN(decimalValue)) throw new Error();
// 9. Converte o valor decimal para a 'baseTo' (destino) e deixa em maiúsculas.
    const converted = decimalValue.toString(baseTo).toUpperCase();
    resultOutput.textContent = converted;
  } catch {
    resultOutput.textContent = "Entrada inválida para a base escolhida.";
  }
});
