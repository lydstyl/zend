$(function(){
    var toBelaunched = true;
    $('.lydSlider [alt="right"]').on('move', function(event, param) {
                alert('direction '+param);
                $('.lydSlider .bar').animate({'left': '-=1000px'},1500, function(){
                    toBelaunched = true;
                });
            });
    $('.lydSlider [alt="right"]').on('stop', function() {
        toBelaunched = false;
    });
    $('.lydSlider [alt="right"]').click(function() {
        var left = $('.lydSlider .bar').css('left');
        if(toBelaunched && left != '-2000px')$('.lydSlider [alt="right"]').trigger('move', 'right').trigger('stop');
    }); 
    $('.lydSlider [alt="left"]').click(function() {
        var left = $('.lydSlider .bar').css('left');
        if(toBelaunched && left != '0px')$('.lydSlider [alt="left"]').trigger('move', 'right').trigger('stop');
    }); 
});