$(document).ready(function(){
    var contatore=$(".contatore_totale").text();
    $(".evento1").click(function(){
        var element = $(".contatore_evento1");
        var newValue = parseInt(element.text()) + 1;
        contatore= parseInt(contatore) + 3;
        $(".contatore_totale").text(contatore);
        element.text(newValue);
    });
    $(".evento1_-").click(function(){
        var element = $(".contatore_evento1");
        if(parseInt(element.text())>0){
            contatore= parseInt(contatore) - 3;
            $(".contatore_totale").text(contatore);
            var newValue = parseInt(element.text()) - 1;
        }
        element.text(newValue);
    });
    $(".evento2").click(function(){
        var element = $(".contatore_evento2");
        contatore= parseInt(contatore) + 8;
        $(".contatore_totale").text(contatore);
        var newValue = parseInt(element.text()) + 1;
        element.text(newValue);
    });
    $(".evento2_-").click(function(){
        var element = $(".contatore_evento2");
        if(parseInt(element.text())>0){
            contatore= parseInt(contatore)- 8;
            $(".contatore_totale").text(contatore);
            var newValue = parseInt(element.text()) - 1;
        }
        element.text(newValue);
    });
});