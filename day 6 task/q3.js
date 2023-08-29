class person {
    constructor(name, email, contact, Gender, DOB) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.Gender = Gender;
        this.DOB = DOB;
    }
displayInfo() {
    console.log(`name: ${this.name}`);
    console.log(`email: ${this.email}`);
    console.log(`contact: ${this.contact}`);
    console.log(`Gender: ${this.Gender}`);
    console.log(`DOB: ${this.DOB}`);
}
}
let person1 = new person ('siva', 'siva5882@gmail.com', '8838472940', 'Male', '05.04.2001');
person1.displayInfo();