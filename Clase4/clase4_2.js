
$("#loading").hide();
$("#cargar").click(function(){
    $("#loading").show();
    // let name=$("#nombre").val();
    $.ajax({
        url     :"http://www.omdbapi.com/?",
        success :function(respuesta){
            console.log(respuesta);
        },
        data    :{
            s       :name,
            apikey  :"6f58a9b8"

        },
        error   :function(){
            console.log("Error de comunicacion")
        },
        complete:function(){
            $("#loading").hide();
        },
        timeout :3000,
        type    :"get",
        dataType:"JSON"
    })
});
// Otra forma, con el key
$("#nombre").keyup(function(){
    $("#loading").show();
    let name=$("#nombre").val();
    $.ajax({
        url     :"http://www.omdbapi.com/?",
        success :function(respuesta){
            if(respuesta.Response=="True"){
                console.log(respuesta);
            }
        },
        data    :{
            s       :name,
            apikey  :"6f58a9b8"

        },
        error   :function(){
            console.log("Error de comunicacion")
        },
        complete:function(){
            $("#loading").hide();
        },
        timeout :3000,
        type    :"get",
        dataType:"JSON"
    })
});
