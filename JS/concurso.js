var formulario = document.getElementById("formulario");
var nombre_completo = document.getElementById("nombre_completo");
var fecha_nacimiento = document.getElementById("fecha_nacimiento");
var fecha_mascota = document.getElementById("fecha_mascota");
var numero_contacto = document.getElementById("numero_contacto");
var numero_dni = document.getElementById("numero_dni");
var radio_perro = document.getElementById("radio_perro");
var radio_gato = document.getElementById("radio_gato");
var checkbox1 = document.getElementById("checkbox_1");
var checkbox2 = document.getElementById("checkbox_2");
var checkbox3 = document.getElementById("checkbox_3");
var checkbox4 = document.getElementById("checkbox_4");
var checkbox5 = document.getElementById("checkbox_5");
var checkbox6 = document.getElementById("checkbox_6");
var checkbox_todo = document.getElementById("checkbox_todo");
var checkbox_nada = document.getElementById("checkbox_nada");
var mayusculas = document.getElementById("mayusculas");
var minusculas = document.getElementById("minusculas");
var select_perro = document.getElementById("select_perro");
var select_gato = document.getElementById("select_gato");
var formulario_perro = document.getElementById("formulario_perro");
var formulario_gato = document.getElementById("formulario_gato");
var calc_dato1 = document.getElementById("calc_dato1");
var calc_dato2 = document.getElementById("calc_dato2");
var calc_enviar = document.getElementById("calc_enviar");
var calc_resultado = document.getElementById("calc_resultado");
var checkbox_contador = 0;
const checkboxes = [
  checkbox1,
  checkbox2,
  checkbox3,
  checkbox4,
  checkbox5,
  checkbox6,
];
var mensaje_error = document.getElementById("mensaje_error");

/*
.addEventListener("",()=>{

})

.classList.add("error");
.classList.remove("error");

nombre_completo.addEventListener("focusout", ()=>{
    if(nombre_completo.value == ""){
        nombre_completo.classList.add("error");
    }
    else{
        nombre_completo.classList.remove("error");
    }
})


fecha_nacimiento.addEventListener("focusout",()=>{

    if(fecha_nacimiento.value == fecha_mascota.value){
        fecha_nacimiento.classList.add("error");
        fecha_mascota.classList.add("error");
    }
    else{
        fecha_nacimiento.classList.remove("error");
        fecha_mascota.classList.remove("error");
    }
})

fecha_mascota.addEventListener("focusout",()=>{

    if(fecha_nacimiento.value == fecha_mascota.value){
        fecha_nacimiento.classList.add("error");
        fecha_mascota.classList.add("error");
    }
    else{
        fecha_nacimiento.classList.remove("error");
        fecha_mascota.classList.remove("error");
    }
})

numero_contacto.addEventListener("focusout", ()=>{
    if(numero_contacto.value == ""){
        numero_contacto.classList.add("error");
    }
    else{
        numero_contacto.classList.remove("error");
    }
})

numero_dni.addEventListener("focusout", ()=>{
    if(numero_dni.value == ""){
        numero_dni.classList.add("error");
    }
    else{
        numero_dni.classList.remove("error");
    }
})


radio_gato.addEventListener("change",()=>{
    toggleMascota(2);
})
radio_perro.addEventListener("change",()=>{
    toggleMascota(1);
})
function toggleMascota(num){
    if(num == 1){
        formulario_gato.classList.add("invisible");
        formulario_perro.classList.remove("invisible");
    }
    else{
        formulario_perro.classList.add("invisible");
        formulario_gato.classList.remove("invisible");
    }
}

calc_enviar.addEventListener("click",()=>{
    
    var suma = Number(calc_dato1.value) + Number(calc_dato2.value);

    calc_resultado.value = suma;
})


checkbox_todo.addEventListener("change",()=>{
    if(checkbox_todo.checked == true){
        checkbox1.checked = true;
        checkbox2.checked = true;
        checkbox3.checked = true;
        checkbox4.checked = true;
        checkbox5.checked = true;
        checkbox6.checked = true;
        checkbox_nada.checked = false;
    }
})


checkbox_nada.addEventListener("change",()=>{
    if(checkbox_nada.checked == true){
        checkbox1.checked = false;
        checkbox2.checked = false;
        checkbox3.checked = false;
        checkbox4.checked = false;
        checkbox5.checked = false;
        checkbox6.checked = false;
        checkbox_todo.checked = false;
    }
})
mayusculas.addEventListener("click",()=>{
    select_gato.options[1].text= select_gato.options[1].text.toUpperCase(); 
    select_gato.options[2].text= select_gato.options[2].text.toUpperCase(); 
    select_gato.options[3].text= select_gato.options[3].text.toUpperCase(); 
    select_gato.options[4].text= select_gato.options[4].text.toUpperCase(); 
    select_gato.options[5].text= select_gato.options[5].text.toUpperCase(); 
    select_gato.options[6].text= select_gato.options[6].text.toUpperCase(); 

    select_perro.options[1].text= select_perro.options[1].text.toUpperCase(); 
    select_perro.options[2].text= select_perro.options[2].text.toUpperCase(); 
    select_perro.options[3].text= select_perro.options[3].text.toUpperCase(); 
    select_perro.options[4].text= select_perro.options[4].text.toUpperCase(); 
    select_perro.options[5].text= select_perro.options[5].text.toUpperCase(); 
    select_perro.options[6].text= select_perro.options[6].text.toUpperCase(); 


})
minusculas.addEventListener("click",()=>{
    select_gato.options[1].text= select_gato.options[1].text.toLowerCase(); 
    select_gato.options[2].text= select_gato.options[2].text.toLowerCase(); 
    select_gato.options[3].text= select_gato.options[3].text.toLowerCase(); 
    select_gato.options[4].text= select_gato.options[4].text.toLowerCase(); 
    select_gato.options[5].text= select_gato.options[5].text.toLowerCase(); 
    select_gato.options[6].text= select_gato.options[6].text.toLowerCase(); 

    select_perro.options[1].text= select_perro.options[1].text.toLowerCase(); 
    select_perro.options[2].text= select_perro.options[2].text.toLowerCase(); 
    select_perro.options[3].text= select_perro.options[3].text.toLowerCase(); 
    select_perro.options[4].text= select_perro.options[4].text.toLowerCase(); 
    select_perro.options[5].text= select_perro.options[5].text.toLowerCase(); 
    select_perro.options[6].text= select_perro.options[6].text.toLowerCase(); 

})


*/

// THE NEW WAYYYYYYYYYYYYY

nombre_completo.addEventListener("focusout", (e) => {
  datos_error(event.target);
});
fecha_nacimiento.addEventListener("change", () => {
  fecha_error();
});
fecha_mascota.addEventListener("change", () => {
  fecha_error();
});
numero_contacto.addEventListener("focusout", () => {
  datos_error(event.target);
});
numero_dni.addEventListener("focusout", () => {
  datos_error(event.target);
});
radio_gato.addEventListener("change", () => {
  toggleMascota(2);
});
radio_perro.addEventListener("change", () => {
  toggleMascota(1);
});
calc_enviar.addEventListener("click", () => {
  var suma = Number(calc_dato1.value) + Number(calc_dato2.value);
  calc_resultado.value = suma;
});
mayusculas.addEventListener("click", () => {
  for (let i = 1; i <= 6; i++) {
    select_gato.options[i].text = select_gato.options[i].text.toUpperCase();
    select_perro.options[i].text = select_perro.options[i].text.toUpperCase();
  }
});
minusculas.addEventListener("click", () => {
  for (let i = 1; i <= 6; i++) {
    select_gato.options[i].text = select_gato.options[i].text.toLowerCase();
    select_perro.options[i].text = select_perro.options[i].text.toLowerCase();
  }
});

for (let i = 0; i < 6; i++) {
  checkboxes[i].addEventListener("change", () => contar_box(checkboxes[i]));
}

checkbox_todo.addEventListener("change", () => {


  contar_box(checkbox_todo);



  if (checkbox_todo.checked == true) {


    for (let i = 0; i <= 5; i++) {


      if (checkboxes[i].checked == false) {


        checkboxes[i].checked = true;


        contar_box(checkboxes[i]);


      }
    }
    checkbox_nada.checked = false;
  }
});

checkbox_nada.addEventListener("change", () => {

  if (checkbox_nada.checked == true) {


    for (let i = 0; i <= 5; i++) {


      if (checkboxes[i].checked == true) {


        checkboxes[i].checked = false;

        checkbox_contador = 1;


      }
    }
    checkbox_todo.checked = false;
  }
});

function contar_box(checkbox) {
  if (checkbox.checked == true) {
    checkbox_contador++;
  } else if (checkbox.checked == false) {
    checkbox_contador--;
  }

  if (checkbox_contador >= 1 && checkbox_nada.checked == true) {
    checkbox_nada.checked = false;
    checkbox_contador--;
  }
  if (checkbox_contador == 6 && checkbox_todo.checked == false) {
    checkbox_todo.checked = true;
    checkbox_contador++;
  }
}

formulario.addEventListener("submit", () => {
  event.preventDefault();
  formulario_revision();
});

function fecha_error() {
  if (fecha_mascota.value === fecha_nacimiento.value) {
    fecha_nacimiento.classList.add("error");
    fecha_mascota.classList.add("error");
  } else if (
    fecha_mascota.value == "" ||
    fecha_nacimiento.value == "" ||
    fecha_mascota != fecha_nacimiento
  ) {
    fecha_nacimiento.classList.remove("error");
    fecha_mascota.classList.remove("error");
  }
}

function datos_error(e) {
  if (e.value == "") {
    e.classList.add("error");
  } else {
    e.classList.remove("error");
  }
}

function toggleMascota(num) {
  if (num == 1) {
    formulario_gato.classList.add("invisible");
    formulario_perro.classList.remove("invisible");
  } else {
    formulario_perro.classList.add("invisible");
    formulario_gato.classList.remove("invisible");
  }
}
function formulario_revision() {
    if (nombre_completo.value == "" || numero_contacto.value == "" || numero_dni.value == "") error(1);
    else if (select_perro.value == 0 && select_gato.value == 0) error(1);
    else if (radio_perro.value == "" && radio_gato.value == "" ) error(1)
    else if (mayusculas.value == 0 && minusculas.value == 0)error(1);
    
    else if (fecha_nacimiento.value == "" || fecha_mascota.value == "" || fecha_nacimiento.value === fecha_mascota.value ) error(2);
    
    else if (checkbox_contador == 0) error(3);
    else if (calc_resultado.value == 0)error(4);
    
    else{
        correcto();
    }
}
function error(num) {
    mensaje_error.classList.add("mensaje_visible");
  switch (num) {
    case 1:
        mensaje_error.innerHTML = "Todos los campos deben estar completos!";
        break;
    case 2:
        mensaje_error.innerHTML = "Las fechas no pueden ser iguales!";
        break;
    case 3:
        mensaje_error.innerHTML = "Almenos un checkbox debe estar seleccionado!";
        break;
    case 4:
        mensaje_error.innerHTML = "No sumaste 2 numeros!";
        break;
  }
}
function correcto(){
    mensaje_error.classList.add("mensaje_visible");
    mensaje_error.innerHTML = "Guardamos todos tus datos correctamente!";
}