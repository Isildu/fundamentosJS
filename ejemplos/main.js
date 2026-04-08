function calcularMallor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1
    } else if (num2 >= num1 && num2 >= num3) {
        return num2
    } else {
        return num3
    }
}
console.log(calcularMallor(1, 2, 3))
console.log(calcularMallor(3, 2, 1))
console.log(calcularMallor(2, 3, 1))
console.log(calcularMallor(2, 2, 1))
console.log(calcularMallor(1, 3, 1))
console.log(calcularMallor(2, 3, 3))
console.log(calcularMallor(3, 3, 3))

const alojamiento = [
    {
        titulo: "Apartamento Barcelona",
        precio: "89€/noche",
        imagen: "https://picsum.photos/id/1/300/200"
    },
    {
        titulo: "Casa montaña",
        precio: "199€/noche",
        imagen: "https://picsum.photos/id/26/300/200"
    },
    {
        titulo: "Villa piscina",
        precio: "75€/noche",
        imagen: "https://picsum.photos/id/91/300/200"
    },
    {
        titulo: "loft moderno",
        precio: "120€/noche",
        imagen: "https://picsum.photos/id/30/300/200"
    }
]

const style = document.createElement("style");
style.textContent = `
body {
    margin: 0;
    font-family: Arial;
background-color: #f5f5f5;
}
`;
document.head.appendChild(style);
const header = document.createElement("header");
header.innerHTML = "<h1>alquiler</h1>";
document.body.appendChild(header);