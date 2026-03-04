(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // Esta es desestructuración tradicional de objetos
    // const { poder, vision } = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    // Usando res, ya evita la propiedad desestructurada
    const printAvenger = ( { ironman, ...args }: Avengers) =>{
        console.log(ironman, args);
    }
    
    printAvenger( avengers );


    const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];

    const [capitan, ironman ] = avengersArr; // En desestructuración de arreglos se usa []
    console.log({ ironman, capitan });

})(); 