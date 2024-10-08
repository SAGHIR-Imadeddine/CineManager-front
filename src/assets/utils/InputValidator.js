export const nameValidator = (name) => {
    console.log(`Validating name: '${name}'`);
    const nameRegex = /^[a-zA-Z]{3,}$/;
    return nameRegex.test(name);
}

export const ageValidator = (age) => {
    const ageRegex = /^[0-9]{2}$/;
    return ageRegex.test(age);
}

export const emailValidator = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    return emailRegex.test(email);
}

export const passwordValidator = (password) => {
    if (password.length < 8 || password.length > 26) {
        return false;
    }
}

