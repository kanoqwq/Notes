function htmlEscape(str) {
    return str.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&qout;';
            case '&':
                return '&amp;';
        }
    });
}

function htmUnlEscape(str) {
    return str.replace(/&lt;|&gt;|&qout;|&amp;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&qout;':
                return '"';
            case '&amp;':
                return '&';
        }
    });
}
module.exports = { htmlEscape, htmUnlEscape };