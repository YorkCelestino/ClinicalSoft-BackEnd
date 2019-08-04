import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import { promises } from "fs";
import Appointment, {IAppointmentModel} from '../models/appoinments.model';

class AppoinmentController{

    public async getAppoinments(req: Request, res: Response){
        await Appointment.find().populate({
            path: 'idPatient',
            select: ['name']
        }).populate({
            path: 'idUser',
            select: ['fullName']
        }).then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }

    public async addAppoinment(req: Request, res: Response){
        let newAppoinment = new Appointment(req.body);
        await newAppoinment.save().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }


    public async editAppoinment(req: Request , res: Response) {
            const appoinment = await Appointment.findByIdAndUpdate(req.body.id, req.body, {new: true});
            res.json({msj:"update Appoinment ",id:appoinment.id ,data:appoinment.idUser})
    }

    public async changeStatus(req: Request, res: Response) {
            await Appointment.findByIdAndUpdate(req.body.id, {isActive: req.body.isActive}).then(data => {
                res.json({mej:"status change", id: req.body.id, newStatus: data.isActive});
                data.save();
            }).catch(err=> {
                res.status(422).send({err})
            })
    }
 

    
}
export default  AppoinmentController;