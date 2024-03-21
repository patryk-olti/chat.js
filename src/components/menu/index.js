'use client'

import "../../app/globals.css";

const Menu = () => {

    return(
        <div className="p-2 absolute top-0 right-0 h-full bg-slate-50 flex flex-col justify-between">
            <div>
                <div className="p-3 border border-black"> X First Option </div>
                <div className="p-3 border border-black"> Sec Option </div>
                <div className="p-3 border border-black"> Third Option </div>
            </div>
            <div>
                <div>wyloguj sie</div>
                <div>chat.js v.0.0.1</div>
            </div>
            
        </div>
    )
}

export default Menu;