import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        require: "Enter a First Name"
    },

    lastName: {
        type: String,
        require: "Enter a Last Name"
    },

    email: {
        type: String
    },

    company: {
        type: String
    },

    phone: {
        type: Number
    },

    created_date: {
        type: Date,
        default: Date.now
    }
});

