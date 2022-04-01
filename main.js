let app = document.getElementById('typewriter');
const nombre= document.getElementById("name");
const phone= document.getElementById("phone");
const email= document.getElementById("email");
const mensaje= document.getElementById("message");
var form =document.getElementById('form');
const parrafo = document.getElementById("warnings");


form.addEventListener('submit', function(e) {
  let warnings = ""
  let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/
  let entrar = false
  parrafo.innerHTML= ""
  if(nombre.value.length < 6){
    warnings +=`El nombre no es valido <br>`
    entrar = true
    }

if(!regexEmail.test(email.value)){
  warnings +=`El Email no es valido <br>`  
let entrar = true
}
if(phone.value.length < 7){
  warnings +=`El numero no es valido <br>`
  entrar = true
}
if(entrar){
  parrafo.innerHTML= warnings
  e.preventDefault()

}

}
)


let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Capital')
  .pauseFor(500)
  .deleteChars(10)
  .start();