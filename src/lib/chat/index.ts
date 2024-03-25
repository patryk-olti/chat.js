import { Types } from 'mongoose';

interface Props{
    firstUserId: Types.ObjectId,
    secondUserId: Types.ObjectId
}

export function getConnection(props: Props){

    const { firstUserId, secondUserId } = props;

    console.log(firstUserId + ' ' + secondUserId);
}