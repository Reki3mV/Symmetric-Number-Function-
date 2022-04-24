La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
Esta devuelve true o false dependiendo de si el número es simétrico o no. 
Un número es simétrico cuando es igual a su reverso.
Ej:numeroSimetrico(11711) devuelve true

function numeroSimetrico(num) {
  return ""+num === (""+num).split("").reverse().join("")
}
