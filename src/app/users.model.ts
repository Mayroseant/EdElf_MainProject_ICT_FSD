export class UsersModel{
    constructor(
    public Role: String,
    public Name: String,
    public Password: String,
    public Organisation: String,
    public location: String,
    public email: String,
    public phone: Number
    ){}
}