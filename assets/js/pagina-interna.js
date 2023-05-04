
$(document).ready(function(){
        prezzo_biglietto=parseInt(localStorage.getItem("prezzo biglietto"));
       $(".titolo").text(localStorage.getItem("titolo"));
       $(".introduzione").css("white-space", "pre-line");
       $(".introduzione").text(localStorage.getItem("introduzione"))
       $(".map").attr("src",localStorage.getItem("map") );
       $(".storia").css("white-space", "pre-line");
       $(".storia").text(localStorage.getItem("storia"))
       $("#introduction").attr("class",localStorage.getItem("hero"));
       $(".description-image").attr("src",localStorage.getItem("immagine"))
       $("#valore_biglietto").text("24 ore -> "+ prezzo_biglietto+"€");

       var mostraTag = localStorage.getItem("vedo"); 
       if (mostraTag === "true") {
              $("#biglietto").show();
        } else {
              $("#biglietto").hide();
        }
      var conta=0;
      var conta_tot=0;
      var contatore_max_numero_biglietti=parseInt(localStorage.getItem("max_numero_biglietti"));
      var max_numero_biglietti=parseInt(localStorage.getItem("max_numero_biglietti"));
      $("#importo").text("Importo totale: "+conta_tot+"€");
      
      if ( contatore_max_numero_biglietti>5) {
        $("#disponibile").show();
        $("#ultimi").hide();
        $("#finiti").hide();
      }else if(contatore_max_numero_biglietti>0 && contatore_max_numero_biglietti<=5) {
        $("#ultimi").show();
        $("#disponibile").hide();
        $("#finiti").hide();
      }else if(contatore_max_numero_biglietti==0){
        $("#finiti").show();
        $("#ultimi").hide();
        $("#disponibile").hide();
      }

      $("#bottone_piu").click(function(){
        if(conta<max_numero_biglietti && max_numero_biglietti!=0){
          conta++;
          contatore_max_numero_biglietti-=1;
          conta_tot =conta_tot+prezzo_biglietto;
          $("#contatore").val(conta);
          $("#importo").text("Importo totale: "+conta_tot+"€");
          console.log(contatore_max_numero_biglietti)
          if ( contatore_max_numero_biglietti>5) {
            $("#disponibile").show();
            $("#ultimi").hide();
            $("#finiti").hide();
          }else if(contatore_max_numero_biglietti>0 && contatore_max_numero_biglietti<=5) {
            $("#ultimi").show();
            $("#disponibile").hide();
            $("#finiti").hide();
          }else if(contatore_max_numero_biglietti==0){
            $("#finiti").show();
            $("#ultimi").hide();
            $("#disponibile").hide();
          }
        }
      });
      $("#bottone_meno").click(function(){
        if(conta>0){
          conta--;
          conta_tot =conta_tot-prezzo_biglietto;
          contatore_max_numero_biglietti++;
          $("#contatore").val(conta);
          $("#importo").text("Importo totale: "+conta_tot+"€");

          if ( contatore_max_numero_biglietti>5) {
            $("#disponibile").show();
            $("#ultimi").hide();
            $("#finiti").hide();
          }else if(contatore_max_numero_biglietti>0 && contatore_max_numero_biglietti<=5) {
            $("#ultimi").show();
            $("#disponibile").hide();
            $("#finiti").hide();
          }else if(contatore_max_numero_biglietti==0){
            $("#finiti").show();
            $("#ultimi").hide();
            $("#disponibile").hide();
          }
        }
      });
      
      $("#compra").click(function(){
        console.log("entro")
        localStorage.setItem("contatore",conta);
        console.log(localStorage.getItem("contatore"))
      });



      
});
