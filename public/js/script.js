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
        sWidth : 1000,
        sHeight : 200,
        spaceBeforeArrow : 120,
    });
    var slider3 = Object.create(LydSlider);
    slider3.init({
        containerClass : 'lydSlider3',
        sWidth : 1000,
        sHeight : 210,
        spaceBeforeArrow : 72,
    });
});