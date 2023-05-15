
var cart_tot=0;
var cart11=0;
var cart12=0;
var cart13=0;
var cart14=0;
var cart15=0;
var cart21=0;
var cart22=0;
var cart23=0;
var cart24=0;
var cart25=0;
var cart26=0;
var cart31=0;
var cart32=0;
var cart33=0;
var cart34=0;
var contatore_iniziale=localStorage.getItem("contatore");
var tipo=localStorage.getItem("titolo");
console.log(tipo);
var iniziale=true;
var entrato=true;
var t=getImporto();
let app =Vue.createApp({ //costruttore
    data: function(){ //mettiamo coppie chiave-valore
       return{
        }
    },
});

app.component("eventocrea",{
    template:` 
    <ul class="eventi" v-for="x in nome_classi_eventi" :key="x.id">
    <li><div :class="x.classe_nome">
    <p>{{x.nome}}</p>
    <div class="acquisto-biglietti touchspin d-flex align-items-center gap-2 text-center">  
        <p v-if="x.n_biglietti > 10">Disponibile</p>
        <p v-else-if="x.n_biglietti > 0 && x.n_biglietti <= 5">Ultime scorte</p>
        <p v-else-if="x.n_biglietti <= 0">Non disponibile</p>
        <button @click="x.nome_funzioneD" class="btn btn-touchspin" type="button" data-touchspin-down>-</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input disabled>
        <button @click="x.nome_funzioneI" class="btn btn-touchspin" type="button" data-touchspin-up>+</button>

    </div>
</div></li>
</ul>`,
    data(){ //mettiamo tutti e varibiali che stanno nello script sopra
        return{
            numero_biglietti1:0,
            numero_biglietti2:0,
            nome_classi_eventi:[
            {n_biglietti:0,cart:0,id:1,nome:"Concerto Primo Maggio - Costo Biglietto: 20€",classe_nome:"evento1",nome_funzioneI:() => {this.incrementaCounter1();},nome_funzioneD:() => {this.decrementaCounter1();}},
            {n_biglietti:0,cart:0,id:2,nome:"Boccea Street - Costo Biglietto: 14€",classe_nome:"evento2",nome_funzioneI:() => {this.incrementaCounter2();},nome_funzioneD:() => {this.decrementaCounter2();}},
            {n_biglietti:0,cart:0,id:3,nome:"Festival delle Scienze - Costo Biglietto: 32€",classe_nome:"evento3",nome_funzioneI:() => {this.incrementaCounter3();},nome_funzioneD:() => {this.decrementaCounter3();}},
            {n_biglietti:0,cart:0,id:4,nome:"Vinalia Priora - Costo Biglietto: 15€",classe_nome:"evento4",nome_funzioneI:() => {this.incrementaCounter4();},nome_funzioneD:() => {this.decrementaCounter4();}},
            {n_biglietti:0,cart:0,id:5,nome:"Rugantino al Sistina - Costo Biglietto: 50€",classe_nome:"evento5",nome_funzioneI:() => {this.incrementaCounter5();},nome_funzioneD:() => {this.decrementaCounter5();}},
            ],
            numero_biglietti:[],
        }
        
    },
    created() {
        if(tipo=="Concerto Primo Maggio" ){
            cart11=contatore_iniziale;
            this.nome_classi_eventi[0].cart=contatore_iniziale;
        }else if(tipo=="Bocccea Street"){
            cart12=contatore_iniziale;
            entrato=false;
            this.nome_classi_eventi[1].cart=contatore_iniziale;
        }else if(tipo=="Festival Delle Scienze"){
            cart13=contatore_iniziale;
            this.nome_classi_eventi[2].cart=contatore_iniziale;
        }else if(tipo=="Vinalia Priora"&&p=="Vinalia Priora" && entrato){
            cart14=contatore_iniziale;
            this.nome_classi_eventi[3].cart=contatore_iniziale;
        }else if(tipo=="Rugantino al Sistina"&&p=="Rugantino al Sistina"&& entrato ){
            cart15=contatore_iniziale;
            this.nome_classi_eventi[4].cart=contatore_iniziale;
        }
    },
    methods:{ 
        incrementaCounter1(){
            if(parseInt(cart11)>0 && iniziale){
                this.nome_classi_eventi[0].n_biglietti-=cart11;
                iniziale=false
            }
            if(this.nome_classi_eventi[0].n_biglietti>0){
                cart11++;
                $("#evento1").val(cart11);
                this.nome_classi_eventi[0].cart++;
                cart_tot+=20;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter1(){
            if(parseInt(cart11)>0 && iniziale){
                this.nome_classi_eventi[0].n_biglietti-=cart11;
                iniziale=false
            }
            if(this.nome_classi_eventi[0].cart>0){
                cart11--;
                $("#evento1").val(cart11);
                this.nome_classi_eventi[0].cart--;
                cart_tot-=20;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter2(){
            if(parseInt(cart12)>0 && iniziale){
                this.nome_classi_eventi[1].n_biglietti-=cart12;
                iniziale=false
            }
            if(this.nome_classi_eventi[1].n_biglietti>0){
                cart12++;
                $("#evento2").val(cart12);
                this.nome_classi_eventi[1].cart++;
                cart_tot+=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti--;
            }
        },
        decrementaCounter2(){
            if(parseInt(cart12)>0 && iniziale){
                this.nome_classi_eventi[1].n_biglietti-=cart12;
                iniziale=false
            }
            if(this.nome_classi_eventi[1].cart>0){
                cart12--;
                $("#evento2").val(cart12);
                this.nome_classi_eventi[1].cart--;
                cart_tot-=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti++;
            }
        },
        incrementaCounter3(){
            if(parseInt(cart13)>0 && iniziale){
                this.nome_classi_eventi[2].n_biglietti-=cart13;
                iniziale=false
            }
            if(this.nome_classi_eventi[2].n_biglietti>0){
                cart13++;
                $("#evento3").val(cart13);
                this.nome_classi_eventi[2].cart++;
                cart_tot+=32;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter3(){
            if(parseInt(cart13)>0 && iniziale){
                this.nome_classi_eventi[2].n_biglietti-=cart13;
                iniziale=false
            }
            if(this.nome_classi_eventi[2].cart>0){
                cart13--;
                $("#evento3").val(cart13);
                this.nome_classi_eventi[2].cart--;
                cart_tot-=32;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter4(){
            if(parseInt(cart14)>0 && iniziale){
                this.nome_classi_eventi[3].n_biglietti-=cart14;
                iniziale=false
            }
            if(this.nome_classi_eventi[3].n_biglietti>0){
                cart14++;
                $("#evento4").val(cart14);
                this.nome_classi_eventi[3].cart++;
                cart_tot+=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti--;
            }
        },
        decrementaCounter4(){
            if(parseInt(cart14)>0 && iniziale){
                this.nome_classi_eventi[3].n_biglietti-=cart14;
                iniziale=false
            }
            if(this.nome_classi_eventi[3].cart>0){
                cart14--;
                $("#evento4").val(cart14);
                this.nome_classi_eventi[3].cart--;
                cart_tot-=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti++;
            }
        },
        incrementaCounter5(){
            if(parseInt(cart15)>0 && iniziale){
                this.nome_classi_eventi[4].n_biglietti-=cart15;
                iniziale=false
            }
            if(this.nome_classi_eventi[4].n_biglietti>0){
                cart15++;
                $("#evento5").val(cart15);
                this.nome_classi_eventi[4].cart++;
                cart_tot+=50;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti--;
            }
        },
        decrementaCounter5(){
             if(parseInt(cart15)>0 && iniziale){
                this.nome_classi_eventi[4].n_biglietti-=cart15;
                iniziale=false
            }
            if(this.nome_classi_eventi[4].cart>0){
                cart15--;
                $("#evento5").val(cart15);
                this.nome_classi_eventi[4].cart--;
                cart_tot-=50;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti++;
            }
        },
    },
    mounted(){ //fa al'inizio del server
        $.get("biglietti.php",(data,state)=>{
            this.numero_biglietti = JSON.parse(data);
            this.nome_classi_eventi[0].n_biglietti=this.numero_biglietti.evento1;
            this.nome_classi_eventi[1].n_biglietti=this.numero_biglietti.evento2;
            this.nome_classi_eventi[2].n_biglietti=this.numero_biglietti.evento3;
            this.nome_classi_eventi[3].n_biglietti=this.numero_biglietti.evento4;
            this.nome_classi_eventi[4].n_biglietti=this.numero_biglietti.evento5;
            
        })
    }

});
app.component("museocrea",{
    template:` 
    <ul class="eventi" v-for="x in nome_classi_eventi" :key="x.id">
    <li><div :class="x.classe_nome">
    <p>{{x.nome}}</p>
    <div class="acquisto-biglietti touchspin d-flex align-items-center gap-2 text-center">
        <p v-if="x.n_biglietti > 10">Disponibile</p>
        <p v-else-if="x.n_biglietti > 0 && x.n_biglietti <= 5">Ultime scorte</p>
        <p v-else-if="x.n_biglietti <= 0">Non Disponibile</p>
        <button @click="x.nome_funzioneD" class="btn btn-touchspin" type="button" data-touchspin-down>-</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input disabled>
        <button @click="x.nome_funzioneI" class="btn btn-touchspin" type="button" data-touchspin-up>+</button>
    </div>
</div></li>
</ul>`,
    data(){ //mettiamo tutti e varibiali che stanno nello script sopra
        return{
            nome_classi_eventi:[
            {n_biglietti:0,cart:0,id:6,nome:"Musei Vaticani - Costo Biglietto: 18€",classe_nome:"museo1",nome_funzioneI:() => {this.incrementaCounter6();},nome_funzioneD:() => {this.decrementaCounter6();}},
            {n_biglietti:0,cart:0,id:7,nome:"Musei Capitolini - Costo Biglietto: 11€",classe_nome:"museo2",nome_funzioneI:() => {this.incrementaCounter7();},nome_funzioneD:() => {this.decrementaCounter7();}},
            {n_biglietti:0,cart:0,id:8,nome:"Galleria Borghese - Costo Biglietto: 13€",classe_nome:"museo3",nome_funzioneI:() => {this.incrementaCounter8();},nome_funzioneD:() => {this.decrementaCounter8();}},
            {n_biglietti:0,cart:0,id:9,nome:"Galleria Doria Pamphilj - Costo Biglietto: 15€",classe_nome:"museo4",nome_funzioneI:() => {this.incrementaCounter9();},nome_funzioneD:() => {this.decrementaCounter9();}},
            {n_biglietti:0,cart:0,id:10,nome:"Museo Nazionale di Arte Moderna e Contemporanea - Costo Biglietto: 10€",classe_nome:"museo5",nome_funzioneI:() => {this.incrementaCounter10();},nome_funzioneD:() => {this.decrementaCounter10();}},
            {n_biglietti:0,cart:0,classe_nome:"museo6",nome_funzioneI:() => {this.incrementaCounter11();},nome_funzioneD:() => {this.decrementaCounter11();}},
        ],
            numero_biglietti:[],
        };
        
        
    },
    created() {
        if (tipo === "Musei Vaticani") {
          cart21=contatore_iniziale;
          this.nome_classi_eventi[0].cart=contatore_iniziale;
        
        } else if (tipo === "Musei Capitolini") {
            conta22=contatore_iniziale;
            this.nome_classi_eventi[1].cart=contatore_iniziale;
            console.log(cart21);
        }else if(tipo==="Galleria Borghese"){
            cart23=contatore_iniziale;
            this.nome_classi_eventi[2].cart=contatore_iniziale;
        }else if(tipo==="Galleria Doria Pamphiji"){
            cart24=contatore_iniziale;
            this.nome_classi_eventi[4].cart=contatore_iniziale;
        }else if(tipo==="Galleria Nazionale d'Arte Moderna e Contemporanea"){
            cart25=contatore_iniziale;
            this.nome_classi_eventi[5].cart=contatore_iniziale;
        }else if(tipo=="MAXXI"){
            cart26=contatore_iniziale;
            this.nome_classi_eventi[2].cart=contatore_iniziale;
        }
    },
    methods:{ 
        
        incrementaCounter6(){
            if(parseInt(cart21)>0 && iniziale){
                this.nome_classi_eventi[0].n_biglietti-=cart21;
                console.log(cart21)
                console.log(this.nome_classi_eventi[0].n_biglietti)
                iniziale=false
            }
            if(this.nome_classi_eventi[0].n_biglietti>0){
                cart21++;
                console.log(cart21)
                $("#museo1").val(cart21);
                this.nome_classi_eventi[0].cart++;
                cart_tot+=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti--;
                console.log(cart21)
            }
        },
        decrementaCounter6(){
            if(parseInt(cart21)>0 && iniziale){
                this.nome_classi_eventi[0].n_biglietti-=cart21;
                iniziale=false
            }
            if(this.nome_classi_eventi[0].cart>0){
                cart21--;
                $("#museo1").val(cart21);
                this.nome_classi_eventi[0].cart--;
                cart_tot-=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter7(){
            if(parseInt(cart22)>0 && iniziale){
                this.nome_classi_eventi[1].n_biglietti-=cart22;
                iniziale=false
            }
            if(this.nome_classi_eventi[1].n_biglietti>0){
                cart22++;
                $("#museo2").val(cart22);
                this.nome_classi_eventi[1].cart++;
                cart_tot+=11;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti--;
            }
        },
        decrementaCounter7(){
            if(parseInt(cart22)>0 && iniziale){
                this.nome_classi_eventi[1].n_biglietti-=cart22;
                iniziale=false
            }
            if(this.nome_classi_eventi[1].cart>0){
                cart22--;
                $("#museo2").val(cart22);
                this.nome_classi_eventi[1].cart--;
                cart_tot-=11;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti++;
            }
        },
        incrementaCounter8(){
            if(parseInt(cart23)>0 && iniziale){
                this.nome_classi_eventi[2].n_biglietti-=cart23;
                iniziale=false
            }
            if(this.nome_classi_eventi[2].n_biglietti>0){
                cart23++;
                $("#museo3").val(cart23);
                this.nome_classi_eventi[2].cart++;
                cart_tot+=13;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter8(){
            if(parseInt(cart23)>0 && iniziale){
                this.nome_classi_eventi[2].n_biglietti-=cart23;
                iniziale=false
            }
            if(this.nome_classi_eventi[2].cart>0){
                cart23--;
                $("#museo3").val(cart23);
                this.nome_classi_eventi[2].cart--;
                cart_tot-=13;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter9(){
            if(parseInt(cart24)>0 && iniziale){
                this.nome_classi_eventi[3].n_biglietti-=cart24;
                iniziale=false
            }
            if(this.nome_classi_eventi[3].n_biglietti>0){
                cart24++;
                $("#museo4").val(cart24);
                this.nome_classi_eventi[3].cart++;
                cart_tot+=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti--;
            }
        },
        decrementaCounter9(){
            if(parseInt(cart24)>0 && iniziale){
                this.nome_classi_eventi[3].n_biglietti-=cart24;
                iniziale=false
            }
            if(this.nome_classi_eventi[3].cart>0){
                cart24--;
                $("#museo4").val(cart24);
                this.nome_classi_eventi[3].cart--;
                cart_tot-=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti++;
            }
        },
        incrementaCounter10(){
            if(parseInt(cart25)>0 && iniziale){
                this.nome_classi_eventi[4].n_biglietti-=cart25;
                iniziale=false
            }
            if(this.nome_classi_eventi[4].n_biglietti>0){
                cart25++;
                $("#museo5").val(cart25);
                this.nome_classi_eventi[4].cart++;
                cart_tot+=10;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti--;
            }
        },
        decrementaCounter10(){
            if(parseInt(cart25)>0 && iniziale){
                this.nome_classi_eventi[4].n_biglietti-=cart25;
                iniziale=false
            }
            if(this.nome_classi_eventi[4].cart>0){
                cart25--;
                $("#museo5").val(cart25);
                this.nome_classi_eventi[4].cart--;
                cart_tot-=10;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti++;
            }
        },
        incrementaCounter11(){
            if(parseInt(cart26)>0 && iniziale){
                this.nome_classi_eventi[5].n_biglietti-=cart26;
                iniziale=false
            }
            if(this.nome_classi_eventi[5].n_biglietti>0){
                cart26++;
                $("#museo6").val(cart26);
                this.nome_classi_eventi[5].cart++;
                cart_tot+=12;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[5].n_biglietti--;
            }
        },
        decrementaCounter11(){
            if(parseInt(cart26)>0 && iniziale){
                this.nome_classi_eventi[5].n_biglietti-=cart26;
                iniziale=false
            }
            if(this.nome_classi_eventi[5].cart>0){
                cart26--;
                $("#museo6").val(cart26);
                this.nome_classi_eventi[5].cart--;
                cart_tot-=12;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[5].n_biglietti++;
            }
        },
    },
    mounted(){ //fa al'inizio del server
        $.get("biglietti.php",(data,state)=>{
            this.numero_biglietti = JSON.parse(data);
            this.nome_classi_eventi[0].n_biglietti=this.numero_biglietti.museo1;
            this.nome_classi_eventi[1].n_biglietti=this.numero_biglietti.museo2;
            this.nome_classi_eventi[2].n_biglietti=this.numero_biglietti.museo3;
            this.nome_classi_eventi[3].n_biglietti=this.numero_biglietti.museo4;
            this.nome_classi_eventi[4].n_biglietti=this.numero_biglietti.museo5;
            this.nome_classi_eventi[5].n_biglietti=this.numero_biglietti.museo6;
            
        })
    }

});
app.component("monumenticrea",{
    template:` 
    <ul class="eventi" v-for="x in nome_classi_eventi" :key="x.id">
    <li><div :class="x.classe_nome">
    <p>{{x.nome}}</p>
    <div class="acquisto-biglietti touchspin d-flex align-items-center gap-2 text-center">
        <p v-if="x.n_biglietti > 10">Disponibile</p>
        <p v-else-if="x.n_biglietti > 0 && x.n_biglietti <= 5">Ultime scorte</p>
        <p v-else-if="x.n_biglietti <= 0">Non disponibile</p>
        <button @click="x.nome_funzioneD" class="btn btn-touchspin" type="button" data-touchspin-down>-</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input disabled>
        <button @click="x.nome_funzioneI" class="btn btn-touchspin" type="button" data-touchspin-up>+</button>
    </div>
</div></li>
</ul>`,
    data(){ //mettiamo tutti e varibiali che stanno nello script sopra
        return{
            nome_classi_eventi:[
            {n_biglietti:0,cart:0,id:12,nome:"Colosseo - Costo Biglietto: 16€",classe_nome:"monumento1",nome_funzioneI:() => {this.incrementaCounter1();},nome_funzioneD:() => {this.decrementaCounter1();}},
            {n_biglietti:0,cart:0,id:14,nome:"Ara Pacis - Costo Biglietto: 14€",classe_nome:"monumento3",nome_funzioneI:() => {this.incrementaCounter3();},nome_funzioneD:() => {this.decrementaCounter3();}},
            {n_biglietti:0,cart:0,id:18,nome:"Castel Sant'Angelo - Costo Biglietto: 15€",classe_nome:"monumento7",nome_funzioneI:() => {this.incrementaCounter7();},nome_funzioneD:() => {this.decrementaCounter7();}},
            {n_biglietti:0,cart:0,id:19,nome:"Altare della Patria - Costo Biglietto: 18€",classe_nome:"monumento8",nome_funzioneI:() => {this.incrementaCounter8();},nome_funzioneD:() => {this.decrementaCounter8();}},
        ],  
            numero_biglietti:[],
        }
        
    },
    created() {
        if(tipo=="Colosseo"){
            cart31=contatore_iniziale;
            this.nome_classi_eventi[0].cart=contatore_iniziale;
        }else if(tipo=="Ara Pacis"){
            cart32=contatore_iniziale;
            this.nome_classi_eventi[1].cart=contatore_iniziale;
        }else if(tipo=="Castel Sant'Angelo"){
            cart34=contatore_iniziale;
            this.nome_classi_eventi[2].cart=contatore_iniziale;
        }else if(tipo=="Altare della Patria"){
            cart33=contatore_iniziale;
            this.nome_classi_eventi[3].cart=contatore_iniziale;
        }
    },
    methods:{ 
        incrementaCounter1(){
            if(parseInt(cart31)>0 && iniziale){
                this.nome_classi_eventi[0].n_biglietti-=cart31;
                iniziale=false
            }
            if(this.nome_classi_eventi[0].n_biglietti>0){
                cart31++;
                $("#monumento1").val(cart31);
                this.nome_classi_eventi[0].cart++;
                cart_tot+=16;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                console.log(this.nome_classi_eventi[0].cart);
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter1(){
            if(parseInt(cart31)>0 && iniziale){
                this.nome_classi_eventi[0].n_biglietti-=cart31;
                iniziale=false
            }
            if(this.nome_classi_eventi[0].cart>0){
                cart31--;
                $("#monumento1").val(cart31);
                this.nome_classi_eventi[0].cart--;
                cart_tot-=16;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter3(){
            if(parseInt(cart32)>0 && iniziale){
                this.nome_classi_eventi[2].n_biglietti-=cart32;
                iniziale=false
            }
            if(this.nome_classi_eventi[2].n_biglietti>0){
                cart32++;
                $("#monumento2").val(cart32);
                this.nome_classi_eventi[2].cart++;
                cart_tot+=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter3(){
            if(parseInt(cart32)>0 && iniziale){
                this.nome_classi_eventi[2].n_biglietti-=cart32;
                iniziale=false
            }
            if(this.nome_classi_eventi[2].cart>0){
                cart32--;
                $("#monumento2").val(cart32);
                this.nome_classi_eventi[2].cart--;
                cart_tot-=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter7(){
            if(parseInt(cart34)>0 && iniziale){
                this.nome_classi_eventi[6].n_biglietti-=cart34;
                iniziale=false
            }
            if(this.nome_classi_eventi[6].n_biglietti>0){
                cart34++;
                $("#monumento4").val(cart34);
                this.nome_classi_eventi[6].cart++;
                cart_tot+=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                console.log(this.nome_classi_eventi[0].cart);
                this.nome_classi_eventi[6].n_biglietti--;
            }
        },
        decrementaCounter7(){
            if(parseInt(cart34)>0 && iniziale){
                this.nome_classi_eventi[6].n_biglietti-=cart34;
                iniziale=false
            }
            if(this.nome_classi_eventi[6].cart>0){
                this.cart34--;
                $("#monumento4").val(cart34);
                this.nome_classi_eventi[6].cart--;
                cart_tot-=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[6].n_biglietti++;
            }
        },
        incrementaCounter8(){
            if(parseInt(cart33)>0 && iniziale){
                this.nome_classi_eventi[7].n_biglietti-=cart33;
                iniziale=false
            }
            if(this.nome_classi_eventi[7].n_biglietti>0){
                cart33++;
                $("#monumento3").val(cart33);
                this.nome_classi_eventi[7].cart++;
                cart_tot+=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[7].n_biglietti--;
            }
        },
        decrementaCounter8(){
            if(parseInt(cart33)>0 && iniziale){
                this.nome_classi_eventi[7].n_biglietti-=cart33;
                iniziale=false
            }
            if(this.nome_classi_eventi[7].cart>0){
                cart33--;
                $("#monumento3").val(cart33);
                this.nome_classi_eventi[7].cart--;
                cart_tot-=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[7].n_biglietti++;
            }
        },
        
    },
    mounted(){ //fa al'inizio del server
        $.get("biglietti.php",(data,state)=>{
        
            this.numero_biglietti = JSON.parse(data);
            this.nome_classi_eventi[0].n_biglietti=this.numero_biglietti.monumento1;
            this.nome_classi_eventi[1].n_biglietti=this.numero_biglietti.monumento3;
            this.nome_classi_eventi[2].n_biglietti=this.numero_biglietti.monumento7;
            this.nome_classi_eventi[3].n_biglietti=this.numero_biglietti.monumento8;
        
            
        })
    }

});
app.mount(".content");


function getImporto() {
    if(tipo=="Musei Vaticani" && iniziale){
        $("#museo1").val(contatore_iniziale);
        cart_tot=contatore_iniziale*18;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Musei Capitolini" && iniziale){
        cart_tot=contatore_iniziale*11;
        $("#museo2").val(contatore_iniziale);
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Galleria Borghese" && iniziale){
        cart_tot=contatore_iniziale*13;
        $("#museo3").val(contatore_iniziale);
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Galleria Doria Pamphiji" && iniziale){
        $("#museo4").val(contatore_iniziale);
        cart_tot=contatore_iniziale*15;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
        return contatore_iniziale;
    }else if(tipo=="Galleria Nazionale d'Arte Moderna e Contemporanea" && iniziale){
        $("#museo5").val(contatore_iniziale);
        cart_tot=contatore_iniziale*10;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="MAXXI" && iniziale){
        $("#museo6").val(contatore_iniziale);
        cart_tot=contatore_iniziale*12;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Colosseo" && iniziale){
        $("#monumento1").val(contatore_iniziale);
        cart_tot=contatore_iniziale*16;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Ara Pacis" && iniziale){
        $("#monumento2").val(contatore_iniziale);
        cart_tot=contatore_iniziale*14;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Castel Sant'Angelo" && iniziale){
        $("#monumento4").val(contatore_iniziale);
        cart_tot=contatore_iniziale*15;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Altare della Patria" && iniziale){
        $("#monumento3").val(contatore_iniziale);
        cart_tot=contatore_iniziale*18;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Concerto Primo Maggio" && iniziale){
        $("#evento1").val(contatore_iniziale);
        cart_tot=contatore_iniziale*20;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Boccea Street" && iniziale){
        $("#evento2").val(contatore_iniziale);
        cart_tot=contatore_iniziale*14;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Festival Delle Scienze" && iniziale){
        $("#evento3").val(contatore_iniziale);
        cart_tot=contatore_iniziale*32;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Vinalia Priora" && iniziale){
        $("#evento4").val(contatore_iniziale);
        cart_tot=contatore_iniziale*15;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }else if(tipo=="Rugantino al Sistina" && iniziale){
        $("#evento5").val(contatore_iniziale);
        cart_tot=contatore_iniziale*50;
        $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
    }

}