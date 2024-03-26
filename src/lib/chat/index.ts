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

    data.map((elem: Connection) => dataFromSecondUser.push(elem.idChatroom));
    
    // get connection from me <- array
    let dataFromFirstUser = <Types.ObjectId[]>[];
    response = await fetch(`/api/connection/singleUser?id=${firstUserId}`);
    json = await response.json();
    data = await json.data;

    data.map((elem: Connection) => dataFromFirstUser.push(elem.idChatroom));

    // compare connections and find one by one connect
    let commonChatId = <Types.ObjectId[]>[];
    dataFromFirstUser.forEach( elemFirst => {
        dataFromSecondUser.forEach( elemSecond => {
            if(elemFirst === elemSecond){
                commonChatId.push(elemFirst);
            }
        })
    })

    console.log(commonChatId);
    // if not exist create new chat room for user which initialized
    if(commonChatId.length === 0){
        response = await fetch('/api/chatroom', {
            method: 'POST',
            body: JSON.stringify({
                name: 'New chat room',
                adminId: firstUserId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result = await response.json();
        let success = await result.success;

        // if chat room was created then create two connection to one chat room
        if(success){
            data = await result.data;
            const chatRoomId = await data._id;

            // create connection to chat room
            response = await fetch('/api/connection', {
                method: 'POST',
                body: JSON.stringify({
                    idUser: firstUserId,
                    idChatroom: chatRoomId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await response.json();
            success = await result.success;
            if(!success){
                console.error('Failed to create connection...');
            }

            // create another one connection to chat room
            response = await fetch('/api/connection', {
                method: 'POST',
                body: JSON.stringify({
                    idUser: secondUserId,
                    idChatroom: chatRoomId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await response.json();
            success = await result.success;
            if(!success){
                console.error('Failed to create connection...');
            }
            
        }
    }

    // send message by one user to correct chatroom
}