/**
 * Convierte una cadena separada por comas en un array de números.
 * @param {string} string - Cadena separada por comas de números.
 * @returns {number[]} - Un array de números.
 */
function stringToArray(string) {
  return string.split(",").map((number) => parseInt(number, 10));
}

/**
 * Calcula la suma de un array de números.
 * @param {number[]} array - Un array de números.
 * @returns {number} - La suma de los números en el array.
 */
function summatory(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

/**
 * Determina si los grupos pueden ser transportados sin exceder la capacidad del autobús o cambiar el orden.
 * @param {number[]} groups - Un array que representa los tamaños de los grupos.
 * @param {number} busSize - Capacidad del autobús.
 * @returns {boolean} - Verdadero si todos los grupos pueden ser transportados, falso en caso contrario.
 */
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

/**
 * Obtiene posibles tamaños de autobuses que pueden transportar grupos sin exceder la capacidad o cambiar el orden.
 * @param {string} groups - Una cadena separada por comas de tamaños de grupos.
 * @returns {string} - Una cadena separada por comas de posibles tamaños de autobuses.
 */
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

module.exports = { allSizes };
