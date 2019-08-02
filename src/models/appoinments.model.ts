import { Document, Model, model } from 'mongoose';
import { IAppoinment } from '../interfaces/appoinments.interface';
import config from '../config/config';

import * as mongoose from 'mongoose';
 const Schema = mongoose.Schema;
 
export interface IAppoinmentModel extends IAppoinment, Document {   
}


 export const appoinmentSchema = new Schema({
    
    idUser:{
        type: String,
        ref: 'User'
    },
    idPatient:{
        type: String,
        ref : 'Patient'
    }, 
    date: {
        type: Date
    },
    observations: {
        type: String
    },
    status: {
        type: String //revisar luego
    },
    cellPhoneSend:{
        type: Boolean
    },
    emailSend:{
        type: Boolean
    },
    Activise: {
        type: Boolean,
        default: true
    }
 },{ timestamps: true })

appoinmentSchema.set('toJSON',{
    transform: function(doc, ret, options){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});


appoinmentSchema.set('toJSON',{
    transform: function(doc, ret, options){
        ret.id=ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

export const Appoinment: Model<IAppoinmentModel> = model<IAppoinmentModel>('Appoinment', appoinmentSchema );

export default Appoinment;