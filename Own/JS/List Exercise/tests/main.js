
class Users{
    constructor(firstName, lastName, email, phone, product = []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.product = product;
    }
}

let person1 = new Users("Juan", "Roa", "ha", 23, "");