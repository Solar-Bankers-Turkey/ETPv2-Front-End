export interface Register {
  Email: string;
  Name: string;
  Surname: string;
}

export interface RegisterComplete {
  Id: string;
  Address: string;
  City: string;
  Phone: string;
  BirthDate: string;
  IdentityNumber: string;
  InvoiceNumber: string;
  ShortLocation: string;
}

export interface Signin {
  email: string;
  password: string;
}
