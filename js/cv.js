var width = 992;

$(window).resize(() => {
    if ($(this).width() < width) {
        $("#profil1").hide();
        $("#profil2").show();
    } else {
        $("#profil2").hide();
        $("#profil1").show();
    }
});
