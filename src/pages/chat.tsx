import "../app/globals.css";

const Chat = () => {

    return(
        <div className="h-screen flex flex-col">
            <div className="border border-black">
                 menu 
            </div>
            <div className="flex grow">
                <div className="grow border border-red-500">
                    chat.js
                </div>
                <div className="border border-green-500">
                    user list
                </div>
            </div>
        </div>
    )
}

export default Chat;