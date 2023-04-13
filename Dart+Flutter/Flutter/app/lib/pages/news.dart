import 'package:flutter/material.dart';

//新闻页面接受上个传过的参数
class NewsPage extends StatefulWidget {
  final String title;
  const NewsPage({super.key, this.title = ''});

  @override
  State<NewsPage> createState() => _NewsPageState();
}

class _NewsPageState extends State<NewsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          //路由返回
          Navigator.pop(context);
        },
        child: const Icon(Icons.back_hand),
      ),
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            ElevatedButton(
              onPressed: () {
                //路由
                Navigator.pushNamed(context, '/search');
              },
              child: const Text("跳转search（命名路由）"),
            )
          ],
        ),
      ),
    );
  }
}
