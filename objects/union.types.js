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
export {};
