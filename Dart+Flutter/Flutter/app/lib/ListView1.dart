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
            title: const Text('Flutter ListView'),
          ),
          body: Column(
            children: const [
              // MyListTile(),
              MyHomePage(),
            ],
          )),
    );
  }
}

// 普通列表
class MyListTile extends StatelessWidget {
  const MyListTile({super.key});

  @override
  Widget build(BuildContext context) {
    // 列表
    return ListView(
      children: const <Widget>[
        ListTile(
          // 头部图标
          leading: Icon(
            Icons.wechat,
            color: Colors.red,
            size: 40,
          ),
          // 尾部图标
          trailing: Icon(Icons.close),
          // trailing: Icon(Icons.arrow_forward_ios_rounded),
          title: Text('微信'),
          // 子标题
          subtitle: Text('微信，是一种生活方式'),
        ),
        //分界线
        Divider(),
        ListTile(
          leading: Icon(
            Icons.telegram,
            color: Colors.red,
            size: 40,
          ),
          title: Text("Telegram"),
          subtitle: Text("Telegram is the best chat APP in the word!"),
        ),
        Divider(),
        ListTile(
          leading: Icon(
            Icons.wordpress_rounded,
            color: Colors.red,
            size: 40,
          ),
          title: Text("WordPress"),
          subtitle: Text("WordPress is the best blog generator!"),
        ),
      ],
    );
  }
}

//图文列表
// class MyHomePage extends StatelessWidget {
//   const MyHomePage({super.key});

//   @override
//   Widget build(BuildContext context) {
//     // 列表
//     return ListView(
//       padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
//       children: <Widget>[
//         ListTile(
//           leading: Image.network(
//             'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
//           ),
//           title: const Text('习近平在俄罗斯媒体发表署名文章'),
//           subtitle: const Text(
//             "新华社北京3月20日电3月20日，在赴莫斯科对俄罗斯联邦进行国事访问之际，国家主席习近平在《俄罗斯报》和俄新社网站发表题为《踔厉前行，开启中俄友好合作、共同发展新篇章》的署名文章。文章全文如下：",
//             maxLines: 2,
//             overflow: TextOverflow.ellipsis,
//           ),
//         ),
//         const Divider(),
//         ListTile(
//           trailing: Image.network(
//             'https://gimg3.baidu.com/rel/src=https%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D1612500149%2C3634517457%26fm%3D3028%26app%3D3028%26f%3DPNG%26fmt%3Dauto%26q%3D75%26size%3Df1138_640&refer=http%3A%2F%2Fwww.baidu.com&app=2010&size=w560&n=0&g=0n&q=100&fmt=auto?sec=1679418000&t=b6b6e755fc713db7f21ec829cc0d178f',
//           ),
//           title: const Text('国际知名民调机构：中国人幸福感全球最高'),
//           subtitle: const Text(
//             "中新网3月20日电 近日，国际知名民调机构益普索集团(Ipsos)发布了一份有关全球幸福指数的调查报告，结果显示，在32个国家中，幸福感指数最高的国家是中国(91%)，其后是沙特阿拉伯(86%)和荷兰(85%)。",
//             maxLines: 2,
//             overflow: TextOverflow.ellipsis,
//           ),
//         ),
//         ListTile(
//           leading: Image.network(
//             'https://gimg3.baidu.com/rel/src=https%3A%2F%2Fgips1.baidu.com%2Fit%2Fu%3D2048016722%2C1064384102%26fm%3D3028%26app%3D3028%26f%3DPNG%26fmt%3Dauto%26q%3D75%26size%3Df1138_640&refer=http%3A%2F%2Fwww.baidu.com&app=2010&size=w560&n=0&g=0n&q=100&fmt=auto?sec=1679418000&t=393d5aa8647f7e203e3146ced265a021',
//           ),
//           title: const Text('国台办：大陆方面欢迎马英九先生来访'),
//           subtitle: const Text(
//             "新华社北京3月20日电 马英九将于3月27日率团来大陆祭祖、交流。国台办发言人马晓光20日上午表示，大陆方面欢迎马英九先生来大陆祭祖、参访，并带领台湾青年学生前来交流。",
//             maxLines: 2,
//             overflow: TextOverflow.ellipsis,
//           ),
//         ),
//       ],
//     );
//   }
// }

//图文列表
// class MyHomePage extends StatelessWidget {
//   const MyHomePage({super.key});

//   @override
//   Widget build(BuildContext context) {
//     // 列表
//     return ListView(
//       padding: const EdgeInsets.all(10),
//       children: <Widget>[
//         Image.network(
//           'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
//         ),
//         // ignore: sized_box_for_whitespace
//         Container(
//           padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
//           height: 44,
//           child: const Text(
//             "我是标题",
//             textAlign: TextAlign.center,
//             style: TextStyle(fontSize: 22),
//           ),
//         ),
//         Image.network(
//           'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
//         ),
//         Container(
//           padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
//           height: 44,
//           child: const Text(
//             "我是标题",
//             textAlign: TextAlign.center,
//             style: TextStyle(fontSize: 22),
//           ),
//         ),
//         Image.network(
//           'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
//         ),
//         Container(
//           padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
//           height: 44,
//           child: const Text(
//             "我是标题",
//             textAlign: TextAlign.center,
//             style: TextStyle(fontSize: 22),
//           ),
//         ),
//         Image.network(
//           'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
//         ),
//         Container(
//           padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
//           height: 44,
//           child: const Text(
//             "我是标题",
//             textAlign: TextAlign.center,
//             style: TextStyle(fontSize: 22),
//           ),
//         ),
//         Image.network(
//           'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
//         ),
//         Container(
//           padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
//           height: 44,
//           child: const Text(
//             "我是标题",
//             textAlign: TextAlign.center,
//             style: TextStyle(fontSize: 22),
//           ),
//         ),
//         Image.network(
//           'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
//         ),
//         Container(
//           padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
//           height: 44,
//           child: const Text(
//             "我是标题",
//             textAlign: TextAlign.center,
//             style: TextStyle(fontSize: 22),
//           ),
//         ),
//       ],
//     );
//   }
// }

//水平列表
class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    // 列表
    return SizedBox(
      height: 120,
      child: ListView(
        // 水平滚动
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.all(10),
        children: <Widget>[
          // ignore: sized_box_for_whitespace
          Container(
            padding: const EdgeInsets.all(5),
            // 水平滚动高度无效，垂直滚动宽度无效
            width: 120,
            decoration: const BoxDecoration(color: Colors.white),
            child: Column(
              children: [
                SizedBox(
                  child: Image.network(
                    'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
                  ),
                ),
                const Text(
                  "1999￥",
                  style: TextStyle(color: Colors.black),
                  textAlign: TextAlign.center,
                )
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.all(5),
            // 水平滚动高度无效，垂直滚动宽度无效
            width: 120,
            decoration: const BoxDecoration(color: Colors.white),
            child: Column(
              children: [
                SizedBox(
                  child: Image.network(
                    'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
                  ),
                ),
                const Text(
                  "1999￥",
                  style: TextStyle(color: Colors.black),
                  textAlign: TextAlign.center,
                )
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.all(5),
            // 水平滚动高度无效，垂直滚动宽度无效
            width: 120,
            decoration: const BoxDecoration(color: Colors.white),
            child: Column(
              children: [
                SizedBox(
                  child: Image.network(
                    'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
                  ),
                ),
                const Text(
                  "1999￥",
                  style: TextStyle(color: Colors.black),
                  textAlign: TextAlign.center,
                )
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.all(5),
            // 水平滚动高度无效，垂直滚动宽度无效
            width: 120,
            decoration: const BoxDecoration(color: Colors.white),
            child: Column(
              children: [
                SizedBox(
                  child: Image.network(
                    'https://t8.baidu.com/it/u=2540949838,2307587111&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1679418000&t=bd75d371c33814e853a8222b6ee99200',
                  ),
                ),
                const Text(
                  "1999￥",
                  style: TextStyle(color: Colors.black),
                  textAlign: TextAlign.center,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
