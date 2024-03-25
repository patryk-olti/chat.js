import { useEffect } from 'react';
import { Types } from 'mongoose';

import SingleUser from "./singleUser";

type Props = {
    users: Users[]
}

type Users = {
    id: Types.ObjectId,
    firstName: String,
    lastName: String
}

const UserList = (props: Props) => {

    const { users } = props;

    return(
        <div>
            {
                users.map(elem => <SingleUser key={elem.id} data={elem} />)
            }
        </div>
    )
}

export default UserList;