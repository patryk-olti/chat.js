import { getConnectionForSingleUser } from "../../../controllers/connection";
import dbConnect from "../../../lib/mongo";

const handler = async (req, res) => {

    try {
        await dbConnect();
    }catch(err){
        return res.status(503).send('Database connection is not established');
    }

    const { method } = req;

    switch (method){
        case 'GET':
            await getConnectionForSingleUser(req, res);
        break;
        default:
            res.setHeader('Allow', ["GET", "POST"]);
            res.status(425).end('Method not allowed');
        break;
    } 
}

export default handler