type Person = {
    name: string,
    age: number
}

//partial实现方式
type partial<T> = {
    //从中取出每个属性签名和类型，并添加？可选类型修饰符
    [P in keyof T]?: T[P]
}

type p = Partial<Person>



//pick，从类型中单独选出一个/多个类型
type pp = Pick<Person, 'age' | 'name'>
// 源码分析
//keyof T === 'age' | 'name'
type PICK<T, K extends keyof T> = {
    [P in K]: T[P]
}

//Readonly 转换类型为只读
type ttt = Readonly<Person>
//等同于
// type ttt = {
//     readonly name: string;
//     readonly age: number;
// }
// 源码分析
type tttt<T> = {
    //从中取出每个属性签名和类型，并添加？可选类型修饰符
    readonly [P in keyof T]?: T[P]
}

//Records生成一个以联合类型为签名，类型为指定类型的新类型
//keyof any 等同于 string|number|symbol
type Record1<K extends keyof any, T> = {
    [P in K]: T;
};

type kk = 'one' | 'two' | 'three'
type b = Record<kk, Person>
//等同于
// type b = {
//     one: Person;
//     two: Person;
//     three: Person;
// }


//infer 可以读取数组元素的类型
//定义一个类型，如果是数组类型，那么就返回数组元素的类型，否则就保持不变
// type TYPE<T> = T extends Array<any> ? T[0] : T
type TYPE<T> = T extends Array<infer U> ? U : T
type a = TYPE<string[]>

//使用infer完成递归翻转数组的操作
type ReverseArr<T extends any[]> = T extends [infer one, ...infer rest] ? [...ReverseArr<rest>, one] : T
type Arr = ['one','two','three']
type reArr = ReverseArr<Arr>
