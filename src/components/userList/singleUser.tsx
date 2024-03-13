import "../../app/globals.css";
import { Key } from "react";

type Props = {
    key: Key,
    name: string
}

const SingleUser = (props: Props) => {

    const { name } = props;

    return(
        <div className="flex items-center border border-black p-1 my-1 cursor-pointer">
            <div className="border  border-black rounded-full w-5 h-5 flex items-center justify-center bg-slate-400 mx-2 text-xs"> {name.charAt(0)} </div>
            <div className="text-xs" > {name} </div>
        </div>
    )
}

export default SingleUser;