import { useState } from "react";

interface User {
    login: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string
};

interface IError {
    name: string,
    message: string
};

type Props = {
    readonly user: User
}

function FormValidator(props: Props){
    
    const { user } = props;


    // spread out the object
    const { login, password, email, firstName, lastName } = user
    //check login
    if(login.length < 3){
        console.log('too short');
    }

    if(login.match("[a-zA-Z]"))
    {
        console.log('type:' + login)
    }

    console.log(user);
    
};

export default FormValidator;