$(function(){
    var slider1 = Object.create(LydSlider);
    slider1.init({
        containerClass : 'lydSlider',
        sWidth : 1000,
        sHeight : 444,
        spaceBeforeArrow : 155,
    });
    var slider2 = Object.create(LydSlider);
    slider2.init({
        containerClass : 'lydSlider2',
        sWidth : 500,
        sHeight : 222,
        spaceBeforeArrow : 600,
    });
});