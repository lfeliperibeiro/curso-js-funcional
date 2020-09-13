function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}


const resultado = somar(6)(6)(10)
console.log(resultado)

