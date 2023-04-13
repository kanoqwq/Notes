import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'hello',
        home: Scaffold(
          appBar: AppBar(title: const Text('hello')),
          body: Center(
              child: Column(
            children: const [
              SmallBox(),
              MyButton(),
              myText(),
            ],
          )),
        ));
  }
}

class SmallBox extends StatelessWidget {
  const SmallBox({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      // 容器元素布局
      alignment: Alignment.center,
      margin: const EdgeInsets.fromLTRB(0, 100, 0, 0),
      width: 400,
      height: 100,
      decoration: BoxDecoration(
        color: Colors.yellow,
        border: Border.all(color: Colors.pink, width: 5),
        borderRadius: BorderRadius.circular(100),
        boxShadow: const [
          BoxShadow(color: Colors.black, blurRadius: 14),
        ],
        // LinearGradient 背景线性渐变 RadialGradient 径向渐变
        gradient: const LinearGradient(
          // radius: 10,
          begin: Alignment.topCenter,
          end: Alignment.bottomLeft,
          colors: [Colors.white, Colors.red],
        ),
      ),
      child: const Text('我是盒子里面的组件'),
    );
  }
}

class MyButton extends StatelessWidget {
  const MyButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: 40,
      padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
      margin: const EdgeInsets.fromLTRB(0, 50, 0, 0),
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(100),
        boxShadow: const [
          BoxShadow(
            color: Colors.blue,
            blurRadius: 10,
            spreadRadius: 0.1,
            offset: Offset(0, 0),
          ),
        ],
      ),
      child: const Center(
        child: Text(
          '1234',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 20,
          ),
        ),
      ),
    );
  }
}

class myText extends StatelessWidget {
  const myText({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: 200,
      //位移
      // transform: Matrix4.translationValues(10, 10, 10),
      //旋转
      // transform: Matrix4.rotationX(1),
      //倾斜
      // transform: Matrix4.skew(0.2, 0.1),
      margin: const EdgeInsets.fromLTRB(0, 40, 0, 0),
      decoration: BoxDecoration(
        color: Colors.yellow,
        borderRadius: BorderRadius.circular(30),
        boxShadow: const [
          BoxShadow(
            color: Colors.grey,
            blurRadius: 10,
          ),
        ],
      ),
      child: const Text(
        '我是Flutter我是Flutter我是Flutter我是Flutter我是Flutter我是Flutter我是Flutter我是Flutter ',
        textAlign: TextAlign.center,
        maxLines: 3,
        // 溢出显示几个点
        overflow: TextOverflow.ellipsis,
        style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.w900,
          color: Colors.red,
          fontStyle: FontStyle.italic,
          letterSpacing: 1,
          // decoration: TextDecoration.lineThrough,
          decoration: TextDecoration.underline,
          decorationStyle: TextDecorationStyle.dashed,
        ),
      ),
    );
  }
}
