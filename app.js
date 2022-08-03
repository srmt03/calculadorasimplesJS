'use strict'

function somar () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    const resultado = document.getElementById('resultado');
    
    const somar = `O resultado da soma é: ` + (parseFloat(num1) + parseFloat(num2));
    resultado.textContent = somar;
}
document.getElementById('somar').addEventListener('click', somar);

function subtrair () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const resultado = document.getElementById('resultado');

    const subtrair = `O resultado da subtracão é: ` + (parseFloat(num1) - parseFloat(num2));
    resultado.textContent = subtrair;
}
document.getElementById('subtrair').addEventListener('click', subtrair);

function multiplicar () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const resultado = document.getElementById('resultado');

    const multiplicar = `O resultado da divisão é: ` + (parseFloat(num1) * parseFloat(num2));
    resultado.textContent = multiplicar;
}
document.getElementById('multiplicar').addEventListener('click', multiplicar);

function dividir () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const resultado = document.getElementById('resultado');

    const dividir = `O resultado da divisão é: ` + (parseFloat(num1) / parseFloat(num2));
    resultado.textContent = dividir;
}
document.getElementById('dividir').addEventListener('click', dividir);