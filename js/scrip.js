    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-primary");
        } else {
            $("#menu").removeClass("bg-primary");
        }
      });

/* (function(){
    $(document).ready(function(){
        $(".filter").(function(){
            var filtro=$(this).attr("data-rel");

            if(filtro=="all"){
                $(".galeria").show(500);
            } else{
                $(".galeria").not("."+filtro).hide(500);
                $(".galeria").filter("."+filtro).show(500);
            }
        });

    });
})
 */


$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
            $("#galeria").fadeTo(100, 0.5);
            $("#galeria div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#galeria").fadeTo(300, 1);
    }, 300);
});
}); 