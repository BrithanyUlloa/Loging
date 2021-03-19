function Ingresar(){
    var Usuario = document.getElementById("us").value;
    var Cont = document.getElementById("con").value;
    
    var usuario1 = "Hola"
    var contra1 = "12345"
    
    // == es comparar, = asignar
    //; fin de una declaracion 
    // programas se entienden de arriba a abajo y de derecha a izquierda
    //OR || °
    if (Usuario.length == 0 || Cont.length == 0) {
        alert("Debes llenar todos los campos");
    };
    //AND && AMPERSON y
    if (Usuario == usuario1 && contra1 == Cont) {
       alert("Login aceptado"); 
       window.open("./loginb.html")
    }
}