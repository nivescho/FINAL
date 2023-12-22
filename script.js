function getID(id) {
    return document.getElementById(id).value; 
}
function disableInput(id) {
    document.getElementById(id).disabled = true;
}



function innerHTML(id,result){
    return document.getElementById(id).innerHTML=result;
}

function contadorCaracteres(){
    setInterval(function(){
        var c = getID("text");
        if (c.length>1000) {
            innerHTML("textvista", "Maximo de caracteres excedido");
            disableInput("text");
  
           
        }else{
            innerHTML("textvista", c.length);

        }
    },10);
}

// window.addEventListener("load",inicio,true);


document.getElementById("cifrar").addEventListener("click",function() {
    let texto = document.getElementById("mensaje").value;
    let ingresa = document.getElementById("offset").value;
        
    console.log(texto);
    console.log(ingresa);
    document.getElementById("mensaje2").value=cifrar(texto,ingresa);
});

document.getElementById("decifrar").addEventListener("click",function() {
    let texto = document.getElementById("mensaje").value;
    let ingresa = document.getElementById("offset").value;
    document.getElementById("mensaje2").value=decifrar(texto,ingresa);
});

function cifrar (texto, ingresa){
    let resultado="";
    let letras ="abcdefghijklmnñopqrstuvwxyz";

    ingresa = ( ingresa % 26+26) %  26;

    if (texto){
        for (let i = 0; i <texto.length; i++){
            if (letras.indexOf(texto[i])!=-1){
                let posicion =((letras.indexOf(texto[i])+ingresa)%26);
                resultado +=letras[posicion];
            }
            else
                resultado += texto[i];
                
        }
    }
   
}

function decifrar (texto, ingresa){
    let resultado="";
    let letras ="abcdefghijklmnñopqrstuvwxyz";

    ingresa = ( ingresa % 26-26) %  26;

    if (texto){
        for (let i = 0; i <texto.length; i++){
            if (letras.indexOf(texto[i])!=-1){
                let posicion =((letras.indexOf(texto[i])-ingresa)%26);
                resultado -=letras[posicion];
            }
            else
                resultado -= texto[i];
                
        }
    }
    
}
































