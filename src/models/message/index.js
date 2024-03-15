import mongoose from 'mongoose';
import User from '../user';
import Chatroom from '../chatroom';

const MessageSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        references: User,
        required: true
    },
    idChatroom: {
        type: mongoose.Schema.Types.ObjectId,
        references: Chatroom,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    },
});

module.exports = mongoose.models.Message || mongoose.model('Message', MessageSchema)