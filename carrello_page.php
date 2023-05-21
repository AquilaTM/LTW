<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrello</title>

    <!-- Favicons -->
    <link href="./assets/img/colosseum.png" rel="icon">
    <link href="./assets/img/colosseum.png" rel="apple-touch-icon">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    
    <!-- Our CSS Files -->
    <link href="./assets/css/header.css" rel="stylesheet">
    <link href="./assets/css/style-carrello.css" rel="stylesheet">
    <link href="./assets/css/account-dropdown-menu.css" rel="stylesheet">

    <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://unpkg.com/vue"></script>
    <script src="./assets/js/account-utente.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/collapsable.js"></script>
</head>
<body>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center bg-dark">
        <div class="container d-flex align-items-center">

        <div class="logo me-auto">
            <a href="index.php">
            <svg class="colosseum" height="35px" width="35px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <path d="M511,331.8c0-11.491-6.963-20.833-17.067-24.224V202.424C504.037,199.033,511,189.691,511,178.2 c0-14.507-11.093-25.6-25.6-25.6H347.019L307.907,44.227c-2.56-6.827-9.387-11.093-16.213-11.093H33.133 c-9.387,0-17.067,7.68-17.067,17.067v103.776C5.963,157.367-1,166.709-1,178.2c0,11.491,6.963,20.833,17.067,24.224v105.152 C5.963,310.967-1,320.309-1,331.8c0,11.491,6.963,20.833,17.067,24.224V459.8H7.533c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533H24.6h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2H485.4h17.067 c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-8.533V356.024C504.037,352.633,511,343.291,511,331.8z M33.133,50.2 h258.56l36.693,102.4h-39.253v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8v-51.2 c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2 c0-18.773-15.36-34.133-34.133-34.133C65.56,67.267,50.2,82.627,50.2,101.4v51.2H33.133V50.2z M272.068,101.4v51.2h-0.001h-34.133 v-51.2c0-9.387,7.68-17.067,17.067-17.067C264.388,84.333,272.068,92.013,272.068,101.4z M186.734,101.4v51.2h-0.001H152.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067C179.054,84.333,186.734,92.013,186.734,101.4z M101.401,101.4v51.2H101.4H67.267v-51.2 c0-9.387,7.68-17.067,17.067-17.067C93.721,84.333,101.401,92.013,101.401,101.4z M101.401,459.8H67.267v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M186.734,459.8H152.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M272.067,459.8h-34.134v-51.2 c0-9.387,7.68-17.067,17.067-17.067s17.067,7.68,17.067,17.067V459.8z M357.401,459.8h-34.134v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M442.734,459.8H408.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M476.866,459.8H459.8v-51.2 c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133 s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8 v-51.2c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2 c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2H33.133V357.4h443.733V459.8z M485.4,340.333 H24.6c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2 H485.4c5.12,0,8.533,3.413,8.533,8.533S490.52,340.333,485.4,340.333z M425.667,220.867c-18.773,0-34.133,15.36-34.133,34.133 v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067V255 c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8V255c0-18.773-15.36-34.133-34.133-34.133 c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133 C65.56,220.867,50.2,236.227,50.2,255v51.2H33.133V203.8h443.733v102.4H459.8V255C459.8,236.227,444.44,220.867,425.667,220.867z M442.734,255v51.2h-0.001H408.6V255c0-9.387,7.68-17.067,17.067-17.067C435.054,237.933,442.734,245.613,442.734,255z M357.4,255 v51.2h-34.133V255c0-9.387,7.68-17.067,17.067-17.067C349.721,237.933,357.4,245.613,357.4,255z M272.068,255v51.2h-0.001h-34.133 V255c0-9.387,7.68-17.067,17.067-17.067C264.388,237.933,272.068,245.613,272.068,255z M186.734,255v51.2h-0.001H152.6V255 c0-9.387,7.68-17.067,17.067-17.067C179.054,237.933,186.734,245.613,186.734,255z M101.401,255v51.2H101.4H67.267V255 c0-9.387,7.68-17.067,17.067-17.067C93.721,237.933,101.401,245.613,101.401,255z M485.4,186.733H24.6 c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h59.733H485.4 c5.12,0,8.533,3.413,8.533,8.533S490.52,186.733,485.4,186.733z"></path> </g> </g> </g></svg>
            </a>
        </div>

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

    <div class="content">
        <div class="container">
            <h2 class="my-5 text-center">Acquista Biglietti</h2>
        </div>
        <div class="container">
            <div class="custom-accordion" id="accordion_1">
                <div class="accordion-item">
                    <h2 class="mb-0" id="headingOne">
                        <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Eventi</button>
                    </h2>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion_1">
                        <div id="eventi" class="accordion-body">
                        <eventocrea></eventocrea>   
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="mb-0" id="headingTwo">
                        <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Musei</button>
                    </h2>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
                    <div class="accordion-body">
                        <museocrea></museocrea>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="mb-0" id="headingThree">
                        <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Monumenti</button>
                    </h2>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                        <div class="accordion-body">
                            <monumenticrea></monumenticrea>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <form action="carrello.php" method="POST">
            <div class="btn-acquista"><button  class="my-5 text-center btn btn-primary">Acquista <small id="importo-totale">(Importo totale:0€)</small></button></div>
            <input id=evento1 name="concerto-primo-maggio" value="0" type="hidden"></input>
            <input id=evento2 name="boccea-street" value="0" type="hidden"></input>
            <input id=evento3 name="festival-delle-scienze" value="0" type="hidden"></input>
            <input id=evento4 name="vinalia-priora" value="0" type="hidden"></input>
            <input id=evento5 name="rugantino-al-sistina" value="0" type="hidden" ></input>
            <input id=museo1 name="musei-vaticani" value="0" type="hidden"></input>
            <input id=museo2 name="musei-capitolini" value="0" type="hidden"></input>
            <input id=museo3 name="galleria-borghese" value="0" type="hidden"></input>
            <input id=museo4 name="galleria-doria-pamphilj" value="0" type="hidden"></input>
            <input id=museo5 name="museo-nazionale-di-arte-moderna" value="0" type="hidden"></input>
            <input id=museo6 name="maxxi" value="0" type="hidden"></input>
            <input id=monumento1 name="colosseo" value="0" type="hidden"></input>
            <input id=monumento2 name="ara-pacis" value="0" type="hidden"></input>
            <input id=monumento3 name="altare-della-patria" value="0" type="hidden"></input>
            <input id=monumento4 name="castel-sant-angelo" value="0" type="hidden"></input>
        </form>
    </div>

    <!-- <form action="carrello.php" method="post">
        <div>
            Evento 1:
            <br></br>
            <button type="button" class="evento1">+</button>
            <input type="text" name="conta_evento1" class="contatore_evento1" value="0" readonly></input>
            <button type="button" class="evento1_-">-</button>
        </div>
        <div>
            Evento 2:
            <button type="button" class="evento2">+</button>
            <input type="text" name="conta_evento2" class="contatore_evento2" value="0" readonly></input>
            <button  type="button" class="evento2_-">-</button>
    
            <button type="submit" class="acquista">Acquista</input>
            <p>costo totale:</p>
            <p class="contatore_totale">0</p>
        </div>
    </form> -->
    <script src="./assets/js/carrellovue.js"></script>
    <script>
        let dropdown = document.getElementById("dropdown");
        
        function toggleMenu(){
          dropdown.classList.toggle("open");
        }
    </script>
</body>
</html>