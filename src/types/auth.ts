export interface LoginDetails {
    username: string;
    password: string;
}

export interface SignUpDetails extends LoginDetails {
    attributes: {
        preferred_username: string;
        birthdate: string;
        email: string;
    };
}
