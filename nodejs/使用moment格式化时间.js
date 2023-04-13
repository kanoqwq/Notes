const mo = require('moment');
const dt = mo().format('YYYY-MM-DD HH:mm:ss')
console.log(dt);






// asideScroll();
// $(window).on('scroll', () => {
//     asideScroll();
// })

// function asideScroll() {
//     //bugfix
//     $('#crumbs').attr('style', 'float:none;width:auto;padding-left:15px');
//     if ($('#fixedbar').hasClass('fix') === true) {
//         $('#aside.left').attr('style', `transition:none;position:relative;top:${document.documentElement.scrollTop-480}px`);
//         $('#aside.right').attr('style', `transition:none;position:relative;top:${document.documentElement.scrollTop-460}px`)
//     } else {
//         $('#aside.right,#aside.left').attr('style', '');
//     }
// }