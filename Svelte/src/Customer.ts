import { Address } from "./Address";
import { PaymentInfo } from "./PaymentInfo";

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  paymentInfo: PaymentInfo;
}