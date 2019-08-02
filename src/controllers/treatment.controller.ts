import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import { promises } from "fs";
import Treatment,{ITreatmentModel} from '../models/treatment.model';

class TreatmentController{

    public async getTreatments(req: Request, res: Response){
        await Treatment.find().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }

    public async addTreatment(req: Request, res: Response){
        let newTreatment = new Treatment(req.body);
        await newTreatment.save().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }


    public async editTreatment(req: Request , res: Response) {
            const treatment = await Treatment.findByIdAndUpdate(req.body.id, req.body, {new: true});
            res.json({msj:"update Treatment ",id:treatment.id ,data:treatment.code})
    }

    public async changeStatus(req: Request, res: Response) {
            await Treatment.findByIdAndUpdate(req.body.id, {isActive: req.body.isActive}).then(data => {
                res.json({mej:"status change", id: req.body.id, newStatus: data.isActive});
                data.save();
            }).catch(err=> {
                res.status(422).send({err})
            })
    }
 

    
}
export default  TreatmentController;