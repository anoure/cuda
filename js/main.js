$(function() {
  var circles = $(".skills .circle");
  circles.each(function() {
    var valEl = $(this).find(".circleValue").html();
    valEl = parseFloat(valEl);
    valEl = valEl*408/100;
    $(this).html('<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 408px;" r="65" cx="-80" cy="80" /></svg>');
  });

  // MOBILE MENU

  $(".mobile-menu-button").on("click", function() {
    $("aside").toggleClass("active-menu");
    $(".navbar-default").toggleClass("fixed-nav");
    $("header .header-content").toggleClass("plus-pad");
  });
});
