$(function(){
    var LydSlider = {
        toBelaunched: true, 
        initSlider: function(containerClass, barClass, imgBoxClass){
            this.containerClass = '.' + containerClass; // .lydSlider
            //console.log(this.containerClass); // .lydSlider
            this.barClass = '.' + barClass;
            this.imgBoxClass = '.' + imgBoxClass;
            $(this.containerClass + ' ' + this.barClass).css('left','-1000px');
            var $thisLydSlider = this; // on enregistre this dans une variable pour qu'elle ne se fasse pas écraser dans les fonctions qui suivent
            //console.log(this.containerClass + ' [alt="right"]');
            $(this.containerClass + ' [alt="right"]').on('move', function(event, param) {
                //console.log('test');
                //console.log($thisLydSlider.containerClass);// .lydSlider
                if($thisLydSlider.toBelaunched){
                    if(param=='right'){
                        $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).animate({'left': '-2000px'},1500, function(){
                            $thisLydSlider.toBelaunched = true;
                            var left = $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left');
                            if(left == '-2000px')$($thisLydSlider.imgBoxClass + ':last-child').after($($thisLydSlider.imgBoxClass + ':first-child'));
                            $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left','-1000px');
                        });
                    }else{
                        $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).animate({'left': '0px'},1500, function(){
                            $thisLydSlider.toBelaunched = true;
                            var left = $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left');
                            if(left == '0px')$($thisLydSlider.imgBoxClass + ':first-child').before($($thisLydSlider.imgBoxClass + ':last-child'));
                            $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left','-1000px');
                        });
                    }
                }
            });


            $(this.containerClass + ' [alt="right"]').on('stop', function() {
                $thisLydSlider.toBelaunched = false;
            });
            $(this.containerClass + ' [alt="right"]').click(function() {
                // console.log($thisLydSlider.containerClass);// .lydSlider
                // console.log(this);// <img src="../img/slider-right.png" alt="right">
                // console.log($(this));// Object [ <img> ]
                $($thisLydSlider.containerClass + ' [alt="right"]').trigger('move', 'right').trigger('stop'); //ne marche pas
            }); 
            $(this.containerClass + ' [alt="left"]').click(function() {
                // console.log($thisLydSlider.barClass);// .bar
                var left = $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left');
                $($thisLydSlider.containerClass + ' [alt="right"]').trigger('move', 'left').trigger('stop');
            }); 
        },
        maVar: 'toto', 
        maVar2: 'coco' 
    };

    var slider1 = Object.create(LydSlider);
    slider1.initSlider('lydSlider', 'bar', 'imgBox');
    //console.log(slider1 .containerClass);// .lydSlider

    //alert(slider1.toBelaunched);

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