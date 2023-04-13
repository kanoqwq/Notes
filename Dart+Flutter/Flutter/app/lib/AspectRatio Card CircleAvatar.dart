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

//卡片与图文列表
class LatyoutDemo extends StatelessWidget {
  const LatyoutDemo({super.key});

  @override
  //图文列表
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: listData.length,
      itemBuilder: (BuildContext context, int index) {
        return Card(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadiusDirectional.circular(20),
          ),
          elevation: 10,
          margin: const EdgeInsets.all(10),

          // 剪裁，应用抗锯齿，相当于overflow
          clipBehavior: Clip.antiAlias,
          child: Column(
            children: [
              //AspectRatio的作用就是根据设置调整子元素child的宽高比
              AspectRatio(
                aspectRatio: 16 / 9,
                child: Image.network(
                  // 就用这个吧，网图炸了
                  'https://pcsdata.baidu.com/thumbnail/979818712o5baa99397a144e196a167a?fid=926669427-16051585-362173162162274&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-z%2FPt69v9OZjSklba59Y9raiFcqU%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8838276045100961164&dp-callid=0&time=1679655600&bus_no=26&size=c100000_u100000&quality=100&vuk=-&ft=video',
                  fit: BoxFit.cover,
                ),
              ),
              // 平铺列表
              ListTile(
                //原型头像组件
                leading: const CircleAvatar(
                  backgroundImage: NetworkImage(
                      'https://kanokano.cn/wp-content/uploads/2020/04/tx.png'),
                ),
                title: Text(listData[index]["author"].toString()),
                subtitle: Text(listData[index]["title"].toString()),
              ),
            ],
          ),
        );
      },
    );
  }
  //卡片
  // Widget build(BuildContext context) {
  //   return ListView(
  //     children: [
  //       Card(
  //         //阴影的深度
  //         elevation: 10,
  //         color: Colors.pink[100],
  //         margin: const EdgeInsets.all(10),
  //         // 形状
  //         shape: RoundedRectangleBorder(
  //           //边框弧度
  //           borderRadius: BorderRadius.circular(20),
  //         ),
  //         child: Column(
  //           children: const [
  //             ListTile(
  //               title: Text(
  //                 "张三",
  //                 style: TextStyle(fontSize: 28),
  //               ),
  //               subtitle: Text("Flutter高级软件工程师"),
  //             ),
  //             Divider(),
  //             ListTile(
  //               title: Text(
  //                 "电话:1145141919810",
  //               ),
  //             ),
  //             ListTile(
  //               title: Text(
  //                 "地址:湖南省怀化市xxx",
  //               ),
  //             ),
  //           ],
  //         ),
  //       ),
  //       Card(
  //         elevation: 10,
  //         margin: const EdgeInsets.all(10),
  //         child: Column(
  //           children: const [
  //             ListTile(
  //               title: Text(
  //                 "李四",
  //                 style: TextStyle(fontSize: 28),
  //               ),
  //               subtitle: Text("VUE高级软件工程师"),
  //             ),
  //             Divider(),
  //             ListTile(
  //               title: Text(
  //                 "电话:111121212",
  //               ),
  //             ),
  //             ListTile(
  //               title: Text(
  //                 "地址:天津市津南区",
  //               ),
  //             ),
  //           ],
  //         ),
  //       ),
  //     ],
  //   );
  // }
}
