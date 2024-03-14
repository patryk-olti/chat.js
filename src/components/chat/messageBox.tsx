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
    const [ messageArray, setMessageArray ] = useState<MessageArray[]>([
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

    const handleSetMessageArray = (message: string) => {
        let newIndex = messageArray.length;

        if(message.length > 0) {
            setMessageArray([
                ...messageArray,
                {
                    id: newIndex+1,
                    user: 'Patryk',
                    message: message,
                    ownerChat: true
                }
            ])
        }
    }

    const handleSubmit = () => {
        handleSetMessageArray(message);
        setMessage('');
    }

    return (
        <div className="h-full flex flex-col justify-end p-2">

            <div className="grow">
                {
                    messageArray.map((elem) => {
                        return elem.ownerChat ?
                            <div className="flex justify-end my-1" key={elem.id}>
                                <div className="flex items-center p-2 bg-gray-800 text-white rounded-xl">
                                    <div> {elem.message} </div>
                                    <div className="rounded-full flex items-center justify-center w-5 h-5 m-1 bg-sky-100 text-gray-800 text-sm"> {elem.user.charAt(0)} </div>
                                </div>
                            </div>
                            :
                            <div className="flex justify-start my-1" key={elem.id}>
                            <div className="flex items-center p-2 bg-sky-600 text-white rounded-xl">
                                <div className="rounded-full flex items-center justify-center w-5 h-5 m-1 bg-sky-300 text-gray-800 text-sm"> {elem.user.charAt(0)} </div>
                                <div> {elem.message} </div>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className="flex">
                <div className="flex justify-center grow"> 
                    <input 
                        type="text" 
                        value={message} 
                        onChange={handleSetMessage}
                        className="grow rounded-full p-2 bg-sky-200 text-black outline-none"
                        placeholder="Aa"
                    />
                </div>
                <div className="flex justify-center">
                    <button 
                        type="button"
                        onClick={handleSubmit}
                        className=" px-4 py-1 cursor-pointer m-2"
                    >S</button>
                </div>
            </div>
            
        </div>
    )
}

export default MessageBox;