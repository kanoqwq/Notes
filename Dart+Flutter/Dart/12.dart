import '09.dart';

void main(List<String> args) {
  //非空类型

  // int a = 123;
  // a = null;//非空，无法赋值

  String username = 'ddd';
  // username = null;//非空，无法赋值

  //可空类型
  // String? user = '111';
  // user = null; //可以

  // int? a = 123;
  // a = null; //可以

  List<int>? li = [1, 2, 3, 4];
  li = null; //可

  print(getData('1212121'));
  print(getData(null));

  //类型断言
  var kano = getDD(null);
  print(kano);
  kanokano('1', age: 20, numb: 111);
}

//可空函数
String? getData(url) {
  if (url != null) {
    return "this is server data";
  }
  return null;
}

num getDD(String? data) {
  try {
    return data!.length; //类型断言，等于null会抛出异常
  } catch (e) {
    print('不能为空！');
    return 0;
  }
}

//requered
// void kanokano(String key, {int? age, int? numb}) {}//可以设置为可空
void kanokano(String key, {required int age, required int numb}) {} //也可以设置为必须

class PP {
  late String a;
  late String? b;
  PP({required this.a, this.b}); //a必传
}
