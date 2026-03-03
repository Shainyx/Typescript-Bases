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
export {};
