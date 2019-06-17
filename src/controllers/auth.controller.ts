import { Request, Response, NextFunction } from "express";
import { model, Error } from 'mongoose';
import bcrypt = require('bcryptjs');
import User, { IUserModel, userSchema} from "../models/user.model";
import { IVerifyOptions } from "passport-local";
import passport = require('passport');

export class AuthController {

    public register(req: Request, res: Response, next) {
        let user: any = new User();
        Object.assign(user, req.body);
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                user.saltSecret = salt;
               return( user.save((err, doc) => {
                    if (!err)
                    return res.send(doc);
                    else {
                        if (err.code == 11000)
                        return res.status(422).send(['Duplicate email adrress found.']);
                        else
                        return res.send(err);
                    }
                    
                }))
            });
        });
    }

    public authenticate(req: Request, res: Response, next: NextFunction)  {
        passport.authenticate('local', (err: Error, user: IUserModel | any, info: IVerifyOptions) => {
            // error from passport middleware
            if (err) return res.status(400).json(err);
            // registered user
            else if (user) return res.status(200).json({ "token": user.generateJwt(req) });
            // unknown user or wrong password
            else return res.status(404).json(info);
        })(req, res);
    }
    
    public changePassword(req: Request | any, res: Response) {
        User.findOne({ _id : req._id},(err: Error,user: IUserModel, next: NextFunction)=>{
            if (!err){
                if (!user.verifyPassword(req.body.oldPassword)){
                    return res.status(422).send(['Wrong password']);
                } else {        
                    user.password = req.body.newPassword;
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            user.password = hash;
                            user.saltSecret = salt;
                            user.save((err, doc) => {
                                if (!err){
                                    return res.status(200).json({"message":"password changed"})
                            }
                            else {
                                res.status(422).send(['Error found.']);
                            }
                            
                        });
                    });
                });
            }
        }else {
            res.status(422).send(['Error found.']);
        }
        });
    }
}