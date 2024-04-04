import { useState, useEffect, useContext } from "react";
import { Types } from 'mongoose';

import SingleMessage from "./singleMessage";

import "../../globals.css"

import { IoIosSend } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

import { MessageToUI } from "@/lib/types";

import { AppContext } from "@/app/context";

import { useRouter } from "next/navigation";
import { pusherClient } from "@/app/pusher";

type Props = {
    messageArray: MessageToUI[],
    setMessageArray: React.Dispatch<React.SetStateAction<MessageToUI[]>>
}

const MessageBox = (props: Props) => {

    const { messageArray, setMessageArray } = props;

    const [sendLike, setSendLike ] = useState<boolean>(true);
    const [ message, setMessage ] = useState<string>('');

    const { userId, selectedChatId } = useContext(AppContext);

    const router = useRouter();

    useEffect(() => {
        pusherClient.subscribe('dasdasdasdasdasdas');

        pusherClient.bind('incoing-message',(text: string) => {
            setMessageArray([
                ...messageArray,
                {
                    id: messageArray.length + 1,
                    user: 'Patryk',
                    content: text,
                    ownerChat: true
                }
            ]);
        })

        return () => {
            pusherClient.unsubscribe('dasdasdasdasdasdas');
        }
    }, [])

    const handleSetMessage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if(event.target.value.length > 0){
            setSendLike(false);
        }else{
            setSendLike(true);
        }
        setMessage(event.target.value);
    }


    const handleSetMessageArray = async(message: any) => {
        if(sendLike){
            message = 'YIPPIE-KI-YAY!';
        }

        if(message.length > 0) {
            setMessageArray([
                ...messageArray,
                {
                    id: messageArray.length + 1,
                    user: 'Patryk',
                    content: message,
                    ownerChat: true
                }
            ]);
            
            setSendLike(true);
        }

        if(userId && selectedChatId){
            const response = await fetch('/api/message', {
                method: 'POST',
                body: JSON.stringify({
                    idUser: userId,
                    idChatroom: selectedChatId,
                    content: message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let result = await response.json();
            let success = await result.success;

            console.log(success);
        }else{
            router.push('/');
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
                    messageArray.length > 0 ? (
                        messageArray.map((elem) => {
                            return elem.ownerChat ?
                                <div className="flex justify-end my-1" key={elem.id}>
                                    <div className="flex items-center p-2 bg-gray-800 text-white rounded-xl">
                                        <div> {elem.content} </div>
                                        <div className="rounded-full flex items-center justify-center w-5 h-5 m-1 bg-sky-100 text-gray-800 text-sm"> P {/*elem.user.charAt(0)*/} </div>
                                    </div>
                                </div>
                                :
                                <div className="flex justify-start my-1" key={elem.id}>
                                <div className="flex items-center p-2 bg-sky-600 text-white rounded-xl">
                                    <div className="rounded-full flex items-center justify-center w-5 h-5 m-1 bg-sky-300 text-gray-800 text-sm"> O {/*elem.user.charAt(0)*/} </div>
                                    <div> {elem.content} </div>
                                </div>
                            </div>
                        }))
                        :
                        <div className="flex justify-center items-center h-full text-slate-400 select-none">
                            select the person you want to chat with
                        </div>
                }
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