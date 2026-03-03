(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }


    let myCustomVariable: string | number | Hero = 'David';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'David',
        age: 22,
        powers: ['volar'],
    }
    console.log(typeof myCustomVariable);

})();