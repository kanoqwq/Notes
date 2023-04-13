import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "响应式列表测试",
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final List<Widget> _list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("响应式列表测试"),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            _list.add(const ListTile(
              title: Text("我是新增的选项"),
            ));
          });
        },
        child: const Icon(Icons.add),
      ),
      body: ListView(
        // 为了确保 ListView 能够正确地响应 _list 中的变化，您需要传递一个新的 List 对象，而不是直接传递 _list
        children: _list.toList(),
      ),
    );
  }
}
