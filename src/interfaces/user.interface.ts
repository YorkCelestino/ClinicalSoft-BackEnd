export interface IUser {
    fullName: string;
    username: string;
    email: string;
    password: string;
    saltSecret: string;
    cellPhone: any;
    speciality:string;
    idCard: any;
    role: string | any;
   // profilePath: string;
    createdAt: Date;
  //  lastSeenAt: Date; 
    isActive: boolean;
    hEnd: Date;
    hStart: Date;
    // idSpecialities  'FK'
}