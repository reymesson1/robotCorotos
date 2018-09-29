export class Master {
  constructor(
    public _id ?: number,
    public category ?: string,
    public date ?: string,
    public description ?: string,
    public location ?: string,    
    public nameImages ?: Array<any>,
    public pathImages ?: Array<any>,  
    public place ?: string,
    public status ?: boolean,
    public title ?: string,
    public fullname ?: string,    
  ) { }
 }