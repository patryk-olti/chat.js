import { useEffect } from 'react';
import { Types } from 'mongoose';

import SingleUser from "./singleUser";

import { User, MessageToUI } from '@/lib/types';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type Props = {
    users: User[],
    setMessageArray: React.Dispatch<React.SetStateAction<MessageToUI[]>>
}

const UserList = (props: Props) => {

    const { users, setMessageArray } = props;

    return(
        <div className='h-full'>
            {
                users.length > 0 ?
                    users.map(elem => <SingleUser key={elem._id} data={elem} setMessageArray={setMessageArray} />) :
                    <Box className='flex h-full items-center justify-center'>
                        <CircularProgress />
                    </Box>
            }
        </div>
    )
}

export default UserList;