

function Tipotriangulo(){
    var L1 = 0;
    var L2 = 0;
    var L3 = 0;

L1 = parseInt(prompt("Por favor ingrese el valor del lateral izquierdo  "));
L2 = parseInt(prompt("Por favor ingrese el valor del lateral derecho"));
L3 = parseInt(prompt("Por favor ingrese el valor de la base "));

if((L1!=L2 && L2!=L3)){
    alert ("El triangulo es Escaleno")
}   


if ((L1==L2 && L2==L3)){
alert ("El triangulo es equilatero")
}
else {
    alert ("El triangulo es Isoceles")

}
    
}
 // SI VALE Menos DE 100.000 TIENE 5% DE DESCUENTO, Si vale menos  DE 200.000 TIENE 10% DE DESCUENTO, 
 //SI VALE menos DE  500.000 TIENE 15% DE DESCUENTO
function Descuento() {
    var precio = 0;
    var porcentaje = 0;
    var total = 0;

 precio = parseInt(prompt("POR FAVOR INGRESE EL PRECIO"));
   

    if(precio<100000){
        porcentaje = precio * 5/100
        total = precio - porcentaje
    alert("El prodcuto tiene un descuento del 5% el nuevo valor a pagar es:  " + total)
    }

   if ((precio>=100000)&& (precio<200000)){
       porcentaje = precio * 10/100
       total = precio - porcentaje
       alert("El prodcuto tiene un descuento del 10% el nuevo valor a pagar es:  " + total)
   }
   if ((precio>=200000)&& (precio<500000)){
    porcentaje = precio * 15/100
    total = precio - porcentaje
    alert("El prodcuto tiene un descuento del 15% el nuevo valor a pagar es:  " + total)
 }
 } 
// promedio de peso para las estatura 1.60, 1.70 y 1.80
 function Peso() {
  var kg = 0;
  var estatura = 0;
  
estatura = parseFloat(prompt("Por favor ingrese su estatura"));
kg = parseInt(prompt("Por favor ingrese su peso"));
 
if ((estatura== 1.60)&& (kg>=48) && (kg<=51)) {

    alert("estas en el peso correcto")
}
if ((estatura== 1.60) && (kg>51)) {
    alert("Tienes sobre peso")
}
if ((estatura== 1.60) && (kg<48)) {
   alert("Estas bajo de peso")
 }
 if ((estatura== 1.70)&& (kg>=54) && (kg<=58)) {

     alert("estas en el peso correcto")
 }
 if ((estatura== 1.70) && (kg>58)) {
     alert("Tienes sobre peso")
 }
 if ((estatura== 1.70) && (kg<54)) {
    alert("Estas bajo de peso")
  }
  if ((estatura== 1.80)&& (kg>=61) && (kg<=66)) {

    alert("estas en el peso correcto")
}
if ((estatura== 1.80) && (kg>66)) {
    alert("Tienes sobre peso")
}
if ((estatura== 1.80) && (kg<61)) {
   alert("Estas bajo de peso")
 }
  }
// saber cuantos kilometros debo correr dependiendo la cantidaad de calorias que consumi  con un rango de 0 a 1968 
  function Calorias() {
     var caloria = 0;
      var km = 0;
      var caloria = parseInt(prompt("Ingrese la cantidad de calorias que consumió "));

      if (caloria <=492) {
          alert ("Debes correr 5 km")
          
      }
      if ((caloria >492) && (caloria <=984)) {
          alert("Debes corres 10 km")
          }
       if ((caloria >984) && (caloria <=1476)) {
        alert("Debes corres 15 km")
            }

        if ((caloria >1476) && (caloria <=1968)) {
            alert("Debes corres 20 km")
         }
  }
  //saber si puede ingresar a la discoteca
  function TrueFalse() {
     var edad = 0;
     edad = parseInt(prompt("Ingrese su edad"))

     if (edad>=18) {
         alert("Ingresa a la discoteca")
     }
     
     if  (edad<=17) {
         alert("no ingresa a la discoteca")
        }
 }
// si compra 3 pares de zapatos o maas tiene un 10% de descuento

function zapatos(){
    var a = 0;
    var n = 0;
    var d = 0;
    var igual= 0;

    a = parseInt(prompt("¿cuantos pares de zapatos compro?"));
    n = parseInt(prompt("ingrese el precio de su compra"));

    if (a>=3){
        d = n * 10/100
        igual = n - d
        alert("Tiene un descuento del 10% \n El valor a pagar es: " + igual)

 }
 if (a<2){
     alert("No tiene descuento")

 }
        
    }
    function edades(){
        var e=0;
        e = parseInt(prompt("Ingrese la edad a consular"));

        if (e<=12) {
            alert("Es un niño")
        }
        if ((e>=15 && e<=17)) {
            alert("Es un adolescente")
            
        }
        if ((e>=18) && (e <=29)) {
            alert("Es un adulto")
        }
        if (e>=30){ 
        alert("es un adulto mayor")
         }
    }

    function areaCiruculo() {
        var a= 0;
        var r= 0;
         r = parseInt(prompt("Ingrese el radio del circulo"));

         a = 3.1416 * r * r 

         alert("El area del circulo es: " + a )

        
    }
