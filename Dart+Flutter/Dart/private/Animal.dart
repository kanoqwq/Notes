class Animal {
  //加了_的变量就是私有的
  late String _name;
  set name(value) {
    this._name = value;
  }

  get name {
    return this._name;
  }

  late String age;
  Animal(this._name, this.age);
  void bark() {
    print(name + '在叫(父类)');
    _run();
  }

  void _run() {
    print('running');
  }
}
