 //Firefox
 $('#container').bind('DOMMouseScroll', function(e){
    if(e.originalEvent.detail > 0) {
        //scroll down
        $("#navbar").css("height", "0");
    }else {
        //scroll up
        $("#navbar").css("height", "80px");
    }
});

//IE, Opera, Safari
$('#container').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta < 0) {
        //scroll down
        $("#navbar").css("height", "0");
    }else {
        //scroll up
        $("#navbar").css("height", "80px");
    }
});