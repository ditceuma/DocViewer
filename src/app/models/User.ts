export class User{

    id:string;
    name:string;
    username:string;
    email:string;
    password:string;
    organization:string;
    job:string;

    constructor(obj:any){
        this.id = obj.id;
        this.name = obj.name;
        this.username = obj.username;
        this.email = obj.email;
        this.password = obj.password;
        this.organization = obj.organization;
        this.job = obj.job;
    }
}