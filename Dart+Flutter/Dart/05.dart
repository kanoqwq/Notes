//Set 集合
import 'dart:math';

void main(List<String> args) {
  var s = Set();
  s.add('香蕉');
  s.add('香蕉'); //重复的是无效的
  s.add('苹果');
  s.add('橘子');
  print(s);
  List ss = ['香蕉', '香蕉', '香蕉', '香蕉', '苹果', '苹果', '橘子'];
  s.addAll(ss); //去重
  ss = s.toList();
  print(ss);
  // print(ss.toSet().toList()); //也可以去重

  //map方法
  List kano1 = [1, 2, 3, 4];
  // kano1 = kano1.map((e) {
  //   //map完后还是一个可迭代对象,所以还得加toList()
  //   return e * 2;
  // }).toList();

  //类似filter
  // kano1 = kano1.where((value) {
  //   return value > 2;
  // }).toList();
  // print(kano1);

  //在列表里寻找符合的项目（只要有一个就返回true）
  // bool f = kano1.any((value) {
  //   return value > 2;
  // });
  //在列表里寻找符合的项目（需全部满足条件）
  bool f = kano1.every((value) {
    return value > 0;
  });
  print(f);

  //箭头函数写法
  // kano1.map((e) => e * 2);
}
