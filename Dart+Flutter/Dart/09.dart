//mixin混入
// 作为mixin的类只能继承自Object，不能继承其他类
// 作为mixins的类不能有构造函数
// 一个类可以mixins多个mixins类

class Person {
  String a = '1';
  Person(this.a);
}

class A {
  String info = "A";
  void printA() {
    print('A');
  }
}

class B {
  void printB() {
    print('B');
  }
}

// class C {
//   void printA() {
//     print('C');
//   }
// }

//混入(类似于多继承)
// class C with A, B {

class C extends Person with A, B {
  C(String name) : super(name);
  void printC() {
    print('C and I have also ' + this.info + ' prop');
  }
}

void main(List<String> args) {
  var c = new C('ddd');
  //AB Person就是C的超类
  print(c is Object);
  print(c is Person);
  print(c is A);
  print(c is B);
  c.printA();
  c.printB();
  c.printC();
}
