import mongoose from 'mongoose';
import User from '../user';
import Chatroom from '../chatroom';

const ConnectionSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        references: User,
        required: true
    },
    idChatroom: {
        type: mongoose.Schema.Types.ObjectId,
        references: Chatroom,
        required: true
    }
});

module.exports = mongoose.models.Connection || mongoose.model('Connection', ConnectionSchema)