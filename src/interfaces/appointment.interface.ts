export interface IAppointment {
    idUser: string;
    idPatient: string;
    appointmentDate: Date;
    observations: string;
    cellPhoneSend: string;
    emailSend: string;
    isActive: Boolean;
}