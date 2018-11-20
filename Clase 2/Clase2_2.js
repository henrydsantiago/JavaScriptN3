$(document).ready(
    function(){
        console.log("Se cargo la pagina")
        document.body.style.backgroundColor="blue"
    }
)

$("h2").click(function(){
    alert(this.innerHTML="Texto Insertado en H2 ")
})

$("#subtitulo").click(function(){
    console.log(this.innerHTML="SUBTITLE")
})

$("div h2").click(function(){
    console.log("HENRY")
})

$("#agregar").click(function(){
    let dato = prompt("Introduzca un texto:");
    $("ol").append("<li>"+dato+"</li>");
})

$("#esconder").click( function (){
    //let x = $("ol");
    if (this.value == "Esconder"){
        $("ol").hide();
        $("#esconder").val("Mostrar")
    }else{
        $("ol").show();
        $("#esconder").val("Esconder")
    }
})