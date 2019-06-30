import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import Patient from '../models/patients.model';
import bcrypt = require('bcryptjs');
import patientsModel from "../models/patients.model";
import { IPatient } from '../interfaces/patients.interface';

class PatientController{

    // get one patient
   public async getPatient(req: Request | any, res:Response){
        const {id}= req.body.id
        const  patient=  await Patient.findOne(id,req.id)
        res.json(patient);
    }

    //get all patients
    public async getPatients(req: Request | any, res:Response){
        const patient = await Patient.find();
        res.json(patient);
    }

    // add patient
   public async addPatient(req: Request | any, res:Response){
        let patient= new Patient();
        Object.assign(patient, req.body);

        await patient.save((err,doc)=>{
            if (!err){
                return res.send(doc);
            }
            else {
                if (err.code == 11000){
                  //  res.json({err});
                    return res.status(422).send(['Duplicate id cart found.']);
                }
                else{
                    return res.send(err);
                }
            }
             

        })
    }

    // ubdate patient
   public updatePatient(req: Request | any, res:Response){
        console.log("actualizar");
    }
    
    // // shange status of patient
    // shangeStatusPatients(req: Request | any , res:Response){
    //     console.log("cambiar estado");
    // }
}
export default PatientController;