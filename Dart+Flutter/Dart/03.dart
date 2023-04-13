void main(List<String> args) {
  int a = 10;
  double b = 12.1;
  //结果自动转换为double
  print(a + b);
  print(a - b);
  print(a / b);
  print(a * b);
  print(a % b);
  print(a >= b);
  print(a <= b);
  print(a == b); //没有三等号，别弄混了
  print(a != b);
  bool s = false;
  bool k = true;
  print(!s);
  print(s && k);
  print(s || k);
  // print(a + b is double); //true

  //赋值运算符 ??=
  var c; //var可以不用初始化
  int? dd; //不确定要不要赋值的变量请使用?类型修饰符
  c ??= 'kano'; //如果c里面没有值的话(null)就赋值'kano'
  print(c);
  print(dd ?? 111); //避空运算符
  //符合运算符 += -= *= /= %= ~/=
  var cal = 1.3;
  int? intable;
  print(cal ~/ 1); //取整

  //类型转换

  int kkk = 12345;
  print(kkk.toString());
  print(kkk.toDouble());

  //不确定类型可以try一下
  var data = 'fhd';
  try {
    int dd = int.parse(data);
    print(dd);
  } catch (e) {
    print(e);
  }

  //判空
  String kkkk = '';
  print(kkkk.isEmpty);

  num sda = 1 / 0;
  print(sda.isInfinite); //true

  num sda1 = 0 / 0;
  print(sda1.isNaN); //true
}
