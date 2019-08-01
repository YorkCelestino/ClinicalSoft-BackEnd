import { Document, Model, model } from 'mongoose';
import { IHouseCharacteristics } from 'interfaces/houseCharacteristics.Interface';
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IHouseCharacteristicsModel extends IHouseCharacteristics, Document {
    
}



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
    floorHouse:{
        type: String
    },
    sanitaryServise:{
        type: String
    },
    waterInstallation:{
        type: String
    },
    waterSupplying:{
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
    isActive:{
        type: Boolean,
        default: true
    }
},{ timestamps: true });


HouseCharacteristicsShema.set('toJSON',{
    transform: function(doc, ret, options){
        ret.id=ret._id;
        delete ret._id;
        delete ret.__v;
    }
})


export const HouseCharacteristics: Model<IHouseCharacteristicsModel> = model<IHouseCharacteristicsModel>('HouseCharacteristics', HouseCharacteristicsShema);

export default HouseCharacteristics;