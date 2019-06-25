export interface IActData{
    districtMunicipality: string;
    numberOfOfficial: any;
    bookNumber: any;
    folioNumber: any;
    actNumber: any;
    yearBook: any;
}
export interface ISdss{
   ars:any;
   summary:any;
}

export interface  IPatient{
    name: string;
    surname: string;
    email: string;
    cellPhone: string;
    idCard: string;
    civilStatus: string;
    gender: string;
    birthdate: any;
    actData: IActData;
    scholarship: string;
    attend: boolean;
    work: string;
    sdss: ISdss;
    socialSecurityNumber:any;
    riskFactorsDiseases: string;
    // remember complete this last attributes with following data
    admissionDate: any;// nacio, llego
    egressDate: any// Salio, murio
    isDelete: any;

}