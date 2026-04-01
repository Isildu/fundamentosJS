function saludar(){
    alert("Hola, bienvenido")
}

saludar()
saludar()

let ex2 = function calcularDescuento(precio, descuento){
    const calculo =  (precio * descuento) / 100 
    return precio - calculo 
}


console.log(ex2(120, 10))
console.log(ex2(120, 20))
console.log(ex2(120, 25))
console.log(ex2(120, 50))

let triplicar = (num) => num * 3;


console.log(triplicar(-2.347))
console.log(triplicar(891))
console.log(triplicar(-15.672))
console.log(triplicar(43))
console.log(triplicar(-109.853))
console.log(triplicar(7))