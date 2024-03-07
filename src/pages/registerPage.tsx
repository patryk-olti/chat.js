import { useState } from "react"
import FormValidator from "@/lib/formValidator"

import "../../src/app/globals.css";

interface User {
    login: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string
}

const RegisterPage = () => {

    const [ user, setUser ] = useState<User>({
        login: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    const [ created, setCreated ] = useState<number>(0); //0 - start, 1 - created, 2 - failed


    const handleChangeUserProperty: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setUser( prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        let isValid = FormValidator({user});

        if(!isValid){ setCreated(2); }

        if(isValid){
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json();
            const success = await result.success;
            
            if(success === true){ setCreated(1); }
            if(success === false){ setCreated(2); }
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmitForm}>
                <input 
                    className="text-center text-xs" 
                    type="text" 
                    placeholder="login"
                    value={user.login}
                    onChange={handleChangeUserProperty}
                    name='login'/>

                <input 
                    className="text-center text-xs" 
                    type="password" 
                    placeholder="password" 
                    value={user.password}
                    onChange={handleChangeUserProperty}
                    name='password'/>

                <input 
                    className="text-center text-xs" 
                    type="email" 
                    placeholder="email" 
                    value={user.email}
                    onChange={handleChangeUserProperty}
                    name='email'/>
                
                <input 
                    className="text-center text-xs" 
                    type="firstName" 
                    placeholder="firstName" 
                    value={user.firstName}
                    onChange={handleChangeUserProperty}
                    name='firstName'/>

                <input 
                    className="text-center text-xs" 
                    type="lastName" 
                    placeholder="lastName" 
                    value={user.lastName}
                    onChange={handleChangeUserProperty}
                    name='lastName'/>

                { created === 0 ? <p className='h-15'></p> : null }
                { created === 1 ? <p className='h-15 text-green-600'>User has been created.</p> : null }
                { created === 2 ? <p className='h-15 text-red-600'>Problem with user creation.</p> : null }

                <button 
                    type='submit'
                    > check </button>
            </form>
        </div>
    )
}

export default RegisterPage;