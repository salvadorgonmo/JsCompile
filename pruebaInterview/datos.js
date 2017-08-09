function hacerPromedio(){
 var items = document.querySelectorAll(".coleccion");
 var suma = 0;
 for(var i=0;i<items.length;i++){
   suma = suma + parseInt(items[i].innerHTML);
 }
  var resultado = suma / 9;
  var resultado2 = Math.round(resultado * 10)/10;
  alert('Tu promedio es: '+ resultado2);
}
