import { useState } from "react";
import { Types } from 'mongoose';

import SingleMessage from "./singleMessage";

import "../../app/globals.css";

import { IoIosSend } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

import { Message } from "@/lib/types";

type Props = {
    messageArray: Message[],
    setMessageArray: React.Dispatch<React.SetStateAction<MessageArray[]>>
}

type MessageArray = {
    user: string,
    message: string,
    ownerChat: boolean
}

const MessageBox = (props: Props) => {

    const [sendLike, setSendLike ] = useState<boolean>(true);
    const [ message, setMessage ] = useState<string>('');
    const [ messageArrayState, setMessageArrayState ] = useState<MessageArray[]>([]);

    const handleSetMessage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if(event.target.value.length > 0){
            setSendLike(false);
        }else{
            setSendLike(true);
        }
        setMessage(event.target.value);
    }


    const handleSetMessageArray = (message: any) => {
        if(sendLike){
            message = 'YIPPIE-KI-YAY!';
        }

        if(message.length > 0) {
            setMessageArrayState([
                ...messageArrayState,
                {

                    user: 'Patryk',
                    message: message,
                    ownerChat: true
                }
            ]);
            
            setSendLike(true);
        }
    }

    const handleSubmit = () => {
        handleSetMessageArray(message);
        setMessage('');
    }

    return (
        <div className="h-full flex flex-col justify-end p-2">

            <div className="grow">
                {/*
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
                    })*/
                }
                <div className="flex justify-center items-center h-full text-slate-400 select-none">
                    select the person you want to chat with
                </div>
            </div>

            <div className="flex">
                <div className="flex justify-center grow"> 
                    <input 
                        type="text" 
                        value={message} 
                        onChange={handleSetMessage}
                        className="grow rounded-full px-6 bg-sky-200 text-black outline-none"
                        placeholder="Aa"
                    />
                </div>
                <div className="flex justify-center">
                    <button 
                        type="button"
                        onClick={handleSubmit}
                        className=" px-4 py-1 cursor-pointer m-2"
                    >
                        { sendLike ? <AiFillLike size={30} /> : <IoIosSend size={30}/> }
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default MessageBox;