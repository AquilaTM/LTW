
let app =Vue.createApp({ //costruttore
    data: function(){ //mettiamo coppie chiave-valore
       return{
          cart1:0,
          cart_tot:0,
        }
    },
   
});

app.component("eventocrea",{
    template:` 
    <ul class="eventi" v-for="x in nome_classi_eventi" :key="x.id">
    <li><div :class="x.classe_nome">
    <p>{{x.nome}}</p>
    <div class="acquisto-biglietti touchspin d-flex align-items-center gap-2 text-center">
        <button @click="x.nome_funzioneI" class="btn btn-danger" type="button" data-touchspin-up>+</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input>
        <button @click="x.nome_funzioneD" class="btn btn-primary" type="button" data-touchspin-down>-</button>
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
            {n_biglietti:0,cart:0,id:1,nome:"Concerto Primo Maggio",classe_nome:"evento1",nome_funzioneI:() => {this.incrementaCounter1();},nome_funzioneD:() => {this.decrementaCounter1();}},
            {n_biglietti:0,cart:0,id:2,nome:"Boccea Street",classe_nome:"evento2",nome_funzioneI:() => {this.incrementaCounter2();},nome_funzioneD:() => {this.decrementaCounter2();}},
            {n_biglietti:0,cart:0,id:3,nome:"Festival delle Scienze",classe_nome:"evento3",nome_funzioneI:() => {this.incrementaCounter3();},nome_funzioneD:() => {this.decrementaCounter3();}},
            {n_biglietti:0,cart:0,id:4,nome:"Vinalia Priora",classe_nome:"evento4",nome_funzioneI:() => {this.incrementaCounter4();},nome_funzioneD:() => {this.decrementaCounter4();}},
            {n_biglietti:0,cart:0,id:5,nome:"Rugantino al Sistina",classe_nome:"evento5",nome_funzioneI:() => {this.incrementaCounter5();},nome_funzioneD:() => {this.decrementaCounter5();}},
            ],
            numero_biglietti:[],
        }
        
    },
    methods:{ 
        incrementaCounter1(){
            if(this.nome_classi_eventi[0].n_biglietti>0){
                this.nome_classi_eventi[0].cart++;
                this.cart_tot++;
                console.log(this.nome_classi_eventi[0].cart);
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter1(){
            if(this.nome_classi_eventi[0].cart>0){
                this.nome_classi_eventi[0].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter2(){
            if(this.nome_classi_eventi[1].n_biglietti>0){
                this.nome_classi_eventi[1].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[1].n_biglietti--;
            }
        },
        decrementaCounter2(){
            if(this.nome_classi_eventi.cart[1]>0){
                this.nome_classi_eventi[1].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[1].n_biglietti++;
            }
        },
        incrementaCounter3(){
            if(this.nome_classi_eventi[2].n_biglietti>0){
                this.nome_classi_eventi[2].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter3(){
            if(this.nome_classi_eventi.cart[2]>0){
                this.nome_classi_eventi[2].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter4(){
            if(this.nome_classi_eventi[3].n_biglietti>0){
                this.nome_classi_eventi[3].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[3].n_biglietti--;
            }
        },
        decrementaCounter4(){
            if(this.nome_classi_eventi.cart[3]>0){
                this.nome_classi_eventi[3].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[3].n_biglietti++;
            }
        },
        incrementaCounter5(){
            if(this.nome_classi_eventi[4].n_biglietti>0){
                this.nome_classi_eventi[4].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[4].n_biglietti--;
            }
        },
        decrementaCounter5(){
            if(this.nome_classi_eventi.cart[4]>0){
                this.nome_classi_eventi[4].cart--;
                this.cart_tot--;
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
        <button @click="x.nome_funzioneI" class="btn btn-danger" type="button" data-touchspin-up>+</button>
        <input type="number" :value="x.cart" min="0" class="form-control text-center" data-touchspin-input>
        <button @click="x.nome_funzioneD" class="btn btn-primary" type="button" data-touchspin-down>-</button>
        <p v-if="x.n_biglietti > 10">Disponibile</p>
        <p v-else-if="x.n_biglietti > 0 && x.n_biglietti <= 5">Ultime scorte</p>
        <p v-else-if="x.n_biglietti <= 0">Non disponibile</p>

    </div>
</div></li>
</ul>`,
    data(){ //mettiamo tutti e varibiali che stanno nello script sopra
        return{
            nome_classi_eventi:[
            {n_biglietti:0,cart:0,id:6,nome:"Musei Vaticani",classe_nome:"museo1",nome_funzioneI:() => {this.incrementaCounter6();},nome_funzioneD:() => {this.decrementaCounter6();}},
            {n_biglietti:0,cart:0,id:7,nome:"Musei Capitolini",classe_nome:"museo2",nome_funzioneI:() => {this.incrementaCounter7();},nome_funzioneD:() => {this.decrementaCounter7();}},
            {n_biglietti:0,cart:0,id:8,nome:"Galleria Borghese",classe_nome:"museo3",nome_funzioneI:() => {this.incrementaCounter8();},nome_funzioneD:() => {this.decrementaCounter8();}},
            {n_biglietti:0,cart:0,id:9,nome:"Galleria Doria Pamphilj",classe_nome:"museo4",nome_funzioneI:() => {this.incrementaCounter9();},nome_funzioneD:() => {this.decrementaCounter9();}},
            {n_biglietti:0,cart:0,id:10,nome:"Museo Nazionale di Arte Moderna e Contemporanea",classe_nome:"museo5",nome_funzioneI:() => {this.incrementaCounter10();},nome_funzioneD:() => {this.decrementaCounter10();}},
            {n_biglietti:0,cart:0,id:11,nome:"MAXXI",classe_nome:"museo6",nome_funzioneI:() => {this.incrementaCounter11();},nome_funzioneD:() => {this.decrementaCounter11();}},
        ],
            numero_biglietti:[],
        }
        
    },
    methods:{ 
        incrementaCounter6(){
            if(this.nome_classi_eventi[0].n_biglietti>0){
                this.nome_classi_eventi[0].cart++;
                this.cart_tot++;
                console.log(this.nome_classi_eventi[0].cart);
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter6(){
            if(this.nome_classi_eventi[0].cart>0){
                this.nome_classi_eventi[0].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[0].n_biglietti++;
            }
        },
        incrementaCounter7(){
            if(this.nome_classi_eventi[1].n_biglietti>0){
                this.nome_classi_eventi[1].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[1].n_biglietti--;
            }
        },
        decrementaCounter7(){
            if(this.nome_classi_eventi.cart[1]>0){
                this.nome_classi_eventi[1].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[1].n_biglietti++;
            }
        },
        incrementaCounter8(){
            if(this.nome_classi_eventi[2].n_biglietti>0){
                this.nome_classi_eventi[2].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[2].n_biglietti--;
            }
        },
        decrementaCounter8(){
            if(this.nome_classi_eventi.cart[2]>0){
                this.nome_classi_eventi[2].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[2].n_biglietti++;
            }
        },
        incrementaCounter9(){
            if(this.nome_classi_eventi[3].n_biglietti>0){
                this.nome_classi_eventi[3].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[3].n_biglietti--;
            }
        },
        decrementaCounter9(){
            if(this.nome_classi_eventi.cart[3]>0){
                this.nome_classi_eventi[3].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[3].n_biglietti++;
            }
        },
        incrementaCounter10(){
            if(this.nome_classi_eventi[4].n_biglietti>0){
                this.nome_classi_eventi[4].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[4].n_biglietti--;
            }
        },
        decrementaCounter10(){
            if(this.nome_classi_eventi.cart[4]>0){
                this.nome_classi_eventi[4].cart--;
                this.cart_tot--;
                this.nome_classi_eventi[4].n_biglietti++;
            }
        },
        incrementaCounter11(){
            if(this.nome_classi_eventi[5].n_biglietti>0){
                this.nome_classi_eventi[5].cart++;
                this.cart_tot++;
                this.nome_classi_eventi[5].n_biglietti--;
            }
        },
        decrementaCounter11(){
            if(this.nome_classi_eventi.cart[5]>0){
                this.nome_classi_eventi[5].cart--;
                this.cart_tot--;
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
app.mount(".content");