import { Router } from 'express';
import PatientController from '../controllers/patient.controller';
import HouseCharacteristicsController from '../controllers/houseCharacteristics.controller';


class HouseCharacteristicsRoutes {
    public router : Router = Router();;
    public houseCharacteristicsCtrl= new HouseCharacteristicsController();
    constructor(){
        this.config();
    }

    config():void{
        // getting House
        this.router.get('/all',this.houseCharacteristicsCtrl.getHouseCharacteristics);
        // getting all house
        this.router.post('/',this.houseCharacteristicsCtrl.addHouseCharacteristics);
        /* add house
        this.router.post('/add-patient',this.patientController.addPatient);
        // update house
        this.router.put('/update-patient',this.patientController.updatePatient);*/
    }

}

export const houseCharacteristicsRoutes  = new HouseCharacteristicsRoutes ().router;