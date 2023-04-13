import 'package:flutter/material.dart';
import 'package:flutter_application_1/pages/tabs.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Test",
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      //1.初始化路由
      initialRoute: '/',
      //直接命名路由
      routes: {
        '/': (context) => const Tabs(),
      },
    );
  }
}
