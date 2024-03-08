import mongoose from 'mongoose';
import User from '../user';

const ChatRoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        references: User,
        required: true
    }
});

module.exports = mongoose.models.ChatRoom || mongoose.model('ChatRoom', ChatRoomSchema)