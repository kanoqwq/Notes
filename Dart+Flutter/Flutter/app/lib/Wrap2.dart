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
    return ListView(
      padding: const EdgeInsets.all(10),
      children: [
        Row(
          children: const [
            Text(
              "热搜",
              style: TextStyle(
                fontSize: 20,
              ),
            ),
          ],
        ),
        const Divider(),
        Wrap(
          spacing: 10,
          runSpacing: 0,
          children: [
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
            Button("女装", onPressed: () {}),
          ],
        ),
        const SizedBox(height: 10),
        Row(
          children: const [
            Text(
              "历史记录",
              style: TextStyle(
                fontSize: 20,
              ),
            )
          ],
        ),
        const Divider(),
        Column(
          children: const [
            ListTile(
              title: Text("女装"),
            ),
            Divider(),
            ListTile(
              title: Text("手机"),
            ),
            Divider(),
            ListTile(
              title: Text("电脑"),
            ),
            Divider(),
          ],
        ),
        const SizedBox(height: 40),
        OutlinedButton.icon(
          onPressed: () {},
          style: const ButtonStyle(
            foregroundColor: MaterialStatePropertyAll(Colors.black),
          ),
          icon: const Icon(Icons.delete),
          label: const Text("清空历史记录"),
        ),
      ],
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
