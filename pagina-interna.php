<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>LifeInRome</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="./assets/img/colosseum.png" rel="icon">
  <link href="./assets/img/colosseum.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="./assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="./assets/css/header.css" rel="stylesheet">
  <link href="./assets/css/style-pagina-interna.css" rel="stylesheet">
  <link href="./assets/css/account-dropdown-menu.css" rel="stylesheet">
  

  <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://unpkg.com/@erwinstone/input-touchspin@1.0.3/dist/input-touchspin.min.js"></script>
  <script src="https://unpkg.com/vue"></script>
  <script src="./assets/js/pagina-interna.js"></script>
  <script src="./assets/js/main.js"></script>
  <script src="./assets/js/account-utente.js"></script>

</head>

<body">

<!-- ======= Header ======= -->
<header id="header" class="fixed-top d-flex align-items-center bg-dark">
    <div class="container d-flex align-items-center">

      <div class="logo me-auto">
        <a href="index.php">
          <svg class="colosseum" height="35px" width="35px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <path d="M511,331.8c0-11.491-6.963-20.833-17.067-24.224V202.424C504.037,199.033,511,189.691,511,178.2 c0-14.507-11.093-25.6-25.6-25.6H347.019L307.907,44.227c-2.56-6.827-9.387-11.093-16.213-11.093H33.133 c-9.387,0-17.067,7.68-17.067,17.067v103.776C5.963,157.367-1,166.709-1,178.2c0,11.491,6.963,20.833,17.067,24.224v105.152 C5.963,310.967-1,320.309-1,331.8c0,11.491,6.963,20.833,17.067,24.224V459.8H7.533c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533H24.6h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2H485.4h17.067 c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-8.533V356.024C504.037,352.633,511,343.291,511,331.8z M33.133,50.2 h258.56l36.693,102.4h-39.253v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8v-51.2 c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2 c0-18.773-15.36-34.133-34.133-34.133C65.56,67.267,50.2,82.627,50.2,101.4v51.2H33.133V50.2z M272.068,101.4v51.2h-0.001h-34.133 v-51.2c0-9.387,7.68-17.067,17.067-17.067C264.388,84.333,272.068,92.013,272.068,101.4z M186.734,101.4v51.2h-0.001H152.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067C179.054,84.333,186.734,92.013,186.734,101.4z M101.401,101.4v51.2H101.4H67.267v-51.2 c0-9.387,7.68-17.067,17.067-17.067C93.721,84.333,101.401,92.013,101.401,101.4z M101.401,459.8H67.267v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M186.734,459.8H152.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M272.067,459.8h-34.134v-51.2 c0-9.387,7.68-17.067,17.067-17.067s17.067,7.68,17.067,17.067V459.8z M357.401,459.8h-34.134v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M442.734,459.8H408.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M476.866,459.8H459.8v-51.2 c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133 s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8 v-51.2c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2 c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2H33.133V357.4h443.733V459.8z M485.4,340.333 H24.6c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2 H485.4c5.12,0,8.533,3.413,8.533,8.533S490.52,340.333,485.4,340.333z M425.667,220.867c-18.773,0-34.133,15.36-34.133,34.133 v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067V255 c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8V255c0-18.773-15.36-34.133-34.133-34.133 c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133 C65.56,220.867,50.2,236.227,50.2,255v51.2H33.133V203.8h443.733v102.4H459.8V255C459.8,236.227,444.44,220.867,425.667,220.867z M442.734,255v51.2h-0.001H408.6V255c0-9.387,7.68-17.067,17.067-17.067C435.054,237.933,442.734,245.613,442.734,255z M357.4,255 v51.2h-34.133V255c0-9.387,7.68-17.067,17.067-17.067C349.721,237.933,357.4,245.613,357.4,255z M272.068,255v51.2h-0.001h-34.133 V255c0-9.387,7.68-17.067,17.067-17.067C264.388,237.933,272.068,245.613,272.068,255z M186.734,255v51.2h-0.001H152.6V255 c0-9.387,7.68-17.067,17.067-17.067C179.054,237.933,186.734,245.613,186.734,255z M101.401,255v51.2H101.4H67.267V255 c0-9.387,7.68-17.067,17.067-17.067C93.721,237.933,101.401,245.613,101.401,255z M485.4,186.733H24.6 c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h59.733H485.4 c5.12,0,8.533,3.413,8.533,8.533S490.52,186.733,485.4,186.733z"></path> </g> </g> </g></svg>
        </a>
      </div>

      <nav id="navbar" class="navbar order-last order-lg-0 dropdown">
        <ul>
          <li><a class="nav-link scrollto" href="#introduction">Introduzione</a></li>
          <li><a class="nav-link scrollto" href="#location">Posizione</a></li>
          <li><a class="nav-link scrollto" href="#description">Descrizione</a></li>
          <li><a class="nav-link scrollto" href="#orari">Orari</a></li>
          <li><a class="nav-link scrollto" href="#biglietti">Biglietti</a></li>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <!-- cambiamenti alla navbar se è stato effettuato l'accesso o meno -->
      <?php
      if(!isset($_SESSION["condizione"]) ||$_SESSION["condizione"]!=true){
        echo '
        <div class="header-account-dropdowns d-flex align-items-center">
          <a class="nav-link"><i class="bi bi-person-fill"></i></a>
          <a href="./carrello_page.php" class="nax-link"><i class="bi bi-cart-fill"></i></a>
        </div>';
      }else{
        echo '
        <div class="header-account-dropdowns d-flex align-items-center">
          <a class="nav-link"><i class="bi bi-person-fill" onclick="toggleMenu()"></i></a>
          <a href="./carrello_page.php" class="nax-link"><i class="bi bi-cart-fill"></i></a>
        </div>

        <div class="account-dropdown" id="dropdown">
        <div class="account">
          <div class="user-info">
            <img src="assets/img/account-image.png" alt="">
            <h4 id="nome_cognome"></h4>
          </div>
          <hr>
          <h4>Biglietti Acquistati:</h4>
          <ul class="list">
            <li><p id="evento1">Concerto Primo Maggio: 0</p></li>
            <li><p id="evento2">Boccea Street: 0</p></li>
            <li><p id="evento3">Festival delle Scienze: 0</p></li>
            <li><p id="evento4">Vinalia Priora: 0</p></li>
            <li><p id="evento5">Rugantino al Sistina: 0</p></li>
            <li><p id="museo1">Musei Vaticani: 0</p></li>
            <li><p id="museo2">Musei Capitolini: 0</p></li>
            <li><p id="museo3">Galleria Borghese: 0</p></li>
            <li><p id="museo4">Galleria Doria Pamphilj: 0</p></li>
            <li><p id="museo5">Museo Nazionale di Arte Moderna e Contemporanea: 0</p></li>
            <li><p id="museo6">MAXXI: 0</p></li>
            <li><p id="monumento1">Colosseo: 0</p></li>
            <li><p id="monumento2">Ara Pacis: 0</p></li>
            <li><p id="monumento3">Castel Sant\'Angelo: 0</p></li>
            <li><p id="monumento4">Altare della Patria: 0</p></li>
            <a class="btn btn-primary" href="logout.php">Log Out</a>
          </ul>
        </div>
      </div>'
      ;}
      ?>

    </div>
</header><!-- End Header Section -->

<header class="hero12" id="introduction"> <!--hero12 sfondo completamente nero-->
    <div class="container">
        <div class="text-block fadeInRight">
            <div class="text-center">
                <h1 class="titolo"></h1> 
                <h2 class="introduzione"></h2> 
            </div>
        </div>
    </div>
</header>

<!-- sezione location -->
<section class="location text-center" id="location">
    <div class="location-description">
        <h2 class="location-header">Localizza con Maps</h2>
        <p class="location-paragraph">
            Visualizza la posizione precisa sulla mappa. Usa <strong>+/-</strong> per ingrandire o restringere la visuale.<br>
            Il tasto <strong>indicazioni stradali</strong> ti rindirizzerà su google maps per mostrarti come raggiungere questa destinazione.
        </p>
    </div>
    <div class="location-map">    
        <iframe class="map" src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>

<!-- descrizione, storia, orari e biglietti -->
<section class="terza-parte" id="terza">
        <div class="description" id="description">
            <img class="description-image" src="./assets/img/colosseum-description.jpg" alt="">
            <div class="description-box text-block">
                <h4>Descrizione e Storia</h4>
                <p class ="storia" > Il Colosseo era anticamente chiamato Amphitheatrum Flavium e fu progettato come arena di spettacoli per contenere un numero di spettatori compreso fra i 50mila e i 75mila. 
                    La sua edificazione fu voluta per ordine di Vespasiano nel 72 e l'anfiteatro fu inaugurato 8 anni dopo, sotto il regno di Tito. Originariamente aveva un'altezza di 52 metri 
                    per una superficie interna di oltre 3300 mq. La sua pianta e l'architettura esterna sono chiaramente ispirati allo stile imperiale molto in voga in quel secolo. 
                    Si tratta di un piccolo capolavoro di architettura in quanto la sua struttura ad archi si basa su un complesso sistema di architravi davvero innovativo per l'epoca. 
                    La sua edificazione fu pensata per realizzare un luogo dove offrire spettacoli pubblici a spese dello stato e intrattenere la popolazione. Proprio per questo le sue dimensioni 
                    erano così imponenti tanto da meritargli nel medioevo l'appellativo di colosseum, traducibile con colossale, che si riferiva alla sua imponenza. Nel corso dei secoli l'appellativo 
                    sostituì completamente il nome proprio dell'anfiteatro Flavio che oggi è conosciuto da tutti proprio come Colosseo. Al di sotto dell'arena dei combattimenti fu realizzato un 
                    complesso sistema di corridoi e di stanze per ospitare i protagonisti degli spettacoli che venivano messi in scena. Al Colosseo si esibivano i gladiatori per gli incontri di lotta 
                    ma venivano inscenate anche rievocazioni di battaglie storiche oppure simulazioni di incredibili cacce. Recenti studi hanno invece dimostrato come sia totalmente priva 
                    di fondamento storico la notizia che vuole il Colosseo teatro di uccisioni di massa di cristiani, sbranati dai leoni, all'epoca di Nerone e di Caligola.
                </p>
            </div>
        </div>
        <div class="biglietti-orari">
        <!-- riga uno-->
        <div id="orari" class="row justify-content-center">
            <div class="col-lg-6"><img class="img-terza" src="./assets/img/bg-colosseo.jpg"/></div>
            <div class="col-lg-6">
                <div class="terza text-center text-lg-left">
                    <h4 class="titolo_terza">Orari</h4>
                    <p class="descrizione_terza">Aperto ogni giorno dalle 9 alle 19:15.</p>
                </div>
            </div>
        </div>
        <!-- riga due-->
        <div id="biglietti"class="row justify-content-center">
            <div class="col-lg-6"><img class="img-terza" src="./assets/img/bg-colosseo.jpg" alt="..." /></div>
            <div class="col-lg-6 order-lg-first">
                <div class="terza text-center h-100">
                    <h4 class="titolo_terza">Biglietti</h4>
                    <p id="valore_biglietto" class="descrizione_terza ">24 ore -> 16,00€</p>
                    <div class="touchspin d-flex align-items-center gap-2 text-center" style="max-width: 200px; display: block;
                    margin-left: auto;
                    margin-right: auto;">
                        <p>Compra biglietti: </p>
                        <button id="bottone_meno" class="btn btn-touchspin"type="button" data-touchspin-down>-</button>
                        <input id="contatore"type="text" value="0" min="0" class="form-control text-center" data-touchspin-input disabled>
                        <button id="bottone_piu" class="btn btn-touchspin" type="button" data-touchspin-up>+</button>
                    </div>
                    <p id="importo" class="importo_totale">Importo totale: x,xx€</p>
                    <a href="carrello_page.php"><button id="compra" class="btn btn-dark">Compra</button></a>
                    
                </div>
            </div>
        </div>
    </div>
</section>

<!-- se l'utente non è loggato disabilita il bottone Compra biglietti -->
<?php
      if(!isset($_SESSION["condizione"]) ||$_SESSION["condizione"]!=true){
        echo '<script>document.getElementById("compra").disabled = true;</script>';
      }else{
        echo '<script>document.getElementById("compra").disabled = false;</script>';
      }
?>

  <script src="./assets/js/pagina-interna.js"></script>

  <!-- script per il dropdown menu dell'account -->
  <script>
    let dropdown = document.getElementById("dropdown");
    
    function toggleMenu(){
      dropdown.classList.toggle("open");
    }
  </script>
</body>
</html>