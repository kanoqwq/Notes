const kanotools = require('kano-tools');
console.log(kanotools.dateFormat(new Date()));
console.log(kanotools.htmlEscape(`<h1>"kano"<h1>`));
console.log(kanotools.htmUnlEscape(kanotools.htmlEscape(`<h1>"kano"<h1>`)));