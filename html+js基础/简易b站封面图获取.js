var total = parseInt($('.be-pager-total').html().split(" ")[1]);
var links;
$('.small-item a img').each(function() {
    links += this.src + '\n';
});
$('.be-pager-next').on("click", function() {
    $('.small-item a img').each(function() {
        console.log(this.src)
    });
});
var linksss = " ";
var img = document.querySelectorAll('.sc-rp5asc-10.erYaF');
for (var i = 0; i < img.length; i++) {
    linksss += img[i].src;
    console.log(img[i].src);
}