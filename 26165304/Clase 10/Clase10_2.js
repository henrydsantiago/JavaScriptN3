$(document).ready(function(){
    console.log("The Bomb has Been Defused")
    document.body.style.backgroundColor = "goldenrod"
})
$("li").click(function(){
    console.log("Presionando los li")
})
$(document).mouseover(function(){
    let a = Math.round(Math.random()* 255) 
    let b = Math.round(Math.random()* 255) 
    let c = Math.round(Math.random()* 255)
    document.body.style.background = "rgb(" + a + "," + b + "," + c + ")"
    console.log(document.body.style.background)
    $("h1").height($("h1").height() + 10) 
})
$("#agg").click(function(){
    let dat = prompt("Giv mi UR Data!")
    $("ol").append("<li>" + dat + "</li>")
})
$("#hid").click(function(){
    if (this.innerHTML == "Esconder")
    {
        $("ol").hide()
        $("#hid").text("Mostrar")
    }else
    {
        $("ol").show()
        $("#hid").text("Esconder")
    }
})
$("#del").click(function(){
    $("li:last-child").remove()
})
$("h1").click(function(){
    $("h1").height($("h1").height() + 10) 
})