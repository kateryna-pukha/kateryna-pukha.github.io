$(document).ready(function () {
    var windowStartWidth = 0;
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth != windowStartWidth) {
            windowStartWidth = windowWidth;
            $('.masonry').each(function (i) {
                var parentWidth = $(this).parent().outerWidth();
                var items = $(this).children('.item');
                items.width(0);
                var $container = $(this).masonry();
                $container.imagesLoaded(function () {
                    if (parentWidth <= 420) {
                        items.width('100%');
                    } else if (parentWidth <= 640) {
                        items.width('50%');
                    } else if (parentWidth <= 860) {
                        items.width('33.33%');
                    } else {
                        //items.width('12.5%');
                        items.width('25%');
                    }
                    $container.masonry({
                        itemSelector: '.item',
                        transitionDuration: '0.5s'
                    });
                });

            });
        }
    }).resize();
    
    $(".masonry").lightGallery();
    
});
