// aggiungo una classe per fare una animazione se l'input non è vuoto
function notEmpty(id) {
    var value = document.getElementById(id).value;

    if(value!=''){
        document.getElementById(id).className = "notEmpty";  
    }
    else{
        document.getElementById(id).classList.remove("notEmpty");
    }
}