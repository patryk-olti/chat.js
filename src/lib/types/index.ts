import { Types } from "mongoose";

export type Message = {
    _id: Types.ObjectId,
    idUser: Types.ObjectId,
    idChatroom: Types.ObjectId,
    content: string,
    createdAt: Date
}

export type MessageArray = {
    _id: Types.ObjectId,
    idUser: Types.ObjectId,
    idChatroom: Types.ObjectId,
    content: string,
    createdAt: Date
}

export type UserFromDatabase = {
    _id: Types.ObjectId,
    firstName: String,
    lastName: String,
    login: String,
    password: String,
    email: String
}

export type User = {
    _id: Types.ObjectId,
    firstName: String,
    lastName: String
}

export type Connection = {
    _id: Types.ObjectId,
    idChatroom: Types.ObjectId,
    idUser: Types.ObjectId
}