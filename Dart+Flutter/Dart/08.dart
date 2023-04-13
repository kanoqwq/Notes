//抽象类\接口
//dart没有接口，可以用抽象类来代替

abstract class Animal {
  late String name;
  late int age;
  //抽象方法
  void bark();
}

//extends就是抽象类用法，implements就是接口用法
class Duck extends Animal {
  late String name;
  late int age;
  Duck(this.name, this.age);
  @override
  void bark() {
    // TODO: implement bark
    print('嘎嘎嘎' + this.name + this.age.toString());
  }
}

class Duck1 implements Animal {
  late String name;
  late int age;
  Duck1(this.name, this.age);
  @override
  void bark() {
    // TODO: implement bark
    print('嘎嘎嘎' + this.name + this.age.toString());
  }

  void pprint() {
    print('123');
  }
}

void main(List<String> args) {
  Duck duck = new Duck('鸭子', 11);
  duck.bark();

  Duck1 duck1 = new Duck1('鸭子1', 11);
  duck1.bark();
  duck1.pprint(); //子类方法可以调用
  Animal duck2 = new Duck1('鸭子1', 11);
  //多态演示
  // duck2.pprint();//父类没有这个方法，无法直接调用
  (duck2 as Duck1).pprint(); //里氏转换，可以调用了
}
