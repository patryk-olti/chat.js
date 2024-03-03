"use client"

import { useState } from "react";

export default function LoginPage() {

    const [ login, setLogin ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleChangeLogin: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setLogin(event.target.value);
    }

    const hangleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(`credentials: ${login}  ${password}`);
        setLogin('');
        setPassword('');
    }

    return (
      <main>
        <div className="w-1/3 p-10 border-2 border-black">
            <form className="flex flex-col justify-center items-center align-middle" onSubmit={handleSubmit}>
                <input className="w-3/4 m-2 border-2 border-black text-center" type="text" value={login} onChange={handleChangeLogin} placeholder="login" />
                <input className="w-3/4 m-2 border-2 border-black text-center" type="password" value={password} onChange={hangleChangePassword} placeholder="password" />
                <button className="w-1/2 m-2 border-2 border-black" type="submit">login</button>
                <button className="w-1/2 m-2 text-xs">reset password</button>
            </form>
        </div>
      </main>
    );
  }