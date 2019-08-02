import { Router } from 'express';

import TreatmentController from '../controllers/treatment.controller';




class RoleRoutes {
    public router: Router = Router();
    private treatmentCtrl = new TreatmentController
    constructor(){
        this.config();
    }

    private config(): void {
        this.router.post("/", this.treatmentCtrl.addTreatment);
        this.router.get("/all", this.treatmentCtrl.getTreatments);
        this.router.put("/edit",this.treatmentCtrl.editTreatment);
        this.router.put("/change-status",this.treatmentCtrl.changeStatus);
    }
    
}


export const TreatmentRoutes = new RoleRoutes().router;