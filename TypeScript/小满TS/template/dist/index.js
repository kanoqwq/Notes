"use strict";
class index {
    constructor(name) {
        this.name = name;
    }
    sing() {
        console.log(this.name + 'singFunc');
    }
}
let wang = {
    name: 'wang',
    age: 41,
    teach: () => 'teaching'
};
let kano = {
    name: 'kano',
    age: 1,
    sing: () => 'hello/how are you?',
    hobby: () => ['sing', 'games', 'pets']
};
console.log(kano.hobby());
function fn(params, a, b) {
    return params;
}
console.log(fn({ a: 1 }, 'ddd', 'ccc'));
//# sourceMappingURL=index.js.map