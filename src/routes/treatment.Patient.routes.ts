import { Router } from 'express';

import TreatmentPatientController from '../controllers/treatmentPatient.controller';




class RoleRoutes {
    public router: Router = Router();
    private treatmentPatientCtrl = new TreatmentPatientController
    constructor(){
        this.config();
    }

    private config(): void {
        this.router.post("/add", this.treatmentPatientCtrl.addTreatmentPatient);
        this.router.get("/all", this.treatmentPatientCtrl.getTreatmentsPatient);
        this.router.put("/edit",this.treatmentPatientCtrl.editTreatmentPatient);
        // this.router.put("/change-status",this.treatmentPatientCtrl.changeStatus);
        this.router.put("/change-status",this.treatmentPatientCtrl.changeStatus);
    }
    
}


export const TreatmentPatientRoutes = new RoleRoutes().router;