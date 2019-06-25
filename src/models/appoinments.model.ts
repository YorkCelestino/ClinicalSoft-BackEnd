import { Document, Model, model } from 'mongoose';
import { IAppoinment } from '../interfaces/appoinments.interface';
import config from '../config/config';

import * as mongoose from 'mongoose';
 const Schema = mongoose.Schema;

 export const appoinment = new Schema({
     /**
      * recordar colocar los 'FK'
      * idUser
      * patientId
      */

    date: {
        type: Date
    },
    description: {
        type: String
    },
    status: {
        type: String //revisar luego
    },
    emailSend:{
        type: Boolean
    },
    isDelete: {
        type: Boolean
    }
 },{ timestamps: true })