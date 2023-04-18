export interface Pationt {
    id:number
    fname:string,
    lname:string,
    mobileNo:string,
    email:string,
    address1:string,
    address2:string,
    city:string,
    state:string,
    zipcode:string,
}

export class pationtC implements Pationt{
    id:number
    fname:string;
    lname:string;
    mobileNo:string;
    email:string;
    address1:string;
    address2:string;
    city:string;
    state:string;
    zipcode:string;
   
    constructor(obj?:Pationt){
    
    this.id=obj && obj.id || 0,
    this.fname=obj && obj.fname ||'',
    this.lname=obj && obj.lname || '';
    this.mobileNo=obj && obj.mobileNo || '';
    this.email=obj && obj.email || '';
    this.address1=obj && obj.address1 || '';
    this.address2=obj && obj.address2 || '';
    this.city=obj && obj.city || '';
    this.state=obj && obj.state || '';
    this.zipcode=obj && obj. zipcode || '';
   }
}
