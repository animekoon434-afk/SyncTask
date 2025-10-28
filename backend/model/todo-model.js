import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum:  ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    priority:{
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'medium'
    }
},{timestamps: true});

export default mongoose.model('Todo', todoSchema);