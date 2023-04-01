$(function () {
  if ($("div").hasClass("cart_check")) {
    $(".cart__checkout-button").attr("disbled", "disabeld");
    $("#cart_check").click(function () {
      if ($(this).prop("checked") == false) {
        $(".cart__checkout-button").attr("disabled", "diaabled");
      } else {
        $(".cart__checkout-button").removeAttr("disabled");
      }
    });
  }
});
