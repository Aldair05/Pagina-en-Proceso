    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-primary");
        } else {
            $("#menu").removeClass("bg-primary");
        }
      });

/*Funcion de filtrado Imagenes*/
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

/*Funcion de transicion enlaces*/

/* $('#acerca-de').click(function(){
    event.preventDefault();
    var ir=jQuery(this).attr('href');
    var nueva_posicion= jQuery('#'+ir).offset();
    window.scrollTo(nueva_posicion.left,nueva_posicion.top);
    return false;
});
 */

$('li a').click(function(e){
    e.preventDefault();
    var strAncla=$(this).attr('href');
    $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
    },1000);

});


/* $('.galeria')
    .on('mouseenter',function(){
        $('.galeria').addClass('caja-galeria');
    }); */