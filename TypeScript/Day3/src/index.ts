import {kano} from './kano'
let kano1 = "ddd";
let bb:{Name:string,Age:number}
const cs = 1;
bb = {Name :"kano",Age:123}

console.log(kano?.pets)
kano.sing()
let result = new Promise((resolve,reject)=>{
    if(bb.Age == 123){
        resolve('good')
    }
    reject(new Error('没找到'))
})
result.then((res)=>{
    console.log(res)
}).catch((reason)=>{
    console.error(reason.message)
})