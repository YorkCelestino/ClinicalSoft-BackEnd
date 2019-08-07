import { Document, Model, model } from 'mongoose';
import * as mongoose from 'mongoose';
import { ITpatient } from 'interfaces/treatmentPatient';


const Schema = mongoose.Schema;

export interface ITreatmentPatientModel extends ITpatient, Document {
    
}


export const treatmentPatientSchema = new Schema({
   
    idTreatment: {
        type: String,
        ref:'Treatment'
    },
    idPatient: {
        type: String,
        ref: 'Patient'
    },
    isActive: {
        default: true,
        type: Boolean
    }
   
    
},{ timestamps: true });


treatmentPatientSchema.set('toJSON',{
    transform: function(doc, ret, options){
        ret.id=ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

export const TreatmentPatient: Model<ITreatmentPatientModel> = model<ITreatmentPatientModel>('treatmentPatient', treatmentPatientSchema);

export default TreatmentPatient;
