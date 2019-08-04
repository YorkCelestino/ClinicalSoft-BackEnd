/*export interface IActData{
    districtMunicipality: string;
    numberOfOfficial: any;
    bookNumber: any;
    folioNumber: any;
    actNumber: any;
    yearBook: any;
}
export interface ISdss{
   ars:any;
   regime:any;
}*/



export interface  IPatient{
    name: string;
    surname: string;
    email: string;
    cellPhone: number;
    address: string;
    idCard: string;
    civilStatus: string;
    gender: string;
    birthdate: any;
    actData: Boolean;
    districtMunicipality: string;
    numberOfOfficial: any;
    bookNumber: any;
    folioNumber: any;
    actNumber: any;
    yearBook: any;

    scholarship: string;
   // attend: Boolean;
    work: Boolean;
    worktype: string;
    whereWork: string; 
    sdss: Boolean;
    ars:any;
    regime:any;
    socialSecurityNumber:any;
    riskFactorsDiseases: string;
    // remember complete this last attributes with following data
    admissionDate: any;// nacio, llego
    egressDate: any// Salio, murio
    isTheBoss: Boolean;
    isActive: Boolean;
    familyBossId: string;

}