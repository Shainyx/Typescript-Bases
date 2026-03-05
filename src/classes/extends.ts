(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor Avenger llamado!');
        }

        private getFullName() {
            return `${ this.name } ${ this.realName }`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
        }

        getFullNameFromXmen() {
            console.log( /*super.getFullName()*/ ); // Marca el error por que es un private
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);

})();