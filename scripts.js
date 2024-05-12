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
