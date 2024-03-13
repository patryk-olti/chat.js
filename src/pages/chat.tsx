import "../app/globals.css";

import MessageBox from "@/components/chat/messageBox";
import UserList from "@/components/userList/userList";

const Chat = () => {

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
                    <UserList />
                </div>
            </div>
        </div>
    )
}

export default Chat;