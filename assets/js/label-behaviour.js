function notEmpty(id) {
    var value = document.getElementById(id).value;
    console.log('?' + value);

    if(value!=''){
        document.getElementById(id).className = "notEmpty";  
    }
    else{
        document.getElementById(id).classList.remove("notEmpty");
    }
}