//Tool Tips icons footer
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// ***Smooth Scroll***
$(document).ready(function(){
    $('a').click(function(){
        var hash = this.hash;
        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top - 54.41
        },
        800
        );
    });
    
    // ***Cambio de Color Nav***
    $(window).scroll(function() {
        let distancia = $('html').scrollTop();
        if (distancia > 200) {
            $('nav').css('background-color','#0dcaf0');

        } else {
            $('nav').css('background-color','transparent');
        }
    });
});

