void main(List<String> args) {
  //循环
  int sum = 1;
  for (int i = 1; i <= 100; i++) {
    sum += i;
  }
  print(sum);
  int j = 0;
  while (j <= 100) {
    j++;
  }
  print(j);
  print(BigInt.parse('121121212112121212121212112121212121')); //bigint

  //打印List
  List list = [
    {"title": "kano1"},
    {"title": "kano2"},
    {"title": "kano3"}
  ];
  list.forEach((element) {
    print(element['title']);
  });
  for (var i = 0; i < list.length; i++) {
    if (list[i]['title'] == 'kano2') {
      continue;
    }
    print(list[i]['title']);
  }
}
