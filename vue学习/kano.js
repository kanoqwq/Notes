// var q = 1;
// if (sessionStorage.getItem('albpath')) {
//     $('#setu').hide()
// }
// $('#setu').attr('style', 'transition:.2s;left:0');
// $('#setu').click((e) => {
//     if (q >= 40) {
//         sessionStorage.setItem('albpath', '阿里云の盘/_setu');
//         window.location.reload();
//     }
//     if (q === 3) e.target.innerHTML = '没有色图啦！快走开!';
//     if (q === 6) e.target.innerHTML = '大变态大变态快走开!';
//     if (q === 10) e.target.innerHTML = '快走开啦，不然的话。。。。';
//     if (q === 15) {
//         e.target.innerHTML = '我变小了看你怎么点！';
//         e.target.style.fontSize = '5px'
//     }
//     if (q === 19) {
//         e.target.innerHTML = '我闪~';
//         e.target.style.position = "relative";
//         e.target.style.left = "150px";
//     }
//     if (q >= 20 && q <= 38) {
//         e.target.style.left = Math.ceil(Math.random() * (150 - (-10) + 1) + (-10) - 1) + "px";
//         e.target.style.top = Math.ceil(Math.random() * (20 - (-10) + 1) + (-10) - 1) + "px";
//     }
//     if (q === 39) e.target.innerHTML = '别点啦别点啦，我认输啦！！！';
//     q++;
// })