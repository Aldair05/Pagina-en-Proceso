
/* Inicio de funcion de menu Navegador*/
$(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-primary");
        } else {
            $("#menu").removeClass("bg-primary");
        }
});
/*Fin de funcion de menu Navegador*/


/* Inicio de Funcion de filtrado Imagenes*/
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
            
            $("#galeria").fadeTo(100, 0.5);
            $("#galeria div").not("."+selectedClass).fadeOut().removeClass('animation');
            
    setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#galeria").fadeTo(300, 1);
            $("#galaeria").addClass('caja-galeria');
    }, 300);
});
});

/* FIn de Funcion de filtrado Imagenes*/

/*Funcion de transicion enlaces*/
$('li a').click(function(e){
    e.preventDefault();
    var strAncla=$(this).attr('href');
    $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
    },1000);

});

$('div .enlace').click(function(e){
    e.preventDefault();
    var strAncla=$(this).attr('href');
    $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
    },1000);
});

/*Fin de Funcion de transicion enlaces*/
