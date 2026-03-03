(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Ben', 'Tenyson');
    console.log({ name });
})();
export {};
