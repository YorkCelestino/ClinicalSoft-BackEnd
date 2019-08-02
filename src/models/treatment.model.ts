import { Document, Model, model } from 'mongoose';
import * as mongoose from 'mongoose';
import { ITreatment } from '../interfaces/treatment.interface';


const Schema = mongoose.Schema;

export interface ITreatmentModel extends ITreatment, Document {
    
}


export const treatmentSchema = new Schema({
   
    code: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    doctorCommission: {
        type: Number
    },
    description:{
       type: String 
    },
    isActive: {
        type: String,
        default: false
    }
    
},{ timestamps: true });


treatmentSchema.set('toJSON',{
    transform: function(doc, ret, options){
        ret.id=ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

export const Treatment: Model<ITreatmentModel> = model<ITreatmentModel>('Treatment', treatmentSchema);

export default Treatment;
