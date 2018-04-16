// var elementPosition = $('#sticky-nav').offset();
//
// $(document).scroll(function() {
//     if($(window).scrollTop() > elementPosition.top){
//         $('#sticky-nav').addClass('navbar-fixed-top');
//     } else {
//         $('#sticky-nav').removeClass('navbar-fixed-top');
//     }
// });

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = "hidden";
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
