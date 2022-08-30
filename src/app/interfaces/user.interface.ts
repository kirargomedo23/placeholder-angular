
export interface AddressI{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}


export interface UserI {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressI;
    phone: string;
}