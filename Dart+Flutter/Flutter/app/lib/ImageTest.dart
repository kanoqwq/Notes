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
              // MyImage(),
              // 不用margin的话可以用一个占位盒子
              SizedBox(
                height: 20,
              ),
              CircularRound(),
              SizedBox(
                height: 20,
              ),
              ClipImage(),
              LocalImage()
            ],
          ),
        ),
      ),
    );
  }
}

//图片组件
class MyImage extends StatelessWidget {
  const MyImage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 350,
      height: 450,
      decoration: const BoxDecoration(
        color: Colors.yellow,
        // 貌似container没有overflow属性，加了圆角也没用
        // borderRadius: BorderRadius.circular(100),
      ),
      //加载网络图片
      child: Image.network(
        'https://pcsdata.baidu.com/thumbnail/9376ac9d0kb281413ba92a3936a90bb5?fid=926669427-16051585-415399243324772&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-k8cdUfzS4hIRPw%2FfvP5pwdzQJJk%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8713714280065970271&dp-callid=0&time=1679191200&bus_no=26&size=c100000_u100000&quality=100&vuk=-&ft=video',
        // scale: 3,
        // alignment: Alignment.centerRight,
        fit: BoxFit.cover,
        repeat: ImageRepeat.noRepeat,
      ),
    );
  }
}

//使用盒子背景图片实现圆角图片
class CircularRound extends StatelessWidget {
  const CircularRound({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 150,
      width: 150,
      // margin: EdgeInsets.fromLTRB(0, 20, 0, 0),
      decoration: BoxDecoration(
        color: Colors.yellow,
        // 用背景图片+边框弧度可以做到圆角效果
        borderRadius: BorderRadius.circular(100),
        image: const DecorationImage(
            image: NetworkImage(
              'https://pcsdata.baidu.com/thumbnail/6068a6987r111999f02089408be85320?fid=926669427-16051585-753204124778990&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-NXDiiWfkyS6z88rhxSB2MbXY2YA%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8713714207583290886&dp-callid=0&time=1679191200&bus_no=26&size=c100000_u100000&quality=100&vuk=-&ft=video',
            ),
            fit: BoxFit.cover),
      ),
    );
  }
}

//使用ClipOval实现一个圆形图片
class ClipImage extends StatelessWidget {
  const ClipImage({super.key});

  @override
  Widget build(BuildContext context) {
    return ClipOval(
      child: Image.network(
        'https://pcsdata.baidu.com/thumbnail/020200ed3j8d25c3ee8c1afeeb6e6b36?fid=926669427-16051585-957873473131311&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-h2PqQDGrJfnUWTnUIFbOeUwzwe4%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8715881033625977785&dp-callid=0&time=1679198400&bus_no=26&size=c100000_u100000&quality=100&vuk=-&ft=video',
        width: 150,
        height: 150,
        fit: BoxFit.cover,
      ),
    );
  }
}

//加载本地图片
//先去pubspec.yaml里设置图片的位置
class LocalImage extends StatelessWidget {
  const LocalImage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 150,
      width: 150,
      decoration: const BoxDecoration(
        color: Colors.yellow,
      ),
      child: Image.asset(
        'images/1.jpg',
        fit: BoxFit.cover,
      ),
    );
  }
}
