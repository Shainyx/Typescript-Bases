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
export {};
