var um = parseFloat(prompt("Digite o primeiro número: "));
var dois = parseFloat(prompt("Digite o segundo número: "));
var operacao = prompt("Digite a operação desejada: ");

var resultado;

if (operacao == "+") {
    resultado = um + dois;
} else if (operacao == "-") {
    resultado = um - dois;
} else if (operacao == "*" || operacao == "x" || operacao == "X") {
    resultado = um * dois;
} else if (operacao == "/") {
    resultado = um / dois;
} else {
    resultado = "Operação inválida";
}

alert("O resultado é: " + resultado);