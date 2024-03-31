import "../../globals.css";
import { Key } from "react";
import { Types } from 'mongoose';
import { getConnection, sendMessage, getMessage } from "@/lib/chat";
import { useState, useEffect, useContext } from "react";

import { Message, MessageToUI, User } from "@/lib/types";

import { AppContext } from "@/app/context";

type Props = {
    key: Key,
    data: User,
    messageArray: MessageToUI[],
    setMessageArray: React.Dispatch<React.SetStateAction<MessageToUI[]>>
}

const SingleUser = (props: Props) => {

    const { data, setMessageArray } = props;

    const [ userIdState, setUserIdState ] = useState<User | undefined>();

    const { userId, setSelectedChatId } = useContext(AppContext);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async() => {
        const response = await fetch('api/users/auth?login=oltix&password=qwerty123');
        const json = await response.json();
        const data = await json.data;

        setUserIdState(data);
    }

    const handleClick = async() => {
        if(userIdState){
            const chatRoomId = await getConnection({
                firstUserId: userIdState._id,
                secondUserId: data._id
            });

            if(chatRoomId){
                const messageArray: Message = await getMessage(chatRoomId);
                
                const tempMessageArray: MessageToUI[] = [];

                messageArray.map( (elem: Message, index: Number) => {
                    if(elem.idUser === userId){
                        tempMessageArray.push(
                            {
                                id: Number(index),
                                user: 'Patryk',
                                content: elem.content,
                                ownerChat: true
                            });
                    }else{
                        tempMessageArray.push(
                            {
                                id: Number(index),
                                user: 'Inny User',
                                content: elem.content,
                                ownerChat: false
                        });
                    }
                })

                setMessageArray(tempMessageArray);
                setSelectedChatId(chatRoomId);
            }
        }
    }

    return(
        <div 
            onClick={handleClick}
            className="flex items-center p-1 my-1 rounded-lg cursor-pointer hover:bg-sky-200"
        >
            <div className="shrink-0 border border-black rounded-full w-7 h-7 text-lg flex items-center justify-center bg-slate-400 mx-2"> {data.firstName.charAt(0)} </div>
            <div className="whitespace-nowrap text-lg"> {data.firstName + ' ' + data.lastName} </div>
        </div>
    )
}

export default SingleUser;