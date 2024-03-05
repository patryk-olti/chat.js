import User from '../../models/user';

export async function getUsers(req, res){
    try {
        const result = await User.find()
        res.status(200).json({ success: true, data: result })
    }catch (err) {
        res.status(400).json({ success: false})
    }
}

export async function createUser(req, res){
    try{
        const { firstName, lastName } = req.body;

        const user = await User.create({
            firstName,
            lastName
        })

        return res.status(201).json({ success: true, data: user})
    }catch(err){
        return res.status(400).json({ success: false })
    }
}