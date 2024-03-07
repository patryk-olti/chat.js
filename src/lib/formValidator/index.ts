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

    // spread out the object
    const { login, password, email, firstName, lastName } = props.user;

    //check login
    if(login.length < 3){
        console.log('login is too short (less than 3 characters)');
        return false;
    }
    if(login.length > 20){
        console.log('login is too long (more than 20 characters)');
        return false;
    }

    // check password
    if(password.length < 6){
        console.log('password is too short (less than 6 characters)');
        return false;
    }
    if(password.length > 20){
        console.log('password us too long (more than 20 characters)');
        return false;
    }

    // check email
    let emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
    if(!email.match(emailPattern)){
        console.log('email is not a valid');
        return false;
    }

    //check firstName
    if(firstName.length < 3){
        console.log('firstName is too short (less than 3 characters)');
        return false;
    }
    if(firstName.length > 20){
        console.log('firstName is too long (more than 20 characters)');
        return false;
    }
    let firstNamePattern = '[a-zA-Z]';
    if(!firstName.match(firstNamePattern)){
        console.log('firstName is no clear as string - detected some banned characters');
        return false;
    }

    //check lastName
    if(lastName.length < 3){
        console.log('lastName is too short (less than 3 characters)');
        return false;
    }
    if(lastName.length > 20){
        console.log('lastName is too long (more than 20 characters)');
        return false;
    }
    let lastNamePattern = '[a-zA-Z]';
    if(!lastName.match(lastNamePattern)){
        console.log('lastName is no clear as string - detected some banned characters');
        return false;
    }

    return true;
};

export default FormValidator;