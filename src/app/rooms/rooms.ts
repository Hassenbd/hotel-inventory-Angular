export interface Room{
  name:string,
  available:number,
}
export interface Room2{
  index:number,
  price:number,
  ckeckinTime:string,
  roomNumber:number,
  des:string
}

export interface Rooms {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
