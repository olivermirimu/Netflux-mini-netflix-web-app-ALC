export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    // subscription: number;
    // card: string;
    favourites?: string[];
    password: string;
    confirmPassword?: string;
    tnC?: boolean;
}