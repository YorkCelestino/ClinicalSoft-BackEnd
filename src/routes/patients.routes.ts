import { Router } from 'express';
import PatientController from '../controllers/patient.controller';




class PatientRoutes {
    public router : Router = Router();;
    public patientController= new PatientController();
    constructor(){
        this.config();
    }
    config():void{
        // getting patient
        this.router.get('/one',this.patientController.getPatient);
        // getting all patients
        this.router.get('/all',this.patientController.getPatients);
        // add patients
        this.router.post('/add',this.patientController.addPatient);
        // update patients
        this.router.put('/update',this.patientController.updatePatient);
        // /change status
        this.router.put('/change-status', this.patientController.changeStatus);
    }

}

export const patientRoutes = new PatientRoutes().router;
