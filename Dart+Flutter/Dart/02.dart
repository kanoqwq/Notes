import 'dart:typed_data';

void main(List<String> args) {
  //常用数据类型
  /// int
  int a = 1;

  //数字类型，可以整数也可以小数
  num aaa = 1;
  aaa = 1.1;

  /// double
  double d = 1.1;

  /// String
  String s = 'kanokano';

  //多行字符串（也可以用双引号）
  s = '''asdad
        dsafjdksl
      ''';

  //字符串模板拼接
  String s1 = 'kano', s2 = 'dd';
  s = "$s1-$s2";
  // print(s);

  /// bool
  bool bl = true;
  // num bl = 0;
  //表达式里面只能是Boolean类型的结果
  if (bl) {
    print('真');
  }

  /// List(数组)
  var li = ['kano', true, 1.1, 1000];
  // print("总长度为：" + li.length.toString());
  for (var item in li) {
    // print('List的' + li.indexOf(item).toString() + '值:$item');
  }
  //指定类型的数组(使用泛型)
  List<num> li2 = <num>[1, 2, 3, 4, 5, 6, 1.1];
  //或者 var li2 = <num>[1, 2, 3, 4, 5, 6, 1.1];

  //新版本的dart无法使用new对象的方法创建数组了
  // var li3 = new List<num>()
  //初始化一个固定长度的List集合
  var l4 = List<String>.filled(10, 'dd');
  // l4.add('1'); //固定长度的集合无法添加新值
  // print(l4);
  //数组的方法
  li2.clear(); //清空数组
  li2.length = 0; //也可以这样清空数组
  li2.add(111); //增加数据
  li2.addAll([1, 2, 3, 4, 5]); //批量添加
  print(li2.reversed); //反转 List.reversed属性以相反的顺序返回包含列表值的[可迭代对象]
  li2.remove(1); //删除对应数据
  li2.removeAt(0); //通过下标删除（左闭右开区间）
  li2.fillRange(0, 3, 1111);
  li2.insert(0, 123); //插入在对应下标前面， 将所有后面的对象移向列表的末尾
  li2.insertAll(0, [123, 456, 789]); //插入在对应下标前面， 将所有后面的对象移向列表的末尾
  print(li2.join(',').split(',')); //和js一样
  print(li2.indexOf(111)); //查找不到会返回0-1
  print(li2); //查找不到会返回0-1

  /// Map（字典）
  var person = {"name": "kano", "age": 20};
  Map maps = new Map(); //也可以这么定义
  maps['dd'] = 'aa';
  person['say'] = 'urdd'; //添加
  person.remove('age'); //移除
  print(person.keys.toList()); //列出key
  print(person.isEmpty); //为空？
  print(person.isNotEmpty); //不为空？
  print(person.entries); //展示迭代属性
  print(person['say']);
  print(person);
  print(person['age']);
  print(person.containsKey('age')); //包含age的key？
  print(person.containsValue('kano')); //包含kano的字符串值？
  person.addAll({
    'work': ['吃饭', '睡觉']
  }); //添加

  //判断数据类型
  var abc = '猜猜我是什么类型？';
  if (abc is String) {
    print('猜中了，是String类型！');
  } else {
    print('你不是String类型，你今晚坐小孩那桌！');
  }
}
