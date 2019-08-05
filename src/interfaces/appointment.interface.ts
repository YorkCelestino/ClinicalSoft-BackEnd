export interface IAppointment {
    idUser: string;
    idPatient: string;
    appointmentDate: string;
    observations: string;
    cellPhoneSend: string;
    emailSend: string;
    isActive: Boolean;
}