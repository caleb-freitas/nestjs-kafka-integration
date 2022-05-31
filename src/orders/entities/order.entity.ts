export enum OrderStatus {
  Approved = 'approved',
  Pending = 'pending',
}

export class Order {
  id: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
