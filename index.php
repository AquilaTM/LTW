
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
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="assets/css/account-dropdown-menu.css" rel="stylesheet">

  <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="assets/js/salvo-pagina-interna.js"></script>
  <script src="assets/js/account-utente.js"></script>
</head>

<body">

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center bg-dark">
    <div class="container d-flex align-items-center">

      <div class="logo me-auto">
        <a href="index.php">
          <svg class="colosseum" height="35px" width="35px" version="1.1" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <path d="M511,331.8c0-11.491-6.963-20.833-17.067-24.224V202.424C504.037,199.033,511,189.691,511,178.2 c0-14.507-11.093-25.6-25.6-25.6H347.019L307.907,44.227c-2.56-6.827-9.387-11.093-16.213-11.093H33.133 c-9.387,0-17.067,7.68-17.067,17.067v103.776C5.963,157.367-1,166.709-1,178.2c0,11.491,6.963,20.833,17.067,24.224v105.152 C5.963,310.967-1,320.309-1,331.8c0,11.491,6.963,20.833,17.067,24.224V459.8H7.533c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533H24.6h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2H485.4h17.067 c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-8.533V356.024C504.037,352.633,511,343.291,511,331.8z M33.133,50.2 h258.56l36.693,102.4h-39.253v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8v-51.2 c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2 c0-18.773-15.36-34.133-34.133-34.133C65.56,67.267,50.2,82.627,50.2,101.4v51.2H33.133V50.2z M272.068,101.4v51.2h-0.001h-34.133 v-51.2c0-9.387,7.68-17.067,17.067-17.067C264.388,84.333,272.068,92.013,272.068,101.4z M186.734,101.4v51.2h-0.001H152.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067C179.054,84.333,186.734,92.013,186.734,101.4z M101.401,101.4v51.2H101.4H67.267v-51.2 c0-9.387,7.68-17.067,17.067-17.067C93.721,84.333,101.401,92.013,101.401,101.4z M101.401,459.8H67.267v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M186.734,459.8H152.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M272.067,459.8h-34.134v-51.2 c0-9.387,7.68-17.067,17.067-17.067s17.067,7.68,17.067,17.067V459.8z M357.401,459.8h-34.134v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M442.734,459.8H408.6v-51.2 c0-9.387,7.68-17.067,17.067-17.067c9.387,0,17.067,7.68,17.067,17.067V459.8z M476.866,459.8H459.8v-51.2 c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133 s-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8 v-51.2c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067v-51.2 c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v51.2H33.133V357.4h443.733V459.8z M485.4,340.333 H24.6c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h34.133h51.2h34.133h51.2 H485.4c5.12,0,8.533,3.413,8.533,8.533S490.52,340.333,485.4,340.333z M425.667,220.867c-18.773,0-34.133,15.36-34.133,34.133 v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2h-17.067V255 c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133v51.2H203.8V255c0-18.773-15.36-34.133-34.133-34.133 c-18.773,0-34.133,15.36-34.133,34.133v51.2h-17.067V255c0-18.773-15.36-34.133-34.133-34.133 C65.56,220.867,50.2,236.227,50.2,255v51.2H33.133V203.8h443.733v102.4H459.8V255C459.8,236.227,444.44,220.867,425.667,220.867z M442.734,255v51.2h-0.001H408.6V255c0-9.387,7.68-17.067,17.067-17.067C435.054,237.933,442.734,245.613,442.734,255z M357.4,255 v51.2h-34.133V255c0-9.387,7.68-17.067,17.067-17.067C349.721,237.933,357.4,245.613,357.4,255z M272.068,255v51.2h-0.001h-34.133 V255c0-9.387,7.68-17.067,17.067-17.067C264.388,237.933,272.068,245.613,272.068,255z M186.734,255v51.2h-0.001H152.6V255 c0-9.387,7.68-17.067,17.067-17.067C179.054,237.933,186.734,245.613,186.734,255z M101.401,255v51.2H101.4H67.267V255 c0-9.387,7.68-17.067,17.067-17.067C93.721,237.933,101.401,245.613,101.401,255z M485.4,186.733H24.6 c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h34.133h51.2h34.133h51.2H229.4h51.2h59.733H485.4 c5.12,0,8.533,3.413,8.533,8.533S490.52,186.733,485.4,186.733z"></path> </g> </g> </g></svg>
        </a>
      </div>
    <?php
      if(!isset($_SESSION["condizione"]) ||$_SESSION["condizione"]!=true){
        echo '
        <nav id="navbar" class="navbar order-last order-lg-0 dropdown">
        <ul>
          <li><a class="nav-link scrollto active" href="#home">Home</a></li>
          <li><a class="nav-link scrollto" href="#eventi">Eventi</a></li>
          <li><a class="nav-link scrollto" href="#musei">Musei</a></li>
          <li><a class="nav-link scrollto" href="#monumenti">Monumenti</a></li>
          <li><a class="nav-link scrollto" href="#aree-verdi">Aree Verdi</a></li>
          <li><a class="nav-link" id="sign-in" href="pagina-login.html">Sign Up</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

      <div class="header-account-dropdowns d-flex align-items-center">
        <a class="nav-link"><i class="bi bi-person-fill"></i></a>
        <a href="./carrello_page.php" class="nax-link"><i class="bi bi-cart-fill"></i></a>
      </div>';
      }else{
        echo '
        <nav id="navbar" class="navbar order-last order-lg-0 dropdown">
        <ul>
          <li><a class="nav-link scrollto active" href="#home">Home</a></li>
          <li><a class="nav-link scrollto" href="#eventi">Eventi</a></li>
          <li><a class="nav-link scrollto" href="#musei">Musei</a></li>
          <li><a class="nav-link scrollto" href="#monumenti">Monumenti</a></li>
          <li><a class="nav-link scrollto" href="#aree-verdi">Aree Verdi</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

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
  </header><!-- End Header Section -->

  <!-- ======= Home Section ======= -->
  <section id="home" class="d-flex flex-column justify-content-center align-items-center">
    <div class="container text-center text-md-left" data-aos="fade-up">
      <h1>Life In Rome</h1>
      <h2>Esplora il patrimonio artistico e naturale della città eterna e acquista biglietti per visitare le meraviglie senza tempo nel mondo dell'arte e della storia.</h2>
      
      <?php
        if(!isset($_SESSION["condizione"]) ||$_SESSION["condizione"]!=true){
          echo('
          <a href="pagina-login.html" class="log-in">Log In</a>
          <a href="pagina-login.html" class="btn-get-started">Sign Up</a>');
        }
        else{
          echo('<a href="logout.php" class="btn-get-started">Log Out</a>');
        }
      ?>
    </div>
  </section><!-- End Home Section -->

  <main id="main">

    <!-- ======== Eventi Section ======== -->
    <section id="eventi" class="eventi section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Eventi</h2>
          <p>Partecipa ai migliori eventi di Roma</p>
        </div>

        <div class="swiper mySwiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/concertoPrimoMaggio.jpg" class="card-img">
                <div class="card-body text-center">
                  <h4><a class="primo-maggio" href="pagina-interna.php">Concerto Primo Maggio</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/Boccea Street.jpg" class="card-img-top">
                <div class="card-body">
                  <h4><a class="boccea-street" href="pagina-interna.php">Boccea street</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/festival scienze.jpg" class="card-img-top">
                <div class="card-body">
                  <h4><a class="festival-scienze" href="pagina-interna.php">Festival delle Scienze </a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/vinalia.jpeg" class="card-img-top" alt="">
                <div class="card-body">
                  <h4><a class="Vinalia-priora" href="pagina-interna.php">Vinalia Priora</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/rugantino al sistina.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <h4><a class="rugantino-sistina" href="pagina-interna.php">Rugantino al sistina</a></h4>
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>

    <!-- ======== End eventi Section ======== -->

    <!--
    <section id="skills" class="skills">
      <div class="container">

        <div class="row skills-content">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">HTML <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">PHP <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">WordPress/CMS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Photoshop <i class="val">55%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section> -->

    <!--
    <section id="counts" class="counts">
      <div class="container">

        <div class="row">

          <div class="col-lg-3 col-6">
            <div class="count-box">
              <i class="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div class="col-lg-3 col-6">
            <div class="count-box">
              <i class="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>

          <div class="col-lg-3 col-6 mt-5 mt-lg-0">
            <div class="count-box">
              <i class="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div class="col-lg-3 col-6 mt-5 mt-lg-0">
            <div class="count-box">
              <i class="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hard Workers</p>
            </div>
          </div>

        </div>

      </div>
    </section> End Counts Section -->

    <!-- ======= Musei Section ======= -->
    <section id="musei" class="musei section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Musei</h2>
          <p>Esplora i tesori nascosti dei musei più affascinanti al mondo e scopri il fascino senza tempo dell'arte e della storia!</p>
        </div>

        <div class="row">
          <div class="col-md-6 mt-4">
            <div class="musei-card">
              <img class="musei-section-img" src="assets/img/musei-vaticani.webp">
              <div>
                <h4><a class="Musei-Vaticani" href="pagina-interna.php">Musei Vaticani</a></h4><!--cambiato//////////////////////////////// -->
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="musei-card">
              <img class="musei-section-img" src="assets/img/musei-capitolini.webp">
              <div>
                <h4><a class="Capitolini" href="pagina-interna.php">Musei Capitolini</a></h4> <!--cambiato//////////////////////////////// -->
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="musei-card">
              <img class="musei-section-img" src="assets/img/galleria-borghese.jpg">
              <div>
                <h4><a  class="borghese" href="pagina-interna.php" >Galleria Borghese</a></h4>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="musei-card">
              <img class="musei-section-img" src="assets/img/galleria-doria-pamphilj.jpeg">
              <div>
                <h4><a class="doria-pamphiji" href="pagina-interna.php">Galleria Doria Pamphilj</a></h4>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="musei-card">
              <img class="musei-section-img" src="assets/img/museo-nazionale-di-arte-moderna.jpg">
              <div>
                <h4><a class="museo-nazionale" href="pagina-interna.php">Museo Nazionale di Arte Moderna e Contemporanea</a></h4>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="musei-card">
              <img class="musei-section-img" src="assets/img/maxxi.jpg">
              <div>
                <h4><a class="MAXXI" href="pagina-interna.php">MAXXI</a></h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Musei Section -->

    <!-- ======= Monumenti Section ======= -->
    <section id="monumenti" class="monumenti">
      <div class="container">

        <div class="section-title">
          <h2>Monumenti</h2>
          <p>Vieni a scoprire la bellezza senza tempo dei monumenti di Roma e lasciati ispirare dal loro fascino unico!</p>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <ul id="monumenti-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Antica Roma</li>
              <li data-filter=".filter-card">monumenti commemorativi</li>
              <li data-filter=".filter-web">Piazze</li>
            </ul>
          </div>
        </div>

        <div class="row monumenti-container">

          <div class="col-lg-4 col-md-6 monumenti-item filter-app wow fadeInUp">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/bg-colosseo.jpg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="colosseo" href="pagina-interna.php">Colosseo</a></h4>
                <p>Antica Roma</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/piazza di spagna.jpg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="piazza-spagna" href="pagina-interna.php">Piazza di spagna</a></h4>
                <p>piazza</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/ara pacis.jpg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="ara_pacis" href="pagina-interna.php">Ara Pacis</a></h4>
                <p>Antica Roma</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-card wow fadeInUp">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/san pietro.jpeg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="san-pietro" href="pagina-interna.php">San Pietro</a></h4>
                <p>monumenti commemorativi</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/piazza navona.jpg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="piazza-navona" href="pagina-interna.php">Piazza Navona</a></h4>
                <p>piazza</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/pantheon.jpeg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="pantheon" href="pagina-interna.php" >Pantheon</a></h4>
                <p>Antica Roma</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-card wow fadeInUp">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/castel sant'angelo.jpg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="sant-angelo" href="pagina-interna.php">Castel Sant'Angelo</a></h4>
                <p>monumenti commemorativi</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-card wow fadeInUp" data-wow-delay="0.1s">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/altare della patria.jpg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="altare-patria" href="pagina-interna.php">Altare della Patria</a></h4>
                <p>monumenti commemorativi</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 monumenti-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="monumenti-wrap">
              <figure>
                <img src="assets/img/piazza del popolo.jpg" class="img-fluid" alt="">
              </figure>

              <div class="monumenti-info">
                <h4><a class="piazza-popolo" href="pagina-interna.php">Piazza del Popolo</a></h4>
                <p>piazza</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End monumenti Section -->

    <!-- ======= Aree Verdi Section ======= -->
    <section id="aree-verdi" class="aree-verdi section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Aree Verdi</h2>
          <p>Esplora le aree verdi di Roma e lasciati trasportare dalla bellezza della natura. Scegli tra parchi storici, giardini botanici e panorami mozzafiato e regalati un momento di pace e serenità nel cuore della città eterna!</p>
        </div>

        <div class="swiper mySwiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/villa ada.jpg" class="card-img-top">
                <div class="card-body">
                  <h4><a class="villa-ada" href="pagina-interna.php">Villa Ada</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/villa pamphiji.jpg" class="card-img-top">
                <div class="card-body">
                  <h4><a class="villa-pamphiji" href="pagina-interna.php">Villa Pamphiji</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/villa torlonia.jpg" class="card-img-top">
                <div class="card-body">
                  <h4><a class="villa-torlonia" href="pagina-interna.php">Villa Torlonia</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/villa borghese.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <h4><a class="villa-borghese" href="pagina-interna.php">Villa Borghese</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/parco appia antica.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <h4><a class="appia-antica" href="pagina-interna.php">Parco Appia Antica</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/parco degli acquedotti.jpg" class="card-img-top">
                <div class="card-body">
                  <h4><a class="parco-acquedotti" href="pagina-interna1.html">Parco degli acquedotti</a></h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <img src="assets/img/villa d'este.jpeg" class="card-img-top">
                <div class="card-body">
                  <h4><a class="villa-este" href="pagina-interna.php">Villa D'este</a></h4>
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Aree Verdi Section -->

    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script>
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    </script>

    <!-- ======= Team Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="section-title">
          <h2>Team</h2>
          <p>Sito creato da:</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="member">
              <h4>Matteo Ancona</h4>
              <h6>1883608</h6>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <h4>Riccardo Aquilanti</h4>
              <h6>1907798</h6>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <h4>Valerio Lubrano</h4>
              <h6>1935801</h6>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Team Section -->

  </main><!-- End #main -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/login-switch.js"></script>
  <script src="assets/js/label-behaviour.js"></script>

  <script>textFit(document.querySelector("h1"));</script>
  
  <script>
    let dropdown = document.getElementById("dropdown");
    
    function toggleMenu(){
      dropdown.classList.toggle("open");
    }
  </script>
</body>

</html>