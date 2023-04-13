import 'package:flutter/material.dart';
//引入
import './routes/route.dart';

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  //路由传参 - 1.配置路由（可以单独提取出来作为routes.dart
  // Map routes = {
  //   "/": (context) => const Tabs(),
  //   "/news": (context) => const NewsPage(),
  //   "/search": (context) => const NewsPage(),
  //   //带参数
  //   "/form": (context, {arguments}) {
  //     return FormPage(
  //       arguments: arguments,
  //     );
  //   },
  //   "/shop": (context, {arguments}) {
  //     return ShopPage(arguments: arguments);
  //   }
  // };

  MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Test",
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),

      // home: const Tabs(),

      //2.初始化路由
      initialRoute: '/',

      onGenerateRoute: onGenerateRoute,
      //路由传参-3.激活路由（可以单独提取出来作为routes.dart
      //配置onGenerateRouter（我觉得也是一个生命周期钩子，或者是一个拦截器）
      // onGenerateRoute: (RouteSettings settings) {
      //   print(settings); //路由传值信息
      //   print(settings.arguments); //传的参数
      //   print(settings.name); //路由名
      //   final String? name = settings.name;
      //   final Function? pageCoutentBuilder = routes[name];
      //   if (pageCoutentBuilder != null) {
      //     //有参的情况
      //     if (settings.arguments != null) {
      //       final Route route = MaterialPageRoute(
      //         builder: (context) =>
      //             pageCoutentBuilder(context, arguments: settings.arguments),
      //       );
      //       return route;
      //     } else {
      //       //无参的情况
      //       final Route route = MaterialPageRoute(
      //         builder: (context) => pageCoutentBuilder(context),
      //       );
      //       return route;
      //     }
      //   }
      //   return null;
      // },

      //直接命名路由
      // routes: {
      //   '/': (context) => const Tabs(),
      //   "/news": (context) => const NewsPage(),
      //   "/search": (context) => const SearchPage(),
      //   "/form": (context) {
      //     return const FormPage();
      //   },
      // },
    );
  }
}
