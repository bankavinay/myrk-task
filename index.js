class Address {
  constructor(street, city, postalCode) {
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
    Object.freeze(this);
  }
}

class Person {
  constructor(name, id, dateOfJoining, addresses) {
    this.name = name;
    this.id = id;
    this.dateOfJoining = new Date(dateOfJoining);
    this.addresses = Object.freeze(
      addresses.map((addr) =>
        Object.freeze(new Address(addr.street, addr.city, addr.postalCode))
      )
    );
    Object.freeze(this);
  }
}

const addresses = [
  { street: "12-1-504, Masab Tank", city: "Hyderabad", postalCode: "500008" },
  {
    street: "Banjara Hills, Road No 12",
    city: "Hyderabad",
    postalCode: "500034",
  },
];

const person = new Person("Suresh Kumar", "INDD456", "2024-12-22", addresses);

console.log(person);

person.name = "Vinay";
person.addresses[0].street = "SR Nagar, Mettuguda";

console.log(person);
