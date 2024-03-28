import { useState, useEffect } from "react";
import { Types } from 'mongoose';

import "../app/globals.css";

import Menu from '../components/menu';

import MessageBox from "@/components/chat/messageBox";
import UserList from "@/components/userList/userList";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import { Message, UserFromDatabase, User } from "@/lib/types";

const Chat = () => {

    const [ users, setUsers ] = useState<User[]>([]);
    const [ visibleMenu, setVisibleMenu ] = useState<boolean>(false);
    const [ messageArray, setMessageArray ] = useState<Message[]>([]);

    useEffect(() => {
        getAllUsers();
    }, [users]);

    const getAllUsers = async() => {
        const res = await fetch('/api/users');
        const status = res.ok;
        
        if(status){
            const json = await res.json();
            const data = json.data;
            
            let tempArray: User[] = [];

            data.map((elem: UserFromDatabase) => {
                tempArray.push({
                    _id: elem._id,
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
                    <MessageBox messageArray={messageArray} setMessageArray={setMessageArray} />
                </div>
                <div className="w-1/5 p-1">
                    <UserList users={users} setMessageArray={setMessageArray} />
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