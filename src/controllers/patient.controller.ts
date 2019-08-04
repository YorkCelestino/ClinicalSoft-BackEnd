import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import Patient from '../models/patients.model';
import bcrypt = require('bcryptjs');
import patientsModel from "../models/patients.model";
import { IPatient } from '../interfaces/patients.interface';
import { promises } from "fs";

class PatientController{

    // get one patient
   public async getPatient(req: Request | any, res:Response):Promise<void>{
       // const {id}= req.body.id
        const  patient=  await Patient.findOne(req.body.idCard,req.body)
        res.json(patient);
    }

    //get all patients
    public  getPatients(req: Request | any, res:Response) {
        Patient.find({isActive: true})
        .then((patient: any) => { 
            return res.send(patient);
        }).catch((err:Error) => {
            return res.status(442).send(err);
        });;
       // res.json(patient);
    }

    // add patient
   public async addPatient(req: Request | any, res:Response):Promise<void>{
        let patient= new Patient();
        Object.assign(patient, req.body);

        await patient.save((err,doc)=>{
            if (!err){
                return res.send(doc);
            }
            else {
                if (err.code == 11000){
                  //  res.json({err});
                    return res.status(422).send(['Duplicate idCard found.']);
                }
                else{
                    return res.send(err);
                }
            }
             

        })
    }

    // update patient
   public async updatePatient(req: Request | any, res:Response):Promise<void>{
     // const patient = 
     let patient = new Patient();
      await Patient.findOneAndUpdate(req.body.id, req.body, {new: true})
      .then((doc)=>{
        return res.send(doc)
    }).catch((err)=>{
        return res.status(403).send(err)
    });
     // res.json({mjs:"Updating patient",name:req.body.name});

    }
    
      // // change status
      public changeStatus(req: Request | any, res:Response){
        
        Patient.findByIdAndUpdate(req.body.id, {isActive: req.body.isActive}).then(data => {
            res.json({msj:"status change", id: req.body.id, newStatus: data.isActive});
          //  data.save();
        }).catch(err=> {
            res.status(422).send({err})
        })

     }
  
}
export default PatientController;