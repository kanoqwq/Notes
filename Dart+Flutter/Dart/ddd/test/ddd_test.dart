import 'package:ddd/ddd.dart';
import 'package:test/test.dart';
import 'package:http/http.dart';

void main() {
  test('calculate', () {
    expect(calculate(), 42);
  });
}
