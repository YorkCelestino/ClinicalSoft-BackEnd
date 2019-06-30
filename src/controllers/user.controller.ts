import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import User, { IUserModel } from "../models/user.model";
import bcrypt = require('bcryptjs');


class UserController {
    // getting user porfile
    public getUserProfile(req: Request | any, res: Response) {
        
        User.findOne({ _id : req._id}, {
            password: 0,
            saltSecret: 0
        }).then((user: IUserModel) => {
           return res.send(user);
        }).catch((err: Error) => {
           return res.status(442).send(err);
        })
    }

    // getting all users
    public async getUsers(req: Request | any, res:Response){
       const users= await User.find();
       res.json(users);
    }

    // add users
    public addUser(req: Request, res: Response, next) {
        let user: any = new User();
        Object.assign(user, req.body);
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                user.saltSecret = salt;
                return( user.save((err, doc) => {
                    if (!err){
                        
                        return res.send(doc);
                    } 
                    else {
                        if (err.code == 11000){
                            res.json({err});
                            return res.status(422).send(['Duplicate Username found.']);
                        }
                        else{
                            return res.send(err);
                        }
                        
                    }
                    
                }))
            });
        });
    }

    // update user
    public async updateUser(req: Request | any, res:Response){

        const user = await User.findByIdAndUpdate(req.body._id, req.body, {new: true});
        console.log(req.body._id);
        
        res.json({msj:"update User",id:user._id,data:user.username});
    }

    // // change status
    // public async changeStatus(req: Request | any, res:Response){
        
    // }
}

export default UserController;