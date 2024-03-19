interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
// You can create a class which implements this interface.
class Employee implements Person {
  name: string;
  age: number;
  class: number;

  constructor(n: string, a: number, c: number) {
    this.name = n;
    this.age = a;
    this.class = c;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
