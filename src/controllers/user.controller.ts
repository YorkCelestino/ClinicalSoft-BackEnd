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
        }).populate({
            path: 'role',
            select: ['name', 'slug']
        }).then((user: IUserModel) => {
           return res.send(user);
        }).catch((err: Error) => {
           return res.status(442).send(err);
        })
    }

   

    // getting all users
    public async getUsers(req: Request | any, res:Response){
        await User.find({isActive: true}).populate({
           path: 'role',
           select: ['name', 'slug']
       }).then((user: any) => { 
           return res.send(user);
       }).catch((err:Error) => {
           return res.status(442).send(err);
       });
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

        const user = await User.findByIdAndUpdate(req.body.id, req.body, {new: true});
         
        res.json({msj:"update User",id:user.id,data:user.username});
    }

    // // change status
     public changeStatus(req: Request | any, res:Response){
        
        User.findByIdAndUpdate(req.body.id, {isActive: req.body.isActive}).then(data => {
            res.json({msj:"status change", id: req.body.id, newStatus: data.isActive});
          //  data.save();
        }).catch(err=> {
            res.status(422).send({err})
        })

     }
}

export default UserController;