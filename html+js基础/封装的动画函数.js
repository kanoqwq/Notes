//封装一个动画函数 callback表示回调函数，执行完定时任务后运行
function moveAni(obj, targetX, callback) {

    //为了防止重复调用，执行之前先清除已存在的定时器
    clearInterval(obj.timer);
    clearInterval(obj.timer1);
    //给不同的元素指定不同的定时器
    //直接在元素对象中新建属性
    obj.timer = setInterval(() => {
        if (obj.offsetLeft == targetX) {
            clearInterval(obj.timer);
            //回调函数写在清除定时器里面
            if (callback) {
                callback();
            }
        }
        //X
        //如果是向右走，则增加步数
        if (obj.offsetLeft < targetX)
            obj.style.left = obj.offsetLeft + 1 + "px";
        else if (obj.offsetLeft > targetX)
        //如果是想做周，则减少步数
            obj.style.left = obj.offsetLeft - 1 + "px";
    }, 1);


}
//缓动动画函数
//缓动动画公式 Math.ceil(（目标值 - 现在的位置）/10)
function moveEase(obj, targetX, callback) {
    clearInterval(obj.timer);

    //移动
    obj.timer = setInterval(() => {
        console.log(111);
        // 如果到达目的坐标，则停止
        if (obj.offsetLeft == targetX) {
            clearInterval(obj.timer);
            //回调函数写在清除定时器里面
            if (callback) {
                callback();
            }
        }
        //Z
        var stepX = (targetX - obj.offsetLeft) / 10;
        //如果stepX大于0，step就向上取整
        stepX = stepX > 0 ? Math.ceil(stepX) : Math.floor(stepX);
        obj.style.left = obj.offsetLeft + stepX + "px";

    }, 10);
}