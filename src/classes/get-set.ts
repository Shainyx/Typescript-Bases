(() => {

    class WarriorZ {

        constructor(
            public name: string,
            public hability: string,
        ) {
            console.log('Constructor Guerrero llamado!');
        }

        protected getFullName() {
            return `${this.name} - ${this.hability}`;
        }
    }


    class Saiyan extends WarriorZ {
        constructor(
            name: string,
            hability: string,
            public useTransformation: boolean,
        ) {
            super(name, hability)
        }

        /* Cuando se usa get, se considera una propiedad */
        get fullName() {
            return `${this.name} - ${this.hability}`;
        }

        /* Solo se puede usar un parametro */
        set fullName(name: string) {

            if(name.length < 3){
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }

            this.name = name;
        }

        getFullNameFromSaiyan() {
            console.log( super.getFullName() );
        }
    }

    const goku = new Saiyan('Goku', 'Genkidama', true);

    /* De esta manera se setea la propiedad */
    goku.fullName = 'Kakaroto';

    /* Es una propiedad y no se usa () */
    console.log( goku.fullName );
})();