(() => {

    abstract class Transformation {
        constructor(
            public name: string,
            public power: string
        ) { }
    }

    class Saiyan extends Transformation {

        worlDomination() {
            return 'Mundo dominado';
        }

    }
    class Android extends Transformation {

        defeatSaiyan() {
            return 'Saiyan derrotados';
        }

    }

    const vegeta = new Saiyan('UltraEgo', 'Super Alto');
    const cell = new Android('Perfecto', 'Poderoso');

    // console.log(vegeta);
    // console.log(cell);

    const printName = (character: Transformation) => {
        console.log(character.name);
    }

    /* 
        La clase tiene que ser extendido de la clase abstracta,
        para poder realizar esta accion
    */
    printName(vegeta);

})();