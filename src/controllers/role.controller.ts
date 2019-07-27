import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import Role, { IRoleModel } from '../models/roles.model';

import { promises } from "fs";

class RolesController{

    public async addRole(req: Request, res: Response){
        let newRole = new Role(req.body);
        await newRole.save().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }

    public async getRoles(req: Request, res: Response){
        await Role.find().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }

    
}
export default  RolesController;