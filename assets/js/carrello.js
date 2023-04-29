$(document).ready(function(){
    var contatore=$(".contatore_totale").text();
    $(".evento1").click(function(){
        var element = $(".contatore_evento1");
        var newValue = parseInt(element.val()) + 1;
        contatore= parseInt(contatore) + 3;
        $(".contatore_totale").text(contatore);
        element.val(newValue);
    });
    $(".evento1_-").click(function(){
        var newValue=0;
        var element = $(".contatore_evento1");
        if(parseInt(element.val())>0){
            contatore= parseInt(contatore) - 3;
            $(".contatore_totale").text(contatore);
            newValue = parseInt(element.val()) - 1;
        }
        element.val(newValue);
    });
    $(".evento2").click(function(){
        var element = $(".contatore_evento2");
        contatore= parseInt(contatore) + 8;
        $(".contatore_totale").text(contatore);
        var newValue = parseInt(element.val()) + 1;
        element.val(newValue);
    });
    $(".evento2_-").click(function(){
        var element = $(".contatore_evento2");
        var newValue=0;
        if(parseInt(element.val())>0){
            contatore= parseInt(contatore)- 8;
            $(".contatore_totale").text(contatore);
            newValue = parseInt(element.val()) - 1;
        }
        element.val(newValue);
    });
});