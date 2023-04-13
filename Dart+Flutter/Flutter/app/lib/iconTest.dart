import 'package:flutter/material.dart';
import 'package:flutter_application_1/font.dart';

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
          title: const Text('Flutter ICON'),
        ),
        body: const MyHomePage(),
      ),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      //图标
      children: const [
        Icon(
          Icons.home,
          color: Colors.amber,
          size: 40,
        ),
        Icon(
          Icons.wechat,
          size: 50,
        ),
        Icon(
          Icons.percent,
          size: 50,
        ),
        SizedBox(
          height: 20,
        ),
        Icon(MyIcon.bing),
        Icon(MyIcon.bing),
        Icon(
          MyIcon.google,
          color: Colors.red,
        )
      ],
    );
  }
}
