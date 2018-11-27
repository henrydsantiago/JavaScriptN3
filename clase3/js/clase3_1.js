
$("#boton-menu").click(
    function(){
        $(".container").fadeToggle("slow");
    }
)
$("#boton-margarita").click(
    function(){
        $("#pizza-margarita").slideToggle("slow");
    }
)

n=0;
$(".central-boton").click(function(){

    $(this.parentNode).animate({"width":"500"},
        function(){
            $(this).css({"background-color":"red"});
            $(this).fadeOut("slow");
            n++;
            if (n==6)
                $(".container").slideToggle(500);
        });
})