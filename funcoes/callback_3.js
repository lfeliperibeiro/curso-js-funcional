const num = [1,2,3,4,5];
const dobro = n => n * 2
const callbackMap = (n, i, a) => n * 2 + i + a.length
console.log(num.map(dobro))
console.log(num.map(callbackMap))

const nomes = ['Ana', 'Maria', 'Carlos', 'Fabio']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(letras)
