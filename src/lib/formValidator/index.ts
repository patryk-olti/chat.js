import { useState } from "react";

interface User {
    login: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string
}

export const FormValidator = (user: User) => {
    const [ errorMessage, setErrorMessage ] = useState<string>();
    //check login
    
    console.log(user);
}