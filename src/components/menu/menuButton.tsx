'use client'

import React from 'react';

import "../../app/globals.css";

import { IconType } from "react-icons";


type Props = {
    content: String,
    icon: IconType
}

const MenuButton = (props: Props) => {

    const { content, icon } = props;

    return(
        <div 
            className="my-2 flex justify-between items-center p-3 select-none rounded-xl cursor-pointer hover:bg-slate-200 active:bg-red-200"    
        > 
        <div> {React.createElement(icon, {size: '30' })} </div>
        <div className='text-xl font-mono'> {content} </div>
        </div>
    )
}

export default MenuButton;