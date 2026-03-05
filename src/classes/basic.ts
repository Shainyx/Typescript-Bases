(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string | undefined;

        /* cuando se usa static no es necesario crear el objeto si no la clase como tal */
        static avgAge: number = 35;
        static getAvAge() {
            return this.name;
        }

        // constructor(name: string, team: string, realName: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }


        /* Forma corta */

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) {}

        bio(): string {
            return `${ this.name } (${ this.name })`;
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);

})();