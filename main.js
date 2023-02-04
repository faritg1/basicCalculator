const pantalla = document.querySelector('#pantalla');
function selectId(id){
    return document.querySelector(id); 
} 
/* const buttons = document.querySelectorAll('button');
buttons.forEach((i)=>{
    i.onclick = ()=>{
        if(i.id == "limpiar"){
            pantalla.innerHTML = "";
        }else if(i.id == "retroceso"){
            let string = pantalla.innerText.toString();
            pantalla.innerText = string.substring(0, string.length - 1); // -->substring(): método devuelve la parte del stringíndice desde el inicio hasta el índice final y excluyendolo, o hasta el final de la cadena si no se proporciona un índice final. Tambien sirve el metodo --> substr(), pero esta obsoleto.
        }else if(pantalla.innerText != "" && i.id == "igual"){
            pantalla.innerText = eval(pantalla.innerText); // --> eval(): evalúa un código JavaScript representado como una cadena de caracteres (string), sin referenciar a un objeto en particular.
        }else if(pantalla.innerText == "" && i.id == "igual"){
            pantalla.innerText = "¡Vacío!";
            setTimeout(() => (pantalla.innerText = ""), 2000);
        }else{
            pantalla.innerText += i.id;
        }
    }
}); */

function agregar(i){
    if(pantalla.innerText==0){
        pantalla.innerText = "";
        pantalla.innerText += i;
    }else{
        pantalla.innerText += i;
    }
}

function eliminar(i){
    if(i==0){
        pantalla.innerText = "";
    }else if(i==1){
        pantalla.innerText = pantalla.innerText.slice(0, pantalla.innerText.length - 1);
    }
}

function resultado(){
    if(pantalla.innerText == ""){
        pantalla.innerText = "¡Vacío!";
        setTimeout(() => (pantalla.innerText = ""), 2000);
    }else{
        pantalla.innerText = eval(pantalla.innerText);

    }
}

const activarTema = selectId(".activarTema");
const calculadora = selectId(".calculadora");
const icono = selectId(".icono");
let activo = true;
activarTema.onclick = ()=>{
    calculadora.classList.toggle("dark");
    activarTema.classList.toggle("activando");
    activo = false;
};

//Teclado
function seleccion(keyCode) {
let evaluando=document.getElementById(`${keyCode}`)
evaluando.setAttribute('class', 'click')
    setTimeout(() => {
      evaluando.setAttribute('class', 'btnNumero')
  }, 200)
}

document.addEventListener('keydown', (event) => {
let keyEvent = event.key;
let code = event.keyCode;
if (code==8) {
    eliminar(1)
    seleccion(46)
}else if(code==13) {
    resultado()
    seleccion(code)
}else if(code==32){
    seleccion(code)
}else if(keyEvent >=0){
    agregar(keyEvent)
}else if(keyEvent=="/"|| keyEvent=="*"||keyEvent=="+"||keyEvent=="-"){
    agregar(keyEvent)
}else if(keyEvent="c"){
    eliminar(0)
}
    seleccion(keyEvent)
}) 