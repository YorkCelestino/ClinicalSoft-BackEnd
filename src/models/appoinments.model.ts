import { Document, Model, model } from 'mongoose';
import { IAppointment } from '../interfaces/appointment.interface';
import config from '../config/config';

import * as mongoose from 'mongoose';
 const Schema = mongoose.Schema;
 
export interface IAppointmentModel extends IAppointment, Document {   
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
    appointmentDate: {
        type: String
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
    isActive: {
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

export const Appointment: Model<IAppointmentModel> = model<IAppointmentModel>('Appointment', appoinmentSchema );

export default Appointment;