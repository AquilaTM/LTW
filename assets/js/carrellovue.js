
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
            {n_biglietti:0,cart:0,id:1,nome:"Biglietto Colosseo",classe_nome:"evento1",nome_funzioneI:() => {this.incrementaCounter1();},nome_funzioneD:() => {this.decrementaCounter1();}},
            {n_biglietti:0,cart:0,id:2,nome:"Evento 2",classe_nome:"evento2",nome_funzioneI:() => {this.incrementaCounter2();},nome_funzioneD:() => {this.decrementaCounter2();}},
            ],
            numero_biglietti:[],
        }
        
    },
    methods:{ 
        incrementaCounter1(){
            if(this.nome_classi_eventi[0].n_biglietti>0){
                this.nome_classi_eventi[0].cart++;
                this.cart_tot++;
                console.log(this.nome_classi_eventi[0].n_biglietti);
                this.nome_classi_eventi[0].n_biglietti--;
            }
        },
        decrementaCounter1(){
            if(this.nome_classi_eventi.cart[0]>0){
                this.nome_classi_eventi[0].cart--;
                this.cart_tot--;
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
            }
        },
    },
    mounted(){ //fa al'inizio del server
        $.get("biglietti.php",(data,state)=>{
            console.log(data); 
            this.numero_biglietti = JSON.parse(data);
            this.nome_classi_eventi[0].n_biglietti=this.numero_biglietti.evento1;
            this.nome_classi_eventi[1].n_biglietti=this.numero_biglietti.evento2;
            
        })
    }

});

app.mount("#eventi");