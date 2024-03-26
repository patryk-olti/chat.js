import { Types } from 'mongoose';

interface Props{
    firstUserId: Types.ObjectId,
    secondUserId: Types.ObjectId
}

interface Connection{
    _id: Types.ObjectId,
    idChatroom: Types.ObjectId,
    idUser: Types.ObjectId
}

export async function getConnection(props: Props){

    // get id from two users
    const { firstUserId, secondUserId } = props;
    console.log(firstUserId + ' ' + secondUserId);

    // get connection from user with id <- array
    let dataFromSecondUser = <Types.ObjectId[]>[];
    let response = await fetch(`/api/connection/singleUser?id=${secondUserId}`);
    let json = await response.json();
    let data = await json.data;

    console.log(data);

    data.map((elem: Connection) => dataFromSecondUser.push(elem.idChatroom));

    console.log(dataFromSecondUser);
    
    // get connection from me <- array
    let dataFromFirstUser = [];
    response = await fetch(`/api/connection/singleUser?id=${firstUserId}`);
    json = await response.json();
    data = await json.data;

    console.log(data);

    // compare connections and find one by one connect
    // if not exist create new chat room by user which initialized

    // send message by one user to correct chatroom
}