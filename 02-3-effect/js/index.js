$('#Btn2').click(function(){
    $('#Pic').fadeOut(500);
})

$('#Btn1').click(function(){
    $('#Pic').fadeIn();
})

$('#Btn3').click(function(){
    $('#Pic').fadeTo(400, 0.5);
})

$('#Btn4').click(function(){
    $('#Pic').fadeTo(400, 1);
})

$('#Btn5').click(function(){
    $('#Pic').fadeToggle();
})