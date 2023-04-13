import 'package:flutter/material.dart';
// import './res/listData.dart';
import 'dart:convert' as convert;

import 'package:http/http.dart' as http;

List<dynamic> listData = [];
void main(List<String> args) async {
  var url =
      Uri.https('pan.kanokano.cn', '/api/fs/list', {"path": "百度の相册/鹿乃图集"});
  var response = await http.get(url);
  if (response.statusCode == 200) {
    var res = convert.jsonDecode(response.body) as Map<String, dynamic>;
    listData = res['data']['content'];
  }
  runApp(const MyApp());
}
//封装一个请求

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
        body: const MyHomePage(),
      ),
    );
  }
}

// 网格列表GridView
class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  List<Widget> _genList() {
    List list = <Widget>[];
    list = listData.map((element) {
      // return Image.network(
      //   fit: BoxFit.cover,
      //   element['imageUrl'].toString(),
      // );
      return Column(
        children: [
          Container(
            margin: const EdgeInsets.all(5),
            decoration: const BoxDecoration(boxShadow: [
              BoxShadow(
                color: Colors.grey,
                spreadRadius: 0.1,
                blurRadius: 2,
              ),
            ]),
            child: Image.network(
              fit: BoxFit.cover,
              element['imageUrl'].toString(),
            ),
          ),
          Text(
            element['title'].toString(),
            textAlign: TextAlign.center,
          ),
        ],
      );
    }).toList();
    return list as List<Widget>;
  }

  @override
  Widget build(BuildContext context) {
    // GridView.count
    //   return GridView.count(
    //       // 一行widget的数量
    //       crossAxisCount: 2,
    //       padding: const EdgeInsets.all(5),
    //       children: _genList());
    // }
    // GridView.count
    // return GridView.extent(
    //   //横轴子元素的最大宽度（动态计算）
    //   maxCrossAxisExtent: 300,
    //   // crossAxisSpacing: 10, //水平间距
    //   // mainAxisSpacing: 10, //垂直widget间距
    //   padding: const EdgeInsets.all(5),
    //   childAspectRatio: 0.86, //宽高比
    //   children: _genList(),
    // );

    // builder
    return GridView.builder(
      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 200,
        childAspectRatio: 1,
      ),
      itemCount: listData.length,
      itemBuilder: (context, index) => Column(
        children: [
          Container(
            margin: const EdgeInsets.all(5),
            decoration: const BoxDecoration(boxShadow: [
              BoxShadow(
                color: Colors.grey,
                spreadRadius: 0.1,
                blurRadius: 2,
              ),
            ]),
            child: Image.network(
              fit: BoxFit.cover,
              listData[index]['thumb'].toString(),
            ),
          ),
          // Text(
          //   listData[index]['title'].toString(),
          //   textAlign: TextAlign.center,
          // ),
        ],
      ),
    );
  }
}
