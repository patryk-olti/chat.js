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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={login} onChange={handleChangeLogin} />
                <input type="password" value={password} onChange={hangleChangePassword} />
                <button type="submit">login</button>
            </form>
        </div>
      </main>
    );
  }