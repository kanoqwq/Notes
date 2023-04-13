import 'package:flutter/material.dart';
import './tabs/category.dart';
import './tabs/home.dart';
import './tabs/setting.dart';

class Tabs extends StatefulWidget {
  const Tabs({super.key});
  @override
  State<Tabs> createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  final List<Widget> _pages = const [HomePage(), Category(), Setting()];
  int _selected = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Test"),
      ),
      //底部导航栏
      bottomNavigationBar: Theme(
        //阻止点击飞溅效果（需要套一个Theme组件）
        data: ThemeData(
          splashColor: Colors.transparent,
          highlightColor: Colors.transparent,
        ),
        child: BottomNavigationBar(
          //当前选中位置
          currentIndex: _selected,
          iconSize: 35, //菜单大小
          fixedColor: Colors.red, //选中的颜色
          unselectedItemColor: Colors.grey,
          selectedFontSize: 12.0,
          //4个以上菜单选项需要配置为固定
          type: BottomNavigationBarType.fixed,
          //侦听器
          onTap: (index) {
            //需要setState
            setState(() {
              _selected = index;
            });
          },
          items: const [
            BottomNavigationBarItem(icon: Icon(Icons.home), label: "主页"),
            BottomNavigationBarItem(icon: Icon(Icons.category), label: "分类"),
            BottomNavigationBarItem(
              icon: Icon(Icons.add),
              label: "添加",
              backgroundColor: Colors.red,
            ),
            BottomNavigationBarItem(icon: Icon(Icons.message), label: "消息"),
            BottomNavigationBarItem(icon: Icon(Icons.settings), label: "设置"),
          ],
        ),
      ),
      // 仿闲鱼的凸起按钮
      floatingActionButton: Container(
        width: 60,
        height: 60,
        padding: const EdgeInsets.all(5),
        transform: Matrix4.translationValues(0, 14, 0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(30),
        ),
        child: FloatingActionButton(
          // 选中了变红色，不选中是灰色
          backgroundColor: _selected == 2 ? Colors.red : Colors.blue,
          onPressed: () {
            setState(() {
              _selected = 2;
            });
          },
          child: const Icon(Icons.add),
        ),
      ),
      // 调整floatingActionButton的位置
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,

      //左侧侧边栏
      drawer: Drawer(
        child: Column(
          children: [
            Row(
              children: [
                Expanded(
                  flex: 1,
                  child: UserAccountsDrawerHeader(
                    //用户名
                    accountName: const Text(
                      "Shiro",
                      style: TextStyle(
                        fontSize: 24,
                        color: Colors.black,
                      ),
                    ),
                    //email
                    accountEmail: const Text(
                      "shiro@22-33.top",
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.black54,
                      ),
                    ),
                    //用户头像
                    currentAccountPicture: const CircleAvatar(
                      radius: 40,
                      backgroundImage: NetworkImage(
                        "https://img2.moeblog.vip/images/ev3v.png",
                      ),
                    ),
                    // 其他头像
                    otherAccountsPictures: [
                      Image.network(
                          'https://kanokano.cn/wp-content/uploads/MyCDNCaches/kano_6.webp'),
                      Image.network(
                          'https://kanokano.cn/wp-content/uploads/MyCDNCaches/kano_100.webp'),
                      Image.network(
                          'https://kanokano.cn/wp-content/uploads/MyCDNCaches/kano_27.webp'),
                    ],
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                        fit: BoxFit.cover,
                        image: NetworkImage(
                            'https://img2.moeblog.vip/images/rB18.webp'),
                      ),
                    ),
                  ),
                  // child: DrawerHeader(
                  //   decoration: const BoxDecoration(
                  //     color: Colors.yellow,
                  //     image: DecorationImage(
                  //       image: NetworkImage(
                  //         'https://img2.moeblog.vip/images/rB18.webp',
                  //       ),
                  //       fit: BoxFit.cover,
                  //     ),
                  //   ),
                  //   child: Column(
                  //     children: const [
                  //       CircleAvatar(
                  //         radius: 40,
                  //         backgroundImage: NetworkImage(
                  //           "https://img2.moeblog.vip/images/ev3v.png",
                  //         ),
                  //       ),
                  //       Text(
                  //         "Shiro's Home",
                  //         textAlign: TextAlign.center,
                  //         style: TextStyle(
                  //           fontSize: 30,
                  //           color: Colors.black54,
                  //         ),
                  //       ),
                  //     ],
                  //   ),
                  // ),
                )
              ],
            ),
            const ListTile(
              title: Text("个人中心"),
              leading: CircleAvatar(
                child: Icon(Icons.people),
              ),
            ),
            const Divider(),
            const ListTile(
              title: Text("系统设置"),
              leading: CircleAvatar(
                child: Icon(Icons.settings),
              ),
            ),
            const Divider(),
          ],
        ),
      ),
      //右侧侧边栏
      endDrawer: const Drawer(
        child: Text("右侧侧边栏"),
      ),
      //最简单的方法
      // body: _pages[_selected],
      //也可以用indexedStack
      body: IndexedStack(
        alignment: Alignment.center,
        index: _selected,
        children: _pages,
      ),
    );
  }
}
