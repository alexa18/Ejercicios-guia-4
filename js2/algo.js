
function segundo(){
	var distancia=19200*92657;
	return distancia;
}

//____________________________________________________________
	function cuarto(cadena) {
		if(cadena>0&&cadena<=9999){
  var x = cadena.length;
  var cadenaInvertida = "";
 
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}else{
	return "numero no valido"
}
}


//_____________________________________________________________
function sexto(){
	

}
//____________________________________________________________________
function catorse(){
	var suma=0;
  var con=-1;
	do{
		var numero=parseInt(prompt("ingrese un numero"));
		 suma=suma+numero;
		 alert(""+suma);
     con++;
	}while(numero != 0)
	return suma+" -- "+con;
}
//________________________________________________________________________
function doce(){
	var numero=(Math.floor(Math.random()*10+1));
	alert("Ingrese un numero de 1 a 10")
	
	do{
		var n=prompt("ingrese un numero");
		if (n<0 || n>10) {
			alert("numero no es valido");
		}else{
	if (numero<n) {
		alert("Numero mayor");
	}else{
		if (numero>n) {
			alert("Numero menor");
		}else{
			alert("Felicitaciones ");
		}
	}
	}
}while(numero != n)
return numero;
}

//______________________________________________________________________________
function ocho(){
	
	var mili=millas*1609;
	var cm=millas*160934;
return "milimetros "+mili+"<br>centimetros "+cm;
}
function ochoa(){
	var mt=millas*1609340;
	var km=millas*160934;

	return "metros "+mt+"<br>kilometros "+km;
}
function ochob(){
	var yardas=millas*1760;
	var pies=millas*5279;

	return "yardas "+yardas+"<br>pies "+pies;
}
function ochoc(){
	var pul=millas*63359;

	return "pulgadas "+pul;
}
//________________________________________________________________________________
function quinse(){

        var num,i,n=4,cont=2;
        var cad="";
        
       var num=prompt("Ingrese un numero positivo");
        if(num>2){
            cad="2 - 3";
            var con=2;
            while(cont<num){
                i=2;
                
                while(i<=n){
                    if(i==n){
                    cad=cad+" - "+n;
                    cont=cont+1;
                  con++;

                    }else{
                    if(n % i==0){
                    i=n;
                    }
                    }
                    i=i+1;
                }
                n=n+1;
            }
            return cad+"br> cuantos "+con;
        }else{
            if(num>0){
            if(num==1){
                return "es primo 2";
            }else{
            return "es primo 2, 3";
            }
            }else{
            return "ingresa numeros positivos";
            }
        }        
}
function nueve(){
  var pc=parseInt(prompt("El valor de la LapTop"));
  var impuesto=pc*0.05;
  var total=pc+impuesto+300+30;
  return "El valor de LapTop es "+total;
}