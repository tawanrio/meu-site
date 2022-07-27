import {dadosCarousel} from './data/data.js'
import {AppView} from './view/App.view.js'
import {AppService} from './service/App-service.js'
import {Carousel} from './service/Carousel-service.js'
import {AppController} from './controller/App-controller.js'

(function(){
   const appView = new AppView()
   const appService = new AppService()
   const appController = new AppController(appView, appService)
   const carouselService = new Carousel(appController, dadosCarousel)
   
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
      document.querySelector('.whats').classList.toggle('whats-toggle')
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
}


})()

