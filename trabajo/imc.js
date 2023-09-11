
var nombre=document.getElementById("nombre").Value;
var jugador=document.getElementById("jugador").Value;
function calcularIMC(){
    var nombre= $("#nombre").val();
    var peso= parseFloat($("#peso").val());
    var altura= parseFloat($("#altura").val());

    if(peso && altura && altura > 0){
        var imc= peso/(altura*altura);
        var nivel = "";
            if (imc < 18.5) {
                nivel = "Bajo peso";
            } else if (imc >= 18.5 && imc < 25) {
                nivel = "Peso normal";
            } else if (imc >= 25 && imc < 30) {
                nivel = "Sobrepeso";
            } else {
                nivel = "Obesidad";
            } 
        alert(nombre +  "su IMC es :" +  imc + "su nivel es:"+nivel)    
    }
}
    function jugar() {
        const opciones = ["piedra", "papel", "tijeras"];
        var jugador = $("#jugador").val();
        var computadora = opciones[Math.floor(Math.random() * 3)];
        
        var resultado = "";
        
        if (jugador == computadora) {
            resultado = "¡Empate!";
        } else if (
            (jugador == "piedra" && computadora == "tijeras") ||
            (jugador == "papel" && computadora == "piedra") ||
            (jugador == "tijeras" && computadora == "papel")
        ) {
            resultado = "¡Ganaste!";
        } else {
            resultado = "¡Perdiste! La computadora eligió " + computadora;
        }
        alert(resultado);
        document.getElementById("resultado").textContent = resultado;
    }
    
   
    

    function adivinar() {
        var userGuess =parseInt($("#number").val());
        const randomnumber = Math.floor(Math.random() * 100) + 1;
        let Intentos=0;

       
        if ( userGuess  < 1 ||userGuess  > 100) {
           alert( "Ingresa un número válido entre 1 y 100.");
        } else if (userGuess  < randomnumber) {
            alert( "Más alto. Intentos: " +userGuess );
        } else if (userGuess  > randomnumber) {
            alert("Más bajo. Intentos: " +userGuess );
        } else {
            alert("¡Felicidades! Adivinaste el número" +userGuess +"intentos"+Intentos);
            
        } 
    
    }


