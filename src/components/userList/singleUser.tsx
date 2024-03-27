import "../../app/globals.css";
import { Key } from "react";
import { Types } from 'mongoose';
import { getConnection, sendMessage, getMessage } from "@/lib/chat";
import { useState, useEffect } from "react";

type Props = {
    key: Key,
    data: Users,
    setMessageArray: React.Dispatch<React.SetStateAction<MessageArray[]>>
}

type Users = {
    _id: Types.ObjectId,
    firstName: String,
    lastName: String
}

type MessageArray = {
    _id: Types.ObjectId,
    idUser: Types.ObjectId,
    idChatroom: Types.ObjectId,
    content: string,
    createdAt: Date
}

const SingleUser = (props: Props) => {

    const { data, setMessageArray } = props;

    const [ userId, setUserId] = useState<Users | undefined>();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async() => {
        const response = await fetch('api/users/auth?login=oltix&password=qwerty123');
        const json = await response.json();
        const data = await json.data;

        setUserId(data);
        console.log(data);
    }

    const handleClick = async() => {
        if(userId){
            const chatRoomId = await getConnection({
                firstUserId: userId._id,
                secondUserId: data._id
            });

            if(chatRoomId){
                const messageArray = await getMessage(chatRoomId);
                setMessageArray(messageArray);
                //sendMessage(chatRoomId, userId._id, 'Hello Joe!');
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