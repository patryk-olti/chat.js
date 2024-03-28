import { useEffect } from 'react';
import { Types } from 'mongoose';

import SingleUser from "./singleUser";

import { User, MessageArray } from '@/lib/types';

type Props = {
    users: User[],
    setMessageArray: React.Dispatch<React.SetStateAction<MessageArray[]>>
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