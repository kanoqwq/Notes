import 'package:flutter/material.dart';
import '../../tools/keepAliveWrapper.dart';
import '../search.dart';
import '../form.dart';
import '../news.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 8, vsync: this);
    //侦听tab改变事件
    _tabController.addListener(() {
      // print(_tabController.index); //会获取两次，离开一次进入一次

      //只获取一次的方法
      if (_tabController.animation?.value == _tabController.index) {
        print(_tabController.index);
      }
    });
  }

  @override
  void dispose() {
    //离开页面时候销毁（省内存
    print("销毁啦");
    super.dispose();
    _tabController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
          //可以配置appbar的高度
          preferredSize: const Size.fromHeight(40),
          child: AppBar(
            backgroundColor: Colors.white,
            elevation: 0.5,
            //需要sizedBox,因为TabBar没法调整高度
            title: SizedBox(
              height: 40,
              child: TabBar(
                labelStyle: const TextStyle(fontSize: 14),
                isScrollable: true, //可滚动
                controller: _tabController,
                indicatorColor: Colors.red, //底部指示器的颜色
                indicatorSize: TabBarIndicatorSize.label,
                labelColor: Colors.red,
                unselectedLabelColor: Colors.black, //label未选中的颜色
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
                    child: Text("娱乐"),
                  ),
                  Tab(
                    child: Text("篮球"),
                  ),
                  Tab(
                    child: Text("天津"),
                  ),
                  Tab(
                    child: Text("美食"),
                  ),
                  Tab(
                    child: Text("其他"),
                  ),
                ],
              ),
            ),
          )),
      body: TabBarView(
        controller: _tabController,
        children: [
          //保活组件，防止切换到其他选项卡之后切回来状态重置
          KeepAliveWrapper(
            keepAlive: true,
            child: ListView(
              children: [
                ListTile(
                  title: Column(
                    children: [
                      ElevatedButton(
                        onPressed: () {
                          //路由
                          Navigator.of(context).push(
                            MaterialPageRoute(
                              builder: (BuildContext context) {
                                return const SearchPage();
                              },
                            ),
                          );
                        },
                        child: const Text("搜索(路由跳转)"),
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () {
                          //路由
                          Navigator.of(context).push(
                            MaterialPageRoute(
                              builder: (BuildContext context) {
                                return const FormPage(
                                  arguments: {'kano': "kanokano.cn"},
                                );
                              },
                            ),
                          );
                        },
                        child: const Text("表单(路由跳转)"),
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () {
                          //路由
                          Navigator.of(context).push(
                            MaterialPageRoute(
                              builder: (BuildContext context) {
                                return const NewsPage(
                                  title: "kanokano",
                                );
                              },
                            ),
                          );
                        },
                        child: const Text("跳转(路由传值)"),
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () {
                          //路由
                          Navigator.pushNamed(context, '/news');
                        },
                        child: const Text("基本路由跳转news"),
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () {
                          //路由
                          Navigator.pushNamed(context, '/form',
                              arguments: {"kano": "kanokano"});
                        },
                        child: const Text("命名路由传值form"),
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () {
                          //路由
                          Navigator.pushNamed(context, '/shop',
                              arguments: {"kano": "kanokano"});
                        },
                        child: const Text("命名路由传值shop"),
                      )
                    ],
                  ),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1"),
                ),
                const ListTile(
                  title: Text("我是关注列表1111"),
                ),
              ],
            ),
          ),
          const Text("我是热门"),
          const Text("我是视频"),
          const Text("我是娱乐"),
          const Text("我是篮球"),
          const Text("我是天津"),
          const Text("我是美食"),
          const Text("我是其他"),
        ],
      ),
    );
  }
}
