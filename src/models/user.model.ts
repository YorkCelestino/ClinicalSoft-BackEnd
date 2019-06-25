import { Document, /*Schema,*/ Model, model } from 'mongoose';
import bcrypt = require('bcryptjs');
import jwt = require('jsonwebtoken');
import { IUser } from 'interfaces/user.interface';
import config from '../config/config';


import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;


export interface IUserModel extends IUser, Document {
    verifyPassword(password: string): boolean;
}


export const userSchema = new Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    userType: {
        type: String
    },
    lastSeenAt: {
        type: Date,
        default: 0
    },
    passwordResetToken: {
        type: String,
        default: ''
    },
    passwordResetTokenExpiresAt: {
        type: Number,
        default: 0
    },
    emailProofToken: {
        type: String,
        default: ''
    },
    emailProofTokenExpiresAt: {
        type: Number,
        default: 0
    },
    isDelete: {
        type: Boolean
    }
}, { timestamps: true});

// Custom validation for email
userSchema.path('email').validate((val) => {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function (req) {
    let expireTime = config.jwtExp
    if(req.body.rememberMe){
        expireTime="365d";
    }
    return jwt.sign(
        { 
            _id: this._id,
            userType: this.userType
        },
        config.jwtSecret,
    {
        expiresIn: expireTime
    });
}

userSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
}); 

export const User: Model<IUserModel> = model<IUserModel>('User', userSchema);
// const User = model("User", userSchema);

export default User;
