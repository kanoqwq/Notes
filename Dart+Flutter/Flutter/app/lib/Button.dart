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
    return ListView(
      padding: const EdgeInsets.all(10),
      children: [
        Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
              ElevatedButton(
                style: const ButtonStyle(
                    backgroundColor: MaterialStatePropertyAll(Colors.blue),
                    foregroundColor: MaterialStatePropertyAll(Colors.black)),
                onPressed: () {
                  print('我点击了普通按钮');
                },
                child: const Text("普通按钮"),
              ),
              TextButton(
                onPressed: () {
                  print('我点击了文本按钮');
                },
                child: const Text("文本按钮"),
              ),
              OutlinedButton(
                onPressed: () {
                  print('我点击了带边框的按钮');
                },
                child: Text('key'),
              ),
              IconButton(
                onPressed: () {
                  print('我点击了图标按钮');
                },
                icon: const Icon(Icons.thumb_up),
              ),
            ]),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton.icon(
                  style: const ButtonStyle(
                      iconColor: MaterialStatePropertyAll(Colors.green)),
                  onPressed: () {
                    print('我点击了图文按钮');
                  },
                  icon: const Icon(Icons.send),
                  label: const Text('发送'),
                ),
                TextButton.icon(
                  onPressed: () {
                    print('我点击了文本图标按钮');
                  },
                  icon: const Icon(Icons.info),
                  label: const Text('消息'),
                ),
                OutlinedButton.icon(
                  onPressed: () {
                    print('我点击了边框图标按钮');
                  },
                  icon: const Icon(Icons.add),
                  label: const Text('增加'),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // 大按钮组件
                SizedBox(
                  height: 60,
                  width: 200,
                  child: ElevatedButton(
                    style: const ButtonStyle(
                      backgroundColor: MaterialStatePropertyAll(Colors.blue),
                    ),
                    onPressed: () {},
                    child: const Text("大按钮"),
                  ),
                )
              ],
            ),
            Row(
              children: [
                // 自适应按钮
                Expanded(
                  flex: 1,
                  child: Container(
                    height: 80,
                    margin: const EdgeInsets.all(10),
                    child: ElevatedButton(
                      style: const ButtonStyle(
                        backgroundColor: MaterialStatePropertyAll(Colors.cyan),
                      ),
                      onPressed: () {},
                      child: const Text("自适应按钮"),
                    ),
                  ),
                )
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(
                  style: ButtonStyle(
                    // 形状参数，可以设置圆角
                    shape: MaterialStateProperty.all(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                    ),
                  ),
                  onPressed: () {},
                  child: const Text("圆角"),
                ),
                SizedBox(
                  height: 80,
                  width: 80,
                  child: ElevatedButton(
                    style: ButtonStyle(
                      // 圆心按钮
                      shape: MaterialStateProperty.all(
                        // 圆边框
                        const CircleBorder(
                          side: BorderSide(width: 2, color: Colors.yellow),
                        ),
                      ),
                      backgroundColor:
                          const MaterialStatePropertyAll(Colors.cyan),
                    ),
                    onPressed: () {},
                    child: const Text("圆角"),
                  ),
                ),
                Row(
                  children: [
                    OutlinedButton(
                        style: ButtonStyle(
                          //修改边框颜色
                          side: MaterialStateProperty.all(
                              const BorderSide(width: 1, color: Colors.red)),
                        ),
                        onPressed: () {},
                        child: const Text('带边框的按钮'))
                  ],
                )
              ],
            )
          ],
        )
      ],
    );
  }
}
