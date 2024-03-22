import "../../app/globals.css";
import { Key } from "react";

type Props = {
    key: Key,
    name: string
}

const SingleUser = (props: Props) => {

    const { name } = props;

    return(
        <div className="flex items-center p-1 my-1 rounded-lg cursor-pointer hover:bg-sky-200">
            <div className="shrink-0 border border-black rounded-full w-7 h-7 text-lg flex items-center justify-center bg-slate-400 mx-2"> {name.charAt(0)} </div>
            <div className="whitespace-nowrap text-lg"> {name} </div>
        </div>
    )
}

export default SingleUser;