import Message from '../../models/message';

export async function getMessage(req, res){
    try {
        const result = await Message.find()
        res.status(200).json({ success: true, data: result })
    }catch (err) {
        res.status(400).json({ success: false})
    }
}

export async function createMessage(req, res){
    try{
        const { idUser, idChatroom, content } = req.body;

        const message = await Message.create({
            idUser,
            idChatroom,
            content
        })

        return res.status(201).json({ success: true, data: message })
    }catch(err){
        return res.status(400).json({ success: false })
    }
}