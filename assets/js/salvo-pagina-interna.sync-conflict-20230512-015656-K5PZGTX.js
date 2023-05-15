$(document).ready(function(){
   //inzio musei
    $(".Musei-Vaticani").click(function(){
        localStorage.setItem("titolo", "Musei Vaticani");
        localStorage.setItem("introduzione","I Musei Vaticani sono un vero e proprio scrigno di tesori, una testimonianza dell'arte e della cultura di ogni epoca.\n - Gabriele D'Annunzio");
        localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3659257618892!2d12.451066376146175!3d41.90649176363587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6063839bc129%3A0xcfe0eca0526416b6!2sMusei%20Vaticani!5e0!3m2!1sit!2sit!4v1682691769307!5m2!1sit!2sit");
        localStorage.setItem("storia","I Musei Vaticani hanno una lunga e ricca storia che risale al XV secolo, quando il Papa Sisto IV fondò la Biblioteca Vaticana nel 1475, dando così inizio alla collezione di manoscritti e libri antichi. Nel corso del tempo, i Papi successivi hanno continuato ad arricchire le collezioni con opere d'arte e oggetti di valore. Nel 1506, Papa Giulio II acquistò la statua del Laocoonte e, poco dopo, commissionò a Michelangelo il famoso ciclo di affreschi nella Cappella Sistina. Nel 1514, Papa Leone X aprì la Biblioteca Vaticana al pubblico, dando inizio alla tradizione di accessibilità delle collezioni papali.Nel 1756, Papa Benedetto XIV aprì la Pinacoteca Vaticana, una galleria d'arte che raccoglieva le opere più importanti della collezione pontificia. Nel corso dei secoli successivi, i Musei Vaticani si sono arricchiti di nuove collezioni e nuovi spazi espositivi, tra cui la Sala degli Animali, il Museo Egizio, il Museo Pio-Clementino e la Stanza di Raffaello. Nel XX secolo, i Musei Vaticani sono stati ulteriormente ampliati e modernizzati, con la creazione di nuovi edifici espositivi e la realizzazione di importanti opere di restauro e conservazione. Oggi i Musei Vaticani sono uno dei più importanti musei del mondo, con una collezione di opere d'arte e oggetti di valore che spaziano dall'antichità al Rinascimento, fino ai tempi moderni.")
        localStorage.setItem("immagine","/assets/img/musei vaticani storia.jpg")
        localStorage.setItem("immagine1","/assets/img/musei vaticani.jpg")
        localStorage.setItem("hero","hero6")
        localStorage.setItem("vedo",true)
        localStorage.setItem("prezzo biglietto",18)
        $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.museo1);
        })
    });
 
     $(".Capitolini").click(function(){
        localStorage.setItem("titolo", "Musei Capitolini");
        localStorage.setItem("introduzione","I Musei Capitolini sono il cuore della Roma antica, una finestra sulla grandezza dell'impero.\n - Robert Hughes, critico d'arte e scrittore australiano.");
        localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9958302220734!2d12.479982776145636!3d41.892946764484414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604f7906ecf3%3A0xdea1467ab6c9ecfb!2sMusei%20Capitolini!5e0!3m2!1sit!2sit!4v1682756204832!5m2!1sit!2sit");
        localStorage.setItem("storia","I Musei Capitolini sono un complesso museale situato sulla collina del Campidoglio a Roma, in Italia. Il complesso è composto da tre edifici principali: Palazzo dei Conservatori, Palazzo Nuovo e Palazzo Senatorio, che ospitano una vasta collezione di opere d'arte e oggetti archeologici. \n La collezione del museo è stata fondata nel 1471, quando il papa Sisto IV donò al popolo romano una serie di antichità provenienti dal suo palazzo. Nel corso dei secoli, la collezione è stata arricchita grazie a numerose acquisizioni, soprattutto nel Rinascimento, quando i papi e le famiglie aristocratiche romane acquistavano opere d'arte per decorare le loro dimore.\n Oggi i Musei Capitolini sono considerati uno dei più importanti musei d'arte e di archeologia al mondo. Tra le opere più famose esposte ci sono la statua di Marco Aurelio a cavallo, la Lupa Capitolina, la Venere Capitolina, il Galata morente e molte altre opere di grande valore artistico e storico. \n Oltre alle opere d'arte, i Musei Capitolini offrono anche una vista spettacolare sulla città di Roma, con la piazza del Campidoglio, progettata da Michelangelo, al centro. Il museo è stato ampliato e ristrutturato più volte nel corso dei secoli ed è stato aperto al pubblico nel 1734. Oggi i Musei Capitolini sono una delle principali attrazioni turistiche di Roma, visitati da milioni di turisti ogni anno.")
        localStorage.setItem("immagine","/assets/img/musei capitolini storia.jpg")
        localStorage.setItem("immagine1","/assets/img/musei capitolini.jpg")
        localStorage.setItem("hero","hero11")
        localStorage.setItem("vedo",true)
        localStorage.setItem("prezzo biglietto",11)
        $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.museo2);
        })

     });

     $(".borghese").click(function(){
        localStorage.setItem("titolo", "Galleria Borghese");
        localStorage.setItem("introduzione","La Galleria Borghese è una gemma dell'arte italiana, un luogo magico che emoziona e affascina.\n - Alberto Angela");
        localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.480151691213!2d12.47906834589516!3d41.90919751941938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f610456d7e6ab%3A0x1bb4a47639e07bbf!2sMuseo%20e%20Galleria%20Borghese!5e0!3m2!1sit!2sit!4v1682692438717!5m2!1sit!2sit");
        localStorage.setItem("storia","La Galleria Borghese è un museo d'arte situato a Roma, nel parco della Villa Borghese. Fu fondata nel 1613 da Scipione Borghese, un collezionista d'arte e cardinale della Chiesa cattolica. Scipione Borghese era un mecenate delle arti e un appassionato collezionista, che aveva raccolto opere di artisti del calibro di Raffaello, Caravaggio, Tiziano e Bernini.\n La collezione della Galleria Borghese si arricchì ulteriormente con il passare del tempo, grazie ai successivi membri della famiglia Borghese che continuavano ad aggiungere opere d'arte alla collezione. Nel 1808, la collezione venne acquisita dallo Stato italiano e la Galleria Borghese divenne un museo pubblico.\n La Galleria Borghese è famosa per le sue opere d'arte di grande valore e bellezza, tra cui il Ratto di Proserpina e il David di Bernini, la Madonna dei Palafrenieri di Caravaggio, la Venere vincitrice di Canova e molte altre opere di artisti famosi. La Galleria Borghese è uno dei musei d'arte più importanti al mondo e continua ad attirare visitatori da tutto il mondo per ammirare le sue collezioni.")
        localStorage.setItem("immagine","/assets/img/galleria borghese storia.jpg")
        localStorage.setItem("immagine1","/assets/img/galleria borghese.jpg")
        localStorage.setItem("hero","hero7")
        localStorage.setItem("vedo",true)
        localStorage.setItem("prezzo biglietto",13)
        $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.museo3);
        })
     });

     $(".doria-pamphiji").click(function(){
        localStorage.setItem("titolo", "Galleria Doria Pamphiji");
        localStorage.setItem("introduzione","la galleria ospita una delle più grandi e suggestive collezioni d'arte private di tutta Roma");
        localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.8749921496187!2d12.479594076146705!3d41.917045962974825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60fd228cccc5%3A0x2cf2aafd0eff0128!2sGalleria%20Nazionale%20d&#39;Arte%20Moderna%20e%20Contemporanea!5e0!3m2!1sit!2sit!4v1682697484882!5m2!1sit!2sit" );
        localStorage.setItem("storia"," La Galleria Doria Pamphilj è una galleria d'arte che si trova a Roma, in Italia, all'interno del Palazzo Doria Pamphilj. La galleria è stata fondata nel 1651 dalla famiglia Pamphilj, una delle famiglie nobili romane più importanti dell'epoca. \n La collezione d'arte della galleria è stata accumulata nel corso dei secoli attraverso matrimoni e acquisizioni, ed è una delle più grandi e prestigiose di Roma. La galleria contiene opere di artisti italiani e internazionali del Rinascimento e del Barocco, tra cui Raffaello, Tiziano, Caravaggio, Bernini e Velázquez.\n Nel corso dei secoli, il palazzo e la galleria sono stati ampliati e rinnovati. Nel XIX secolo, la galleria è stata aperta al pubblico per la prima volta, diventando uno dei luoghi d'arte più visitati di Roma. \nOggi, la Galleria Doria Pamphilj continua a essere gestita dalla famiglia Pamphilj ed è aperta al pubblico. È un'importante attrazione turistica a Roma, non solo per la sua collezione d'arte, ma anche per il palazzo stesso, con le sue sale riccamente decorate e le sue magnifiche sale da ballo.")
        localStorage.setItem("immagine","/assets/img/galleria doria pamphiji storia.jpg")
        localStorage.setItem("immagine1","/assets/img/galleria doria pamphiji.jpg")
        localStorage.setItem("hero","hero10")
        localStorage.setItem("vedo",true)
        localStorage.setItem("prezzo biglietto",15)
        $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.museo4);
        })
     });

     $(".museo-nazionale").click(function(){
        localStorage.setItem("titolo", "Galleria Nazionale d'Arte Moderna e Contemporanea");
        localStorage.setItem("introduzione","La Galleria Nazionale d'Arte Moderna e Contemporanea custodisce la più completa collezione dedicata all'arte italiana e straniera dal XIX secolo a oggi");
        localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.8749921496187!2d12.479594076146705!3d41.917045962974825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60fd228cccc5%3A0x2cf2aafd0eff0128!2sGalleria%20Nazionale%20d&#39;Arte%20Moderna%20e%20Contemporanea!5e0!3m2!1sit!2sit!4v1682697484882!5m2!1sit!2sit");
        localStorage.setItem("storia","La Galleria Nazionale d'Arte Moderna e Contemporanea, nota anche come GNAM, è un museo d'arte situato a Roma, Italia. Fondato nel 1883, è uno dei più antichi musei d'arte moderna del mondo. La GNAM ospita una vasta collezione di opere d'arte italiane e straniere che coprono un arco temporale che va dal neoclassicismo del XIX secolo all'arte contemporanea. \n La collezione permanente della GNAM comprende oltre 20.000 opere, tra cui dipinti, sculture, fotografie, disegni, stampe e installazioni d'arte contemporanea. Tra gli artisti rappresentati nella collezione ci sono Giacomo Balla, Umberto Boccioni, Carlo Carrà, Giorgio de Chirico, Alberto Burri, Lucio Fontana, Alighiero Boetti, Mario Merz e molti altri. \n La GNAM organizza anche mostre temporanee e eventi culturali per presentare al pubblico l'arte contemporanea italiana e internazionale. Il museo si trova nel parco di Villa Borghese, in un edificio progettato dall'architetto Cesare Bazzani e ampliato in seguito da altri architetti. La Galleria Nazionale d'Arte Moderna e Contemporanea è una tappa importante per gli amanti dell'arte che visitano Roma.")
        localStorage.setItem("immagine","/assets/img/galleria nazionale storia.jpg")
        localStorage.setItem("immagine1","/assets/img/galleria nazionale.jpg")
        localStorage.setItem("hero","hero9")
        localStorage.setItem("vedo",true)
        localStorage.setItem("prezzo biglietto",10)
        $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.museo5);
        })
     });

     $(".MAXXI").click(function(){
        localStorage.setItem("titolo", "MAXXI");
        localStorage.setItem("introduzione"," La collezione del MAXXI Arte è costituita da oltre 400 opere che testimoniano la produzione artistica internazionale, con una particolare attenzione alle esperienze italiane e a quegli artisti stranieri la cui ricerca è legata al contesto italiano.");
        localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.3537644270227!2d12.464280776147193!3d41.928249062272755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60e9c2dc3f8d%3A0xac80daa2019abd6c!2sMAXXI%20-%20Museo%20nazionale%20delle%20arti%20del%20XXI%20secolo!5e0!3m2!1sit!2sit!4v1682693821310!5m2!1sit!2sit");
        localStorage.setItem("storia","  Il MAXXI, acronimo di Museo nazionale delle arti del XXI secolo, è un museo d'arte moderna e contemporanea situato a Roma, nel quartiere Flaminio. È stato inaugurato nel 2010 ed è stato progettato dall'architetto anglo-iracheno Zaha Hadid, che ha vinto un concorso internazionale per la sua realizzazione. \n Il MAXXI si presenta come un edificio innovativo e futuristico, caratterizzato da linee sinuose, curve e superfici lisce. È composto da due sezioni principali: una sezione permanente, che ospita la collezione del museo, e una sezione temporanea, che ospita mostre e progetti artistici contemporanei. \n La collezione permanente del MAXXI è dedicata all'arte del XXI secolo e comprende opere di artisti italiani e internazionali, tra cui Anish Kapoor, Francesco Vezzoli, Michelangelo Pistoletto, Yayoi Kusama e molti altri. Il museo organizza anche mostre temporanee di artisti emergenti e affermati, nonché eventi e progetti culturali. \n Il MAXXI è diventato un importante punto di riferimento per l'arte moderna e contemporanea in Italia e nel mondo, grazie alla sua architettura innovativa e alle sue collezioni di valore.")
        localStorage.setItem("immagine","/assets/img/MAXXI storia.jpg")
        localStorage.setItem("immagine1","/assets/img/MAXXI.jpeg")
        localStorage.setItem("hero","hero8")
        localStorage.setItem("vedo",true)
        localStorage.setItem("prezzo biglietto",12)
        $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.museo6);
      })
     });
     
     //inizio monumenti

     $(".colosseo").click(function(){
      localStorage.setItem("titolo", "Colosseo");
      localStorage.setItem("introduzione","Il Colosseo è il simbolo di Roma, la città eterna, e una delle sette meraviglie del mondo antico.\n - Andrea Bocelli.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4501.861536393463!2d12.4894457200809!3d41.89025547990332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1682350448633!5m2!1sit!2sit");
      localStorage.setItem("storia","Il Colosseo era anticamente chiamato Amphitheatrum Flavium e fu progettato come arena di spettacoli per contenere un numero di spettatori compreso fra i 50mila e i 75mila. La sua edificazione fu voluta per ordine di Vespasiano nel 72 e l'anfiteatro fu inaugurato 8 anni dopo, sotto il regno di Tito. Originariamente aveva un'altezza di 52 metri per una superficie interna di oltre 3300 mq. La sua pianta e l'architettura esterna sono chiaramente ispirati allo stile imperiale molto in voga in quel secolo. Si tratta di un piccolo capolavoro di architettura in quanto la sua struttura ad archi si basa su un complesso sistema di architravi davvero innovativo per l'epoca. La sua edificazione fu pensata per realizzare un luogo dove offrire spettacoli pubblici a spese dello stato e intrattenere la popolazione. Proprio per questo le sue dimensioni erano così imponenti tanto da meritargli nel medioevo l'appellativo di colosseum, traducibile con colossale, che si riferiva alla sua imponenza. Nel corso dei secoli l'appellativo sostituì completamente il nome proprio dell'anfiteatro Flavio che oggi è conosciuto da tutti proprio come Colosseo. Al di sotto dell'arena dei combattimenti fu realizzato un complesso sistema di corridoi e di stanze per ospitare i protagonisti degli spettacoli che venivano messi in scena. Al Colosseo si esibivano i gladiatori per gli incontri di lotta ma venivano inscenate anche rievocazioni di battaglie storiche oppure simulazioni di incredibili cacce. Recenti studi hanno invece dimostrato come sia totalmente priva di fondamento storico la notizia che vuole il Colosseo teatro di uccisioni di massa di cristiani, sbranati dai leoni, all'epoca di Nerone e di Caligola.")
      localStorage.setItem("immagine","/assets/img/colosseum-description.jpg")
      localStorage.setItem("immagine1","/assets/img/bg-colosseo.jpg")
      localStorage.setItem("hero","hero")
      localStorage.setItem("vedo",true)
      localStorage.setItem("prezzo biglietto",16)
      $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento1);
      })
  });

   $(".ara_pacis").click(function(){
      localStorage.setItem("titolo", "Ara Pacis");
      localStorage.setItem("introduzione","«[Cu]m ex H[isp]ania Gal[liaque, rebu]s in iis provincis prosp[e]re [gest]i[s],R[omam redi] Ti. Nerone P. Qui[ntilio c]o[n]s[ulibu]s, ~ aram [Pacis A]u[g]ust[ae senatus pro]redi[t]u meoconsa[c]randam [censuit] ad campum [Martium,in qua ma]gistratus et sac[er]dotes [et v]irgines V[est]a[les ann]iversarium sacrific]ium facer[e decrevit.]» \n res gestae divi Augusti 12-2");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3971.9609045638053!2d12.475105666713528!3d41.90467348199942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6044aa97c881%3A0x11236bcbd4eec34f!2sMuseo%20dell&#39;Ara%20Pacis!5e0!3m2!1sit!2sit!4v1682431814814!5m2!1sit!2sit" );
      localStorage.setItem("storia","L'Ara Pacis è un'antica struttura religiosa romana situata a Roma, in Italia, costruita nel 13 a.C. per commemorare la vittoria dell'imperatore Augusto nelle guerre galliche.\n L'Ara Pacis fu costruita su iniziativa del Senato romano per celebrare la Pax Romana, la pace duratura che Augusto aveva portato all'Impero romano dopo anni di conflitti e guerre. La struttura è costituita da un altare all'aperto circondato da mura di marmo decorati con rilievi che rappresentano scene di sacrifici e di processioni religiose.\nGli artisti che crearono i rilievi dell'Ara Pacis furono molto abili nel rappresentare le figure umane e gli animali in modo realistico, e le loro opere d'arte sono considerate tra le più belle e raffinate dell'antica Roma.\n L'Ara Pacis è stata abbandonata e dimenticata per molti secoli dopo la caduta dell'Impero romano, ma è stata riscoperta e restaurata nel corso del XIX secolo. Oggi è uno dei più importanti siti archeologici di Roma e una delle attrazioni turistiche più popolari della città.")
      localStorage.setItem("immagine","/assets/img/ara pacis-storia.jpeg")
      localStorage.setItem("immagine1","/assets/img/ara pacis.jpg")
      localStorage.setItem("hero","hero1")
      localStorage.setItem("vedo",true)
      localStorage.setItem("prezzo biglietto",14)
      $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento2);
      })

   });

   $(".pantheon").click(function(){
      localStorage.setItem("titolo", "Pantheon");
      localStorage.setItem("introduzione","il pantheon: tempio di tutti gli dei ");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.7322624886397!2d12.474297976145895!3d41.898614764129505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604f678640a9%3A0xcad165fa2036ce2c!2sPantheon!5e0!3m2!1sit!2sit!4v1682445033004!5m2!1sit!2sit" );
      localStorage.setItem("storia","Il Pantheon è un antico tempio romano situato a Roma, Italia, noto per la sua grande cupola di forma emisferica. La sua costruzione risale al periodo compreso tra il 27 a.C. e il 14 d.C., durante il regno dell'imperatore Augusto, ma fu completato sotto il regno dell'imperatore Adriano nel 126 d.C.\n Il Pantheon originale fu costruito come un tempio dedicato a tutti gli dei dell'Olimpo, da cui deriva il suo nome 'Pantheon' che significa 'tutti gli dèi'. Tuttavia, dopo la conversione dell'impero romano al cristianesimo, il tempio fu trasformato in una chiesa cristiana nel 609 d.C. dal papa Bonifacio IV.\n Il Pantheon è stato modificato e restaurato nel corso dei secoli, ma ha conservato gran parte della sua forma originale. La sua grande cupola, che ha un diametro di 43,3 metri, è considerata un'opera architettonica di grande importanza e un capolavoro della tecnologia romana antica. È stata la più grande cupola del mondo fino al XVII secolo.\n Oggi, il Pantheon è uno dei principali monumenti turistici di Roma e viene utilizzato ancora come chiesa, anche se è aperto ai visitatori durante il giorno per ammirare la sua straordinaria architettura e storia.")
      localStorage.setItem("immagine","/assets/img/pantheon storia.jpg")
      localStorage.setItem("immagine1","/assets/img/pantheon.jpg")
      localStorage.setItem("hero","hero4")
      localStorage.setItem("vedo",false)

    
   });

   $(".san-pietro").click(function(){
      localStorage.setItem("titolo", "San Pietro");
      localStorage.setItem("introduzione","Entrare nella Basilica di San Pietro è come entrare in un mondo a parte, una dimensione che supera il tempo e lo spazio.\n -Federico Fellini ");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.5668947059066!2d12.451361776146003!3d41.90217066390653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6061b7149b59%3A0x724bf077cd875283!2sBasilica%20di%20San%20Pietro!5e0!3m2!1sit!2sit!4v1682496784544!5m2!1sit!2sit");
      localStorage.setItem("storia","La basilica fu costruita nel XVI secolo sul sito della tomba di San Pietro, che si trova sotto l'altare maggiore. Il progetto originale fu affidato a Donato Bramante, ma dopo la sua morte nel 1514, il progetto passò a molti altri architetti tra cui Michelangelo, che fu incaricato di costruire la cupola che domina il cielo di Roma. \n La basilica presenta un'architettura grandiosa, con un vasto portico, una navata centrale e numerose cappelle laterali, alcune delle quali contengono opere d'arte di grandi maestri come Michelangelo e Bernini. \n All'interno della basilica, si possono ammirare numerosi tesori artistici e religiosi, tra cui la statua di San Pietro seduto, la Pietà di Michelangelo e il baldacchino di Bernini sopra l'altare maggiore.\n La Basilica di San Pietro è anche il luogo in cui si svolgono le principali cerimonie della Chiesa cattolica, tra cui la Messa papale e la celebrazione della Pasqua. La sua grandiosità e bellezza la rendono una delle principali attrazioni turistiche di Roma e del mondo intero.")
      localStorage.setItem("immagine","/assets/img/san pietro storia.jpg")
      localStorage.setItem("immagine1","/assets/img/san pietro.jpeg")
      localStorage.setItem("hero","hero5")
      localStorage.setItem("vedo",false)
     
   });

   $(".sant-angelo").click(function(){
      localStorage.setItem("titolo", "Castel Sant'Angelo");
      localStorage.setItem("introduzione","Quod non fecerunt barbari, fecerunt Barberini ");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.525201003333!2d12.463701076146007!3d41.9030671638504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a8711e7a4d1%3A0x366c111ce77d4189!2sCastel%20Sant&#39;Angelo!5e0!3m2!1sit!2sit!4v1682443424088!5m2!1sit!2sit");
      localStorage.setItem("storia","Castel Sant'Angelo è un maestoso mausoleo situato sulla riva destra del fiume Tevere, a Roma. La sua storia risale all'anno 130 d.C. quando l'imperatore romano Adriano fece costruire questo monumentale mausoleo per sé e per la sua famiglia.\n Il mausoleo consisteva in una grande torre circolare di pietra e marmo, alta circa 60 metri, con un diametro di circa 64 metri. Nel corso dei secoli, il castello ha svolto diverse funzioni, tra cui quella di fortezza, residenza papale, prigione e museo.\n Durante il Medioevo, il castello fu trasformato in una fortezza e divenne una delle principali roccaforti di Roma, poiché la sua posizione strategica permetteva di controllare l'accesso al centro della città. Durante il sacco di Roma del 1527, il castello fu usato come rifugio per il papa Clemente VII, che si nascose qui per oltre sette mesi, mentre la città era saccheggiata dalle truppe di Carlo V.\n Nel corso dei secoli successivi, il castello subì numerose trasformazioni e ampliamenti. Nel XVII secolo, fu trasformato in residenza papale, con l'aggiunta di un'ala barocca, e nel XIX secolo, fu utilizzato come prigione. Durante il periodo della Repubblica romana del 1849, il castello fu utilizzato come quartier generale dell'esercito francese, che riuscì a sedare la rivolta e a ripristinare il potere papale.")
      localStorage.setItem("immagine","/assets/img/Castel Sant'Angelo storia.jpg")
      localStorage.setItem("immagine1","/assets/img/castel sant'angelo.jpg")
      localStorage.setItem("hero","hero3")
      localStorage.setItem("vedo",true)
      localStorage.setItem("prezzo biglietto",15)
      $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento4);
      })
   });

   $(".altare-patria").click(function(){
      localStorage.setItem("titolo","Altare della Patria");
      localStorage.setItem("introduzione"," conosciuto anche come il vittoriano viene considerato uno dei monumenti più importanti dopo l'unità di italia ");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1484.9565859947656!2d12.481721888872796!3d41.89472438937528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604d1b805de3%3A0x21154807a7b83fe1!2sAltare%20della%20Patria!5e0!3m2!1sit!2sit!4v1682435846867!5m2!1sit!2sit");
      localStorage.setItem("storia","L'Altare della Patria è un monumento situato a Roma, in Italia, costruito per onorare Vittorio Emanuele II, il primo re d'Italia. Il monumento è stato inaugurato nel 1911, in occasione del cinquantenario dell'unificazione italiana. \n La costruzione dell'Altare della Patria venne decisa nel 1885, ma la sua realizzazione fu molto controversa. L'idea di costruire un monumento a Vittorio Emanuele II era stata proposta da Enrico Bindi, un architetto italiano, ma molti critici ritennero che il progetto fosse eccessivamente monumentale e costoso.\n Il progetto fu affidato all'architetto Giuseppe Sacconi, che si ispirò all'architettura classica per creare una struttura imponente che includesse un grande altare all'aperto e una serie di edifici e monumenti circostanti. Il monumento comprende anche una grande statua equestre di Vittorio Emanuele II e una serie di bassorilievi che rappresentano importanti eventi storici dell'Italia. \n L'Altare della Patria è diventato un simbolo dell'identità nazionale italiana e un luogo di celebrazione per molte importanti occasioni, come la Festa della Repubblica e la Giornata dell'Unità Nazionale e delle Forze Armate. Tuttavia, è stato anche oggetto di molte critiche da parte di coloro che lo considerano troppo imponente e troppo costoso per la sua funzione simbolica.")
      localStorage.setItem("immagine","/assets/img/altare della patria storia.jpg")
      localStorage.setItem("immagine1","/assets/img/altare della patria.jpg")
      localStorage.setItem("hero","hero2")
      localStorage.setItem("vedo",true)
      localStorage.setItem("prezzo biglietto",18)
      $.get("biglietti.php",(data,state)=>{
         numero_biglietti= JSON.parse(data); 
         localStorage.setItem("max_numero_biglietti",numero_biglietti.monumento3);
      })
   });

   $(".piazza-spagna").click(function(){
      localStorage.setItem("titolo","Piazza di Spagna");
      localStorage.setItem("introduzione","Non c'è niente di più bello che guardare il tramonto da Piazza di Spagna.\n - Johann Wolfgang von Goethe");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.40266893318!2d12.479752076146141!3d41.905701763685364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60551bc4f4e3%3A0xe876d6d8db1d5938!2sPiazza%20di%20Spagna!5e0!3m2!1sit!2sit!4v1682843282203!5m2!1sit!2sit");
      localStorage.setItem("storia","Piazza di Spagna è una delle piazze più famose e belle di Roma, situata nella zona del Tridente, tra Via del Babuino e Via dei Condotti. La piazza prende il nome dalla vicina ambasciata spagnola, che si trova ai piedi della scalinata che porta alla chiesa di Trinità dei Monti.\n La piazza ha una storia antica, risalente al XV secolo, ma ha acquisito la sua attuale forma nel XVIII secolo, grazie alla ristrutturazione voluta dal pontefice Benedetto XIV. Durante questo intervento, furono realizzati la famosa scalinata di Trinità dei Monti, che unisce la piazza alla chiesa, e la Fontana della Barcaccia, opera del celebre scultore barocco Gian Lorenzo Bernini.\n La piazza ha sempre rappresentato un luogo di incontro e di scambio culturale, grazie alla sua vicinanza con la Scuola di Spagna e alla presenza di numerosi artisti e letterati che vi si sono stabiliti nei secoli. La piazza ha ospitato anche importanti eventi storici, come la parata del 2 giugno, giorno della Festa della Repubblica, e la celebrazione della fine della Prima Guerra Mondiale.\n Oggi, Piazza di Spagna è una delle piazze più amate e visitate di Roma, meta di turisti e di romani che vi si recano per ammirare la bellezza della scalinata, la Fontana della Barcaccia e le numerose boutique di alta moda che si affacciano sulla piazza.")
      localStorage.setItem("immagine","/assets/img/piazza di spagna storia.jpg")
      localStorage.setItem("immagine1","/assets/img/piazza di spagna.jpg")
      localStorage.setItem("hero","hero13")
      localStorage.setItem("vedo",false)
   });

   $(".piazza-navona").click(function(){
      localStorage.setItem("titolo","Piazza Navona");
      localStorage.setItem("introduzione","Piazza Navona è il cuore pulsante della vita sociale di Roma, dove gli artisti, i turisti e i locali si mescolano in un'atmosfera unica.\n - Gabriele D'Annunzio");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.706569125196!2d12.470499276145937!3d41.89916726409475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6083c19d1c3d%3A0xa35724562e82334a!2sPiazza%20Navona!5e0!3m2!1sit!2sit!4v1682843244498!5m2!1sit!2sit");
      localStorage.setItem("storia","Piazza Navona è una delle piazze più famose e suggestive di Roma, situata nel centro storico della città, a pochi passi dal Pantheon e dal Campo de' Fiori. La piazza ha una forma allungata, dovuta alla presenza dell'antico Stadio di Domiziano, su cui sorge la piazza stessa. \n La piazza è caratterizzata dalla presenza di tre fontane, tra cui la famosa Fontana dei Quattro Fiumi, opera del celebre scultore barocco Gian Lorenzo Bernini, che rappresenta i quattro fiumi più importanti del mondo: il Nilo, il Danubio, il Gange e il Rio della Plata. La piazza è inoltre circondata da numerosi edifici storici, tra cui la Chiesa di Sant'Agnese in Agone, opera dell'architetto barocco Francesco Borromini.\n La storia della piazza è molto antica, risalente all'epoca romana, quando l'area era occupata dallo Stadio di Domiziano, che poteva ospitare fino a 30.000 spettatori. Nel corso dei secoli, la piazza è stata soggetta a numerose trasformazioni e ristrutturazioni, fino ad assumere la sua attuale forma nel XVII secolo. \n Oggi, Piazza Navona è una delle piazze più affascinanti e vivaci di Roma, meta di turisti e di romani che vi si recano per ammirare la bellezza delle fontane, degli edifici storici e dei numerosi artisti di strada che vi si esibiscono. La piazza è inoltre famosa per i suoi caffè storici e le numerose trattorie e ristoranti che vi si affacciano, dove è possibile gustare i piatti tipici della cucina romana.")
      localStorage.setItem("immagine","/assets/img/piazza navona storia.jpg")
      localStorage.setItem("immagine1","/assets/img/piazza navona.jpg")
      localStorage.setItem("hero","hero14")
      localStorage.setItem("vedo",false)
   });

   $(".piazza-popolo").click(function(){
      localStorage.setItem("titolo","Piazza del Popolo");
      localStorage.setItem("introduzione"," Piazza del Popolo è una delle piazze più importanti e frequentate di Roma, meta di turisti e di romani che vi si incontrano per passeggiare, fare shopping o godere della vista panoramica sulla città.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.1698286091523!2d12.473782975929698!3d41.910707763372194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60f8e5e81687%3A0x43ee9ffffdce4350!2sPiazza%20del%20Popolo!5e0!3m2!1sit!2sit!4v1682843163433!5m2!1sit!2sit");
      localStorage.setItem("storia","Piazza del Popolo è una delle piazze più importanti di Roma, situata nella zona nord della città, all'inizio di Via del Corso, la strada principale del centro storico. La piazza ha una forma ellittica e si estende su una superficie di circa 36.000 metri quadrati.\n La storia della piazza risale all'epoca romana, quando in questo luogo era presente il Circo Flaminio, uno dei più grandi e importanti della città. Nel corso dei secoli, la piazza è stata soggetta a numerose trasformazioni e ristrutturazioni, fino ad assumere la sua attuale forma nel XIX secolo, durante il pontificato di Pio IX.\n La piazza è dominata da tre grandi portali, chiamati Porta del Popolo, che rappresentano l'accesso alla città provenendo dal nord, e da due chiese gemelle, Santa Maria dei Miracoli e Santa Maria in Montesanto, che si trovano ai lati della piazza. Al centro della piazza si trova la celebre Fontana del Nettuno, opera del celebre scultore romano Giuseppe Pannini. \n L'obelisco di Piazza del Popolo è uno dei monumenti più antichi e rappresentativi della piazza. Si tratta di un antico obelisco egiziano, alto circa 24 metri, risalente al XIII secolo a.C., che venne portato a Roma nel 10 d.C. dall'imperatore Augusto.\n L'obelisco originariamente si trovava nel Circo Massimo, ma nel XVI secolo venne trasferito nella piazza attuale, dove fu collocato al centro della Fontana dell'Obelisco, un'opera realizzata nel 1589 da Domenico Fontana, su commissione del papa Sisto V.\n Nel 1816 l'obelisco fu restaurato e venne posto sulla base attuale, progettata dall'architetto neoclassico Valadier. La base dell'obelisco è decorata con quattro leoni in bronzo, opera del celebre scultore Antonio Canova. L'obelisco di Piazza del Popolo è diventato uno dei simboli della città di Roma e della piazza stessa, oltre ad essere uno dei più antichi e prestigiosi obelischi egiziani presenti in Europa.")
      localStorage.setItem("immagine","/assets/img/piazza del popolo storia.jpg")
      localStorage.setItem("immagine1","/assets/img/piazza del popolo.jpg")
      localStorage.setItem("hero","hero15")
      localStorage.setItem("vedo",false)
   });

// aree verdi
   $(".villa-ada").click(function(){
      localStorage.setItem("titolo","Villa Ada");
      localStorage.setItem("introduzione","Ospita numerosi edifici neoclassici, tra i quali la Villa Reale.  È collocato nella zona settentrionale della città, a nord-ovest della via Salaria, nel quartiere Parioli.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.16206555887!2d12.499655576147363!3d41.932368762014605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f613827bf5027%3A0x7ab17edc0437af05!2sVilla%20Ada%20Savoia!5e0!3m2!1sit!2sit!4v1683130894329!5m2!1sit!2sit");
      localStorage.setItem("storia","Certamente, Villa Ada è un grande parco situato nel nord di Roma, nella zona di Parioli. Il parco è il secondo più grande di Roma, dopo Villa Doria Pamphilj, e copre un'area di circa 450 ettari. \n La villa stessa fu costruita nel XVII secolo per la famiglia Savoia e successivamente divenne proprietà del Comune di Roma. All'interno del parco si trovano diversi edifici, tra cui la casina di caccia dei Savoia, che oggi è utilizzata per mostre e eventi culturali. \n Villa Ada è un luogo molto apprezzato dai romani per il suo ambiente naturale e la sua tranquillità. Al suo interno, infatti, si trovano molti sentieri e percorsi adatti per passeggiate, jogging e ciclismo, oltre a diverse aree pic-nic e spazi per attività all'aperto. \n Il parco è anche sede di numerosi eventi e manifestazioni culturali, come concerti, festival e spettacoli teatrali. Inoltre, il lago artificiale situato all'interno del parco offre la possibilità di praticare attività come la pesca e il canottaggio. \n In sintesi, Villa Ada è un'oasi di tranquillità nel cuore della città di Roma, un luogo perfetto per chi vuole godere della natura e della bellezza del paesaggio, nonché partecipare a eventi culturali e sportivi all'aperto.")
      localStorage.setItem("immagine","/assets/img/villa ada storia.jpg")
      localStorage.setItem("immagine1","/assets/img/villa ada.jpeg")
      localStorage.setItem("hero","hero16")
      localStorage.setItem("vedo",false)
   });

   $(".villa-pamphiji").click(function(){
      localStorage.setItem("titolo","Villa Pamphiji");
      localStorage.setItem("introduzione"," situata appena fuori dalle mura nel quartiere Gianicolense, Al suo interno sorge il Casino del Bel Respiro o Algardi, che è sede di rappresentanza ufficiale del governo italiano.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11008.718220961486!2d12.435366900759028!3d41.88791749608447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f601ad033e561%3A0x20f81ec8cfffda04!2sVilla%20Doria%20Pamphilj!5e0!3m2!1sit!2sit!4v1683130823192!5m2!1sit!2sit");
      localStorage.setItem("storia"," Villa Pamphili è una vasta area verde di circa 184 ettari situata nella parte occidentale di Roma, non lontano dal Vaticano. \n La villa fu costruita per volontà della nobile famiglia Pamphili nel XVII secolo e fu utilizzata come residenza estiva. Nel corso dei secoli successivi, la villa subì diverse trasformazioni e ampliamenti, tra cui l'aggiunta di una vasta area verde che divenne uno dei più grandi parchi di Roma. \n Oggi, Villa Pamphili è una popolare destinazione turistica e un luogo molto frequentato dai romani, soprattutto durante i mesi estivi. Il parco offre molti sentieri per le passeggiate, prati per i pic-nic, aree giochi per i bambini e campi sportivi per il calcio, il basket e il tennis. \n All'interno della villa si trovano inoltre numerose attrazioni, tra cui la Fontana del Giglio, la Fontana dei Draghi e il Casino del Bel Respiro, una piccola villa settecentesca che oggi ospita una galleria d'arte moderna. \n Villa Pamphili è anche conosciuta per le sue feste ed eventi, tra cui concerti, spettacoli teatrali e mostre d'arte. Durante il periodo estivo, il parco ospita anche il Festival di Villa Pamphili, un evento che offre concerti di musica classica, jazz e popolare. \n In sintesi, Villa Pamphili è un'oasi di pace e tranquillità nel cuore di Roma, che offre ai visitatori la possibilità di godere della natura e di immergersi nella storia e nella cultura della città.")
      localStorage.setItem("immagine","/assets/img/villa pamphiji.jpg")
      localStorage.setItem("immagine1","/assets/img/villa pamphiji storia.jpg")
      localStorage.setItem("hero","hero17")
      localStorage.setItem("vedo",false)
   });

   $(".villa-torlonia").click(function(){
      localStorage.setItem("titolo","Villa Torlonia");
      localStorage.setItem("introduzione","è un complesso di edifici e ville di Roma, sito nel quartiere Nomentano. Già proprietà della famiglia Torlonia, fu residenza di Mussolini  e dal 1978 è un parco pubblico.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.024629147286!2d12.509028226146494!3d41.91382926317625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61721a07512b%3A0xc1b1049843b53347!2sVilla%20Torlonia%2C%2000161%20Roma%20RM!5e0!3m2!1sit!2sit!4v1683130748659!5m2!1sit!2sit");
      localStorage.setItem("storia","Villa Torlonia è una storica residenza di Roma, situata nel quartiere Nomentano. Fu costruita alla fine del XVIII secolo come residenza privata della famiglia Torlonia, una delle più importanti famiglie di banchieri e imprenditori dell'epoca. \n La villa è circondata da un grande parco, che fu progettato dal celebre paesaggista italiano Giuseppe Valadier nel 1806. Il parco ospita numerose opere d'arte, tra cui alcune sculture di Antonio Canova, e un teatro all'aperto. \nDurante la seconda guerra mondiale, la villa fu utilizzata come quartier generale delle truppe tedesche e subì diversi danni. Dopo la guerra, fu utilizzata come residenza dal presidente della Repubblica Italiana e successivamente fu aperta al pubblico come museo. \n Oggi, la villa ospita diverse collezioni, tra cui la Collezione Mussolini, che include oggetti personali e documenti appartenuti al dittatore italiano, e la Collezione Casata Torlonia, che comprende opere d'arte e oggetti preziosi raccolti dalla famiglia Torlonia nel corso dei secoli. \n Inoltre, la villa è famosa per la presenza della Casina delle Civette, un edificio di stile liberty con numerose finestre decorate con vetrate colorate, che ospita un museo dedicato alla storia del vetro e della lavorazione artigianale del vetro. \n In sintesi, Villa Torlonia è un importante luogo di interesse storico e culturale a Roma, che offre al visitatore la possibilità di scoprire la storia e l'arte italiana attraverso le collezioni e le opere presenti all'interno del complesso.")
      localStorage.setItem("immagine","/assets/img/villa torlonia storia.jpg")
      localStorage.setItem("hero","hero18")
      localStorage.setItem("vedo",false)
   });

   $(".villa-borghese").click(function(){
      localStorage.setItem("titolo","Villa Borghese");
      localStorage.setItem("introduzione","Villa Borghese è un grande parco cittadino nella città di Roma che comprende sistemazioni a verde di diverso tipo, dal giardino all'italiana alle ampie aree di stile inglese, edifici, piccoli fabbricati, fontane e laghetti.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.06826546086!2d12.480337587558543!3d41.912891189086544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61021d3c538f%3A0xeb3d7c3dff838e44!2sVilla%20Borghese!5e0!3m2!1sit!2sit!4v1683130939973!5m2!1sit!2sit");
      localStorage.setItem("storia","Villa Borghese è un grande parco pubblico situato nel centro di Roma, in Italia. È uno dei parchi più famosi e visitati della città ed è stato aperto al pubblico nel 1903. \nLa villa stessa è stata costruita nel XVII secolo per la famiglia Borghese, una delle più importanti e potenti famiglie nobili di Roma. All'interno della villa si trovano numerose opere d'arte e collezioni, tra cui dipinti di Caravaggio, Raffaello e Tiziano, nonché sculture di Bernini e Canova. \n Il parco, che si estende su circa 80 ettari, offre molte attrazioni, tra cui il Bioparco di Roma, uno zoo con oltre 200 specie di animali provenienti da tutto il mondo, il Museo Nazionale Etrusco di Villa Giulia, il Museo Civico di Zoologia e la Galleria Nazionale d'Arte Moderna e Contemporanea. \n Inoltre, il parco è molto popolare tra i romani e i turisti per le sue numerose aree verdi, laghetti, fontane e giardini. Vi si trovano anche molti punti di ristoro, tra cui caffetterie, ristoranti e chioschi di gelato. \n In sintesi, Villa Borghese è un luogo molto apprezzato per la sua bellezza e per la grande varietà di attività e attrazioni che offre. Se visiti Roma, è sicuramente un posto da non perdere!")
      localStorage.setItem("immagine","/assets/img/villa borghese storia.jpeg")
      localStorage.setItem("immagine1","/assets/img/villa borghese.jpeg")
      localStorage.setItem("hero","hero19")
      localStorage.setItem("vedo",false)
   });

   $(".appia-antica").click(function(){
      localStorage.setItem("titolo","parco archeologico dell'Appia Antica");
      localStorage.setItem("introduzione"," è il parco urbano più grande d'Europa ed è un'area naturale protetta di circa 4 580 ettari");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11320.342397307488!2d12.492721193632661!3d41.86938883136512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a1a5122ea05%3A0xaa2a04ee9a975309!2sParco%20Regionale%20dell&#39;Appia%20Antica!5e0!3m2!1sit!2sit!4v1683131008599!5m2!1sit!2sit");
      localStorage.setItem("storia","Il Parco Archeologico dell'Appia Antica è un'area naturale protetta che si estende per circa 3.500 ettari nel sud di Roma, lungo la via Appia antica, una delle più importanti strade dell'antica Roma. \n Il parco conserva numerosi resti archeologici di grande importanza storica e culturale, tra cui tombe monumentali, terme, acquedotti, cisterne e antiche ville romane. Tra i siti più importanti del parco ci sono la Tomba di Cecilia Metella, il Mausoleo di Augusto, le Catacombe di San Sebastiano e il Circo di Massenzio. \n Il parco è inoltre attraversato da una serie di sentieri che permettono ai visitatori di esplorare l'area e ammirare la bellezza del paesaggio naturale che lo circonda, tra cui boschi, prati, valli e colline. \n Inoltre, all'interno del parco si trovano anche alcuni musei, come il Museo delle Mura, che conserva le testimonianze archeologiche delle mura antiche di Roma, e il Museo della Via Appia Antica, che espone reperti archeologici e documenti sulla storia della via Appia e delle antiche vie consolari romane. \n Il Parco Archeologico dell'Appia Antica è quindi un luogo ideale per chi ama la storia, l'arte e la natura, che offre la possibilità di esplorare l'antica Roma e di immergersi nella bellezza della natura circostante.")
      localStorage.setItem("immagine","/assets/img/parco appia antica storia.jpg")
      localStorage.setItem("immagine1","/assets/img/parco appia antica.jpg")
      localStorage.setItem("hero","hero20")
      localStorage.setItem("vedo",false)
   });

   $(".villa-este").click(function(){
      localStorage.setItem("titolo","villa d'este");
      localStorage.setItem("introduzione","La villa d'Este di Tivoli è una villa del Rinascimento italiano e figura nella lista dei patrimoni dell'umanità dell'UNESCO.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.721518524745!2d12.793230876148751!3d41.96331626007427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f78705f25e6c3%3A0xbf1e90ea4e33e199!2sVilla%20d&#39;Este!5e0!3m2!1sit!2sit!4v1683131193420!5m2!1sit!2sit");
      localStorage.setItem("storia","Villa d'Este è un'antica residenza rinascimentale situata nella città di Tivoli, a circa 30 chilometri a est di Roma. \n Costruita nel XVI secolo per volontà del cardinale Ippolito II d'Este, figlio illegittimo di Lucrezia Borgia e governatore di Tivoli, la villa è famosa per i suoi splendidi giardini all'italiana, che includono numerose fontane, cascate e giochi d'acqua. \n I giardini sono stati progettati dal celebre architetto italiano Pirro Ligorio, che ha utilizzato il sistema idraulico dell'antico acquedotto romano per creare gli effetti d'acqua. Tra le fontane più famose di Villa d'Este ci sono la Fontana dell'Ovato, la Fontana della Rometta, la Fontana dei Draghi e la Fontana del Bicchierone. \n All'interno della villa, i visitatori possono ammirare gli affreschi e le decorazioni di pregio delle numerose sale, tra cui la Sala degli Stucchi, la Sala delle Aquile e la Sala dei Fasti Farnesiani, che conserva dipinti di Taddeo Zuccari. \n Villa d'Este è stata dichiarata Patrimonio dell'Umanità dall'UNESCO nel 2001 ed è una delle più importanti attrazioni turistiche della regione del Lazio. La villa è anche stata spesso utilizzata come set cinematografico, apparendo in numerosi film, tra cui 'La grande bellezza' di Paolo Sorrentino. \n In sintesi, Villa d'Este è una meravigliosa dimora rinascimentale situata nei pressi di Roma, famosa per i suoi incantevoli giardini e le sue fontane, che la rendono uno dei luoghi più suggestivi e visitati della regione del Lazio.")
      localStorage.setItem("immagine","/assets/img/villa d'este.jpg")
      localStorage.setItem("immagine1","/assets/img/villa d'este.jpeg")
      localStorage.setItem("hero","hero21")
      localStorage.setItem("vedo",true)

   });

   $(".parco-acquedotti").click(function(){
      localStorage.setItem("titolo","parco degli acquedotti");
      localStorage.setItem("introduzione","Il Parco degli Acquedotti è uno dei polmoni verdi del quadrante sud-est di Roma, vero e proprio crocevia della rete idrica dell'antica Roma");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.9735153504616!2d12.554882276143731!3d41.85039686714806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132589dc7d914919%3A0x5f4eeb7a244a15b6!2sParco%20degli%20Acquedotti!5e0!3m2!1sit!2sit!4v1683131098281!5m2!1sit!2sit");
      localStorage.setItem("storia","Il Parco degli Acquedotti è un'area naturale protetta di circa 240 ettari che si trova nella periferia sud-orientale di Roma, lungo l'antica via Appia Antica. \n Come suggerisce il nome, il parco ospita alcuni dei più importanti acquedotti dell'antica Roma, tra cui l'Acquedotto Claudio, l'Acquedotto Felice e l'Acquedotto Anio Novus. Questi monumentali edifici sono stati costruiti tra il I secolo a.C. e il I secolo d.C. e furono fondamentali per la fornitura di acqua potabile alla città di Roma. \n Il parco offre una vista unica su questi imponenti edifici, che si snodano attraverso l'area naturale protetta e creano un suggestivo panorama, dove la storia antica e la bellezza della natura si fondono in un perfetto connubio. \n Inoltre, il Parco degli Acquedotti è attraversato da numerosi sentieri che permettono ai visitatori di esplorare l'area e di scoprire i numerosi siti archeologici presenti, tra cui tombe, ville, ninfei e mura antiche. Il parco è anche un luogo ideale per le attività all'aperto, come il ciclismo, il trekking, la corsa e il pic-nic. \n In sintesi, il Parco degli Acquedotti è un luogo unico a Roma, dove la bellezza della natura si unisce alla storia antica per creare un'esperienza unica e indimenticabile per chiunque desideri scoprire l'antica storia dell'acqua a Roma.")
      localStorage.setItem("immagine","/assets/img/parco degli acquedotti.jpg")
      localStorage.setItem("immagine1","/assets/img/parco degli acquedotti.jpg")
      localStorage.setItem("hero","hero22")
      localStorage.setItem("vedo",false)
   });

$(".primo-maggio").click(function(){
   localStorage.setItem("titolo","Concerto Primo Maggio");
   localStorage.setItem("introduzione","il  concerto del primo maggio è uno degli eventi musicali dal vivo più grande si tutta italia");
   localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3241657512003!2d12.503098076145301!3d41.885885064926605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61bf7fcaab73%3A0x130be9f915490f8!2sBasilica%20di%20San%20Giovanni%20in%20Laterano!5e0!3m2!1sit!2sit!4v1683364662405!5m2!1sit!2sit");
   localStorage.setItem("storia","Il Concerto del Primo Maggio è un evento musicale annuale che si svolge a Roma il 1º maggio, giorno festivo in Italia. Il concerto è organizzato dalla CGIL, una delle principali organizzazioni sindacali del paese, e si tiene di solito in Piazza San Giovanni in Laterano, davanti alla Basilica di San Giovanni in Laterano. \n Il Concerto del Primo Maggio è uno dei più importanti eventi musicali dell'anno in Italia e vede la partecipazione di alcuni dei più importanti artisti nazionali ed internazionali. Il concerto viene trasmesso in diretta su Rai 3, una delle principali reti televisive pubbliche del paese, e attira un vasto pubblico di persone che si recano a Roma appositamente per assistere all'evento. \n Durante il concerto si esibiscono artisti di diversi generi musicali, dal rock al pop, dalla musica elettronica al rap. Tra gli artisti che hanno partecipato al Concerto del Primo Maggio negli anni ci sono stati Vasco Rossi, Ligabue, Negramaro, Subsonica, Caparezza, Jovanotti, e molti altri. \n Il Concerto del Primo Maggio non è solo un evento musicale, ma anche una manifestazione politica e sociale. L'evento è organizzato dalla CGIL per celebrare il lavoro e i diritti dei lavoratori, e spesso gli artisti che si esibiscono sul palco utilizzano il loro tempo per rivendicare temi sociali e politici. \n In sintesi, il Concerto del Primo Maggio a Roma è un evento importante che unisce la musica, la politica e la celebrazione del lavoro e dei diritti dei lavoratori.")
   localStorage.setItem("immagine","/assets/img/concertoPrimoMaggio.jpg")
   localStorage.setItem("immagine1","assets/img/eventi.jpg")
   localStorage.setItem("hero","hero23")
   localStorage.setItem("vedo",false)
});
   $(".boccea-street").click(function(){
      localStorage.setItem("titolo","boccea street food");
      localStorage.setItem("introduzione","Dal 24 al 27 marzo, il quartiere Boccea si trasforma nella capitale dello Street Food");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11866.918809957668!2d12.303715266245307!3d41.96314049518807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5962e2864033%3A0x1ffe899d5cd8c9e8!2s00166%20Boccea%20RM!5e0!3m2!1sit!2sit!4v1683366966610!5m2!1sit!2sit");
      localStorage.setItem("storia","Il cibo la farà da padrone proponendo un vero e proprio viaggio gastronomico tra le regioni italiane: Dalla Sicilia, cannoli, arancine, pane e panelle, sfincione, “pane ca meusa”, crema di pistacchio e cassatine. \n Approdando in Puglia, le autentiche bombette di Cisternino, cotte allo spiedo, puccia con polpo arrosto e focaccia barese home-made. Risalendo la penisola arriviamo fino alle Marche, con olive ascolane e cremini ascolani; passando per l’Abruzzo, gustando i veri arrosticini di pecora e manzo. Per poi tornare nel Lazio, con bontà tutte nostrane come il mitico tonnarello cacio e pepe, supplì espressi, gricia e amatriciana; e come non citare sua maestà la porchetta, ma in versione gourmet. E se volessimo spingerci oltre Oceano? Le proposte internazionali del nostro menù potrebbero davvero stupirvi: dagli USA hamburger di chianina e scottona sfilacciata; dal Messico nachos, burritos, tacos e margarita; mentre dal Vietnam, vi portiamo il vero street food vietnamita con padthai, bùn xào, gyoza, gàchiên, gỏicuốn, tômchiên. Per attraccare poi in Spagna assaporando la vera Paella Valenciana, cotta nelle tradizionali padellone e sangria artigianale. Per gli amanti del dolce, bombe e ciambelle calde, tiramisù espresso, paste sfornate e farcite al momento, maritozzi con la panna. Pasta di mandorla messinese e tante altre dolci sorprese. In esclusiva per il TTS Food, dal più antico birrificio artigianale bavarese arriva la birra firmata Landshuter Brauhaus, una birra Cruda e non filtrata, una vera eccellenza. Approfittando di un aperitivo all’aria aperta non potete non fare una sosta da Bollicine, uno stand che proporrà ottimi cocktail per tutti i gusti e prosecco. Ad accogliervi musica e giochi di luci, spettacoli illuminotecnici dai colori suggestivi, per regalarvi un’esperienza non solo all’insegna del buon cibo: sarà una vera e propria festa sotto le stelle. Quattro giorni all’insegna della spensieratezza e del buon cibo, un festival dedicato a tutti, grandi e piccini!")
      localStorage.setItem("immagine","/assets/img/concertoPrimoMaggio.jpg")
      localStorage.setItem("immagine1","assets/img/eventi.jpg")
      localStorage.setItem("hero","hero23")
      localStorage.setItem("vedo",false)
   });  

   $(".festival-scienze").click(function(){
      localStorage.setItem("titolo","Festival delle scienze");
      localStorage.setItem("introduzione","Un percorso alla scoperta dei quattro elementi per imparare ad osservare e comprendere la natura intorno a noi: acqua, terra, fuoco e aria.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11875.868748532794!2d12.4748773!3d41.9150641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60fa37eb896b%3A0x4ec72585470b0b7e!2sExplora%20Il%20Museo%20dei%20Bambini%20di%20Roma!5e0!3m2!1sit!2sit!4v1683368077970!5m2!1sit!2sit");
      localStorage.setItem("storia","L’immaginazione è uno dei nostri strumenti più potenti. Grazie a lei concepiamo opere d'arte, nuove tecnologie, ma anche soluzioni a problemi quotidiani. Anche la scienza non sarebbe la stessa se non avessimo come alleata l’immaginazione per avviare ricerche e formulare ipotesi, interpretare dati e perseguire risultati migliori. Ed è dalle interazioni delle immaginazioni individuali che emergono gli immaginari condivisi che influenzano il modo in cui organizziamo le società. Oggi più che mai abbiamo bisogno di coltivare questi immaginari, sia individuali che collettivi, per ripensare il presente e, soprattutto, plasmare possibili futuri. \n Con più di 100 ospiti, oltre 200 tra conferenze e laboratori, exhibit, spettacoli ed eventi per famiglie, la diciottesima edizione del Festival delle Scienze di Roma sarà dedicata agli immaginari. Immaginari da esplorare, da costruire, da sviluppare, facendo dialogare fra loro esperienze, approcci e discipline diverse.")
      localStorage.setItem("immagine","/assets/img/festival scienze.jpg")
      localStorage.setItem("immagine1","assets/img/eventi.jpg")
      localStorage.setItem("hero","hero23")
      localStorage.setItem("vedo",false)
   });  

   $(".Vinalia-priora").click(function(){
      localStorage.setItem("titolo","vinalia priora");
      localStorage.setItem("introduzione","Dal 22 al 25 aprile nel cuore della cittadina tuscolana, che dà il nome ad uno dei bianchi più rinomati e conosciuti in tutto il mondo, si svolgerà la nuova edizione di Vinalia Priora");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.9079813956655!2d12.678806776141835!3d41.80874266975369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325871d0c91d0a7%3A0xc558794a0e463e7b!2sMercato%20Coperto!5e0!3m2!1sit!2sit!4v1683368362245!5m2!1sit!2sit");
      localStorage.setItem("storia","L'apertura di Vinalia Priora è stata anticipata dalla presentazione a stampa e addetti del settore delle nuove annate del Frascati Superiore DOCG e del Frascati Riserva nella splendida tenuta di Casal Montani. Di fronte ad un parterre di 70 persone, il Presidente del Consorzio di Tutela Denominazioni Vini Frascati Luigi Caporicci ha accolto anche i rappresentanti del Governo, della Regione e dei comuni nel quale viene prodotto il Frascati, oltre al Presidente nazionale di Città del Vino Angelo Radica e al Direttore Paolo Corbini.  \n Erano presenti fra gli altri: il Senatore Marco Silvestroni, in rappresentanza del Ministro delle Politiche Agricole Francesco Lollobrigida; la Vicepresidente della Giunta regionale del Lazio Roberta Angelilli; la Sindaca Francesca Sbardella di Frascati, il Consigliere Federico Pompili in rappresentanza di Grottaferrata; Serena Gara, Commissario Straordinario della Comunità Montana Castelli Romani e Monti Prenestini; Gianluigi Peduto, Presidente del Parco regionale dei Castelli Romani; il Presidente del VII Municipio Francesco Laddaga.  \n A presentare la lectio magistralis sulle nuove annate del Frascati c’erano Lorenzo Costantini, vicepresidente del Consorzio di Tutela, l’Assessore all’Agricoltura di Frascati Claudio Cerroni e il Consigliere alle Attività Produttive Alessio Ducci. La degustazione sensoriale dei vini è stata curata dal divulgatore e conoscitore del territorio Jacopo Manni. ")
      localStorage.setItem("immagine","/assets/img/vinalia.jpeg")
      localStorage.setItem("immagine1","assets/img/eventi.jpg")
      localStorage.setItem("hero","hero23")
      localStorage.setItem("vedo",false)
   });  

   $(".rugantino-sistina").click(function(){
      localStorage.setItem("titolo","Rugantino al Sistina");
      localStorage.setItem("introduzione","Uno dei titoli storici dei padri fondatori del Sistina Garinei & Giovannini: Rugantino con le indimenticabili musiche del M° Armando Trovajoli, nello storico allestimento originale con le scene e i costumi di Giulio Coltellacci che hanno fatto gioire tre generazioni di romani e non solo.");
      localStorage.setItem("map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.4697912031393!2d12.484392176146116!3d41.90425856377594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61aba0b78297%3A0xffd2e66fa7af5a52!2sTeatro%20Sistina!5e0!3m2!1sit!2sit!4v1683368530052!5m2!1sit!2sit");
      localStorage.setItem("storia","Una pagina indimenticabile della lunga e gloriosa storia del Teatro Sistina rivive per la gioia del pubblico: con la supervisione di Massimo Romeo Piparo sarà di nuovo in scena la maschera amara e dissacrante di “Rugantino” dei mitici Garinei & Giovannini. Lo spettacolo, che fonde mirabilmente tradizione e modernità, viene presentato nella sua versione storica originale, con la regia di Pietro Garinei, le splendide musiche del M° Armando Trovajoli e le preziose scene e i bellissimi costumi originali firmati da Giulio Coltellacci: un ritorno imperdibile alle radici e un’occasione per riscoprire un classico del teatro musicale italiano. \n Sul palco la splendida Serena Autieri, ancora una volta straordinaria interprete dell’intrigante personaggio di Rosetta, donna bella altera e irraggiungibile, che fa battere il cuore di Rugantino, un ruolo in cui l’attrice napoletana dà prova di grande maturità artistica. Al suo fianco, Michele La Ginestra, che torna a vestire i panni del celebre personaggio indossati per la prima volta 20 anni fa. Nel ruolo di Eusebia torna Edy Angelillo, con la partecipazione di Massimo Wertmuller nel ruolo di Mastro Titta.")
      localStorage.setItem("immagine","/assets/img/rugantino al sistina.jpg")
      localStorage.setItem("immagine1","assets/img/eventi.jpg")
      localStorage.setItem("hero","hero23")
      localStorage.setItem("vedo",false)
   });  
});

