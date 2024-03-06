import { FormEventHandler, useState } from "react"

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

    const handleChangeUserProperty: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setUser( prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(user);
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

                <button 
                    type='submit'
                    > check </button>
            </form>
        </div>
    )
}

export default RegisterPage;