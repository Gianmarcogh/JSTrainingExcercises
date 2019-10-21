// --- EJERCICIO ------------------------------------------------------------------------
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};
// A. Implementa una función clone que devuelva un objeto clonado a partir de otro:
function clone(source) {
    return Object.assign({}, source);
}
  // B. Dados dos objetos cualesquiera, implementa una función "merge" que mezcle uno sobre otro.
  // El objeto resultante debe ser la mezcla de las propiedades del objeto "source" sobre las
  // del objeto "target".
  // TIP: Usa la función "clone" del apartado A.
  
  function merge(source, target) {
    return Object.assign(source, target);
  }
  
  console.log(clone(a));
  console.log(merge(b, a)) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}