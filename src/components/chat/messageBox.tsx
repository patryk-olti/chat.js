import { useState } from "react";

import SingleMessage from "./singleMessage";

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
        <div>
            <div>
                <div> mess </div>
                <div> message </div>
            </div>
            <div>
                <input 
                    type="text" 
                    value={message} 
                    onChange={handleSetMessage}
                />
            </div>
            <div>
                <button 
                    type="button"
                    onClick={handleSubmit}
                >send</button>
            </div>
        </div>
    )
}

export default MessageBox;