import Connection from '../../models/connection';

export async function getConnection(req, res){
    try {
        const result = await Connection.find()
        res.status(200).json({ success: true, data: result })
    }catch (err) {
        res.status(400).json({ success: false})
    }
}

export async function createConnection(req, res){
    try{
        const { idUser, idChatroom } = req.body;

        const connection = await Connection.create({
            idUser,
            idChatroom
        })

        return res.status(201).json({ success: true, data: connection })
    }catch(err){
        return res.status(400).json({ success: false })
    }
}

export async function getConnectionForSingleUser(req, res){
    try{
        const { id } = req.query;

        const result = await Connection.find({
            idUser: id
        });

        return res.status(201).json({ success: true, data: result})
    }catch(err){
        return res.status(400).json({ success: false });
    }
}