var aaa = ''
$('.title a').each((index,data)=>{
    var t = $(data).html()
    if(t.replace('[简体内嵌]','') !== t)
    aaa += 'https://acg.rip'+ $(data).parents('tr').find('.action a').attr('href') + '\n'
    
})
console.log(aaa)