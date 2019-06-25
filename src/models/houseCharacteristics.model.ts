import { Document, Model, model } from 'mongoose';
import { IHouseCharacteristics } from 'interfaces/houseCharacteristics.Interface';
import config from '../config/config';

import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const HouseCharacteristicsShema = new Schema({
    date:{
        type:Date
    },
    trendHouse:{
        type: String
    } ,
    wallsHouse:{
        type: String
    },
    roofHouse:{
        type: String
    },
    sanitaryServise:{
        type: String
    },
    WaterSupplying:{
        type: String
    },
    tashElimination:{
        type: String
    },
    electricityServise:{
        type: String
    },
    bedroonsService:{
        type: String
    },
    fuelKitchen:{
        type: String
    },
    domesticAnimal:{
        type: String
    },
    hatchery:{
        type: String  //criaderos
    },
    punctuation:{
        type: String
    },
    qualification:{
        type: String 
    },
    isDelete:{
        type: Boolean
    }
},{ timestamps: true });