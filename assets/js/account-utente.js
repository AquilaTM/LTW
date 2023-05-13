$(document).ready(function(){ 
    var numero_biglietti=[];
    $.get("carrello1.php", (data, state) => {
        numero_biglietti = JSON.parse(data);
        if(numero_biglietti.evento1>0){
            $("#evento1").text("Concerto Primo Maggio: "+numero_biglietti.evento1)
        }
        if(numero_biglietti.evento2>0){
            $("#evento2").text("Boccea Street "+numero_biglietti.evento2)
        }
        if(numero_biglietti.evento3>0){
            $("#evento3").text("Festival delle Scienze: "+numero_biglietti.evento3)
        }
        if(numero_biglietti.evento4>0){
            $("#evento4").text("Vinalia Priora: "+numero_biglietti.evento4)
        }
        if(numero_biglietti.evento5>0){
            $("#evento5").text("Rugantino al Sistina: "+numero_biglietti.evento5)
        }
        if(numero_biglietti.museo1>0){
            $("#museo1").text("Musei Vaticani: "+numero_biglietti.museo1)
        }
        if(numero_biglietti.museo2>0){
            $("#museo2").text("Musei Capitolini: "+numero_biglietti.museo2)
        }
        if(numero_biglietti.museo3>0){
            $("#museo3").text("Galleria Borghese: "+numero_biglietti.museo3)
        }
        if(numero_biglietti.museo4>0){
            $("#museo4").text("Galleria Doria Pamphilj: "+numero_biglietti.museo4)
        }
        if(numero_biglietti.museo5>0){
            $("#museo5").text("Museo Nazionale di Arte Moderna e Contemporanea: "+numero_biglietti.museo5)
        }
        if(numero_biglietti.museo6>0){
            $("#museo6").text("MAXXI: "+numero_biglietti.museo6)
        }
        if(numero_biglietti.monumento1>0){
            $("#monumento1").text("Colosseo: "+numero_biglietti.monumento1)
        }
        if(numero_biglietti.monumento2>0){
            $("#monumento2").text("Ara Pacis: "+numero_biglietti.monumento2)
        }
        if(numero_biglietti.monumento3>0){
            $("#monumento3").text("Castel Sant\'Angelo: "+numero_biglietti.monumento3)
        }
        if(numero_biglietti.monumento4>0){
            $("#monumento4").text("Altare della Patria: "+numero_biglietti.monumento4)
        }
    })
    var informazioni=[];
    $.get("nome_utente.php", (data, state) => {
        console.log("prova")
        informazioni = JSON.parse(data);
        console.log(informazioni)
        $("#nome_cognome").text(informazioni.nome+" "+informazioni.cognome)
    })

});