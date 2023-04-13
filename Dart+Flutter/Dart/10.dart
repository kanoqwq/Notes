//泛型方法
T getData<T>(T value) {
  return '123' as T;
}

//泛型类
class MyList<T> {
  List list = <T>[];

  MyList();
  MyList.csh(List<T> li) {
    this.list.addAll(li);
  }
  void add(T value) {
    this.list.add(value);
  }

  List getList() {
    return list;
  }
}

//泛型实践
abstract class Cache<T> {
  getByKey(String key);
  void setByKey(String key, T value);
}

class FileChache<T> implements Cache<T> {
  @override
  getByKey(String key) {
    print('FileChache getByKey');
  }

  @override
  void setByKey(String key, T value) {
    print('FileChache setByKey');
  }
}

class MemoryCache<T> implements Cache<T> {
  @override
  getByKey(String key) {
    print('MemoryCache getByKey');
  }

  @override
  void setByKey(String key, T value) {
    print('MemoryCache setByKey');
  }
}

void main(List<String> args) {
  print(getData<String>('123'));

  MyList li = new MyList<bool>();
  li.add(false);
  li.add(false);
  li.add(true);
  li.add(true);
  print(li.getList());
  MyList li2 = new MyList<int>.csh([1, 2, 3, 4, 5]);
  print(li2.getList());

  MemoryCache m = new MemoryCache<Map>();
  m.setByKey('1', {"name": "张三", "age": 10});
}
