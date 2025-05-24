/**
 * 实现new关键字
 * 
 * new 运算符用来创建用户自定义的对象类型的实例或者具有构造函数的内置对象的实例。
 * 
 * new会产生一个对象
 * 新对象需要能够访问到构造函数的属性，所以需要重新指定它的原型
 * 构造函数可能会显示返回
 */
function _new() {
  const Constructor = arguments[0];
  const obj = Object.create(Constructor.prototype);
  const ret = Reflect.construct(Constructor, arguments);

  return typeof ret === 'object' && ret !== null ? ret : obj;
}

class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

const person = _new(Person, 'zhangsan');
person.sayName(); // zhangsan
console.log(person); // Person { name: 'zhangsan' }
