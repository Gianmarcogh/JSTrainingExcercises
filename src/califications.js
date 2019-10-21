// --- EJERCICIO ------------------------------------------------------------------------

// [!] NOTA: Realiza primero el ejercicio "values".

// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };
  
  // Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo
  // el sistema de calificación español:
  // Matrícula de Honor = 10
  // Sobresaliente = entre 9 y 10
  // Notable = entre 7 y 9
  // Bien = entre 6 y 7
  // Suficiente = entre 5 y 6
  // Insuficiente = entre 4 y 5
  // Muy deficiente = por debajo de 4
  
  function printAverage(classResults) {
    const values = Object.values(classResults);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return values.reduce(reducer) / values.length;
  }
  function textualMedia(classResults) {
    const media = printAverage(classResults);
    if (media === 10) {
        return 'Matrícula de Honor';
    } else if (media >= 9 && media < 10) {
        return 'Sobresaliente';
    } else if (media >= 7 && media < 9) {
        return 'Notable';
    } else if (media >= 6 && media < 7) {
        return 'Bien';
    } else if (media >= 5 && media < 6) {
        return 'Suficiente';
    } else if (media >= 4 && media < 5) {
        return 'Insuficiente';
    } else {
        return 'Muy deficiente';
    }
  }
  console.log(textualMedia(eso2o));
  // TIP: Rompe en tantas funciones auxiliares como necesites.
  // TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto.
  // En Array.prototype también cuentas con otro método que podría serte de utilidad
  // para transformar un array a un único valor.