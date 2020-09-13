//  retornar uma função a pratir de outra função

function potencia(base){
    return function(exp) {
        return Math.pow(base, exp);
    }
}

const eightBits = potencia(2)

console.log(eightBits(8)) 