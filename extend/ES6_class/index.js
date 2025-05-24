class Parent {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log('Hi!');
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
    this.age = age;
  }
}

const child = new Child('John', 10);

child.sayHi();

/**
 * ES6 class本质上仍然是寄生组合式继承
 */

