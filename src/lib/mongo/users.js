import dbConnect from "."
import User from '../../models/user'


let client
let db
let users

async function init(){
    if(db) return
    try {
        client = await dbConnect
        db = await client.db()
        users = await db.collection('users')
    } catch (err){
        throw new Error('Failed to stablish connection to database')
    }
}

export async function getUsers(){
    try {
        if(!users) await init()
        const result = await users
            .find({})
            .limit(20)
        
        return { status: 200, users: result }
    }catch (err) {
        return { err: 'Failed to fetch'}
    }
}

export async function createUser(req, res){
    try{
        const user = await User.create({
            firstName: "Patryk",
            lastName: "Oltuch"
        })

        return res.status(201).json({ success: true, data: user})
    }catch(err){
        return res.status(400).json({ success: false })
    }
}