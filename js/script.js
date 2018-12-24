$(document).ready(function ($) {


    var write = $(".new_post .text_user");
    var name_user = $(".new_post .name_user");
    var data_post = $(".new_post .data_post");



    $("#save_name").click(function (e) {
        document.cookie = 'name=' + name;
        e.preventDefault();
        var dt = new Date();
        var time = dt.toDateString();
        var name = $("#inp").val();
        if (name.length <= 1) {
            $(".error").slideDown(200);
        }else {
            $(".connect").slideUp(400);
        }
        data_post.text(time);
        name_user.text(name);
    });

    var dataBlock = $(".block_reviews.new_post");
    dataBlock.hide();

    $(".write button").click(function (e) {
        e.preventDefault();
        var text_write = $("#text_user").val();
        if (text_write.length <= 1){
            $("#text_user").addClass("errorText");
        } else {
            write.text(text_write);
            let newDB = dataBlock.clone();
            var heightBlock = $(".block_reviews.new_post").height();
            $(".body_reviews").append(newDB);
            newDB.show();
            $(".body_reviews").scrollTop($(document).height()+ heightBlock);
            $("#text_user").val('').removeClass("errorText");
        }
    });

});

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}