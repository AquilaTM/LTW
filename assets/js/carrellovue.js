
var cart_tot=0;
$('#importo-totale').text('Importo totale: ' + cart_tot + '€');
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
        <button @click="x.nome_funzioneD" class="btn btn-touchspin" type="button" data-touchspin-down>-</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input>
        <button @click="x.nome_funzioneI" class="btn btn-touchspin" type="button" data-touchspin-up>+</button>
        <p v-if="x.n_biglietti > 10">Disponibile</p>
        <p v-else-if="x.n_biglietti > 0 && x.n_biglietti <= 5">Ultime scorte</p>
        <p v-else-if="x.n_biglietti <= 0">Non disponibile</p>

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
            cart11:0,
            cart12:0,
            cart13:0,
            cart14:0,
            cart15:0,
        }
        
    },
    methods:{ 
        incrementaCounter1(){
            if(this.nome_classi_eventi[0].n_biglietti>0){
                this.cart11++;
                console.log(this.cart11);
                this.nome_classi_eventi[0].cart++;
                cart_tot+=20;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                console.log(cart_tot);
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter1(){
            if(this.nome_classi_eventi[0].cart>0){
                this.cart11--;
                this.nome_classi_eventi[0].cart--;
                cart_tot-=20;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter2(){
            if(this.nome_classi_eventi[1].n_biglietti>0){
                this.cart12++;
                this.nome_classi_eventi[1].cart++;
                cart_tot+=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti--;
            }
        },
        decrementaCounter2(){
            if(this.nome_classi_eventi[1].cart>0){
                this.cart12--;
                this.nome_classi_eventi[1].cart--;
                cart_tot-=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti++;
            }
        },
        incrementaCounter3(){
            if(this.nome_classi_eventi[2].n_biglietti>0){
                this.cart13++;
                this.nome_classi_eventi[2].cart++;
                this.cart_tot+=32;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter3(){
            if(this.nome_classi_eventi[2].cart>0){
                this.cart13--;
                this.nome_classi_eventi[2].cart--;
                this.cart_tot-=32;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter4(){
            if(this.nome_classi_eventi[3].n_biglietti>0){
                this.cart14++;
                this.nome_classi_eventi[3].cart++;
                this.cart_tot+=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti--;
            }
        },
        decrementaCounter4(){
            if(this.nome_classi_eventi[3].cart>0){
                this.cart14--;
                this.nome_classi_eventi[3].cart--;
                this.cart_tot-=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti++;
            }
        },
        incrementaCounter5(){
            if(this.nome_classi_eventi[4].n_biglietti>0){
                this.cart15++;
                this.nome_classi_eventi[4].cart++;
                this.cart_tot+=50;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti--;
            }
        },
        decrementaCounter5(){
            if(this.nome_classi_eventi[4].cart>0){
                this.cart15--;
                this.nome_classi_eventi[4].cart--;
                this.cart_tot-=50;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti++;
            }
        },
    },
    mounted(){ //fa al'inizio del server
        $.get("biglietti.php",(data,state)=>{
            console.log(data); 
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
        <button @click="x.nome_funzioneD" class="btn btn-touchspin" type="button" data-touchspin-down>-</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input>
        <button @click="x.nome_funzioneI" class="btn btn-touchspin" type="button" data-touchspin-up>+</button>
        <p v-if="x.n_biglietti > 10">Disponibile</p>
        <p v-else-if="x.n_biglietti > 0 && x.n_biglietti <= 5">Ultime scorte</p>
        <p v-else-if="x.n_biglietti <= 0">Non disponibile</p>

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
            {n_biglietti:0,cart:0,id:11,nome:"MAXXI - Costo Biglietto: 12€",classe_nome:"museo6",nome_funzioneI:() => {this.incrementaCounter11();},nome_funzioneD:() => {this.decrementaCounter11();}},
        ],
            numero_biglietti:[],
            cart21:0,
            cart22:0,
            cart23:0,
            cart24:0,
            cart25:0,
            cart26:0,
        }
        
    },
    methods:{ 
        incrementaCounter6(){
            if(this.nome_classi_eventi[0].n_biglietti>0){
                this.cart21++;
                this.nome_classi_eventi[0].cart++;
                this.cart_tot+=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                console.log(this.nome_classi_eventi[0].cart);
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter6(){
            if(this.nome_classi_eventi[0].cart>0){
                this.cart21--;
                this.nome_classi_eventi[0].cart--;
                this.cart_tot-=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter7(){
            if(this.nome_classi_eventi[1].n_biglietti>0){
                this.cart22++;
                this.nome_classi_eventi[1].cart++;
                cart_tot+=11;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti--;
            }
        },
        decrementaCounter7(){
            if(this.nome_classi_eventi[1].cart>0){
                this.cart22--;
                this.nome_classi_eventi[1].cart--;
                cart_tot-=11;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[1].n_biglietti++;
            }
        },
        incrementaCounter8(){
            if(this.nome_classi_eventi[2].n_biglietti>0){
                this.cart23++;
                this.nome_classi_eventi[2].cart++;
                cart_tot+=13;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter8(){
            if(this.nome_classi_eventi[2].cart>0){
                this.cart23--;
                this.nome_classi_eventi[2].cart--;
                cart_tot-=13;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter9(){
            if(this.nome_classi_eventi[3].n_biglietti>0){
                this.cart24++;
                this.nome_classi_eventi[3].cart++;
                cart_tot+=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti--;
            }
        },
        decrementaCounter9(){
            if(this.nome_classi_eventi[3].cart>0){
                this.cart24--;
                this.nome_classi_eventi[3].cart--;
                cart_tot-=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[3].n_biglietti++;
            }
        },
        incrementaCounter10(){
            if(this.nome_classi_eventi[4].n_biglietti>0){
                this.cart25++;
                this.nome_classi_eventi[4].cart++;
                cart_tot+=10;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti--;
            }
        },
        decrementaCounter10(){
            if(this.nome_classi_eventi[4].cart>0){
                this.cart25--;
                this.nome_classi_eventi[4].cart--;
                cart_tot-=10;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[4].n_biglietti++;
            }
        },
        incrementaCounter11(){
            if(this.nome_classi_eventi[5].n_biglietti>0){
                this.cart26++;
                this.nome_classi_eventi[5].cart++;
                cart_tot+=12;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[5].n_biglietti--;
            }
        },
        decrementaCounter11(){
            if(this.nome_classi_eventi[5].cart>0){
                this.cart26--;
                this.nome_classi_eventi[5].cart--;
                cart_tot-=12;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[5].n_biglietti++;
            }
        },
    },
    mounted(){ //fa al'inizio del server
        $.get("biglietti.php",(data,state)=>{
            console.log(data); 
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
        <button @click="x.nome_funzioneD" class="btn btn-touchspin" type="button" data-touchspin-down>-</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input>
        <button @click="x.nome_funzioneI" class="btn btn-touchspin" type="button" data-touchspin-up>+</button>
        <p v-if="x.n_biglietti > 10">Disponibile</p>
        <p v-else-if="x.n_biglietti > 0 && x.n_biglietti <= 5">Ultime scorte</p>
        <p v-else-if="x.n_biglietti <= 0">Non disponibile</p>

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
            cart31:0,
            cart32:0,
            cart33:0,
            cart34:0,
        }
        
    },
    methods:{ 
        incrementaCounter1(){
            if(this.nome_classi_eventi[0].n_biglietti>0){
                this.cart31++;
                this.nome_classi_eventi[0].cart++;
                cart_tot+=16;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                console.log(this.nome_classi_eventi[0].cart);
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter1(){
            if(this.nome_classi_eventi[0].cart>0){
                this.cart31--;
                this.nome_classi_eventi[0].cart--;
                cart_tot-=16;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter3(){
            if(this.nome_classi_eventi[2].n_biglietti>0){
                this.cart32++;
                this.nome_classi_eventi[2].cart++;
                cart_tot+=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter3(){
            if(this.nome_classi_eventi[2].cart>0){
                this.cart32--;
                this.nome_classi_eventi[2].cart--;
                cart_tot-=14;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter7(){
            if(this.nome_classi_eventi[6].n_biglietti>0){
                this.cart35--;
                this.nome_classi_eventi[6].cart++;
                cart_tot+=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                console.log(this.nome_classi_eventi[0].cart);
                this.nome_classi_eventi[6].n_biglietti--;
            }
        },
        decrementaCounter7(){
            if(this.nome_classi_eventi[6].cart>0){
                this.cart34--;
                this.nome_classi_eventi[6].cart--;
                cart_tot-=15;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[6].n_biglietti++;
            }
        },
        incrementaCounter8(){
            if(this.nome_classi_eventi[7].n_biglietti>0){
                this.cart33++;
                this.nome_classi_eventi[7].cart++;
                cart_tot+=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[7].n_biglietti--;
            }
        },
        decrementaCounter8(){
            if(this.nome_classi_eventi[7].cart>0){
                this.cart33--;
                this.nome_classi_eventi[7].cart--;
                cart_tot-=18;
                $('#importo-totale').text('Importo totale: ' + cart_tot + '€');
                this.nome_classi_eventi[7].n_biglietti++;
            }
        },
        
    },
    mounted(){ //fa al'inizio del server
        $.get("biglietti.php",(data,state)=>{
            console.log(data); 
            this.numero_biglietti = JSON.parse(data);
            this.nome_classi_eventi[0].n_biglietti=this.numero_biglietti.monumento1;
            this.nome_classi_eventi[1].n_biglietti=this.numero_biglietti.monumento3;
            this.nome_classi_eventi[2].n_biglietti=this.numero_biglietti.monumento7;
            this.nome_classi_eventi[3].n_biglietti=this.numero_biglietti.monumento8;
        
            
        })
    }

});
app.mount(".content");
