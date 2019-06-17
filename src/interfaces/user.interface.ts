export interface IUser {
    name: string;
    surname: string;
    username: string;
    email: string;
    emailStatus: boolean;
    password: string;
    profilePath: string;
    universityId: string | any;
    careerId: string | any;
    studentId: string;
    settings: any;
    createdAt: Date;
    lastSeenAt: Date;
    userType: string | any;
    passwordResetToken: string;
    passwordResetTokenExpiresAt: number;
    emailProofToken: string;
    emailProofTokenExpiresAt: string;
    saltSecret: string;
}