export interface IUser {
    fullname: string;
    username: string;
    email: string;
    cellPhone: any;
    password: string;
    saltSecret: string;
    speciality:string;
    idCard: any;
    profilePath: string;
    createdAt: Date;
    userType: string | any;
    lastSeenAt: Date; 
    // isDeleted: any;
    // idSpecialities  'FK'
}