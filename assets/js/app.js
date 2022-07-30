import {dataCarousel} from './data/data-carousel.js'
import {dataPortfolio} from './data/data-portfolio.js'
import {AppView} from './view/App.view.js'
import {AppService} from './service/App-service.js'
import {Carousel} from './service/Carousel-service.js'
import {Portfolio} from './service/Portfolio-service.js'
import {AppController} from './controller/App-controller.js'

(function(){
   const appView = new AppView()
   const appService = new AppService()
   const appController = new AppController(appView, appService)
   const carouselService = new Carousel(appController, dataCarousel)
   const portfolioService = new Portfolio(appController,dataPortfolio)
   
initEvents()


function initEvents(){


   
   // Enviar  Whats
document.querySelector('form#whats').addEventListener('submit', function(e){
   e.preventDefault();
   const name = this.name.value
   const message = this.message.value
   if(!name || !message) return 
   appController.enviarWhats(name, message)
})

   // Toggle WhatsApp
document.querySelectorAll('.btn-toggle').forEach(element => {

   element.addEventListener('click', function(){
      if(element.classList.contains('fa-whatsapp')){
         document.querySelector('.whats').classList.remove('whats-toggle')
      }else{
         document.querySelector('.whats').classList.toggle('whats-toggle')
      }
      
      if(!document.querySelector('.whats').classList.contains('whats-toggle')){
         return document.querySelector('#whats-span').innerHTML = 'WhatsApp <i class="fa-brands fa-whatsapp"></i>' 
      }
      return document.querySelector('#whats-span').innerHTML = 'Fale Comigo' 
   })
})

   // Altera card carrossel arrow
document.querySelectorAll('.carousel-arrow').forEach(arrow => {
   arrow.addEventListener('click', function(e){
      appController.arrowCarousel(arrow, carouselService)

   })
})


function replaceSpecialChars(str){
   str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
   str = str.replace(/[àáâãäå]/,"a");
   str = str.replace(/[ÈÉÊË]/,"E");
   str = str.replace(/[Ìíîï]/,"i");
   str = str.replace(/[Ç]/,"C");
   str = str.replace(/[ç]/,"c");
   str = str.toLowerCase()

   return str.replace(/[^a-z0-9]/gi,''); 
}

//  TROCA IMAGEM PNG POR GIF NO PORTFOLIO
document.querySelectorAll('.portfolio-grid-card').forEach(card => {
   card.addEventListener('click',function(){
      
   })


   card.addEventListener('mouseenter', function(){
   //    const src = this.querySelector('img').getAttribute('src').replace('png','gif');
      
   //    if( replaceSpecialChars(this.querySelector('h3').textContent) === 'missaoimpossivel'){
   //       this.querySelector('img').setAttribute('src',src);
   //    }
   //    if( replaceSpecialChars(this.querySelector('h3').textContent) === 'autoatendimento'){
   //       this.querySelector('img').setAttribute('src',src);
   //    }

   // })

   // card.addEventListener('mouseleave', function(){
   //    const src = this.querySelector('img').getAttribute('src').replace('gif','png');
      
   //    if( replaceSpecialChars(this.querySelector('h3').textContent) === 'missaoimpossivel'){
   //       this.querySelector('img').setAttribute('src',src);
   //    }
   //    if( replaceSpecialChars(this.querySelector('h3').textContent) === 'autoatendimento'){
   //       this.querySelector('img').setAttribute('src',src);
   //    }


   })

})


}
})()

