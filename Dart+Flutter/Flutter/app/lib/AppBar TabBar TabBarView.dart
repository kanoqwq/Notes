import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // 去掉debug图标
      debugShowCheckedModeBanner: false,
      title: "Demo",
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

// 首先需要在需要Tab组件的混入一下 `SingleTickerProviderStateMixin`类
//混入一下 SingleTickerProviderStateMixin类
class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  //生命周期函数：当组件初始化的时候会触发
  @override
  void initState() {
    super.initState();
    //初始化TabController（length需要和下面的tabs的个数对应
    _tabController = TabController(length: 10, vsync: this);
  }

  List<String> list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Flutter App"),
          leading: IconButton(
            //左侧的按钮图标
            icon: const Icon(Icons.menu),
            onPressed: () {
              print("左侧按钮的图标");
            },
          ),
          //导航的背景颜色
          backgroundColor: Colors.blue,
          //顶部右侧按钮图标
          actions: [
            IconButton(
              icon: const Icon(Icons.search),
              onPressed: () {
                print("右侧按钮的图标");
              },
            ),
            IconButton(
              icon: const Icon(Icons.more_horiz),
              onPressed: () {
                print("右侧按钮的图标1");
              },
            ),
          ],
          //TabBar和TabBarView的元素个数需要一一对应
          bottom: TabBar(
            //设置是否可以滚动
            isScrollable: true,
            //Tab下面的高亮指示器
            indicatorColor: Colors.white, //指示器颜色
            indicatorWeight: 3, //指示器粗细
            indicatorPadding: const EdgeInsets.all(5), //指示器padding
            // indicatorSize: TabBarIndicatorSize.label, //指示器和label是等长的
            indicatorSize: TabBarIndicatorSize.tab, //指示器默认长度、
            labelColor: Colors.yellow, //label字体颜色
            unselectedLabelColor: Colors.red, //未选中的label的颜色
            labelStyle: const TextStyle(fontSize: 20), //label的详细样式
            unselectedLabelStyle: TextStyle(fontSize: 14),
            //指示器装饰
            // indicator: BoxDecoration(
            //     //配置选中的tab的样式
            //     color: Colors.yellow,
            //     borderRadius: BorderRadius.circular(10)),
            controller: _tabController, //注意需要使用controller
            tabs: const [
              Tab(
                child: Text("关注"),
              ),
              Tab(
                child: Text("热门"),
              ),
              Tab(
                child: Text("视频"),
              ),
              Tab(
                child: Text("Tab1"),
              ),
              Tab(
                child: Text("Tab2"),
              ),
              Tab(
                child: Text("Tab3"),
              ),
              Tab(
                child: Text("Tab4"),
              ),
              Tab(
                child: Text("Tab5"),
              ),
              Tab(
                child: Text("Tab6"),
              ),
              Tab(
                child: Text("Tab7"),
              ),
            ],
          ),
        ),
        body: TabBarView(
          //都需要配置controller
          controller: _tabController,
          children: [
            ListView(
              children: const [
                ListTile(
                  title: Text("我是关注列表"),
                )
              ],
            ),
            ListView(
              children: const [
                ListTile(
                  title: Text("我是热门列表"),
                )
              ],
            ),
            ListView(
              children: const [
                ListTile(
                  title: Text("我是视频列表"),
                )
              ],
            ),
            Text("Tab1"),
            Text("Tab2"),
            Text("Tab3"),
            Text("Tab4"),
            Text("Tab5"),
            Text("Tab6"),
            Text("Tab7"),
          ],
        ));
  }
}
