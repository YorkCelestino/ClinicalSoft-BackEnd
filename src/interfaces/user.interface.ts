export interface IUser {
    fullName: string;
    username: string;
    email: string;
    password: string;
    saltSecret: string;
    cellPhone: any;
    speciality:string;
    idCard: any;
    userType: string | any;
    profilePath: string;
    createdAt: Date;
    lastSeenAt: Date; 
    isActive: boolean;
    // idSpecialities  'FK'
}