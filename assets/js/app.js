const appView = new AppView()
const appService = new AppService()
const appController = new AppController(appView, appService)


 


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