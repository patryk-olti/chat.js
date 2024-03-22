'use client'

import "../../app/globals.css";

import MenuButton from "./menuButton";

const Menu = () => {

    return(
        <div className="p-2 w-1/5 absolute top-0 right-0 h-full bg-slate-50 flex flex-col justify-between">
            <div>
                <MenuButton content="discover new"/>
                <MenuButton content="account"/>
                <MenuButton content="settings"/>
            </div>
            <div>
                <div className="p-2 text-center">wyloguj sie</div>
                <div className="p-2 text-center">chat.js v.0.0.1</div>
            </div>
            
        </div>
    )
}

export default Menu;