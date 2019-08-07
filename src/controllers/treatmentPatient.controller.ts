import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import { promises } from "fs";
import TreatmentPatient,{ITreatmentPatientModel} from '../models/treatmentPatient.model';

class TreatmentPatientController{

    public async getTreatmentsPatient(req: Request | any, res: Response){
        await TreatmentPatient.find({$or:[{ isActive: true }, { idPatient: req.idPatient}]},).populate({
            path: 'idPatient',
            select: 'name'
        }).populate({
            path: 'idTreatment',
            select:[ 'name','code','price']
        }).then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }

    public async addTreatmentPatient(req: Request, res: Response){
        let newTreatmentPatient = new TreatmentPatient(req.body);
        await newTreatmentPatient.save().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }


    public async editTreatmentPatient(req: Request , res: Response) {
            const treatmentPatient = await TreatmentPatient.findByIdAndUpdate(req.body.id, req.body, {new: true});
            res.json({msj:"update Treatment ",id:treatmentPatient.id ,data:treatmentPatient})
    }

    public async changeStatus(req: Request, res: Response) {
            await TreatmentPatient.findByIdAndUpdate(req.body.id, {isActive: req.body.isActive}).then(data => {
                res.json({mej:"status change", id: req.body.id, newStatus: data.isActive});
                data.save();
            }).catch(err=> {
                res.status(422).send({err})
            })
    }

    
}
export default  TreatmentPatientController;