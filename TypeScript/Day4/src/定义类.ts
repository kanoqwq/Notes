class Person {
    //构造器
    constructor(name: string, age: number) {
        //this指向创建时候的示例
        this.name = name;
        this.age = age
    }
    //普通属性
    name: string;
    age: number;
    //只读属性,无法修改
    readonly onyRead:number =123;
    //静态属性
    static  money:number = 33333;
    //方法
    sing(){
        // this表示实例
        console.log(this.name+" is singing");
    }
}
let kano = new Person('kano',18);
kano.sing()
console.log(Person.money);