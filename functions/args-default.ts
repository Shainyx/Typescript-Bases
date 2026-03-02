(() => {

    const fullName = (firstName: string, lastName?: string, hero: boolean = false): string => {
        return `${ firstName } ${ lastName }`;
    }

    const name = fullName('Ben','Tenyson', true);

    console.log({ name });

})();