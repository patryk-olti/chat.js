import { useState, useEffect } from "react";
import { Types } from 'mongoose';

import "../app/globals.css";

import MessageBox from "@/components/chat/messageBox";
import UserList from "@/components/userList/userList";

type Users = {
    id: Types.ObjectId,
    firstName: String,
    lastName: String
}

type dataFromFetch = {
    _id: Types.ObjectId,
    firstName: String,
    lastName: String,
    login: String,
    password: String,
    email: String
}

const Chat = () => {

    const [ users, setUsers ] = useState<Users[]>([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async() => {
        const res = await fetch('/api/users');
        const status = res.ok;
        
        if(status){
            const json = await res.json();
            const data = json.data;
            
            let tempArray: Users[] = [];

            data.map((elem: dataFromFetch) => {
                tempArray.push({
                    id: elem._id,
                    firstName: elem.firstName,
                    lastName: elem.lastName
                })
            })

            setUsers(tempArray);
        }
    }

    return(
        <div className="h-screen flex flex-col">
            <div className="flex justify-between border border-black">
                <div>logo</div>
                <div>hamburger</div>
            </div>
            <div className="flex grow">
                <div className="p-1 grow border border-red-500">
                    <MessageBox />
                </div>
                <div className="p-1 border border-green-500">
                    <UserList users={users} />
                </div>
            </div>
        </div>
    )
}

export default Chat;