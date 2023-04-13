import './private/Animal.dart';

// 类和对象
class Person {
  late num a;
  //late显式声明一个非空的变量，但不初始化,加上late关键字可以通过静态检查，但由此会带来运行时风险。
  late String kanokano;
  String kano = '111';
  //默认构造器
  // Person(String name) {
  //   this.kano = name;
  //   kanoSay();
  // }
  //构造器简写
  // Person(this.kano);

  //给属性设置默认值
  Person() : a = 1;

  //命名构造函数
  Person.now() {
    this.kano = '命名构造函数';
    print(kano);
  }

  void kanoSay() {
    print(kano);
  }

  //getter
  get sun {
    return kano;
  }

  //setter
  set setkano(value) {
    kano = value;
  }

  //静态成员
  static late String staticString;
  static void kano123() {
    print('dd');
  }
}

//继承
class Dog extends Animal {
  Dog(String name, String age) : super(name, age) {}
  //覆写父类方法
  @override
  void bark() {
    print(super.name + '在叫');
  }
}

void main(List<String> args) {
  Person.now();
  Person aa = new Person();
  aa.setkano = '111';
  print(aa.sun);
  Person.kano123();
  Animal a = new Animal('dog', '12');
  // print(a._name);//错误
  // print(a._run);//错误
  // a.run()

  //链式调用 返回的永远是Instance of 'Animal'
  print(a
    ..bark()
    ..age);

  var dog = new Dog('狗', '11');
  dog.bark(); //子类的bark
  Animal dog1 = new Animal('狗', '11');
  dog1.bark(); //父类的bark
}
