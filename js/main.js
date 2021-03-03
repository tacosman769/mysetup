jQuery(document).ready((b) => {
    b(".setup-single-point").children("a").on("click", function () {
        var a = b(this).parent("li");
        a.hasClass("is-open") ? a.removeClass("is-open").addClass("visited") :
        a.addClass("is-open").siblings(".setup-single-point.is-open").removeClass("is-open").addClass("visited")
    });
    b(".setup-close-info").on("click", function (a) {
        a.preventDefault();
        b(this).parents(".setup-single-point").eq(0).removeClass("is-open").addClass("visited")
    })
});