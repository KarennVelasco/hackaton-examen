/*function myFunction () { 
    // crea un nuevo div 
    // y añade contenido 
    var newDiv = document.createElement("div"); 
    console.log("paso:v");
    var newContent = document.createTextNode("Hola!¿Qué tal?"); 
    console.log("paso:v");
    newDiv.appendChild(newContent); //añade texto al div creado. 
    console.log("paso:v");
    // añade el elemento creado y su contenido al DOM 
    var currentDiv = document.getElementById("divpreguntaf"); 
    console.log("paso:v");
    var list = document.getElementById("myList"); 
    list.insertBefore(newDiv, currentDiv); 
  }
*/
  function myFunction() {

    var newDiv = document.createElement("input");
    newDiv.type = "text"; 
    var newContent = document.createTextNode("Hola!¿Qué tal?"); 

    var newBr = document.createElement("br");


    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    newItem.appendChild(textnode);
  
    var list = document.getElementById("myList");
    list.insertBefore(newDiv, list.childNodes[0]);
    list.insertBefore(newBr, newDiv);
  }