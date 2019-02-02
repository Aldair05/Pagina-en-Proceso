    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-primary");
        } else {
            $("#menu").removeClass("bg-primary");
        }
      });
