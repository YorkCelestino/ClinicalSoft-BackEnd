import { Document, Model, model } from 'mongoose';
import { IPatient } from 'interfaces/patients.interface';
import config from '../config/config';

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const actData = new Schema ({
    districtMunicipality:{
        type: String
    } ,
    numberOfOfficial:{
        type: String
    },
    bookNumber: {
        type: Number
    },

    folioNumber: {
        type: Number
    },
    actNumber:  {
        type: Number
    },
    yearBook: {
        type: Number
    }
 
 }, { id: false})

 export const sdss = new Schema ({
    ars:{
        type: String
    },
    summary:{
        type: String
    }
 })
 
export const patientSchema = new Schema ({
   
    name:{
       type: String
   },

   surname:{
       type: String
   },

   email:{
        type:String
   },
   
   cellPhone:{
        type: Number
   },

   idCard:{
        type: String,
        unique:true
   },

   civilStatus:{
        type: String
   },

   gender: {
        type: String
   },

   birthdate: {
        //type: Date,
        type: String
   },

   actData: {
        type:actData
   },

   scholarship:{
        type: String
   },

   attend: {
        type: Boolean
   },

   work:{
        type: String
   },

   sdss:{
        type: sdss
    },

    socialSecurityNumber:{
        type: Number
    },

    riskFactorsDiseases:{
        type: String
    },
    // remember complete this last attributes with following data
    admissionDate: {
        // type: Date
        type:String
    },// nacio, llego
    egressDate: {
        // type: Date
        type: String
    },// Salio, murio
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

patientSchema.set('toJSON',{
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

const Patient= mongoose.model ('Patient', patientSchema);;

export default Patient;

//export default Patient;
