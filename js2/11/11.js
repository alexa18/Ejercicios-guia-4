function rta(){
	var cont=0;
	var array= [];
	
	do{
		cont++;
		var cal=parseInt(prompt("Ingrese la calificacion "+cont));
		if (cal != 0){
		array.push(cal);}
	}while(cal!=0){
		console.log(array);
		for (var i = 0; i < array.length; i++) {
			if(array[i]>5){
			document.write("Las materias cruzadas son las numero: "+(i+1)+"<br>");
			}else{
				document.write("Las materias perdidas son las numero: "+(i+1) + "<br>");
		}
	}
}
	}
