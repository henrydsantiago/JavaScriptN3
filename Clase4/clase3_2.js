$("#cargar").click(function(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState==4){
            $("#resultado").html(this.responseText);
        }
    }   
    let url="http://127.0.0.1/17104500/17104500/clase3/clase3_1.html";
    let recurso="" //servicio
    let parametros=""
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();
});

(function (){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState==4){
            console.log(this.status);
            console.log(this.responseText)
        }
    }   
    let url="http://www.cne.gov.ve/web/registro_electoral";
    let recurso="/ce.php?"
    let parametros="nacionalidad=V&cedula=14978131"
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();
})();