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
        body: const MystateW(),
        // 浮动按钮
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            // 这里没法写，因为这是一个无状态组件
            print('G');
          },
          child: const Icon(Icons.add),
        ),
      ),
    );
  }
}

//无状态组件，没法动态的变化
class StatelessTest extends StatelessWidget {
  StatelessTest({super.key});
  var count = 0;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            count.toString(),
            style: const TextStyle(fontSize: 30),
          ),
          const SizedBox(
            height: 100,
          ),
          ElevatedButton(
            onPressed: () {
              //并不会在界面上重新渲染
              count++;
              print(count);
            },
            child: const Text("增加"),
          )
        ],
      ),
    );
  }
}

//有状态组件(自己写的)
// class MyStatefulWidget extends StatefulWidget {
//   const MyStatefulWidget({Key? key}) : super(key: key);
//   @override
//   State<StatefulWidget> createState() {
//     return _MystateWState();
//   }
// }

//有状态组件(生成的)
class MystateW extends StatefulWidget {
  const MystateW({super.key});

  @override
  State<MystateW> createState() => _MystateWState();
}

//自定义状态类（分离管理）
class _MystateWState extends State<MystateW> {
  int _count = 0;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            _count.toString(),
            style: const TextStyle(fontSize: 30),
          ),
          const SizedBox(
            height: 100,
          ),
          ElevatedButton(
            onPressed: () {
              //statefulwidget特有方法，执行完后重新渲染前端
              setState(() {
                _count++;
              });

              print(_count);
            },
            child: const Text("增加"),
          )
        ],
      ),
    );
  }
}
