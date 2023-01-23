$(function () {
  $(".hamburger-item").click(function(){
    $(".hb-icon").toggleClass("close"),
      $(".hb-wrap").toggleClass("open-menu"),
        $(".hamburger-item").toggleClass("list-up"),
        $(".hamburger-list").toggleClass("fixed");
  });
  $(".hb-menu a").click(function(){
    $(".hb-icon").removeClass("close"),
      $(".hb-wrap").removeClass("open-menu"),
        $(".hamburger-list").removeClass("list-up");
  });
});
$(function() {
    var scrollStrat = $("#header").offset().top;

    var distance = 0;

    $(document).scroll(function(){
      distance = $(this).scrollTop();

    if (scrollStrat <= distance) {
      $("#header").addClass("fixed");
    }
    else if (scrollStrat >= distance) {
      $("#header").removeClass("fixed");
    }
    if (scrollStrat <= distance) {
      $(".hamburger-list").addClass("fixed");
    }
    else if (scrollStrat >= distance) {
      $(".hamburger-list").removeClass("fixed");
    }

  });
});
$(function() {
  $(document).ready(function(){
  	$('.slide').slick({
  		arrows: true,//next、prevの矢印の表示
  		dots : true,//ドットの表示
      responsive: [
        {
          breakpoint: 768, // 768px未満で・・・
          settings: "unslick", // スライダーを無効
        },
      ],
  	});
  });
});
$(window).on("resize orientationchange", function () {
  $(".slider").slick("resize");
});

$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});
