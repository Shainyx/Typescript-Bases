(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Ben');
    console.log({ name });
})();
export {};
