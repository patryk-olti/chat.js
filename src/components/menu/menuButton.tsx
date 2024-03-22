'use client'

import "../../app/globals.css";

type Props = {
    content: String
}

const MenuButton = (props: Props) => {

    const { content } = props;

    return(
        <div 
            className="flex justify-between p-3 border border-black"    
        > 
        <div> X </div>
        <div> {content} </div>
        </div>
    )
}

export default MenuButton;