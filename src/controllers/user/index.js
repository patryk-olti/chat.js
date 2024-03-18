import User from '../../models/user';

// get all users
export async function getUsers(req, res){
    try {
        const result = await User.find()
        res.status(200).json({ success: true, data: result })
    }catch (err) {
        res.status(400).json({ success: false})
    }
}

// create a new user
export async function createUser(req, res){
    try{
        const { firstName, lastName, email, login, password } = req.body;

        const user = await User.create({
            firstName,
            lastName,
            email,
            login,
            password
        })

        return res.status(201).json({ success: true, data: user})
    }catch(err){
        return res.status(400).json({ success: false })
    }
}

// get user for authentication
export async function authUser(req, res){
    try {
        const { login, password } = req.query;

        const result = await User.findOne({
            login,
            password
        });

        if(result){
            res.status(200).json({ success: true, data: result })
        }else{
            res.status(200).json({ success: false, data: 'Invalid login or password!' })
        }
    }catch (err) {
        res.status(400).json({ success: false})
    }
}