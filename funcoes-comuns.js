function somar(a, b) {
  return a + b;
}

function dobrar(numero) {
  return numero * 2;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function media(numeros) {
  const soma = numeros.reduce((a, b) => a + b, 0);
  return soma / numeros.length;
}

function ehPalindromo(string) {
  const reverso = string.split('').reverse().join('');
  return string === reverso;
}

function maiorNumero(numeros) {
  return Math.max(...numeros);
}

function contarCaractere(string, caractere) {
  return string.split(caractere).length - 1;
}

module.exports = { somar, dobrar, ehPar, media, ehPalindromo, maiorNumero, contarCaractere };