//proxy实现
const proxy = (object: any, key: any) => {
    return new Proxy(object, {
        get(target, prop, receiver) {
            console.log("get=>", prop);
            return Reflect.get(target, prop, receiver)
        },
        set(arget, prop, value, receiver) {
            console.log("set=>", prop);
            return Reflect.set(arget, prop, value, receiver)
        }
    })
}

//person类型
type Person = {
    name: string,
    age: number
}
const storage = <T>(object: T, key: keyof T): T => {
    return proxy(object, key);
}

let kano = storage({
    name: 'kano',
    age: 18
}, 'name')

console.log(kano);
console.log(kano.name);

kano.name = 'dd'
