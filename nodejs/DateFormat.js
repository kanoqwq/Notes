//自定义格式化时间日期的函数
function dateFormat(dtStr) {
    const dt = new Date(dtStr);
    const y = dt.getFullYear();
    const m = ZeroAdd(dt.getMonth());
    const d = ZeroAdd(dt.getDate());
    const h = ZeroAdd(dt.getHours());
    const mm = ZeroAdd(dt.getMinutes());
    const ss = ZeroAdd(dt.getSeconds());

    return `${y}-${m}-${d} ${h}:${mm}:${ss}`;
}

function ZeroAdd(num) {
    return num < 9 ? '0' + num : num;
}

module.exports = { dateFormat, ZeroAdd };