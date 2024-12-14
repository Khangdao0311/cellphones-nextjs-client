interface IUser {
  id: string;
  name: string;
  image: string;
  gender: number;
  email: string;
  phone: string;
  dob: string;
  address: IAddress;
  username: string;
  password: string;
  role: number;
  status: number;
}

interface IAddress {
  province: string;
  district: string;
  ward: string;
  description: string;
}
