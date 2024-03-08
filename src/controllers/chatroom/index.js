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
        /*const { firstName, lastName, email, login, password } = req.body;

        const user = await User.create({
            firstName,
            lastName,
            email,
            login,
            password
        })*/

        return res.status(201).json({ success: true })
    }catch(err){
        return res.status(400).json({ success: false })
    }
}