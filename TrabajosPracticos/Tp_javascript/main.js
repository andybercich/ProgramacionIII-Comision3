//Ejercicio 1.2

// {
// let a = 10;

// let b = 11;

// let c = a+b;

// console.log("El resultado de a + b es: ", c);

// }





// //Ejercicio 1.3
// {
//     let userInput = prompt("Por favor, ingresa tu nombre:");
//     let nameMayus =  userInput.toLocaleUpperCase();
//     console.log("HOLA ",nameMayus);
// }




// //Ejercicio 2.1

// {
//     let a = 25;
//     let b = 55;
//     let c;
//     if(a>b){

//          c = a;

//     }else{

//         c =b;

//     }
//     console.log("El mayor numero es: ", c);


// }




//Ejercicio 2.2


//  {

//     let numUserPrompt = prompt("Ingrese un número y se determinara si es par o impar");
//     if(numUserPrompt % 2 == 0){

//         console.log(`El número ${numUserPrompt} es par`);

//     }else{         
        
//         console.log(`El número ${numUserPrompt} es impar`);

//     }
//  }




//Ejercicio 3.1

// {
//     let num = 10;
//     while(num !=0){

        
//         console.log(num);  
//         num-=1;
//     }

// }


//Ejercicio 3.2


// {

//     do{

//         var numberUpper = prompt("Ingrese un número mayor a 100");

//     }while(numberUpper<=100)

//     console.log("Ingresaste un número mayor a 100: ", numberUpper);
// }




//Ejercicio 4.1


// function esPar(num){

//     if(num%2 == 0){
//         return true;
//     }else{
//         return false;
//     }

// }

// console.log("El numero 10 es par: ", esPar(10));
// console.log("El numero 17 es impar: ", esPar(17));
// console.log("El numero 20 es par: ", esPar(20));




//Ejercicio 4.2

// {
//     const convertirCelsiusAFahrenheit = (celsius) => celsius* 1.8 + 32

//     console.log(`25°C es igual a ${convertirCelsiusAFahrenheit(25)}°F`)


// }




//Ejercicio 5.1

// const persona = {
//     nombre: "Andres",
//     edad: 20,
//     ciudad: "Mendoza",
//     cambiarCiudad: (newCiudad) => {
//         persona.ciudad = newCiudad;
//     }
// };
// console.log("Nombre: ", persona.nombre, " Edad:",persona.edad, " Ciudad vieja: ",persona.ciudad );
// persona.cambiarCiudad("Cordoba");
// console.log("Nombre: ", persona.nombre, " Edad:",persona.edad, " Ciudad nueva: ",persona.ciudad );




//Ejercicio 5.2

// {
//     const libro = {

//         titulo: "Relato de un náufrago",
//         autor: "Gabriel García Márquez",
//         año: 1955,
//         esAntiguo: ()=>{
//             if(libro.año+10 < 2024){
//                 return true;
//             }else{
//                 return false;
//             }
//         }


//     }
//     let boolean = libro.esAntiguo();
//     if(boolean){
        

//         console.log("El libro ", libro.titulo ," es antiguo: ", boolean);

//     }else{

//         console.log("El libro ", libro.titulo ," no es antiguo: ", boolean);
//     }

// }






//Ejercicio 6.1


// {

//     let numbers = [1,2,3,4,5,6,7,8,9,10];
//     console.log("Numeros originales: ", numbers);
//     var i = 0
//     for(i; i<10; i++){
//         numbers[i] = numbers[i]*2;


//     }
//     console.log("Numeros multiplicados: ",numbers);


// }



//Ejercicio 6.2

// {

//     let pares = [];
//     let i = 1;
//     for(i;i<=20;i++){

//         if(i%2==0){

//             pares.push(i);

//         }


//     }

//     console.log("Primeros 10 numeros pares: ", pares)



// }



//Ejercicio 7.1

{
    const parrafos = document.getElementsByClassName("parrafo");
    const buttonBlue = document.getElementById("buttonBlue");  
    
    const changeColor = () =>{
        
        for (let i = 0; i < parrafos.length; i++) {

            if(parrafos[i].style.color == "blue"){
                parrafos[i].style.color = "red";
            }else{
                parrafos[i].style.color = "blue";
            }

            
        }

    }

    buttonBlue.addEventListener("click",()=>{

        changeColor();


    })


}


//Ejercicio 7.2

{

    document.getElementById("buttonAlert").addEventListener("click",()=>{
        let inputText = document.getElementById("inputAlert").value;
        if(inputText){
            alert("Has ingresado: "+inputText );
        }else{

            alert("No has ingresado nada" );

        }
        


    })


}


//Ejercicio 8.1

{
    let elements = document.querySelectorAll(".elementosListener");

    elements.forEach((element) => {
        element.addEventListener("click", () => {
            console.log(element.textContent);
        });
    });



}


//Ejercicio 8.2


{

    document.getElementById("buttonDehabilit").addEventListener("click",() =>{
        document.getElementById("fieldText").disabled= true;
    })
    document.getElementById("buttonHabilit").addEventListener("click",() =>{
        let inputElement = document.getElementById("fieldText").disabled= false;
    })

}


//Ejercicio 9.1
{
    let mailSave = document.getElementById("mail")
    if(JSON.parse(localStorage.getItem("mail"))){
        mailSave.innerText = mailSave.innerText + " " +JSON.parse(localStorage.getItem("mail"));
    }


    document.getElementById("saveMail").addEventListener("click",() =>{

        let mailToSave = document.getElementById("mailToSave").value;
        
        if(mailToSave && (mailToSave.includes("@gmail.com")|| mailToSave.includes("@hotmail.com"))){
            
            localStorage.setItem("mail",JSON.stringify(mailToSave))

            mailSave.innerText = "Correo guardado: " + JSON.parse(localStorage.getItem("mail"));

        }else{

            alert("EL MAIL DEBE TENER @gmail.com O @hotmail.com")

        }

    } )

    document.getElementById("deleteMail").addEventListener("click",() =>{
        localStorage.clear();
        mailSave.innerText= "Correo guardado: "
    } )



}










