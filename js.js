$(document).ready(function(){
    var paint = 'white';

    $('.color').on("click", function(){
        paint = $(this).css('background-color');
    });

    $('#row1').on('click', function(){
        $(this).css("background-color", paint);
    });

    $('#row2').on('click', function(){
        $(this).css("background-color", paint);
    });

    $('#row3').on('click', function(){
        $(this).css("background-color", paint);
    });

    $('#row4').on('click', function(){
        $(this).css("background-color", paint);
    });
});
