//引入主题
import 'package:flutter/material.dart';

void main(List<String> args) {
  //程序的入口
  // runApp(const Center(
  //   child: Text(
  //     'Hello Flutter',
  //     textDirection: TextDirection.ltr,
  //     style: TextStyle(color: Color.fromRGBO(244, 244, 111, 1), fontSize: 50),
  //   ),
  // ));

//如果您在runApp中直接传递MaterialApp，则热重载无法正常工作.如果创建单独的核心小部件才会正常工作.
  runApp(const MyApp());
}

//抽离组件 (fstless可以快捷生成
class MyApp extends StatelessWidget {
  const MyApp({super.key});
  //实现build方法
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      //Scaffold n. 脚手架
      home: Scaffold(
        //顶部bar
        appBar: AppBar(title: const Text('hello World!')),
        //主体部分
        body: const Center(
          child: Text(
            'Hello Flutter',
            textDirection: TextDirection.ltr,
            style: TextStyle(color: Color.fromRGBO(0, 0, 0, 1), fontSize: 50),
          ),
        ),
      ),
    );
  }
}
