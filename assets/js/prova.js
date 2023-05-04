$.get("biglietti.php",(data,state)=>{
    numero_biglietti= JSON.parse(data); 
if(localStorage.getItem("titolo")=="Musei Vaticani"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.museo1);
}else if(nome_luogo=="Museo Capitolini"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.museo2);
}else if(nome_luogo=="Galleria Borghese"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.museo3);
}else if(nome_luogo=="Galleria Doria Pamphiji"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.museo4);
}else if(nome_luogo=="Galleria Nazionale d'Arte Moderna e Contemporanea"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.museo5);
}else if(nome_luogo=="MAXXI"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.museo6);
}else if(nome_luogo=="Colosseo"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento1);
}else if(nome_luogo=="Ara Pacis"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento2);
}else if(nome_luogo=="Castel Sant'Angelo"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento4);
}else if(nome_luogo=="Altare della Patria"){
  localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento3);
}
})