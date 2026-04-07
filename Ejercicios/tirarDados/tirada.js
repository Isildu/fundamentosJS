let tiradas = []
let cont = 0
let coincide = 0
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function todosIguales(num){
    for (let i = 0; i < tiradas.length; i++) {
        if(num == i){
            cont +=1;
        }
    }
    if(cont === tiradas.length) return 1
    else return 0
}

function generardados(){
    for (let i = 0; i < 6; i++) {
        tiradas.push(numeroAleatorio(1, 6));
    }
    if(todosIguales(tiradas[0]) === 1) coincide += 1
    tiradas.length = 0;
}
for (let x = 0; x < 1000; x++) {
    generardados();
}

console.log(coincide);