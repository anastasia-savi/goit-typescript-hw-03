class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 1000);
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    } else {
      console.log("The door is closed. Cannot come in.");
    }
  }

  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("The door is now open.");
    } else {
      console.log("Wrong key. Cannot open the door.");
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};