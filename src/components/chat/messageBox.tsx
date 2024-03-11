import { useState } from "react";

import SingleMessage from "./singleMessage";

import "../../app/globals.css";

const MessageBox = () => {

    const [ message, setMessage ] = useState<string>('');

    const handleSetMessage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = () => {
        console.log(message);
        setMessage('');
    }

    return (
        <div className="h-lvh border-2 border-indigo-500 w-1/2 flex-1 text-center">
            chat.JS
            <div className="bg-slate-100 border-2 border-black">
                <div> mess </div>
                <div> message </div>
            </div>
            <div> 
                <input 
                    type="text" 
                    value={message} 
                    onChange={handleSetMessage}
                    className="border-2 border-black"
                />
            </div>
            <div>
                <button 
                    type="button"
                    onClick={handleSubmit}
                    className="border-2 border-black px-4 py-1 cursor-pointer"
                >send</button>
            </div>
        </div>
    )
}

export default MessageBox;