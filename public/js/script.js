$(function(){
    var slider1 = Object.create(LydSlider);
    //slider1.initSlider('lydSlider', 'bar', 'imgBox');
    // slider1.initSlider({
    //     containerClass : 'lydSlider',
    //     barClass : 'bar',
    //     imgBoxClass : 'imgBox'
    // });
    var slider1 = Object.create(LydSlider);
    slider1.init({
        containerClass : 'lydSlider',
        sWidth : 1000,
        sHeight : 444,
        spaceBeforeArrow : 155,
    });
});