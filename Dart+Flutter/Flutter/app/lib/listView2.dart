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
          title: const Text('Flutter ListView'),
        ),
        body: MyHomePage(),
      ),
    );
  }
}

// 动态列表
// class MyHomePage extends StatelessWidget {
//   const MyHomePage({super.key});

//   //列表循环方法
//   List<Widget> _initListData() {
//     List<Widget> list = [];
//     for (var i = 0; i < 50; i++) {
//       list.add(ListTile(
//         title: Text('kano$i'),
//       ));
//     }
//     return list;
//   }

//   @override
//   Widget build(BuildContext context) {
//     // 执行
//     return ListView(
//       children: _initListData(),
//     );
//   }
// }

//动态列表拿取数据
class MyHomePage extends StatelessWidget {
  // const MyHomePage({super.key});

  // //列表循环方法
  // List<Widget> _initListData() {
  //   List<Widget> tmpList = [];

  //   // for (var element in listData) {
  //   //   tmpList.add(ListTile(
  //   //     title: Text(element["title"].toString()),
  //   //     subtitle: Text(element["author"].toString()),
  //   //     leading: Image.network(element['imageUrl'].toString()),
  //   //   ));
  //   // }

  //   tmpList = listData.map((element) {
  //     return ListTile(
  //       title: Text(element["title"].toString()),
  //       subtitle: Text(element["author"].toString()),
  //       leading: Image.network(element['imageUrl'].toString()),
  //     );
  //   }).toList();

  //   return tmpList;
  // }

  @override
  Widget build(BuildContext context) {
    // ListViewbuilder也可以遍历列表展示
    return ListView.builder(
      itemCount: listData.length,
      // 两个参数context, index
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(listData[index]['title'].toString()),
          subtitle: Text(listData[index]["author"].toString()),
          leading: Image.network(listData[index]['imageUrl'].toString()),
        );
      },
    );

    // 执行
    // return ListView(
    //   children: _initListData(),
    // );
  }
}
