//这一段是用来生成目录的
jQuery(document).ready(function() {
    return 0 === $(".article_content h2").length ? ($("#toc").remove(), 0) : (jQuery("#toc").toc({
        selectors: "h2,h3,h4",
        container: ".article_content"
    }), jQuery("#toc").before("<h2>目录</h2>"), "参考链接" === $.trim($(".article_content h2:nth-last-of-type(1)").text()) && $(".article_content h2:nth-last-of-type(1)").addClass("reference").next("ul").addClass("reference-list"), void $("#toc~h2").wrap('<div class="chapter" />'))
});










// jquery toc @https://github.com/jgallen23/toc
!function(a){a.fn.toc=function(b){var c,d=this,e=a.extend({},jQuery.fn.toc.defaults,b),f=a(e.container),g=a(e.selectors,f),h=[],i=e.prefix+"-active",j=function(b){for(var c=0,d=arguments.length;d>c;c++){var e=arguments[c],f=a(e);if(f.scrollTop()>0)return f;f.scrollTop(1);var g=f.scrollTop()>0;if(f.scrollTop(0),g)return f}return[]},k=j(e.container,"body","html"),l=function(b){if(e.smoothScrolling){b.preventDefault();var c=a(b.target).attr("href"),f=a(c);k.animate({scrollTop:f.offset().top},400,"swing",function(){location.hash=c})}a("li",d).removeClass(i),a(b.target).parent().addClass(i)},m=function(b){c&&clearTimeout(c),c=setTimeout(function(){for(var b,c=a(window).scrollTop(),f=0,g=h.length;g>f;f++)if(h[f]>=c){a("li",d).removeClass(i),b=a("li:eq("+(f-1)+")",d).addClass(i),e.onHighlight(b);break}},50)};return e.highlightOnScroll&&(a(window).bind("scroll",m),m()),this.each(function(){var b=a(this),c=a("<ul/>");g.each(function(d,f){var g=a(f);h.push(g.offset().top-e.highlightOffset);var i=(a("<span/>").attr("id",e.anchorName(d,f,e.prefix)).insertBefore(g),a("<a/>").text(e.headerText(d,f,g)).attr("href","#"+e.anchorName(d,f,e.prefix)).bind("click",function(c){l(c),b.trigger("selected",a(this).attr("href"))})),j=a("<li/>").addClass(e.itemClass(d,f,g,e.prefix)).append(i);c.append(j)}),b.html(c)})},jQuery.fn.toc.defaults={container:"body",selectors:"h1,h2,h3",smoothScrolling:!0,prefix:"toc",onHighlight:function(){},highlightOnScroll:!0,highlightOffset:100,anchorName:function(a,b,c){return c+a},headerText:function(a,b,c){return c.text()},itemClass:function(a,b,c,d){return d+"-"+c[0].tagName.toLowerCase()}}}(jQuery);