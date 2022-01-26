$('h1')
    .css('border', '4px solid black')
    .css('color', 'red')
    .css('text-transform', 'uppercase');
$("ul li").click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('hide');
});
