import 'package:flutter/material.dart';
import './res/listData.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '123',
      theme: ThemeData(
        // app内主题
        primarySwatch: Colors.red,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter'),
        ),
        body: const LatyoutDemo(),
      ),
    );
  }
}

//wrap组件，相对于Row和Column组件来说，优势是可以自动换行（
class LatyoutDemo extends StatelessWidget {
  const LatyoutDemo({super.key});
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5),
      // wrap组件
      child: Wrap(
        //主轴方向
        // direction: Axis.vertical,
        // 水平间距
        spacing: 10,
        // 垂直间距
        runSpacing: 0,
        // 对其方式
        // alignment: WrapAlignment.center,
        children: [
          Button(
            'kano1',
            onPressed: () {
              print('object1');
            },
          ),
          Button(
            'kano2',
            onPressed: () {
              print('object2');
            },
          ),
          Button(
            'kano3',
            onPressed: () {
              print('object3');
            },
          ),
          Button(
            'kano4',
            onPressed: () {
              print('object4');
            },
          ),
          Button(
            'kano5',
            onPressed: () {
              print('object5');
            },
          ),
          Button(
            'kano6',
            onPressed: () {
              print('object6');
            },
          ),
        ],
      ),
    );
  }
}

//自定义按钮组件
class Button extends StatelessWidget {
  final String text;
  //匿名函数方法传参
  final void Function()? onPressed;
  //或者这样写
  // final VoidCallback onPressed;
  //例子
  //定义一个接收一个Function类型的回调函数作为参数的函数
  // int calculate(int Function(int, int) operation, int a, int b) {
  //   //调用传递的回调函数，并返回结果
  //   return operation(a, b);
  // }
  // int result = calculate(addNumbers, 3, 5);
  const Button(this.text, {super.key, required this.onPressed});
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: const ButtonStyle(
          backgroundColor:
              MaterialStatePropertyAll(Color.fromARGB(255, 190, 190, 190)),
          foregroundColor: MaterialStatePropertyAll(Colors.black45)),
      child: Text(text),
    );
  }
}
