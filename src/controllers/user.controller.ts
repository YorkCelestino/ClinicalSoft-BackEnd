import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import User, { IUserModel } from "../models/user.model";


export class UserController {
    
    public getUserProfile(req: Request | any, res: Response) {

        User.findOne({ _id : req._id}, {
            password: 0,
            passwordResetToken: 0,
            passwordResetTokenExpiresAt: 0,
            emailProofToken: 0,
            emailProofTokenExpiresAt: 0,
            saltSecret: 0
        }).then((user: IUserModel) => {
           return res.send(user);
        }).catch((err: Error) => {
           return res.status(442).send(err);
        })
    }
}