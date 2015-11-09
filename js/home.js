$(window).ready(function(){

    if($("#home").hasClass("ui-page-active")){
        setTimeout ("r()", 5000);
    }

    $(window).bind("orientationchange", function(event){
        if (event.orientation == "landscape"){
            $("#logoG").width("20%");
            $("#loader").css("display","none");
        }
        else{
            $("#logoG").width("100%");
            $("#loader").css("display","inherit");
        }

    });
    $(window).trigger("orientationchange");

    $("#loginBtn").on("click",function(){
        alert("hola");
        login();
    });
});

function r() { location.href="#foo" }

function login(){
    var valores = {username:$("#username").val(),pass:$("#pass").val()};

    alert(valores['username']);

    $.ajax({
        type: "POST",
        url: "http://192.168.43.28/SmartHouse/php/pruebasqlite.php",
        data: valores,
        cache: false,

        success: function(resultado){
            //res = JSON.parse(resultado);

            alert(resultado);

            $.mobile.changePage("#main")


        }

    });




    /*$.post('http://192.168.43.28/SmartHouse/php/pruebasqlite.php',valores).done(function(data,status) {

        if(status == "error")
            alert("error");

        alert(data);
    });*/
}