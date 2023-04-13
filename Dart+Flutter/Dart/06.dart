void main(List<String> args) {
  // print(kano(10)); //斐波那契数列第10+1项
  // print(selb());
  print(kkk('kano', age: 18, sex: '女'));
  callback() {
    return 'fn1';
  }

  print(fn2(callback)());
  print(kanokano());

  (() {
    print('我是自执行方法');
  })();

  var b = fn(); //闭包
  b();
  b();
  b();
  b();
}
//自定义方法

int kano(n) {
  //参数可以不写类型 默认是dynamic
  if (n == 1 || n == 2) {
    return 1;
  }
  return kano(n - 1) + kano(n - 2);
}

//自定义方法的可选参数
int selb([int? age = -2]) {
  //可选参数可以设置缺省值
  print(age); //不传就是缺省值
  return age ?? -1;
}

//命名参数
String kkk(String username, {int? age, String sex = '男'}) {
  if (age != null) {
    return '姓名：$username---性别$sex--年龄$age';
  }
  return '姓名：$username---性别$sex--年龄无';
}

//函数作为参数 高阶函数
fn2(callback) {
  return callback;
}

//匿名函数
var kanokano = () {
  num a = 1;
  return a;
};

//闭包

fn() {
  var a = 111; //a就变成了一个闭包
  return () {
    a++;
    print(a);
  };
}
