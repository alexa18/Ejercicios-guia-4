alert("Exito");
function lol(){
    document.getElementById('uno').style.display='none';
    document.getElementById('dos').style.display='none';
}

lol();
function segrado(op){
   
    var a = parseInt(document.getElementById("val_a").value);
    var b = parseInt(document.getElementById("val_b").value);var c = parseInt(document.getElementById("val_c").value); 
    
     var ops = {
        sumar: function sumarNumeros() {
            return (-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
        },
     sumar2: function sumarNumeros2() {
            return (-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
        }}
    
  
    switch(op) { 
            case 'sumar':
            var resultado = ops.sumar();
          var resultado2 = ops.sumar2();
            if(resultado > 0){
                 document.getElementById("label").innerHTML= resultado ;
                 document.getElementById("label2").innerHTML= resultado2 ;
            }
            else{
                alert("No tiene solucion Real");
            }
                break;
}}


function ocultar_1(){
document.getElementById('uno').style.display='block';
   document.getElementById('dos').style.display='none';
}

function ocultar_2(){
document.getElementById('dos').style.display='block';
    document.getElementById('uno').style.display='none';
}

function area(){
     var area = parseInt(document.getElementById("area").value);
    
    var res = Math.PI*(Math.pow(area,2));
    
    alert( res );
    
    document.getElementById("label3").innerHTML= res ;
}

function radio(){
    var radio = parseInt(document.getElementById("radio").value);
     var res = 2*(Math.PI*radio);
    document.getElementById("label4").innerHTML= res ;
}

function rev() { 
text=document.form.text.value; 
backwards=""; 
for(count=text.length; count >= 0; count--) 
backwards+=text.substring(count,count-1); 
document.form.text.value=backwards; 
} 

function me(){
     var a1 = parseInt(document.getElementById("a1").value);
    var a2 = parseInt(document.getElementById("a2").value);
    var a3 = parseInt(document.getElementById("a3").value); 
     var a4 = parseInt(document.getElementById("a4").value);
    var a5 = parseInt(document.getElementById("a5").value);
    
      var e1 = parseInt(document.getElementById("e1").value);
    var e2 = parseInt(document.getElementById("e2").value);
    var e3 = parseInt(document.getElementById("e3").value); 
     var e4 = parseInt(document.getElementById("e4").value);
    var e5 = parseInt(document.getElementById("e5").value);
    
    var a_res = ((a1+a2+a3+a4+a5)/5);
    var e_res = ((e1+e2+e3+e4+e5)/5);
    
    
    document.getElementById("altura").innerHTML= "La Media  de la altura es: " + a_res ;
    document.getElementById("edad").innerHTML= "La Media de la edad es: " + e_res ;
    var tod = 0;
    var arreglo = [a1,a2,a3,a4,a5];
    
          for (var i = 0; i < arreglo.length; i++) { 
             
    if(arreglo[i] > 175){
        tod++;
    }
              document.getElementById("e175").innerHTML= "La Cantidad de Alumnos que miden mas de 1.75 son " + tod ;
}
    
    
}

//Definimos un metodo para el tipo de datos "string", que lo unico que hace es devolver nuestra palabra en orden inverso.
    String.prototype.reverse=function(){return this.split("").reverse().join("");}

   function testCapCua(word) {
   
    
    //Una vez definido, ya lo tenemos practicamente hecho.
    var inverseWord = word.reverse();
    if (word == inverseWord) { //Si la palabra es igual a la palabra girada.
     alert("La palabra '"+word+"' SI es cap i cua");
     return(true); //Es capicua/palindromo.
    }
    else {
     alert("La palabra '"+word+"' NO es cap i cua: '"+inverseWord+"'");
     return(false); //NO es capicua/palindromo.
    } 
   } 

function redondear(){
    var num = parseInt(document.getElementById("km").value);;
    var tod = num * 16.4;
    var n = tod.toFixed()
    document.getElementById("kms").innerHTML = "Gasolina Gastada = " + n + " Litros";

}
function lo(){
    alert("yes");
}

function fecha(){
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var anho = parseInt(document.getElementById("anho").value);
alert("si");
 // el único año que no existe es el 0
 if(anho==0){
 document.getElementById("res").innerHTML= " Fecha Incorrecta  " + dia + "/" + mes + "/" + anho;
 }else if(mes==2 && (dia>=1 && dia<=28)){
   document.getElementById("res").innerHTML= " Fecha Correcta  " + dia + "/" + mes + "/" + anho;
 }else if((mes==4 || mes==6 || mes==9 || mes==11) &&
 (dia>=1 && dia<=30)){
 document.getElementById("res").innerHTML= " Fecha Correcta  " + dia + "/" + mes + "/" + anho;
 }else if( (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12) &&
 (dia>=1 && dia<=31)){
 document.getElementById("res").innerHTML= " Fecha Correcta  " + dia + "/" + mes + "/" + anho;
 }else{
 document.getElementById("res").innerHTML= " Fecha Incorrecta " + dia + "/" + mes + " /" + anho;
 }
 
 
 
                        }
                        