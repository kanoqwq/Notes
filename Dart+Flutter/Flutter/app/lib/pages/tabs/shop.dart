import 'package:flutter/material.dart';
import 'package:flutter_application_1/Wrap2.dart';

import '../tabs.dart';

class ShopPage extends StatefulWidget {
  // 接受命名路由跳转传值
  final Map arguments;

  const ShopPage({super.key, required this.arguments});

  @override
  State<ShopPage> createState() => _ShopPageState();
}

class _ShopPageState extends State<ShopPage> {
  @override
  void initState() {
    super.initState();
    print(widget.arguments);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("商店"),
      ),
      body: Center(
          //返回上一级路由
          child: Column(
        children: [
          Button("返回上一级", onPressed: () {
            Navigator.pop(context);
          }),
          Button("返回到search", onPressed: () {
            Navigator.pushReplacementNamed(context, '/search');
          }),
          Button("返回到根路由并销毁当前页面", onPressed: () {
            // 跳转页面并销毁当前页面
            Navigator.pushAndRemoveUntil(context, MaterialPageRoute(
              builder: (context) {
                return const Tabs();
              },
            ), (route) => false);
          }),
        ],
      )),
    );
  }
}
