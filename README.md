
# Prueba técnica - Desarrolador Backen

A continuación se explicara el desarrollo y descripción de las funciones desarroladas para resolver el problema propuesto. 


## Desarrollo

## Función stringToArray

Entrada: Acepta un único argumento llamado string. Esta cadena se espera que contenga números separados por comas (,).

split(","): La función split divide la cadena en un array basándose en el delimitador proporcionado, que en este caso es una coma. Por ejemplo, si string es "1,2,3", después de esta operación tendríamos un array que se vería así: ["1", "2", "3"].


```javascript
  function stringToArray(string) {
  return string.split(",").map((number) => parseInt(number, 10));
}
```
## Función summatory

Entrada: Acepta un único argumento llamado array, que se espera que sea un array de números.

reduce(): La función reduce se utiliza para procesar todos los elementos del array y reducirlos a un único valo

```javascript
  function summatory(array) {
  return array.reduce((acc, val) => acc + val, 0);
}
```
## Función transportCapacity

Entrada: La función acepta dos argumentos. El primer argumento utiliza una técnica de desestructuración: [head, ...tail] representa un array donde head es el primer elemento y tail es un array con el resto de los elementos.
busSize representa la capacidad máxima de personas que puede llevar el bus en un viaje.

Se utiliza forEach para recorrer cada uno de los grupos en tail (recordando que head ya fue considerado en sum).
En cada iteración, se suma el tamaño del grupo actual (groupSize) a sum.
Si en algún momento, sum excede el busSize, se establece transportAll en false y se sale del ciclo forEach (utilizando return).
Si sum coincide exactamente con busSize, eso significa que el bus está lleno para ese viaje y se resetea sum a 0, preparándolo para el siguiente grupo o conjunto de grupos.

Salida:
La función devuelve transportAll. Si en algún momento durante el recorrido de los grupos, el total acumulado (sum) superó la capacidad del bus (busSize), transportAll será false, indicando que no todos los grupos pueden ser transportados sin exceder la capacidad del bus. Si nunca se excede la capacidad, transportAll será true.

```javascript
function transportCapacity([head, ...tail], busSize) {
  let sum = head;
  let transportAll = true;

  tail.forEach((groupSize) => {
    sum += groupSize;
    if (sum > busSize) {
      transportAll = false;
      return;
    }
    if (sum === busSize) sum = 0;
  });

  return transportAll;
}
```
## Función allSizes

Entrada: groups - Una cadena que representa a los grupos. Se espera que los grupos estén separados por comas.

se convierte la entrada de string a un array con la función stringToArray y se calcula la sumatoria de las personas que irán en el bus con la función summatory, despues se hace una nueva instancia del array y de recorre.

```javascript
function allSizes(groups) {
  groups = stringToArray(groups);
  const totalPeople = summatory(groups);
  const sizes = [];

  Array.from({ length: totalPeople }, (_, i) => i + 1).forEach((i) => {
    if (totalPeople % i === 0 && transportCapacity(groups, i)) {
      sizes.push(i);
    }
  });

  return sizes.join(",");
}
```

## 🔗 Endpoint sizes

URL: https://a96i7004si.execute-api.us-east-2.amazonaws.com/dev/sizes

Metodo: POST

Body: { groups: "1,2,1,1,1,2,1,3" }

![Screenshot_1](https://github.com/juxnmxG/prueba-banco-occidente/assets/61563571/6c496d53-2d39-46d6-bb6c-61b3aec1e085)

## 🚀 About Me
Soy consciente de la importancia del crecimiento tecnológico que se lleva en nuestra región, por lo cual me siento en plena capacidad de consolidar y llevar proyectos que concienticen a las personas a mejoras tecnológicas.

Linkedin
linkedin.com/in/juan-manuel-gamboa-rodríguez-123045209

Teléfono
3102695764

Email
juxnmxgxmbox@gmail.com
