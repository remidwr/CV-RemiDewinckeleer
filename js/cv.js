var width = 975;
var height = 120;

$(function () {
    $(window)
        .width(() => {
            if ($(this).width() < width) {
                $("#profil1").hide();
                $("#profil2").show();
            } else {
                $("#profil2").hide();
                $("#profil1").show();
            }
        })
        .resize(() => {
            if ($(this).width() < width) {
                $("#profil1").hide();
                $("#profil2").show();
            } else {
                $("#profil2").hide();
                $("#profil1").show();
            }
        });
});
