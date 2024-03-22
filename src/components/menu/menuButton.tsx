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
            className="flex justify-between items-center p-3 cursor-pointer"    
        > 
        <div> {React.createElement(icon, {size: '30' })} </div>
        <div className='text-xl'> {content} </div>
        </div>
    )
}

export default MenuButton;