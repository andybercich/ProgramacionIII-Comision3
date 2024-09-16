"use strict";
//Ejercicio 3
var _a, _b, _c, _d, _e, _f;
let pString = document.getElementById("string");
let pNumber = document.getElementById("string");
let pBoolean = document.getElementById("string");
let pDate = document.getElementById("string");
if (pString && pNumber && pBoolean && pDate) {
    let num = 1245;
    pString.innerText += "Esto es un String";
    pNumber.innerHTML += num;
}
//Ejercicio 4
let pFuntion = document.getElementById("funtion");
if (pFuntion) {
    pFuntion.innerHTML += convertNumberToString(7845);
}
function convertNumberToString(numberToString) {
    return numberToString.toString();
}
//Ejercicio 5
let pArray = document.getElementById("array");
let numbers = [1, 8, 7, 4, 5, 96, 120, 1];
if (pArray) {
    pArray.innerHTML += plusArray(numbers);
}
function plusArray(arrayNumber) {
    let sum = 0;
    arrayNumber.forEach(element => {
        sum += element;
    });
    return sum;
}
//Ejercicio 6
class Estudiante {
    constructor(name, age, curse) {
        this.name = name;
        this.age = age;
        this.curse = curse;
    }
}
let pName = document.getElementById("name");
let pAge = document.getElementById("age");
let pCurse = document.getElementById("curse");
if (pName && pAge && pCurse) {
    let estudiante = new Estudiante("Andrés", 20, "TUP");
    pName.innerHTML += estudiante.name;
    pAge.innerHTML += estudiante.age;
    pCurse.innerHTML += estudiante.curse;
}
const miDireccion = {
    calle: "Calle Principal 123",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345"
};
let direccion = document.createElement('p');
direccion.innerHTML = `<strong>Calle:</strong> ${miDireccion.calle}, <strong>Ciudad:</strong> ${miDireccion.ciudad}, <strong>Codigo Postal:</strong> ${miDireccion.codigoPostal}    `;
(_a = document.getElementById("section")) === null || _a === void 0 ? void 0 : _a.appendChild(direccion);
class Persona {
    constructor(name, mail, edad) {
        this.name = name;
        this.mail = mail;
        this.edad = edad;
    }
    saludar() {
        return `Hola ${this.name}`;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.name} y tengo ${this.edad}`;
    }
}
let persona1 = new Persona("Andres", "andy@gmail.com", 20);
let pPersona = document.createElement("p");
pPersona.innerHTML = `${persona1.saludar()}`;
(_b = document.getElementById("section2")) === null || _b === void 0 ? void 0 : _b.appendChild(pPersona);
//Ejercicio 9
let pPresentarse = document.createElement("p");
pPresentarse.innerHTML = `${persona1.presentarse()}`;
(_c = document.getElementById("section3")) === null || _c === void 0 ? void 0 : _c.appendChild(pPresentarse);
//Ejercicio 10
class Caja {
    constructor(name, dato) {
        this.dato = dato;
        this.name = name;
    }
    set setDato(dato) {
        this.dato = dato;
    }
    get getDato() {
        return this.dato;
    }
    get getName() {
        return this.name;
    }
}
let caja1 = new Caja("Caja 1", "Dato String");
let caja2 = new Caja("Caja 2", 45);
let parraph1 = document.createElement("p");
let parraph2 = document.createElement("p");
parraph1.innerHTML = `${caja1.getName}: ${caja1.getDato}`;
parraph2.innerHTML = `${caja2.getName}: ${caja2.getDato}`;
(_d = document.getElementById("section4")) === null || _d === void 0 ? void 0 : _d.appendChild(parraph1);
(_e = document.getElementById("section4")) === null || _e === void 0 ? void 0 : _e.appendChild(parraph2);
//Ejercicio 12
var Color;
(function (Color) {
    Color["AMARILLO"] = "AMARILLO";
    Color["ROJO"] = "ROJO";
    Color["NEGRO"] = "NEGRO";
})(Color || (Color = {}));
let varEnum = Color.NEGRO;
let pEnum = document.createElement("p");
pEnum.innerHTML = `El color es: ${varEnum}`;
(_f = document.getElementById("section5")) === null || _f === void 0 ? void 0 : _f.appendChild(pEnum);
