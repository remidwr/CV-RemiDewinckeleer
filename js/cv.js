$("#second-header").hide();

var height = 120;

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > height && $(window).width() < 768) {
            $("#main-header").hide();
            $("#second-header").show();
            $("#profil1").hide();
            $("#profil2").show();
        } else {
            $("#second-header").hide();
            $("#main-header").show();
            $("#profil2").hide();
            $("#profil1").show();
        }
    });
});
