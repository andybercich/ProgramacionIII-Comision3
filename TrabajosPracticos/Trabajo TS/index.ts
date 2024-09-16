
//Ejercicio 3

let pString :HTMLElement | null = document.getElementById("string");
let pNumber :HTMLElement | null = document.getElementById("string");
let pBoolean :HTMLElement | null = document.getElementById("string");
let pDate :HTMLElement | null = document.getElementById("string");

if(pString && pNumber && pBoolean && pDate){
    let num : Number = 1245
    pString.innerText+= "Esto es un String";
    pNumber.innerHTML+= num

}

//Ejercicio 4


let pFuntion :HTMLElement | null = document.getElementById("funtion");
if(pFuntion){pFuntion.innerHTML +=convertNumberToString(7845)}


 function convertNumberToString(numberToString:number) {
    return numberToString.toString();
}



//Ejercicio 5
let pArray :HTMLElement | null = document.getElementById("array");
let numbers: Array<number> = [1,8,7,4,5,96,120,1];
if(pArray){pArray.innerHTML +=plusArray(numbers)}



function plusArray(arrayNumber:Array<number>) {
    let sum:number = 0;
    arrayNumber.forEach(element => {
        sum+=element;
    });
    return sum;
}



//Ejercicio 6

class Estudiante{

    name : String;
    age : number;
    curse:String;
    constructor( name:String, age:number, curse:String){
        this.name = name;
        this.age = age;
        this.curse = curse;
    }


}

let pName:HTMLElement | null = document.getElementById("name");
let pAge:HTMLElement | null = document.getElementById("age");
let pCurse:HTMLElement | null = document.getElementById("curse");
if(pName && pAge && pCurse){
    let estudiante : Estudiante = new Estudiante("Andrés", 20, "TUP");
    pName.innerHTML += estudiante.name;
    pAge.innerHTML += estudiante.age;
    pCurse.innerHTML += estudiante.curse;
}


//Ejercicio 7


type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: string;
};

const miDireccion: Direccion = {
    calle: "Calle Principal 123",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345"
};

let direccion = document.createElement('p');
direccion.innerHTML = `<strong>Calle:</strong> ${miDireccion.calle}, <strong>Ciudad:</strong> ${miDireccion.ciudad}, <strong>Codigo Postal:</strong> ${miDireccion.codigoPostal}    `

document.getElementById("section")?.appendChild(direccion);


//Ejercicio 8

interface User{

    name: String,
    mail : String

    saludar():String;
}


class Persona implements User{

    name : String;
    mail : String;
    edad : number
    constructor( name:String, mail:String, edad:number){
        this.name = name;
        this.mail = mail;
        this.edad = edad;
    }

    saludar(): String {
        return `Hola ${this.name}`
    }
    presentarse(): String {
        return `Hola, mi nombre es ${this.name} y tengo ${this.edad}`
    }

}
let persona1 : Persona = new Persona("Andres", "andy@gmail.com",20);
let pPersona= document.createElement("p");
pPersona.innerHTML = `${persona1.saludar()}`
document.getElementById("section2")?.appendChild(pPersona);


//Ejercicio 9

let pPresentarse = document.createElement("p");
pPresentarse.innerHTML = `${persona1.presentarse()}`
document.getElementById("section3")?.appendChild(pPresentarse);



//Ejercicio 10


class Caja <T>{
    private name : string
    private dato : T

    constructor (name:string,dato : T){
        this.dato = dato;
        this.name = name;
    }

    
    public set setDato(dato : T) {
        this.dato = dato;
    }

    
    public get getDato() : T {
        return this.dato;
    }

    
    public get getName() : string {
        return this.name;
    }
    
    
    
}

let caja1 : Caja<String> = new Caja("Caja 1","Dato String");

let caja2 : Caja<Number> = new Caja("Caja 2",45);

let parraph1 = document.createElement("p");
let parraph2 = document.createElement("p");
parraph1.innerHTML = `${caja1.getName}: ${caja1.getDato}`;
parraph2.innerHTML = `${caja2.getName}: ${caja2.getDato}`;
document.getElementById("section4")?.appendChild(parraph1);
document.getElementById("section4")?.appendChild(parraph2);


//Ejercicio 12

enum Color{

    AMARILLO = "AMARILLO",
    ROJO = "ROJO",
    NEGRO = "NEGRO"

}

let varEnum : Color = Color.NEGRO;
let pEnum = document.createElement("p");
pEnum.innerHTML = `El color es: ${varEnum}`
document.getElementById("section5")?.appendChild(pEnum);