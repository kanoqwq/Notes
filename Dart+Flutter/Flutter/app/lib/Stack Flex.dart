import 'package:flutter/material.dart';

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
          title: const Text('Flutter Girdview'),
        ),
        body: const MyColumn(),
      ),
    );
  }
}

// 网格列表GridView
class MyPadding extends StatelessWidget {
  const MyPadding({super.key});

  @override
  Widget build(BuildContext context) {
    // padding组件
    return const Padding(
      padding: EdgeInsets.all(10),
      child: Text('data'),
    );
  }
}

class IconContainer extends StatelessWidget {
  Color color;
  IconData icon;
  IconContainer(this.icon, {Key? key, this.color = Colors.red})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    //自定义iconContainer
    return Container(
      color: color,
      height: 120,
      width: 120,
      alignment: Alignment.center,
      child: Icon(
        icon,
        color: Colors.white,
        size: 28,
      ),
    );
  }
}

//水平布局组件
class MyRows extends StatelessWidget {
  const MyRows({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      // 最大高度和宽度 (infinity或者maxFinite)
      width: double.infinity,
      height: double.maxFinite,
      color: const Color(0x00f5f5f5),
      child: Row(
        // 横向排列显示方式（类似css3的flex）
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        // 纵向排列显示方式（类似css3的flex）需要外部容器相对
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          IconContainer(Icons.home),
          IconContainer(Icons.search, color: Colors.yellow),
          IconContainer(Icons.wechat),
        ],
      ),
    );
  }
}

//column
class MyColumn extends StatelessWidget {
  const MyColumn({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      // 最大高度和宽度 (infinity或者maxFinite)
      width: double.infinity,
      height: double.maxFinite,
      color: const Color.fromARGB(0, 0, 0, 0),
      child: Column(
        // 横向排列显示方式（类似css3的flex）
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        // 纵向排列显示方式（类似css3的flex）需要外部容器相对
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          IconContainer(Icons.home),
          IconContainer(Icons.search, color: Colors.yellow),
          IconContainer(Icons.wechat),
        ],
      ),
    );
  }
}
