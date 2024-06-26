'use client'

import "../../globals.css";

import MenuButton from "./menuButton";

import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const Menu = () => {

    return(
        <div className="p-2 w-1/5 absolute top-0 right-0 h-full bg-slate-50 flex flex-col justify-between">
            <div>
                <MenuButton content="discover new" icon={RiCompassDiscoverLine}/>
                <MenuButton content="account" icon={MdAccountCircle}/>
                <MenuButton content="settings" icon={IoIosSettings}/>
            </div>
            <div>
                <div className="p-2 text-center text-xl select-none font-mono rounded-xl cursor-pointer hover:bg-slate-200">logout</div>
                <div className="p-2 text-center text-xs select-none font-mono">chat.js v.0.0.1</div>
            </div>
            
        </div>
    )
}

export default Menu;