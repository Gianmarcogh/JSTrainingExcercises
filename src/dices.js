// --- EJERCICIO ------------------------------------------------------------------------

// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula
// junto a estos datos métodos que implementen la funcionalidad de:
// - Hacer reset: poner a undefined o null ambos resultados.
// - Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
//   - Informa al usuario que debe tirar primero cuando corresponda.
//   - Si saca doble 6, ¡dale un premio!
function play() {
    let firstDice = null;
    let secondDice = null;
    let prize =  false;

    function roll() {
        firstDice = Math.floor(Math.random() * 6) + 1;
        secondDice = Math.floor(Math.random() * 6) + 1;
        if (firstDice === 6 && secondDice === 6) {
            prize = true;
        }
    }

    function reset (toUndefined) {
        toUndefined ? firstDice = undefined : null;
        toUndefined ? secondDice = undefined : null;
        prize = false;
    }

    function print() {
        console.log('First dice:', firstDice);
        console.log('Second dice:', secondDice);
        if (prize) console.log('You have won a car, congratulations');
    }
    roll();
    print();
    reset(false);
}
