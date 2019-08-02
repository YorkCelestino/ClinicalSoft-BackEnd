export interface IAppoinment {
    idUser: string;
    idPatient: string;
    date: Date;
    observations: string;
    cellPhoneSend: string;
    emailSend: string;
    isActive: Boolean;
}