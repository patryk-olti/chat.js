import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)