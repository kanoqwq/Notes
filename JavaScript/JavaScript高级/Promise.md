## ES6之Promise(不完整，到时候再补充)

### Promise介绍

Promise 是 ES6 引入的异步编程的新的语法糖，在语法上，Promise 是一个构造函数，用来封装异步操作，并可以获取成功或者失败的结果

一个promise请求会有以下几种状态：

- *待定（pending）*：初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*：意味着操作成功完成。
- *已拒绝（rejected）*：意味着操作失败。

Promise 还有一个好处就是 支持链式调用，传统回调函数会嵌套调用，外部回调函数异步执行的结果是嵌套的回调执行条件，造成回调地狱，这样的代码既不方便阅读，也不便与异常处理，这就催生了promise的出现

### Promise 的使用

先简单的看一个Promise的实例方法：

```javascript
//实例化 Promise 对象
const pm = new Promise(function(resolve,reject){
    setTimeout(function(){
        //
        let data = '数据库中的用户数据';
        //
    },1000);
});
//调用 pm 对象的 then 方法
pm.then(function(value){
    ... ///成功的结果
}, function(reason){
    ... ///失败的原因
})
```

