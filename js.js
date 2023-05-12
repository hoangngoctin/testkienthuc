// banner
var helpers = {
  addZeros: function (n) {
    return n < 10 ? "0" + n : "" + n;
  },
};

function sliderInit() {
  var $slider = $(".slider-holder");
  $slider.each(function () {
    var $sliderParent = $(this).parent();
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true,
          },
        },
      ],
    });

    if ($(this).find(".item").length > 1) {
      $(this).siblings(".slides-numbers").show();
    }

    $(this).on("afterChange", function (event, slick, currentSlide) {
      $sliderParent
        .find(".slides-numbers .active")
        .html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this)
      .find(".slick-slide")
      .not(".slick-cloned").length;
    $sliderParent
      .find(".slides-numbers .total")
      .html(helpers.addZeros(sliderItemsNum));
  });
}

sliderInit();

// header
function myFunction() {
  var x = document.getElementById("list-header");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
    x.style.transform = "translateX(0)";
  } else {
    x.style.opacity = "0";
    x.style.transform = "translateX(100px)";
  }
}

$(document).ready(function () {
  $(".nav li a").on("click", function (e) {
    e.preventDefault();
    var scrollAnchor = $(this).parent("li").attr("aria-controls");
    var scrollPoint =
      $('div.nav-penal[id="' + scrollAnchor + '"]').offset().top - 55;

    $("html, body").animate(
      {
        scrollTop: scrollPoint,
      },
      1000
    );

    return false;
  });

  MenuNavigation();

  $(window).scroll(function () {
    MenuNavigation();
  });

  $(window).resize(function () {
    MenuNavigation();
  });

  function MenuNavigation() {
    if ($(window).width() > 1024) {
      if ($("body").find(".nav").length > 0) {
        var menuPosition = $(".nav-wrap").offset().top;
        var windscroll = $(window).scrollTop();
        var containerWidth = $(".navigation-wrapper").outerWidth();
        if (windscroll >= menuPosition) {
          $(".navigation-wrapper .nav")
            .addClass("fixed-nav")
            .css("width", containerWidth);
          $(".navigation-wrapper .nav-penal").each(function (i) {
            if ($(this).offset().top <= windscroll + 60) {
              $(".nav li.active").removeClass("active");
              $(".nav li").eq(i).addClass("active");
            }
          });
        } else {
          $(".navigation-wrapper .nav")
            .removeClass("fixed-nav")
            .css("width", "100%");
          $(".nav li.active").removeClass("active");
          $(".nav li:first").addClass("active");
        }
      }
    }
  }
});

// business
$(".list-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
});

$(".list-button").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".list-content",
  dots: false,
  focusOnSelect: true,
});
$(".list-content").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".list-button",
});

// project
$(".slider-project .slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-project .slider-nav",
});
$(".slider-project .slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-project .slider-for",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  rows: 2,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
});

var header = document.getElementById("testActive");
var btns = header.getElementsByClassName("current-1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// partner
$(".slider-partner").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
});

// newsfeed
$(".slider-newsfeed").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
});

// lên đầu trang
if ($("#back-to-top").length) {
  var scrollTrigger = 500,
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    };
  backToTop();
  $(window).on("scroll", function () {
    backToTop();
  });
  $("#back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
}

// close
const menu_toggle = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");
menu_toggle.onclick = function () {
  navigation.classList.toggle("active");
};
