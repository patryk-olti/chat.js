import { useState, useEffect } from "react";
import { Types } from 'mongoose';

import "../app/globals.css";

import Menu from '../components/menu';

import MessageBox from "@/components/chat/messageBox";
import UserList from "@/components/userList/userList";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

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
    const [ visibleMenu, setVisibleMenu ] = useState<boolean>(false);

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

    const toggleMenu = (): void => {
        setVisibleMenu(prev => prev = !prev);
    }

    return(
        <div className="h-screen flex flex-col bg-sky-100">
            <div className="py-2 flex justify-between border border-b-slate-500">
                <div className="px-2 select-none flex justify-center items-center">chat.js</div>
                <div 
                    className="px-2 flex justify-center items-center cursor-pointer"
                    onClick={toggleMenu}
                >
                    {
                        visibleMenu ?
                        <RxCross1 size={30} /> :
                        <GiHamburgerMenu size={30} />
                    }
                </div>
            </div>
            <div className="flex grow relative">
                <div className="w-4/5 p-1 grow border">
                    <MessageBox />
                </div>
                <div className="w-1/5 p-1">
                    <UserList users={users} />
                </div>
                {
                    visibleMenu ?
                    <Menu /> :
                    null
                }
            </div>
        </div>
    )
}

export default Chat;