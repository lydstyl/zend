$(function(){
    // hauteur du slider
    // img right left
    // ecartement right left

    // var LydSlider = {
    //     toBelaunched: true, 
    //     initSlider: function(options){
    //         this.containerClass = '.' + options.containerClass; // can be .lydSlider
    //         this.barClass = '.' + options.barClass; // can be .bar
    //         this.imgBoxClass = '.' + options.imgBoxClass;
    //         $(this.containerClass + ' ' + this.barClass).css('left','-1000px');
    //         this.addFunctionMoveToRightArrow();
    //         this.addFunctionStopToRightArrow();
    //         this.addClickListenerToLeftArrow();
    //         this.addClickListenerToRightArrow();
    //     },
    //     addFunctionStopToRightArrow : function() {
    //         var $thisLydSlider = this; // on enregistre this dans une variable pour qu'elle ne se fasse pas écraser dans les fonctions qui suivent
    //         $($thisLydSlider.containerClass + ' [alt="right"]').on('stop', function() {
    //             $thisLydSlider.toBelaunched = false;
    //         });
    //     },
    //     addFunctionMoveToRightArrow : function(){
    //         var $thisLydSlider = this;
    //         $(this.containerClass + ' [alt="right"]').on('move', function(event, param) {
    //             if($thisLydSlider.toBelaunched){
    //                 if(param=='right'){
    //                     $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).animate({'left': '-2000px'},1500, function(){
    //                         $thisLydSlider.toBelaunched = true;
    //                         var left = $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left');
    //                         if(left == '-2000px')$($thisLydSlider.imgBoxClass + ':last-child').after($($thisLydSlider.imgBoxClass + ':first-child'));
    //                         $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left','-1000px');
    //                     });
    //                 }else{
    //                     $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).animate({'left': '0px'},1500, function(){
    //                         $thisLydSlider.toBelaunched = true;
    //                         var left = $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left');
    //                         if(left == '0px')$($thisLydSlider.imgBoxClass + ':first-child').before($($thisLydSlider.imgBoxClass + ':last-child'));
    //                         $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left','-1000px');
    //                     });
    //                 }
    //             }
    //         });
    //     },
    //     addClickListenerToLeftArrow: function(){
    //         var $thisLydSlider = this;
    //         $(this.containerClass + ' [alt="left"]').click(function() {
    //             var left = $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left');
    //             $($thisLydSlider.containerClass + ' [alt="right"]').trigger('move', 'left').trigger('stop');
    //         });   
    //     },
    //     addClickListenerToRightArrow: function(){
    //         var $thisLydSlider = this;
    //         $(this.containerClass + ' [alt="right"]').click(function() {
    //             $($thisLydSlider.containerClass + ' [alt="right"]').trigger('move', 'right').trigger('stop');
    //         }); 
    //     }
    // };

    var LydSlider = {
        toBelaunched: true, 
        initSlider: function(options){
            this.containerClass = '.' + options.containerClass; // can be .lydSlider
            this.barClass = '.' + options.barClass; // can be .bar
            this.imgBoxClass = '.' + options.imgBoxClass;
            $(this.containerClass + ' ' + this.barClass).css('left','-1000px');
            this.addFunctionMoveToRightArrow();
            this.addFunctionStopToRightArrow();
            this.addClickListenerToLeftArrow();
            this.addClickListenerToRightArrow();
        },
        addFunctionStopToRightArrow : function() {
            var $thisLydSlider = this; // on enregistre this dans une variable pour qu'elle ne se fasse pas écraser dans les fonctions qui suivent
            $($thisLydSlider.containerClass + ' [alt="right"]').on('stop', function() {
                $thisLydSlider.toBelaunched = false;
            });
        },
        addFunctionMoveToRightArrow : function(){
            var $thisLydSlider = this;
            $(this.containerClass + ' [alt="right"]').on('move', function(event, param) {
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
        },
        addClickListenerToLeftArrow: function(){
            var $thisLydSlider = this;
            $(this.containerClass + ' [alt="left"]').click(function() {
                var left = $($thisLydSlider.containerClass + ' ' + $thisLydSlider.barClass).css('left');
                $($thisLydSlider.containerClass + ' [alt="right"]').trigger('move', 'left').trigger('stop');
            });   
        },
        addClickListenerToRightArrow: function(){
            var $thisLydSlider = this;
            $(this.containerClass + ' [alt="right"]').click(function() {
                $($thisLydSlider.containerClass + ' [alt="right"]').trigger('move', 'right').trigger('stop');
            }); 
        }
    };
    var slider1 = Object.create(LydSlider);
    //slider1.initSlider('lydSlider', 'bar', 'imgBox');
    slider1.initSlider({
        containerClass : 'lydSlider',
        barClass : 'bar',
        imgBoxClass : 'imgBox'
    });
    // hauteur du slider
    // img right left
    // ecartement right left
});