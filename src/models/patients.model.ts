import { Document, Model, model } from 'mongoose';
import { IPatient } from 'interfaces/patients.interface';
import config from '../config/config';

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;


export interface IPatientModel extends IPatient, Document {}

/*export const actDataSchema = new Schema ({
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
 
 }, { _id: false})

 export const sdssSchema = new Schema ({
    ars:{
        type: String
    },
    summary:{
        type: String
    }
 }, { _id: false})*/
 
export const patientSchema = new Schema ({
   
    name:{
       type: String
   },

   surname:{
       type: String
   },
    
   familyBossId:{
       type: String,
       ref: 'Patient'
   },
   email:{
        type:String
   },
   
   cellPhone:{
        type: Number
   },
   
   address:{
        type: String
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
///////////////////////////////////////////////////////////
   actData: {
        type: Boolean
   },
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
    },
/////////////////////////////////////////////////////////

   scholarship:{
        type: String
   },

   /*attend: {
        type: Boolean
   },*/

   work:{
        type: Boolean
   },

   workType: String,

   whereWork: String, 

   sdss:{
       type: Boolean,
   },
  
   ars:{
     type: String
   },
   regime:{
      type: String
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
    isActive: {
        type: Boolean,
        default: false
    },
    isTheBoss: {
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
export const Patient: Model<IPatientModel> = model<IPatientModel>('Patient', patientSchema);

// const Patient= mongoose.model ('Patient', patientSchema);;

export default Patient;


