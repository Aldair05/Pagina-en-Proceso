    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("gris");
        } else {
            $("#menu").removeClass("gris");
        }
      });
