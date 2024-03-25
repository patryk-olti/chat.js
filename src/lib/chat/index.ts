import { Types } from 'mongoose';

interface Props{
    firstUserId: Types.ObjectId,
    secondUserId: Types.ObjectId
}

export async function getConnection(props: Props){

    // get id from two users
    const { firstUserId, secondUserId } = props;
    console.log(firstUserId + ' ' + secondUserId);

    const response = await fetch('/api/connection/singleUser');
    const json = await response.json();
    const data = await json.data;

    console.log(data);


    // get connection from user with id <- array
    // get connection from me <- array

    // compare connections and find one by one connect
    // if not exist create new chat room by user which initialized

    // send message by one user to correct chatroom
}