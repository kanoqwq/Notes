import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'dart:convert' as convert;

import 'package:http/http.dart' as http;

List<dynamic> listData = [];
void main(List<String> args) async {
  try {
    var url =
        Uri.https('pan.kanokano.cn', '/api/fs/list', {"path": "百度の相册/鹿乃图集"});
    var response = await http.get(url);
    if (response.statusCode == 200) {
      var res = convert.jsonDecode(response.body) as Map<String, dynamic>;
      listData = res['data']['content'];
    }
  } catch (e) {
    // DO NOTHING
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
    return MasonryGridView.count(
      crossAxisCount: 2,
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
              errorBuilder: (context, error, stackTrace) =>
                  Image.asset('images/loading.gif'),
            ),
          ),
        ],
      ),
    );
  }
}
