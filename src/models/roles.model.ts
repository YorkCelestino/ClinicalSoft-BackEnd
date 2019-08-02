import { Document, Model, model } from 'mongoose';
import * as mongoose from 'mongoose';
import { IRole } from '../interfaces/roles.inferface';

const Schema = mongoose.Schema;

export interface IRoleModel extends IRole, Document {
    
}


export const roleSchema = new Schema({
    name:{
        type:  String
    },
    slug: {
        type:  String
    },
    description: {
        type:  String
    },
    isActive: {
        type: String,
        default: false
    }
    
},{ timestamps: true });


roleSchema.set('toJSON',{
    transform: function(doc, ret, options){
        ret.id=ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

export const Role: Model<IRoleModel> = model<IRoleModel>('Role', roleSchema);

export default Role;

