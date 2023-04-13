// import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

import 'package:flutter_application_1/pages/form.dart';
import 'package:flutter_application_1/pages/news.dart';
import 'package:flutter_application_1/pages/tabs/shop.dart';
import '../pages/tabs.dart';

//路由传参 - 1.配置路由（可以单独提取出来作为routes.dart
Map routes = {
  "/": (context) => const Tabs(),
  "/news": (context) => const NewsPage(),
  "/search": (context) => const NewsPage(),
  //带参数
  "/form": (context, {arguments}) {
    return FormPage(
      arguments: arguments,
    );
  },
  "/shop": (context, {arguments}) {
    return ShopPage(arguments: arguments);
  }
};
var onGenerateRoute = (RouteSettings settings) {
  print(settings); //路由传值信息
  print(settings.arguments); //传的参数
  print(settings.name); //路由名
  final String? name = settings.name;
  final Function? pageCoutentBuilder = routes[name];
  if (pageCoutentBuilder != null) {
    //有参的情况
    if (settings.arguments != null) {
      final Route route = CupertinoPageRoute(
        builder: (context) =>
            pageCoutentBuilder(context, arguments: settings.arguments),
      );
      return route;
    } else {
      //无参的情况
      final Route route = CupertinoPageRoute(
        builder: (context) => pageCoutentBuilder(context),
      );
      return route;
    }
  }
  return null;
};
