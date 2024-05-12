function test() {
  const tabsNewAnim = $("#navbarSupportedContent")
  const selectorNewAnim = $("#navbarSupportedContent").find("li").length
  const activeItemNewAnim = tabsNewAnim.find(".active")
  const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight()
  const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth()
  const itemPosNewAnimTop = activeItemNewAnim.position()
  const itemPosNewAnimLeft = activeItemNewAnim.position()
  $(".hori-selector").css({
    top: `${itemPosNewAnimTop.top}px`,
    left: `${itemPosNewAnimLeft.left}px`,
    height: `${activeWidthNewAnimHeight}px`,
    width: `${activeWidthNewAnimWidth}px`
  })
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active")
    $(this).addClass("active")
    const activeWidthNewAnimHeight = $(this).innerHeight()
    const activeWidthNewAnimWidth = $(this).innerWidth()
    const itemPosNewAnimTop = $(this).position()
    const itemPosNewAnimLeft = $(this).position()
    $(".hori-selector").css({
      top: `${itemPosNewAnimTop.top}px`,
      left: `${itemPosNewAnimLeft.left}px`,
      height: `${activeWidthNewAnimHeight}px`,
      width: `${activeWidthNewAnimWidth}px`
    })
  })
}
$(document).ready(function () {
  setTimeout(() => {
    test()
  })
})
$(window).on("resize", function () {
  setTimeout(() => {
    test()
  }, 500)
})
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300)
  setTimeout(() => {
    test()
  })
})

// --------------add active class-on another-page move----------
jQuery(document).ready(($) => {
  let path = window.location.pathname.split("/").pop()
  if (path === "") {
    path = "index.html"
  }

  const target = $('#navbarSupportedContent ul li a[href="' + path + '"]')
  target.parent().addClass("active")
})

/* MEDIA */
gsap.from(".media ul li", {
  duration: 1.5,
  delay: 1.5,
  stagger: 0.08,
  opacity: 0,
  x: "-20",
  ease: "expo.inOut",
});

/* TEXT */
gsap.from(".text h1 .hide--text", {
  duration: 1.5,
  delay: 1,
  y: "100%",
  ease: "expo.inOut",
});

gsap.from(".text h3 .hide--text", {
  duration: 1.5,
  delay: 1.2,
  y: "100%",
  ease: "expo.inOut",
});

gsap.from(".text p .hide--text", {
  duration: 1.5,
  delay: 1.3,
  y: "200%",
  ease: "expo.inOut",
});

gsap.from(".text h2", {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  x: "-10000",
  ease: "expo.inOut",
});

/* OVERLAY */
gsap.to(".first", {
  duration: 1.5,
  delay: 0.5,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".second", {
  duration: 1.5,
  delay: 0.6,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".third", {
  duration: 1.5,
  delay: 0.7,
  top: "-100%",
  ease: "expo.inOut",
});