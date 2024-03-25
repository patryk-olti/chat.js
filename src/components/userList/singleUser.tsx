import "../../app/globals.css";
import { Key } from "react";
import { Types } from 'mongoose';

type Users = {
    id: Types.ObjectId,
    firstName: String,
    lastName: String
}

type Props = {
    key: Key,
    data: Users
}

const SingleUser = (props: Props) => {

    const { data } = props;

    return(
        <div className="flex items-center p-1 my-1 rounded-lg cursor-pointer hover:bg-sky-200">
            <div className="shrink-0 border border-black rounded-full w-7 h-7 text-lg flex items-center justify-center bg-slate-400 mx-2"> {data.firstName.charAt(0)} </div>
            <div className="whitespace-nowrap text-lg"> {data.firstName + ' ' + data.lastName} </div>
        </div>
    )
}

export default SingleUser;