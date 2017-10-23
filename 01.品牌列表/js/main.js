$(function(){
    var $category = $('ul li:gt(5):not(:last)');
    $category.hide();
    var $toggleBtn = $('div.showmore>a');
    $toggleBtn.click(function(){
        if ($category.is(":visible")) {
            $category.hide();
            $(this).find('span')
            .css('background','url(img/down.png)no-repeat 0 0')
            .text("显示全部品牌");
        }else {
            $category.show();
            $(this).find('span')
                    .css('background','url(img/up.png)no-repeat 0 0')
                    .text("精简显示品牌");
            $('ul li').filter(":contains('佳能'),:contains('尼康')").addClass("promoted");        
        }
        return false;
    })
})