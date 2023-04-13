import {kano} from './mod'
console.log(kano())
let a = {}
let b:any;
const aa = ()=>{
    return this
}
//明确类型的this
function ddd(this:Document){
    return this
}
// a = 'ddd'