var $youdied = $("#youdied");
var $hollow = $("#hollow");


$youdied.hide();

$hollow.click(function(){
    $(this).hide();
    $youdied.fadeIn(4000);
    $('#mp3').get(0).play();
});

$youdied.click(function(){
    $(this).hide();
    $hollow.fadeIn();
})