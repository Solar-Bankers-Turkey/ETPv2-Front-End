export interface Register {
  Email: string;
  Name: string;
  Surname: string;
}

export interface RegisterComplete {
  address: string;
  city: string;
  phone: string;
  birthDate: string;
  identityNumber: string;
  invoiceNumber: string;
}

export interface Signin {
  email: string;
  password: string;
}
