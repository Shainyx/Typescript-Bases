(() => {
    const fullName = (firstName, lastName, hero = false) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Ben', 'Tenyson', true);
    console.log({ name });
})();
export {};
