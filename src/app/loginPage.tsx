'use client'

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";

import { loginFunc } from "@/lib/auth";

import { AppContext } from "@/app/context";

export default function LoginPage() {

    const [ login, setLogin ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ loginMessage, setLoginMessage ] = useState<string>('');

    const { setUserId, setUserFullName } = useContext(AppContext);

    const router = useRouter();

    const handleChangeLogin: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setLogin(event.target.value);
    }

    const hangleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async(event) => {
        event.preventDefault();
        const user = await loginFunc(login, password);
        if(!user){
            setLoginMessage('incorrect login or password')
        }else{
            // save data to global context
            setUserId(user._id);
            setUserFullName(user.firstName + ' ' + user.lastName);

            router.push('/chat');
        }

        setLogin('');
        setPassword('');
    }

    return (
      <main>
        <div className="max-w-2xl p-10 border-2 border-black">
            <form className="flex flex-col justify-center items-center align-middle" onSubmit={handleSubmit}>
                <input className="w-3/4 m-2 border-2 border-black text-center" type="text" value={login} onChange={handleChangeLogin} placeholder="login" />
                <input className="w-3/4 m-2 border-2 border-black text-center" type="password" value={password} onChange={hangleChangePassword} placeholder="password" />
                <button className="w-1/2 m-2 border-2 border-black" type="submit">login</button>
                <button className="w-1/2 m-2 text-xs">reset password</button>
                <div className="h-4 text-xs font-bold"> {loginMessage} </div>
            </form>
        </div>
        {/*<pre>{JSON.stringify(session, null, 2)}</pre>*/}
      </main>
    );
  }