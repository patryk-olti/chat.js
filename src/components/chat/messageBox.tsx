import { useState } from "react";

import SingleMessage from "./singleMessage";

import "../../app/globals.css";

type MessageArray = {
    id: number,
    user: string,
    message: string,
    ownerChat: boolean
}

const MessageBox = () => {

    const [ message, setMessage ] = useState<string>('');
    const [ messageArry, setMessageArry ] = useState<MessageArray[]>([
        {
            id: 1,
            user: 'Patryk',
            message: 'Hello',
            ownerChat: true
        },
        {
            id: 2,
            user: 'Marcin',
            message: 'Hi how are you?',
            ownerChat: false
        },
        {
            id: 3,
            user: 'Patryk',
            message: 'Thanks and you?',
            ownerChat: true
        }
    ]);

    const handleSetMessage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = () => {
        console.log(message);
        setMessage('');
    }

    return (
        <div className="h-lvh border-2 border-indigo-500 w-1/2 flex flex-col justify-end">

            <div className="grow">
                {
                    messageArry.map((elem) => {
                        return elem.ownerChat ?
                            <div className="bg-slate-100 flex items-center justify-start my-2" key={elem.id}>
                                <div className="border-2 border-black rounded-full flex items-center justify-center w-5 h-5 mx-2"> {elem.user.charAt(0)} </div>
                                <div> {elem.message} </div>
                            </div>
                            :
                            <div className="bg-slate-100 flex items-center justify-end my-2" key={elem.id}>
                                <div> {elem.message} </div>
                                <div className="border-2 border-black rounded-full flex items-center justify-center w-5 h-5 mx-2"> {elem.user.charAt(0)} </div>
                            </div>
                    })
                }
            </div>
            
            <div className="flex justify-center"> 
                <input 
                    type="text" 
                    value={message} 
                    onChange={handleSetMessage}
                    className="border-2 border-black"
                />
            </div>
            <div className="flex justify-center">
                <button 
                    type="button"
                    onClick={handleSubmit}
                    className="border-2 border-black px-4 py-1 cursor-pointer m-2"
                >send</button>
            </div>
        </div>
    )
}

export default MessageBox;