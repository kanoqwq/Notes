//内置库
import 'dart:convert' as convert;

//部分导入
import 'dart:math' show min;

//懒加载
// import 'package:deferred/helo.dart' deferred as hello;

//分片导入
// part '';

//导出
// export '';

import 'dart:io';

void main(List<String> args) async {
  print(min(1, 100));
  var httpClient = new HttpClient();
  var uri = new Uri.https('api.bgm.tv', '/calendar');
  var req = await httpClient.getUrl(uri);
  var res = await req.close();
  var result = await res.transform(convert.utf8.decoder).join();
  var decoder = convert.JsonDecoder();
  var decodeData = decoder.convert(result);
  print(decodeData);
}
