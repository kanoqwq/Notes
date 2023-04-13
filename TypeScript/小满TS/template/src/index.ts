class index {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    sing() {
        console.log(this.name + 'singFunc')
    }
}

//接口
interface Person {
    name: string,
    readonly age: number,
    sing?(): void,
    [propName: string]: any
}
interface Person1 extends Person {
    teach(): string
}
let wang: Person1 = {
    name: 'wang',
    age: 41,
    teach: () => 'teaching'
}
let kano: Person = {
    name: 'kano',
    age: 1,
    sing: () => 'hello/how are you?',
    hobby: (): Array<string> => ['sing', 'games', 'pets']
}


console.log(kano.hobby());
// kano.age = 1//无法更改，这是只读的


//重载
function fn(params: number): void
function fn(params: string, a: any): void
function fn(params: any, a?: string, b?: any): any
function fn(params: any, a?: string, b?: any): any {
    return params
}

console.log(fn({ a: 1 }, 'ddd', 'ccc'));


//迭代器
let set: Set<number> = new Set([1, 2, 3, 4, 5])
//获取set自带的迭代器
let it: Iterator<number> = set[Symbol.iterator]()
//迭代
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function d(itb: any): void {
    let it: Iterator<any> = itb[Symbol.iterator]()
    let next: any;
    while ((next = it.next()) && next?.done != true) {
        console.log(next);
    }
}
d(set)
//生成器
for (let item of set) {
    console.log(item);

}

namespace A {
    export const b = '111'
    export namespace C {
        export const D = 'dd'
    }
}
import AA = A.C
console.log(AA.D);


//混入
class AAA {
    type: boolean;
    change() {
        this.type = !this.type
    }
}
class BBB {
    name: string
    getName() {
        return this.name
    }
}

class CCC implements AAA, BBB {
    type: boolean = false
    name: string = 'kano'
    getName: () => string;
    change: () => void
}
mixin(CCC, [AAA, BBB])
function mixin(class1: any, class2: any[]): void {
    class2.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            //混入AAA BBB内的方法到CCC
            class1.prototype[name] = item.prototype[name]
        })
    })
}
let dd = new CCC();
console.log(dd.type);

dd.change()
console.log(dd.type);


//装饰器
// const watcher: ClassDecorator = (target: Function) => {
//     target.prototype.getName = <T>(name: T): T => {
//         return name
//     }
// }
// 装饰器函数
const watcher = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getName = (): string => {
            return name
        }
    }
}
const watcher1 = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getName1 = (): string => {
            return name
        }
    }
}

const log: PropertyDecorator = (...args: any): void => {
    console.log(args);
}
const logm: MethodDecorator = (...args: any): void => {
    console.log(args);
}
const logp: ParameterDecorator = (...args: any): void => {
    console.log(args);
}
@watcher('张三')
@watcher1('张三1')
class E {
    //属性装饰器
    @log
    name: string
    constructor() {
        
    }
    //方法装饰器
    @logm
    //参数装饰器
    ge(b:boolean,c:number,@logp d:string):string{
        return 'ddd'
    }

}
let q: any = new E()
console.log(q.getName());
console.log(q.getName1());

