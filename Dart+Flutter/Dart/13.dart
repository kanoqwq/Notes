//identical dart:core 检查两个引用是否指向同一个对象
void main(List<String> args) {
  // var o1 = new Object();
  // var o2 = new Object();
  // print(identical(o1, o2));//false

  // var o1 = new Object();
  // var o2 = o1;
  // print(identical(o1, o2)); //true

  //实例化常量构造函数
  // var o1 = const Object();
  // var o2 = const Object();
  // print(identical(o1, o2)); //true
  // print(identical(const [2], const [2])); //true

  //const关键词不能落下
  var c1 = const Container(w: 100, h: 200);
  var c2 = const Container(w: 100, h: 200);
  print(identical(c1, c2)); //true
  //const关键词不能落下
  var c3 = const Container(w: 1100, h: 200);
  var c4 = const Container(w: 1200, h: 200);
  print(identical(c3, c4)); //false
}

//常量构造函数
//1、常量构造函数需以const关键字修饰
//2、const构造函数必须用于成员变量都是final的类
// 3、如果实例化时不加const修饰符，即使调用的是常量构造函数，实例化的对象也不是常量实
// 4、实例化常量构造函数的时候，多个地方创建这个对象，如果传入的值相同，只会保留一个
// 5、Flutter中const修饰不仅仅是节省组件构建时的内存开销，Flutter在需要重新构建组件的时候不会重复构建const组件
//常量构造函数
class Container {
  //必须final
  final int w;
  final int h;
  const Container({required this.w, required this.h});
}
