export interface ContactInputType {
  name: string;
  phoneNo: number;
  address: string;
}

export interface ContactDataType extends ContactInputType {
  _id: string;
}
