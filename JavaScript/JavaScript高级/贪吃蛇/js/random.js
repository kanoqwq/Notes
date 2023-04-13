//随机工具类
var Tools = {
    getRandom: function(min, max) {
        //min和max都能取到
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
    }

};