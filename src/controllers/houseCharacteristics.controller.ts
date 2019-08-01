import { Request, Response, NextFunction } from "express";
import { Error } from 'mongoose';
import HouseCharacteristics, {IHouseCharacteristicsModel}  from '../models/houseCharacteristics.model';

class HouseCharacteristicsController{

    public async getHouseCharacteristic (req: Request | any , res: Response) {
        await HouseCharacteristics.findOne( {_id : req.id} ).then((doc)=>{
            return res.send(doc);
        }).catch((err) => {
            return res.status(403).send(err);
        })
    }

    

    public async getHouseCharacteristics(req: Request, res: Response){

        await HouseCharacteristics.find().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }

    public async addHouseCharacteristics(req: Request, res: Response){
        
        let newHouseCharacteristics = new HouseCharacteristics(req.body);

        await newHouseCharacteristics.save().then((doc)=>{
            return res.send(doc)
        }).catch((err)=>{
            return res.status(403).send(err)
        })
    }

   

    
}
export default  HouseCharacteristicsController;