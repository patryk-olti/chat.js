import ChatRoom from '../../models/chatroom';

export async function getChatRoom(req, res){
    try {
        const result = await ChatRoom.find()
        res.status(200).json({ success: true, data: result })
    }catch (err) {
        res.status(400).json({ success: false})
    }
}

export async function createChatRoom(req, res){
    try{
        const { name, adminId } = req.body;

        const chatRoom = await ChatRoom.create({
            name,
            adminId
        })

        return res.status(201).json({ success: true, data: chatRoom })
    }catch(err){
        return res.status(400).json({ success: false })
    }
}