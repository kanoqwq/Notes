import 'package:flutter/material.dart';

class FormPage extends StatefulWidget {
  //其他页面跳转到Form页面进行命名路由传值
  final Map arguments;
  const FormPage({super.key, required this.arguments});

  @override
  State<FormPage> createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    print(widget.arguments);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("表单"),
      ),
      body: Center(
        child: Text(widget.arguments.toString()),
      ),
    );
  }
}
