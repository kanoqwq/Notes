void main(List<String> args) {
  // String dart = "你好";

  final kano = new DateTime.now(); //final编译时候会赋值一次（惰性常量），之后保持const常量的特性
  // const kano = new DateTime.now(); const是绝对的常量，编译之前就已经确定的值
  print(kano);
}
