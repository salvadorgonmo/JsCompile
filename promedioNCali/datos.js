var nodosC = 0;
function hacerPromedio(){
 var items = document.querySelectorAll('input[name="coleccion"]');
 var suma = 0;
 for(var i=0;i<items.length;i++){
   suma = suma + parseInt(items[i].value);
 }
  var resultado = suma / nodosC ;
  alert('Tu promedio es: '+ resultado);
}

function crearNodos(){
  var nodos = document.querySelector('input[name="total"]');
  var boton = document.getElementById('boton');
  var titulo = document.getElementById('title').innerHTML = "Ingresa las calificaciones a promediar";
nodosC = parseInt(nodos.value)

  for(var i=0;i<nodosC;i++){
    var saltos = document.createElement("BR");
    document.body.appendChild(saltos);

    var x = document.createElement("INPUT");
    x.setAttribute("type","number");
    x.setAttribute("name","coleccion");
    document.body.appendChild(x);
  }

var u = document.createElement("BUTTON");
u.setAttribute("type","button");
u.setAttribute("name","button");
u.setAttribute("onClick","hacerPromedio()");
document.body.removeChild(nodos);
document.body.removeChild(boton);
//document.body.appendChild(saltos);
document.body.appendChild(u);

var boton = document.querySelector('button[name="button"]').innerHTML="Promediar!";
}
