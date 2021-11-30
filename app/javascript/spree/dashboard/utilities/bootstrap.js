import $ from "jquery"
import "bootstrap"
import "popper.js"

document.addEventListener("spree:load", function () {
  $(".with-tip").each(function () {
    $(this).tooltip({
      container: $(this)
    })
  })

  $(".with-tip").on("show.bs.tooltip", function (event) {
    if (("ontouchstart" in window)) {
      event.preventDefault()
    }
  })
})
