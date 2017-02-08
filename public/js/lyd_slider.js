/* 
A simple slider object that works with jQuery.
Put this in your html :
    <div class="lydSlider">
        <img src="./img/slider-left.png" alt="left">
        <div class="container">
            <div class="bar">							
                <div class='imgBox'><img src='./img/slider1.jpg' alt='slider_img'></div>
                <div class='imgBox'><img src='./img/slider2.jpg' alt='slider_img'></div>
                <div class='imgBox'><img src='./img/slider3.jpg' alt='slider_img'></div>		
            </div>            
        </div>
        <img src="./img/slider-right.png" alt="right">
    </div>
You can change the wrapper class name : 'lydSlider';
and all the images (left and right arrows include) : './img/slider-left.png', './img/slider-right.png', './img/slider1.jpg', './img/slider2.jpg' and './img/slider3.jpg'
*/
var LydSlider = {
    toBelaunched: true, // used for disabling more then one clic on the right or left button
    init: function(options){
        this.containerClass = '.' + options.containerClass; // can be the class '.lydSlider'
        this.barClass = this.containerClass + ' .bar';
        this.imgBoxClass = this.containerClass + ' .imgBox';
        this.sWidth = options.sWidth;
        this.defineArrowHeight();
        this.assignCSS(options.sWidth, options.sHeight, options.spaceBeforeArrow);
        this.addFunctionMoveToRightArrow();
        this.addFunctionStopToRightArrow();
        this.addClickListenerToLeftArrow();
        this.addClickListenerToRightArrow();
    },
    defineArrowHeight : function(){
        var arrowHeight = $(this.containerClass + ' [alt="right"]').css('height');
        arrowHeight = arrowHeight.substring(0, arrowHeight.length - 2);
        this.arrowHeight = arrowHeight;
    },
    assignCSS : function(sWidth, sHeight,spaceBeforeArrow){
        var leftArrow = this.containerClass + '>img:first-child';
        var rightArrow = this.containerClass + '>img:last-child';
        with($(this.containerClass)){
           css('position', 'relative');
           css('width', sWidth+'px');
           css('margin', 'auto');
        }
        with($(leftArrow)){
            css('position', 'absolute');
            css('left', '-' + spaceBeforeArrow + 'px');
            css('top', 'calc(50% - ' + this.arrowHeight / 2 + 'px)');
        }
        with($(rightArrow)){
            css('position', 'absolute');
            css('right', '-' + spaceBeforeArrow + 'px');
            css('top', 'calc(50% - ' + this.arrowHeight / 2 + 'px)');
        }
        $(this.containerClass + ' .container').css({
            'position' : 'relative',
            'width' : sWidth,
            'height' : sHeight,
            'font-size' : '0',
            'overflow' : 'hidden'
        });
        $(this.barClass).css({
            'position' : 'absolute',
            'width' : sWidth * 3 + 'px',
            'left' : '0'
        });       
        $(this.imgBoxClass).css({
            'display' : 'inline-block',
            'width' : sWidth,
            'height' : sHeight
        }); 
        $(this.imgBoxClass + ' img').css({
            'width' : sWidth,
            'height' : sHeight
        });
        $(this.barClass).css('left','-' + this.sWidth + 'px');
    },
    addFunctionStopToRightArrow : function() {
        var $thisLydSlider = this; // we save this in a variable to use it in the following functions
        $($thisLydSlider.containerClass + ' [alt="right"]').on('stop', function() {
            $thisLydSlider.toBelaunched = false;
        });
    },
    addFunctionMoveToRightArrow : function(){
        var $thisLydSlider = this;
        $(this.containerClass + ' [alt="right"]').on('move', function(event, param) {
            if($thisLydSlider.toBelaunched){
                if(param=='right'){
                    $($thisLydSlider.barClass).animate({'left': '-=' + $thisLydSlider.sWidth + 'px'},1500, function(){
                        $thisLydSlider.toBelaunched = true;
                        var left = $($thisLydSlider.barClass).css('left');
                        if(left == '-' + $thisLydSlider.sWidth * 2 + 'px')$($thisLydSlider.imgBoxClass + ':last-child').after($($thisLydSlider.imgBoxClass + ':first-child'));
                        $($thisLydSlider.barClass).css('left','-' + $thisLydSlider.sWidth + 'px');
                    });
                }else{
                    $($thisLydSlider.barClass).animate({'left': '+=' + $thisLydSlider.sWidth + 'px'},1500, function(){
                        $thisLydSlider.toBelaunched = true;
                        var left = $($thisLydSlider.barClass).css('left');
                        if(left == '0px')$($thisLydSlider.imgBoxClass + ':first-child').before($($thisLydSlider.imgBoxClass + ':last-child'));
                        $($thisLydSlider.barClass).css('left','-' + $thisLydSlider.sWidth + 'px');
                    });
                }
            }
        });
    },
    addClickListenerToLeftArrow: function(){
        var $thisLydSlider = this;
        $(this.containerClass + ' [alt="left"]').click(function() {
            $($thisLydSlider.containerClass + ' [alt="right"]').trigger('move', 'left').trigger('stop');
        });   
    },
    addClickListenerToRightArrow: function(){
        $(this.containerClass + ' [alt="right"]').click(function() {
            $(this).trigger('move', 'right').trigger('stop');
        }); 
    }
};