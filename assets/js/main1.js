function verifica(){
    if(document.getElementById("name").value==""){
        document.getElementById("name").placeholder="Inserire nome";
        return false;
    }
    if(document.getElementById("subname").value==""){
        document.getElementById("subname").placeholder="Inserire cognome";
        return false;
    }
    if(document.getElementById("email").value==""){
        document.getElementById("email").placeholder="Inserire email";
        return false;
    }
    if(document.getElementById("password").value==""){
        document.getElementById("password").placeholder="Inserire password";
        return false;
    }
    if(document.getElementById("prefissi").value=="Prefisso Telefono"){
        alert("mettere prefisso");
        return false;
    }
    if(document.getElementById("telefono").value==""){
        document.getElementById("telefono").placeholder="Inserire telefono";
        return false;
    }
    //mettere valore alle celle residente e turista
    if (valoreStato==null) {
        alert("Selezionare lo stato");
        return false;
    } 

}