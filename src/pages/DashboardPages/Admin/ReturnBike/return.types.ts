export type TRental = {
  _id: string;
  userId: string;
  bikeId: string;
  startTime: Date;
  returnTime?: Date;
  totalCost?: number;
  isReturned?: boolean;
};
