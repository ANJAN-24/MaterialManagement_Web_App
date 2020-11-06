export class materialMaster {
  Ml_Id:number;  
  Ml_Num: number;
  Ml_Type: materialType[];
  Ml_Name: string;
  Ml_Desc: string;
  Ml_Unit:unitOfMeasurement[];
  Ml_Num_Unit:number;
  Ml_Gst_Num:string;
  Ml_Carton:string;
  Ml_Bill_Num:number;
  Ml_Serial_Num:number;
  Ml_Cost_Unit:number;
  Ml_Date_purchase:Date;
  Ml_Under_Warranty:Boolean;
  Ml_Warranty_Till:Date;
  Ml_Weight:number;
  Ml_Vehicle:VehicleDetail;
  Ml_Vendor:VendorMaster;

  constructor(  Ml_Id:number,Ml_Num: number,
    Ml_Type: materialType[],
    Ml_Name: string,
    Ml_Desc: string,
    Ml_Unit:unitOfMeasurement[],
    Ml_Num_Unit:number,
    Ml_Gst_Num:string,
    Ml_Carton:string,
    Ml_Bill_Num:number,
    Ml_Serial_Num:number,
    Ml_Cost_Unit:number,
    Ml_Date_purchase:Date,
    Ml_Under_Warranty:Boolean,
    Ml_Warranty_Till:Date,
    Ml_Weight:number,
    Ml_Vehicle:VehicleDetail,
    Ml_Vendor:VendorMaster)
  {
    this.Ml_Id =Ml_Id
    this.Ml_Num=Ml_Num
    this.Ml_Type=Ml_Type
    this.Ml_Name=Ml_Name
    this.Ml_Desc=Ml_Desc
    this.Ml_Unit=Ml_Unit
    this.Ml_Num_Unit=Ml_Num_Unit
    this.Ml_Gst_Num=Ml_Gst_Num
    this.Ml_Carton=Ml_Carton
    this.Ml_Bill_Num=Ml_Bill_Num
    this.Ml_Serial_Num=Ml_Serial_Num
    this.Ml_Cost_Unit=Ml_Cost_Unit
    this.Ml_Date_purchase=Ml_Date_purchase
    this.Ml_Under_Warranty=Ml_Under_Warranty
    this.Ml_Warranty_Till=Ml_Warranty_Till
    this.Ml_Weight=Ml_Weight
    this.Ml_Vehicle=Ml_Vehicle
    this.Ml_Vendor=Ml_Vendor
  }

}

export class VendorMaster
{
    Vd_Id:number;
    Vd_Name:string;
    Vd_Address:string;
    Vd_Contact:number;
    Vd_contact_Person:string;
    Vd_Gst_Number:string;
    Vd_Branch_Owned:string;
    Vd_Department_Owned:string;
    Vd_Employee_Owned:string;
    Vd_ReOrder_Level:string;
    Vd_Curent_Balance:number;
    
    constructor( Vd_Id:number,
        Vd_Name:string,
        Vd_Address:string,
        Vd_Contact:number,
        Vd_contact_Person:string,
        Vd_Gst_Number:string,
        Vd_Branch_Owned:string,
        Vd_Department_Owned:string,
        Vd_Employee_Owned:string,
        Vd_ReOrder_Level:string,
        Vd_Curent_Balance:number)
    {
      this.Vd_Id=Vd_Id;
      this.Vd_Name=Vd_Name;
      this.Vd_Address=Vd_Address;
      this.Vd_Contact=Vd_Contact;
      this.Vd_contact_Person=Vd_contact_Person;
      this.Vd_Gst_Number=Vd_Gst_Number;
      this.Vd_Branch_Owned=Vd_Branch_Owned;
      this.Vd_Department_Owned=Vd_Department_Owned;
      this.Vd_Employee_Owned=Vd_Employee_Owned;
      this.Vd_ReOrder_Level=Vd_ReOrder_Level;
      this.Vd_Curent_Balance=Vd_Curent_Balance;
    }
}

export class materialType {
  Mlt_Id: number;

  Mlt_Name: string;
  constructor(Mlt_Id: number, Mlt_Name: string) {
    this.Mlt_Id = Mlt_Id;
    this.Mlt_Name = Mlt_Name;
  }
}

export class unitOfMeasurement {
  Uom_Id: number;
  Uom_Name: string;
  Uom_Qty: number;
  Uom_Value: number;

  constructor(
    Uom_Id: number,
    Uom_Name: string,
    Uom_Qty: number,
    Uom_Value: number
  ) {
    this.Uom_Id = Uom_Id;
    this.Uom_Name = Uom_Name;
    this.Uom_Qty = Uom_Qty;
    this.Uom_Value = Uom_Value;
  }
}

export class VehicleDetail
{
    Vl_Id:number;
    Vl_Make:vehicleMake;
    Vl_Model:vehicleModel;
    Vl_Insu_StartDate:Date;
    Vl_Insu_EndDate:Date; 
    constructor(Vl_Id:number,Vl_Make:vehicleMake,Vl_Model:vehicleModel,Vl_Insu_StartDate:Date, Vl_Insu_EndDate:Date )
    {
     this.Vl_Make=Vl_Make;
     this.Vl_Model=Vl_Model;
     this.Vl_Insu_StartDate=Vl_Insu_StartDate;
     this.Vl_Insu_EndDate=Vl_Insu_EndDate;
     this.Vl_Id=Vl_Id
    }
}

export class vehicleMake
{
    Vl_Mk_Id:number;
    Vl_Mk_Name:string;

    constructor(Vl_Mk_Id:number,Vl_Mk_Name:string)
    {
        this.Vl_Mk_Id=Vl_Mk_Id;
        this.Vl_Mk_Name=Vl_Mk_Name;
    }
}

export class vehicleModel
{
  Vl_Md_Id:number;
  Vl_Md_Mk_Id:number;
  Vl_Md_Name:string;
   
  constructor(Vl_Md_Id:number,Vl_Md_Mk_Id:number,Vl_Md_Name:string)
  {
  this.Vl_Md_Id=Vl_Md_Id;
  this.Vl_Md_Mk_Id=Vl_Md_Mk_Id;
  this.Vl_Md_Name=Vl_Md_Name;
  }

}

