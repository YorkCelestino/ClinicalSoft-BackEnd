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
        this.router.get('/',this.patientController.getPatient);
        // getting all patients
        this.router.get('/patients',this.patientController.getPatients);
        // add patients
        this.router.post('/add-patient',this.patientController.addPatient);
        // update patients
        this.router.put('/update-patient',this.patientController.updatePatient);
    }

}

export const patientRoutes = new PatientRoutes().router;
