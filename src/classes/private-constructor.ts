(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        /* Solo puede ser invocado dentro de la misma clase */
        private constructor (public name: string) {

        }

        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis');
            }

            return Apocalipsis.instance;
        }

        changeName( newName: string) {
            this.name = newName;
        }
    }

    /* No se instacia como un objeto, llamas a la clase tal cual */
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Tormenta');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3); // Salida todos sale el mismo nombre

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis');
    // console.log(apocalipsis);

})();