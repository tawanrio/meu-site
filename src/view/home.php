
<!DOCTYPE html>
<html lang="pt-BR">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
   <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
   <title>Tawan Rio</title>
   <!-- CSS -->
   <link rel="stylesheet" href="./assets/css/style.css">
   <!-- Font Roboto e Montserrat -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

   <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600&family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,100;1,300;1,500&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
 
</head>
<body>
<input type="hidden" name="access" id="access" value="<?php echo Database::getAcessAll(); ?>" />
   <header id="home" class="header">
      <nav class="nav" data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
      <ul>
         <li><a href="#home">Inicio</a></li>
         <li><a href="#skill">Habilidades</a></li>
         <li><a href="#portfolio">Portfólio</a></li>
         <li><a href="#contact">Contato</a></li>
         <li><a href="/assets/img/cv/Tawan-currículo.png" id="cv" download>Download CV</a> </li>
      </ul>
   </nav>
   
   <div class="person">
      <img id="logo" src="assets/img/logo.png" alt="">
      <h2 id='name'>Tawan Rio</h2>
   </div>
   <div class="divisor"></div>
      
   <div class="home">
      
      <div class="home-content">
         <h1 class="home-content-title">Desenvolvedor Web</h1>
         <div class="home-content-desc">
            <p>
               Olá, meu nome é Tawan Rio tenho 26 anos, sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Anhanguera.
            </p>
            <p>
               Gosto de desenvolver tanto no Front-end como Back-end. Tenho facilidade para aprender novas ferramentas e adoro novos Desafios!
            </p>
            <br>
         </div>
         </div>
         <div class="home-social-media">
            <a href="https://www.linkedin.com/in/tawanrio/" target="_blank" >
               <i class="fab fa-linkedin-in in"></i>
               <span class="social-media-subtitulo">Linkedin</span>
            </a>

            <a href="#contact" >
               <i class="fa-brands fa-whatsapp btn-toggle"></i>
               <span class="social-media-subtitulo">WhatsApp</span>
            </a>
            
            <a href="https://www.facebook.com/tawan.rio" target="_blank" >
               <i class="fab fa-facebook-f f"></i>
               <span class="social-media-subtitulo">Facebook</span>
            </a>
         </div>
      </div>

      </header>
     
      <main class="main" >
         <section id="skill" class="skill">
            <h2 class="skill-title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Habilidades</h2>
            <div class="skill-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
               <div class="skill-card-img">
                  <img src="assets/img/geral/server4.png" alt="">
                  <span></span>
               </div>
               <div class="skill-card-content">
                  <h3 class="skill-card-content-title">Back-end<hr></h3>
                  <p>
                        Desenvolvimento bem estruturado seguindo o padrão <b><i><a href="#skill">MVC</a></i></b>
                     </p>
                     <p>
                        Segurança e qualidade aplicando os conceitos <b><i><a href="#skill">SOLID</a></i></b>
                     </p>
                  </div>
               </div>

               <div class="skill-menu">
                 <div class="skill-menu-top"></div>

                 <div class="skill-menu-content back" id="back">
                    <div class="skill-menu-content-title content-title"><i class="fa-brands fa-php"></i><span>PHP</span></div>

                     <div class="skill-menu-content-carousel">
                        <i class="fa-solid fa-circle-chevron-left carousel-arrow back left" style="pointer-events: visible;"></i>

                        <div class="skill-menu-content-carousel-container">
                        
                           

                     <div id="card" class="skill-menu-content-carousel-container-card card-fade"><div class="skill-menu-content-carousel-container-card-img carousel-img"><div class="divImg" id="divImg"><div class="divImgContainer"><img src="assets/img/certificados/certificado-php.jpg"><a><i class="fa-solid fa-expand"></i></a></div></div><a href="https://www.udemy.com/certificate/UC-f33b2010-9301-4ec4-bbaf-d0aa77121148/" target="_blank">Acessar</a></div><div class="skill-menu-content-carousel-container-card-desc"><ul class="carousel-ul"><li>Criar uma base sólida em PHP, desde os princípios mais básicos.</li><li>Conhecer a sintaxe do PHP, os tipos e variáveis da linguagem.</li><li>Entender as estruturas de lógica e repetições.</li><li>Criar funções, classes e objetos em PHP.</li><li>Integrar o PHP com HTML, CSS e Javascript.</li><li>Integrar a aplicação com banco de dados usando PDO e MySQLi.</li><li>Criar projetos PHP de aplicações reais e com layouts atrativos.</li></ul></div></div></div>
                        <i class="fa-solid fa-circle-chevron-right carousel-arrow back right" style="pointer-events: visible;"></i>
                     </div>

                     <div class="skill-menu-content-nav">
                        <ul class="carousel-nav"><li orderid="0" class="active" style="pointer-events: visible;"><i class="fa-brands fa-php"></i><span>PHP</span></li></ul>
                     </div>
                  </div>

                  <div class="skill-menu-bottom">
                  </div>
               </div>

               
            <div class="skill-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
               <div class="skill-card-content">
                     <h3 class="skill-card-content-title">Front-end<hr></h3>
                     <p>
                        Páginas rápidas e intuitivas, com layout responsivo!
                     </p>
                     <p>
                        Utilizando as melhores ferramentas do mercado.
                     </p>
                  </div>
                  <div class="skill-card-img">
                     <img src="assets/img/geral/front.png" alt="">
                  </div>
                  
            </div>
            <div class="skill-menu">
               <div class="skill-menu-top"></div>

               
               <div class="skill-menu-content front" id="front">
                  <div class="skill-menu-content-title content-title"><i class="fa-brands fa-js-square"></i><span>Javascript</span></div>

                   <div class="skill-menu-content-carousel">
                        <i class="fa-solid fa-circle-chevron-left carousel-arrow front left" style="pointer-events: visible;"></i>
                                                 

                        <div class="skill-menu-content-carousel-container">
                           

                        <div id="card" class="skill-menu-content-carousel-container-card card-fade"><div class="skill-menu-content-carousel-container-card-img carousel-img"><div class="divImg" id="divImg"><div class="divImgContainer"><img src="assets/img/certificados/certificado-javascript.jpg"><a><i class="fa-solid fa-expand"></i></a></div></div><a href="https://www.udemy.com/certificate/UC-f39de778-ea58-4d35-87ae-17ee4144c7fc/" target="_blank">Acessar</a></div><div class="skill-menu-content-carousel-container-card-desc"><ul class="carousel-ul"><li>Dominar a linguagem Javascript.</li><li>Desenvolver diversos códigos em exemplos práticos reais.</li><li>Conhecer as principais novidades no ES6.</li><li>Iniciar com orientação a objetos em Javascript.</li><li>Conhecer o básico sobre o modelo MVC.</li><li>Dar primeiros passos na criação de uma API Rest.</li></ul></div></div></div>
                     
                     
                      <i class="fa-solid fa-circle-chevron-right carousel-arrow front right" style="pointer-events: visible;"></i>
                   </div>
                   <div class="skill-menu-content-nav">
                      <ul class="carousel-nav"><li orderid="0" class="active" style="pointer-events: visible;"><i class="fa-brands fa-js-square"></i><span>Javascript</span></li><li orderid="1" style="pointer-events: visible;"><i class="fa-brands fa-js"></i><span>JQuery</span></li><li orderid="2" style="pointer-events: visible;"><i class="fa-brands fa-sass"></i><span>SASS/SCSS</span></li></ul>
                   </div>
                </div>

                <div class="skill-menu-bottom">
                </div>
             </div>
         </section>

         <section id="portfolio" class="portfolio" >
            <h2 class="portfolio-title" id="portfolio-id" data-aos="fade-up" data-aos-duration="500">Portfólio</h2>

            <div class="portfolio-grid" data-aos="fade-up" data-aos-duration="1500">

               <div class="portfolio-grid-card">
                  <h3 class="portfolio-grid-card-title">Missão Impossível<hr></h3>

                  <div class="portfolio-grid-card-img">
                        <img src="assets/img/portfolio/jogo-impossivel.png" alt="">
                     <p>
                           Visualizar
                     </p>
                  </div>
               </div>
               <div class="portfolio-grid-card">
                  <h3 class="portfolio-grid-card-title">Auto-Atendimento<hr></h3>

                  <div class="portfolio-grid-card-desc">
                     <ul>
                        <li>Aplicativo</li>
                     </ul>
                  </div>

                  <div class="portfolio-grid-card-img">
                        <img src="assets/img/portfolio/auto-atendimento.png" alt="">
                     <p>
                        Visualizar
                  </p>
                  </div>
               </div>

            </div>
             
         </section>

         <section id="contact" class="secwhats" data-aos="flip-left"
         data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div class="whats whats-toggle">
               <div class="content">
                  <div class="header">
                     <div class="title">
                        <span id="whats-span">Fale comigo</span>
                     </div>
                     <hr>
                     <a href="#contact"><i class="fa-solid fa-chevron-down btn-down btn-toggle"></i></a>
                  </div>
                  <div class="main">
                     <form id="whats" action="">
                        <input required type="name" id="name" placeholder="Nome">
                        <textarea required name="message" id="message" placeholder="Escreva aqui!" cols="30" rows="10"></textarea>
                        <input type="submit" value="Enviar">
                     </form>
                     <i class="fa-solid fa-chevron-up btn-up btn-toggle"></i>
                  </div>
               </div>
            </div>
         </section>
      
      </main>
    <footer class="footer">
      <div class="footer-top">
          <div class="footer-top-about">
              <h3>Sobre Mim</h3>
              <p>Entrei no mundo da tecnologia em 2017, quando iniciei minha graduação. Enquanto estudava
              trabalhei em outra área até que terminasse a faculdade.</p>
              <p>Gosto de aprender e estudar novas tecnologia, estou sempre buscando me aprimorar!</p>
              <p>Meus hobbies são: Jogar, assistir filmes e séries, sair com a família e amigos.</p>
            </div>
            <div class="footer-top-categories">
               <h3>Informações</h3>
               <div class="dados">

                  <ul>
                     <li>
                        <a href="">
                           <i class="fa-solid fa-location-dot"></i>
                           Rua Antônio José marques, 142 - SBC
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <i class="fa-solid fa-envelope"></i>
                           stawanrio@gmail.com
                        </a>
                     </li>
                     <li>
                        <a href="https://www.linkedin.com/in/tawan-rio-47883a181/" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                            Linkedin
                        </a>
                     </li>
                     <li>
                        <a href="https://www.facebook.com/tawan.rio" target="_blank">
                           <i class="fab fa-facebook-f"></i>
                           Facebook
                        </a>
                     </li>
                     <li>
                        <a href="https://github.com/tawanrio" target="_blank">
                           <i class="fa-brands fa-github"></i>
                           Git Hub
                        </a>
                     </li>

                  </ul>
                  </div>
          </div>
      </div>
      <div class="footer-bottom">
          <p>&copy; Tawan rio - 2022</p>
      </div>
  </footer>

        
   <script src="assets/js/app.js" type="module"></script>
   <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
   <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
   <script>
      AOS.init();
    </script>
</body>
</html>