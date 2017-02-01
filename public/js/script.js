$(function(){
    var LydSlider = {
        toBelaunched: true, 
        initSlider: function(containerClass, barClass, imgBoxClass){
            this.containerClass = containerClass;
            this.barClass = barClass;
            this.imgBoxClass = imgBoxClass;
            this.selBar = $('.' + this.containerClass + ' .' + this.barClass);
            this.selBar.css('left','-1000px');

            $('.lydSlider [alt="right"]').on('move', function(event, param) {
                if(toBelaunched){
                    if(param=='right'){
                        $('.lydSlider .bar').animate({'left': '-2000px'},1500, function(){
                            toBelaunched = true;
                            var left = $('.lydSlider .bar').css('left');
                            if(left == '-2000px')$('.imgBox:last-child').after($('.imgBox:first-child'));
                            $('.lydSlider .bar').css('left','-1000px');
                        });
                    }else{
                        $('.lydSlider .bar').animate({'left': '0px'},1500, function(){
                            toBelaunched = true;
                            var left = $('.lydSlider .bar').css('left');
                            if(left == '0px')$('.imgBox:first-child').before($('.imgBox:last-child'));
                            $('.lydSlider .bar').css('left','-1000px');
                        });
                    }
                }
                });
            $('.lydSlider [alt="right"]').on('stop', function() {
                toBelaunched = false;
            });

            $('.lydSlider [alt="right"]').click(function() {
                $('.lydSlider [alt="right"]').trigger('move', 'right').trigger('stop');
            }); 
            $('.lydSlider [alt="left"]').click(function() {
                var left = $('.lydSlider .bar').css('left');
                $('.lydSlider [alt="right"]').trigger('move', 'left').trigger('stop');
            }); 

        },
        maVar: 'toto', 
        maVar2: 'coco', 
    }
    var slider1 = Object.create(LydSlider);
    slider1.initSlider('lydSlider', 'bar', 'imgBox');
    alert(slider1.selBar);

    //alert(lydSlider.blabla);

    // $('.lydSlider .bar').css('left','-1000px');
    // var toBelaunched = true;
    // $('.lydSlider [alt="right"]').on('move', function(event, param) {
    //     if(toBelaunched){
    //         if(param=='right'){
    //             $('.lydSlider .bar').animate({'left': '-2000px'},1500, function(){
    //                 toBelaunched = true;
    //                 var left = $('.lydSlider .bar').css('left');
    //                 if(left == '-2000px')$('.imgBox:last-child').after($('.imgBox:first-child'));
    //                 $('.lydSlider .bar').css('left','-1000px');
    //             });
    //         }else{
    //             $('.lydSlider .bar').animate({'left': '0px'},1500, function(){
    //                 toBelaunched = true;
    //                 var left = $('.lydSlider .bar').css('left');
    //                 if(left == '0px')$('.imgBox:first-child').before($('.imgBox:last-child'));
    //                 $('.lydSlider .bar').css('left','-1000px');
    //             });
    //         }
    //     }
    //     });
    // $('.lydSlider [alt="right"]').on('stop', function() {
    //     toBelaunched = false;
    // });

    // $('.lydSlider [alt="right"]').click(function() {
    //     $('.lydSlider [alt="right"]').trigger('move', 'right').trigger('stop');
    // }); 
    // $('.lydSlider [alt="left"]').click(function() {
    //     var left = $('.lydSlider .bar').css('left');
    //     $('.lydSlider [alt="right"]').trigger('move', 'left').trigger('stop');
    // }); 
});