import { useEffect } from 'react';
import { Types } from 'mongoose';

import SingleUser from "./singleUser";

type Props = {
    users: Users[],
    setMessageArray: React.Dispatch<React.SetStateAction<MessageArray[]>>
}

type Users = {
    _id: Types.ObjectId,
    firstName: String,
    lastName: String
}

type MessageArray = {
    _id: Types.ObjectId,
    idUser: Types.ObjectId,
    idChatroom: Types.ObjectId,
    content: string,
    createdAt: Date
}

const UserList = (props: Props) => {

    const { users, setMessageArray } = props;

    return(
        <div>
            {
                users.map(elem => <SingleUser key={elem._id} data={elem} setMessageArray={setMessageArray} />)
            }
        </div>
    )
}

export default UserList;