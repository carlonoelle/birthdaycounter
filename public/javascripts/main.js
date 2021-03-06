$(window).ready(function() {
    var field$ = $("#countdown"),
        birthdayDate = new Date(2017, 02, 12),
        interval;

    function resizeToScreen(name){
        var id = "#" + name,
            e = $(id),
            height = $(window).height();

        height = height / 2 - (e.height() / 2);
        e.css('margin-top', height);
    }
    

    function happyBirthday(){
        setTimeout(function(){
            $("#wrapper").fadeOut("slow");
            $("#happyBirthday").fadeIn("slow");
        }, 1000);
    }

    function setContent(time){
        var timer = countdown(time);
        if(timer.minutes < 10){
            field$.find("#minutes").text("0" + timer.minutes);
        } else {
            field$.find("#minutes").text(timer.minutes);
        }
        if(timer.seconds < 10){
            field$.find("#seconds").text("0" + timer.seconds);
        } else {
            field$.find("#seconds").text(timer.seconds);
        }
        if(timer.minutes == 0 && timer.seconds == 0){
            clearInterval(interval);
            happyBirthday();
        }
    }

    function init(){
        resizeToScreen("wrapper");
        resizeToScreen("message");
        setContent(birthdayDate);

        $(window).on("resize", function(){
            resizeToScreen("wrapper");
            resizeToScreen("message");
        });

        //start intervall for countdown
        interval = setInterval(function(){
                setContent(birthdayDate);
            }, 1000);

        //adjust message inside happyBirthday Div
        var heightOfContainer = $("#message").height(),
            heightOfElement = 190,
            margin = heightOfContainer / 2 - (heightOfElement / 2);

        $(".messageContent").css("margin-top", margin);
        
    }

    init();
});
