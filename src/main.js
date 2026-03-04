define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const msg = 'Hola mundo';
        console.log(msg);
    })();
});
define("destructuring/destructuring", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const avengers = {
            nick: 'Samuel L. Jackson',
            ironman: 'Robert Downey Jr.',
            vision: 'Paul Bettany',
            activo: true,
            poder: 1500
        };
        // Esta es desestructuración tradicional de objetos
        // const { poder, vision } = avengers;
        // console.log(poder.toFixed(2), vision.toUpperCase());
        // Usando res, ya evita la propiedad desestructurada
        const printAvenger = ({ ironman, ...args }) => {
            console.log(ironman, args);
        };
        printAvenger(avengers);
        const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
        const [capitan, ironman] = avengersArr; // En desestructuración de arreglos se usa []
        console.log({ ironman, capitan });
    })();
});
define("for loop/for-of", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const ironman = {
            name: 'Ironman',
            weapon: 'Armorsuit'
        };
        const capAmerica = {
            name: 'Capitan America',
            weapon: 'Escudo'
        };
        const thor = {
            name: 'Thor',
            weapon: 'Mjolnir'
        };
        const avengers = [ironman, thor, capAmerica];
        for (const avenger of avengers) {
            console.log(avenger.name, avenger.weapon);
        }
    })();
});
define("functions/args-default", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName, hero = false) => {
            return `${firstName} ${lastName}`;
        };
        const name = fullName('Ben', 'Tenyson', true);
        console.log({ name });
    })();
});
define("functions/args-optional", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName}`;
        };
        const name = fullName('Ben');
        console.log({ name });
    })();
});
define("functions/args-required", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName}`;
        };
        const name = fullName('Ben', 'Tenyson');
        console.log({ name });
    })();
});
define("functions/args-rest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, ...restArgs) => {
            return `${firstName} ${restArgs.join(' ')}`;
        };
        const superman = fullName('Clark', 'Joseph', 'Kent');
        console.log({ superman });
    })();
});
define("functions/function-type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const addNumber = (a, b) => a + b;
        const greet = (name) => `Hola ${name}`;
        const saveTheWorld = () => `El mundo esta salvado!`;
        let myFUnction;
        /*
            let myFunction: (x: number, z: number) => number;
            let myFunction: (x: string) => string;
            let myFunction: () => string;
        */
        // myFUnction = 10;
        // console.log(myFUnction);
        myFUnction = addNumber;
        console.log(myFUnction(1, 2));
        myFUnction = greet;
        console.log(myFUnction('Juan'));
        myFUnction = saveTheWorld;
        console.log(myFUnction());
    })();
});
define("functions/functions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = 'Flash';
        function returnName() {
            return hero;
        }
        const activateBatisignal = () => {
            return 'Batiseñal activada!';
        };
        console.log(typeof activateBatisignal);
        const heroName = returnName();
    })();
});
define("functions/test/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        // Funciones Básicas
        function sumar(a, b) {
            return a + b;
        }
        const contar = (heroes) => {
            return heroes.length;
        };
        const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
        contar(superHeroes);
        //Parametros por defecto
        const llamarBatman = (llamar = true) => {
            if (llamar) {
                console.log("Batiseñal activada");
            }
        };
        llamarBatman();
        // Rest?
        const unirheroes = (...personas) => {
            return personas.join(", ");
        };
        // Tipo funcion
        const noHaceNada = (numero, texto, booleano, arreglo) => { };
        // Crear el tipo de funcion que acepte la funcion "noHaceNada"
        let noHaceNadaTampoco;
        noHaceNadaTampoco = noHaceNada;
    })();
});
define("objects/objects", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Super velocidad', 'Viajar en el tiempo'],
        };
        flash = {
            name: 'Harry clark',
            age: 30,
            powers: ['Super velocidad'],
            getName() {
                return this.name;
            }
        };
        let superman = {
            name: 'Clark Kent',
            age: 60,
            powers: ['Super velocidad'],
        };
        console.log(flash);
    })();
});
define("objects/type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Super velocidad', 'Viajar en el tiempo'],
        };
        let superman = {
            name: 'Clark Kent',
            age: 60,
            powers: ['Super velocidad'],
            getName() {
                return this.name;
            }
        };
        console.log(flash);
    })();
});
define("objects/union.types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let myCustomVariable = 'David';
        console.log(typeof myCustomVariable);
        myCustomVariable = 20;
        console.log(typeof myCustomVariable);
        myCustomVariable = {
            name: 'David',
            age: 22,
            powers: ['volar'],
        };
        console.log(typeof myCustomVariable);
    })();
});
define("objects/test/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        // Objetos
        const batimovil = {
            carroceria: "Negra",
            modelo: "6x6",
            antibalas: true,
            pasajeros: 4
        };
        const bumblebee = {
            carroceria: "Amarillo con negro",
            modelo: "4x2",
            antibalas: true,
            pasajeros: 4,
            disparar() {
                console.log("Disparando");
            }
        };
        const villanos = [{
                nombre: "Lex Luthor",
                edad: 54,
                mutante: false
            }, {
                nombre: "Erik Magnus Lehnsherr",
                edad: 49,
                mutante: true
            }, {
                nombre: "James Logan",
                edad: undefined,
                mutante: true
            }];
        const charles = {
            poder: "psiquico",
            estatura: 1.78
        };
        const apocalipsis = {
            lider: true,
            miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
        };
        // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
        let mystique;
        mystique = charles;
        mystique = apocalipsis;
    })();
});
define("types/any", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avenger = 123;
        let exists;
        let power;
        avenger = 'Dr Strange';
        // console.log( avenger.charAt(0) );
        console.log(avenger.charAt(0));
        avenger = 150.23256415;
        console.log(avenger.toFixed(2));
        console.log(exists);
        console.log(power);
    })();
});
define("types/arrays", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        // const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
        villians.forEach(v => console.log(v.toUpperCase()));
    })();
});
define("types/booleans", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let isSuperman = true;
        let isBatman = false;
        isSuperman = (isBatman) ? true : false;
        console.log({ isSuperman });
    })();
});
define("types/enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let AudioLevel;
        (function (AudioLevel) {
            AudioLevel[AudioLevel["min"] = 1] = "min";
            AudioLevel[AudioLevel["medium"] = 2] = "medium";
            AudioLevel[AudioLevel["max"] = 10] = "max";
        })(AudioLevel || (AudioLevel = {}));
        let currentAudio = AudioLevel.max;
        console.log(currentAudio);
        console.log(AudioLevel);
    })();
});
define("types/never", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const error = (message) => {
            if (false) {
                throw new Error(message);
            }
            return 1;
        };
        error('Auxilio!');
        console.log('Hola Mundo');
    })();
});
define("types/null-undefined", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        // strictNullChecks
        let isActive = false;
        // console.log(isActive)
    })();
});
define("types/numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avengers = 10;
        console.log(avengers);
        const villians = 20;
        if (avengers < villians) {
            console.log('Estamos en problemas');
        }
        else {
            console.log('Nos salvamos');
        }
        avengers = Number('55A');
        console.log({ avengers });
    })();
});
define("types/strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batman = 'Batman';
        const linternaVerde = "Linterna Verde";
        const volcanNegro = `Héroe: Volcan Negro`;
        console.log(` I'm ${batman} `);
        console.log(batman.toUpperCase());
        console.log(batman[10]?.toUpperCase() || 'No está presente');
    })();
});
define("types/tuples", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = ['Dr Strange', 100, true];
        hero[0] = 'Ironman';
        hero[1] = 50;
        hero[2] = false;
        console.log(hero);
    })();
});
define("types/void", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        function callBatman() {
            return;
        }
        const callSuperman = () => {
            return;
        };
        const a = callBatman();
        console.log(a);
    })();
});
//# sourceMappingURL=main.js.map