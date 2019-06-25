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
 
export const patient = new Schema ({
   name:{
       type: String
   },
   surname:{
       type: String
   },
   idCart:{
       type: String
   },
   civilStatus:{
    type: String
   },
   gender: {
    type: String
   },
   birthdate: {
    type: Date
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
   work: {
    type: String
   },

   sdss: {
    type: sdss
    },
    socialSecurityNumber:
    {
        type: Number
    },
    riskFactorsDiseases: {
        type: String
    },
    // remember complete this last attributes with following data
    admissionDate: {
        type: Date
    },// nacio, llego
    egressDate: {
        type: Date
    },// Salio, murio
    isDelete: {
        type: Boolean
    }

}, { timestamps: true })
