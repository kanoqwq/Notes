//类写法 （TS类似）
class Promise {
    //构造器
    constructor(executor) {
        //添加属性
        this.PromiseState = 'pending'
        this.PromiseResult = null;

        //声明属性用于存放回调函数(异步用)
        // this.callback = {}
        this.callbacks = []

        const _this = this; //保存this的值
        //定义两个函数用来接住实参的resolve和reject
        //resolve函数
        function resolve(data) {
            //1.修改对象的状态（promiseState）
            //注意这里的this指向的是window，因为resolve是在Promise实例化后执行的，所以指向window
            // console.log(this);

            //判断状态，状态只能更改一次
            if (_this.PromiseState !== 'pending') return;

            _this.PromiseState = 'fulfilled'; //resolved
            //2.设置对象结果值（promiseResult）
            _this.PromiseResult = data;

            //执行成功的回调函数(异步用)
            // if (_this.callback.onResolved) {
            //     _this.callback.onResolved(data)
            // }
            _this.callbacks.forEach((value, key) => {
                if (value.onResolved) {
                    value.onResolved(data);
                    // console.log(value, key);
                }
            })


        }

        //reject函数
        function reject(data) {
            //判断状态，状态只能更改一次
            if (_this.PromiseState !== 'pending') return;

            _this.PromiseState = 'rejected'; //rejected
            //2.设置对象结果值（promiseResult）
            _this.PromiseResult = data;

            //执行失败的回调函数(异步用)
            // if (_this.callback.onRejected) {
            //     _this.callback.onRejected(data)
            // }
            _this.callbacks.forEach((value, key) => {
                if (value.onRejected) {
                    value.onRejected(data);
                    // console.log(value, key);
                }
            })
        }

        try {
            //同步调用执行器函数exrcutor,填入实参
            executor(resolve, reject);
        } catch (e) {
            //修改primise对象的状态为失败
            //throw的东西会被e接住
            reject(e)
        }
    }

    //then方法封装
    then(onResolved, onRejected) {
        //判断回调函数参数(因为then方法可以允许不写onrejected，值传递的时候then也可以啥也不写)
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                //直接抛出异常，给后面的promise调用者处理（摆烂）
                throw reason;
            }
        }
        if (typeof onResolved !== 'function') {
            //没写直接就往后传，啥也不做（摆烂）
            onResolved = value => value
        }

        //返回一个Promise
        return new Promise((resolve, reject) => {
            //封装一下递归解析的回调函数(使用箭头函数，防止this指向问题)
            const callback = (typeFunc) => {
                //参考官方promise执行方法，回调函数应该是异步的
                //使用queueMicrotask执行微任务:https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide
                queueMicrotask(() => {
                    try {
                        //传递结果
                        //获取回调函数的执行结果
                        let result = typeFunc(this.PromiseResult);
                        //判断执行结果
                        if (result instanceof Promise) {
                            //如果是promise，则需要再次调用then进行递归操作，直到result不是Promise类型为止(有点绕)
                            //所以拿到的结果总是最后一个promise的结果
                            result.then(
                                value => {
                                    resolve(value)
                                }, reason => {
                                    reject(reason)
                                }
                            )
                        } else {
                            //不是Promise，默认状态就为成功
                            resolve(result)
                        }
                    } catch (e) {
                        //需要捕获错误的信息，直接使用reject
                        reject(e)
                    }
                })
            }


            //调用回调函数 promiseState
            //这里的this就是promise的实例对象
            if (this.PromiseState === 'fulfilled') {
                callback(onResolved);
            }
            if (this.PromiseState === 'rejected') {
                //传递结果
                callback(onRejected);
            }

            //判断pending的状态(异步任务)
            //注意，异步任务的执行时机不是在then里面，而是在resolve/reject函数上
            //也就是常说的，改变PromiseState之后才会执行异步任务
            if (this.PromiseState === 'pending') {
                //保存回调函数(异步，多回调用)
                //这样直接保存，不能实现多个then的情况，后一个then里的方法会覆盖前一个then的方法
                // this.callback = {
                //     onResolved,
                //     onRejected
                // }
                //同步写法，但这样对异步任务没有效果
                // this.callbacks.push({
                //     onResolved,
                //     onRejected
                // })

                //异步写法（正确写法）
                this.callbacks.push({
                    //使用箭头函数避免this指向问题
                    onResolved: () => {
                        //直接复用上面的代码就是
                        callback(onResolved);
                    },
                    onRejected: () => {
                        //执行失败的回调函数
                        // onRejected(this.PromiseResult)
                        //直接复用上面的代码就是（改一下onRejected）
                        callback(onRejected);
                    }
                })
            }
        })
    }

    //添加catch方法
    catch (onRejected) {
        //因为then方法已经写好了，直接拿来套一下就行
        return this.then(undefined, onRejected);
    }

    //添加resolve方法(静态的)
    static resolve(value) {
        //返回promise对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                //继续处理
                value.then(
                    val => {
                        resolve(val)
                    },
                    reason => {
                        reject(reason)
                    }
                )
            } else {
                //状态设置为成功
                resolve(value)
            }
        })

    }

    //添加reject方法(静态的)
    static reject(reason) {
        return new Promise((resolve, reject) => {
            //因为reject方法，你不管传什么，返回的都是失败的promise
            reject(reason);
        })
    }

    //添加all方法(静态的)
    static all(promises) {
        //返回的结果还是promise对象
        return new Promise((resolve, reject) => {
            //整一个计数器，保存promise的成功个数
            let count = 0;
            let resultArr = [];
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    value => {
                        //得知对象的状态是成功的
                        count++;
                        //保存当前的结果到数组,注意不要用push方法，因为如果有异步任务的话，是会打乱顺序的
                        resultArr[i] = value;
                        //判断
                        if (count === promises.length) {
                            //直接把三个值全部传过去
                            resolve(resultArr)
                        }

                    },
                    reason => {
                        //失败的，不用往后走了
                        reject(reason)
                    }
                )
            }
        })
    }

    //添加race方法(静态的)
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                //then方法调用
                promises[i].then(
                    val => {
                        //修改返回对象的状态为成功,谁先完成，谁就能变成race的返回体
                        resolve(val)
                    },
                    reason => {
                        //失败也是一样的
                        reject(reason)
                    }
                )
            }
        })
    }
}


//传统写法

// //构造函数写法
// function Promise(executor) {

//     //添加属性
//     this.PromiseState = 'pending'
//     this.PromiseResult = null;

//     //声明属性用于存放回调函数(异步用)
//     // this.callback = {}
//     this.callbacks = []

//     const _this = this; //保存this的值
//     //定义两个函数用来接住实参的resolve和reject
//     //resolve函数
//     function resolve(data) {
//         //1.修改对象的状态（promiseState）
//         //注意这里的this指向的是window，因为resolve是在Promise实例化后执行的，所以指向window
//         // console.log(this);

//         //判断状态，状态只能更改一次
//         if (_this.PromiseState !== 'pending') return;

//         _this.PromiseState = 'fulfilled'; //resolved
//         //2.设置对象结果值（promiseResult）
//         _this.PromiseResult = data;

//         //执行成功的回调函数(异步用)
//         // if (_this.callback.onResolved) {
//         //     _this.callback.onResolved(data)
//         // }
//         _this.callbacks.forEach((value, key) => {
//             if (value.onResolved) {
//                 value.onResolved(data);
//                 // console.log(value, key);
//             }
//         })


//     }

//     //reject函数
//     function reject(data) {
//         //判断状态，状态只能更改一次
//         if (_this.PromiseState !== 'pending') return;

//         _this.PromiseState = 'rejected'; //rejected
//         //2.设置对象结果值（promiseResult）
//         _this.PromiseResult = data;

//         //执行失败的回调函数(异步用)
//         // if (_this.callback.onRejected) {
//         //     _this.callback.onRejected(data)
//         // }
//         _this.callbacks.forEach((value, key) => {
//             if (value.onRejected) {
//                 value.onRejected(data);
//                 // console.log(value, key);
//             }
//         })
//     }

//     try {
//         //同步调用执行器函数exrcutor,填入实参
//         executor(resolve, reject);
//     } catch (e) {
//         //修改primise对象的状态为失败
//         //throw的东西会被e接住
//         reject(e)
//     }
// }

// //添加 then 方法
// Promise.prototype.then = function(onResolved, onRejected) {
//     //判断回调函数参数(因为then方法可以允许不写onrejected，值传递的时候then也可以啥也不写)
//     if (typeof onRejected !== 'function') {
//         onRejected = reason => {
//             //直接抛出异常，给后面的promise调用者处理（摆烂）
//             throw reason;
//         }
//     }
//     if (typeof onResolved !== 'function') {
//         //没写直接就往后传，啥也不做（摆烂）
//         onResolved = value => value
//     }

//     //返回一个Promise
//     return new Promise((resolve, reject) => {
//         //封装一下递归解析的回调函数(使用箭头函数，防止this指向问题)
//         const callback = (typeFunc) => {
//             //参考官方promise执行方法，回调函数应该是异步的
//             //使用queueMicrotask执行微任务:https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide
//             queueMicrotask(() => {
//                 try {
//                     //传递结果
//                     //获取回调函数的执行结果
//                     let result = typeFunc(this.PromiseResult);
//                     //判断执行结果
//                     if (result instanceof Promise) {
//                         //如果是promise，则需要再次调用then进行递归操作，直到result不是Promise类型为止(有点绕)
//                         //所以拿到的结果总是最后一个promise的结果
//                         result.then(
//                             value => {
//                                 resolve(value)
//                             }, reason => {
//                                 reject(reason)
//                             }
//                         )
//                     } else {
//                         //不是Promise，默认状态就为成功
//                         resolve(result)
//                     }
//                 } catch (e) {
//                     //需要捕获错误的信息，直接使用reject
//                     reject(e)
//                 }
//             })
//         }


//         //调用回调函数 promiseState
//         //这里的this就是promise的实例对象
//         if (this.PromiseState === 'fulfilled') {
//             callback(onResolved);
//         }
//         if (this.PromiseState === 'rejected') {
//             //传递结果
//             callback(onRejected);
//         }

//         //判断pending的状态(异步任务)
//         //注意，异步任务的执行时机不是在then里面，而是在resolve/reject函数上
//         //也就是常说的，改变PromiseState之后才会执行异步任务
//         if (this.PromiseState === 'pending') {
//             //保存回调函数(异步，多回调用)
//             //这样直接保存，不能实现多个then的情况，后一个then里的方法会覆盖前一个then的方法
//             // this.callback = {
//             //     onResolved,
//             //     onRejected
//             // }
//             //同步写法，但这样对异步任务没有效果
//             // this.callbacks.push({
//             //     onResolved,
//             //     onRejected
//             // })

//             //异步写法（正确写法）
//             this.callbacks.push({
//                 //使用箭头函数避免this指向问题
//                 onResolved: () => {
//                     //直接复用上面的代码就是
//                     callback(onResolved);
//                 },
//                 onRejected: () => {
//                     //执行失败的回调函数
//                     // onRejected(this.PromiseResult)
//                     //直接复用上面的代码就是（改一下onRejected）
//                     callback(onRejected);
//                 }
//             })
//         }
//     })
// }

// //添加catch方法
// Promise.prototype.catch = function(onRejected) {
//     //因为then方法已经写好了，直接拿来套一下就行
//     return this.then(undefined, onRejected);
// }

// //添加resolve方法
// Promise.resolve = function(value) {
//     //返回promise对象
//     return new Promise((resolve, reject) => {
//         if (value instanceof Promise) {
//             //继续处理
//             value.then(
//                 val => {
//                     resolve(val)
//                 },
//                 reason => {
//                     reject(reason)
//                 }
//             )
//         } else {
//             //状态设置为成功
//             resolve(value)
//         }
//     })

// }

// //添加reject方法
// Promise.reject = function(reason) {
//     return new Promise((resolve, reject) => {
//         //因为reject方法，你不管传什么，返回的都是失败的promise
//         reject(reason);
//     })
// }

// //添加all方法
// Promise.all = function(promises) {
//     //返回的结果还是promise对象
//     return new Promise((resolve, reject) => {
//         //整一个计数器，保存promise的成功个数
//         let count = 0;
//         let resultArr = [];
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(
//                 value => {
//                     //得知对象的状态是成功的
//                     count++;
//                     //保存当前的结果到数组,注意不要用push方法，因为如果有异步任务的话，是会打乱顺序的
//                     resultArr[i] = value;
//                     //判断
//                     if (count === promises.length) {
//                         //直接把三个值全部传过去
//                         resolve(resultArr)
//                     }

//                 },
//                 reason => {
//                     //失败的，不用往后走了
//                     reject(reason)
//                 }
//             )
//         }
//     })
// }

// //添加race方法
// Promise.race = function(promises) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             //then方法调用
//             promises[i].then(
//                 val => {
//                     //修改返回对象的状态为成功,谁先完成，谁就能变成race的返回体
//                     resolve(val)
//                 },
//                 reason => {
//                     //失败也是一样的
//                     reject(reason)
//                 }
//             )
//         }
//     })
// }