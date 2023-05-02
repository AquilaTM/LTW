$(document).ready(function(){
       $(".titolo").text(localStorage.getItem("titolo"));
       $(".introduzione").css("white-space", "pre-line");
       $(".introduzione").text(localStorage.getItem("introduzione"))
       $(".map").attr("src",localStorage.getItem("map") );
       $(".storia").css("white-space", "pre-line");
       $(".storia").text(localStorage.getItem("storia"))
       $("#introduction").attr("class",localStorage.getItem("hero"));
       $(".description-image").attr("src",localStorage.getItem("immagine"))
       var mostraTag = localStorage.getItem("vedo"); 
       if (mostraTag === "true") {
              $("#biglietto").show();
            } else {
              $("#biglietto").hide();
            }
});