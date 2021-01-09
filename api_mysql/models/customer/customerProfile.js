const { Schema, model } = require('mongoose')

const customerProfileSchema = new Schema({
    tutor: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    bio: {
        type: String,
        trim: true,
    },
    userProfilePic: String,
}, {
    timestamps: true
})

const CustomerProfile = model('CustomerProfile', customerProfileSchema)
module.exports = CustomerProfile