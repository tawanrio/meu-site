export class Carousel{
   constructor(controller, elementos){
      this.dataCarousel = elementos
      this.controller = controller
      this.timerInterval
      this.initCarousel = 0
      this.timerSetCard = 10000

      this.createCarousel()
      this.changeOrderBySetInterval()
   }

   createCarousel(){
      const arrCarousel = document.querySelectorAll(".skill-menu-content")

      arrCarousel.forEach(carousel => {
         const {card} = this.checkCard(carousel)

         if(this.initCarousel == this.dataCarousel[card].length){
            this.initCarousel = 0
         }
         const elementosCard = this.createElements(this.dataCarousel[card], this.initCarousel, carousel)
         this.controller.renderCarousel(elementosCard)

      })
   }

   createElements(dataCarousel, orderId, carousel){

      

      
      const dados = dataCarousel[orderId]

      // CRIA O MENU COM EVENTO CLICK
      const menuCarousel = [] // RETORNO ESTA VARIAVEL
      dataCarousel.forEach(e => {
         const li = document.createElement('LI')
         const {icon, span} = this.createTitleElement(e.skill)
         li.setAttribute('orderId', menuCarousel.length)
         li.addEventListener('click', () => {
            
            const carousel = this.getCarouselElement(li)
            const {card} = this.checkCard(carousel);
            const orderId = li.getAttribute('orderid')
            
            const elementosCard = this.createElements(this.dataCarousel[card], orderId, carousel);
            this.controller.renderCarousel(elementosCard)
         })
         li.append(icon,span)
         menuCarousel.push(li)
      })


      // INSERE EM titleCard O TITULO DO CARD
      const titleCard = dados.title // RETORNO ESTA VARIAVEL

      // INSERE EM descUl A DESCRICAO
      const descUl = [] // RETORNO ESTA VARIAVEL
      dados.descLi.forEach(line => {
         const li = document.createElement('LI')
         li.innerHTML = line
         descUl.push(li)
      })

      // INSERE EM link A IMAGEM E O PARAGRAFO
      const url = dados.imgLink.url
      const fileImg = dados.imgLink.img
      const pAcessar = document.createElement('P')
      const img = document.createElement('IMG')

      let link // RETORNO ESTA VARIAVEL
      if(url !== '#'){
         link = document.createElement('A')
         link.setAttribute('href', url)
         link.setAttribute('target', '_blank')
         pAcessar.innerHTML = 'Acessar'
      }else{
         link = document.createElement('li')
         link.style.cssText = 'list-style: none; cursor: pointer'
         pAcessar.innerHTML = 'Indisponível'
      }

      img.setAttribute('src', fileImg)
      link.append(img,pAcessar)


      // INSERE EM divTitle o icone eo titulo da skill

      const divTitle = [] // RETORNO ESTA VARIAVEL
      const {icon, span} = this.createTitleElement(dados.skill)
      divTitle.push(icon, span)

      
      return { descUl, divTitle, link, titleCard, menuCarousel, carousel }

   }
   
   getCarouselElement(reference){
      let carousel = reference;
      while (!carousel.classList.contains('skill-menu-content')) {
         carousel = carousel.parentElement
      }
      return carousel
   }

   createTitleElement(dados){
      const icon = document.createElement('I')
      icon.classList = dados.class
      const span = document.createElement('SPAN')
      span.innerHTML = dados.span

      return {icon, span}
   }
   
   checkCard(arrow){
      let card = null
      let side = null

      if(arrow.classList.contains('front')){
         card = 'front'
      }else if(arrow.classList.contains('back')){
         card = 'back'
      }

      if(arrow.classList.contains('left')){
         side = 'left'
      }else if(arrow.classList.contains('right')){
         side = 'right'
      }
      
      return {side, card}
   }

   changeOrderBySetInterval(){
      this.timerInterval = setInterval(() =>{
       this.initCarousel += 1
       this.createCarousel()

      },this.timerSetCard)

      

   }

   changeOrderByArrow(side, card, carousel){
      let dataCarousel = this.dataCarousel[card].length-1
      let orderId = parseInt(carousel.querySelector('.active').getAttribute('orderid'))

      clearInterval(this.timerInterval)

      switch(side){
         case 'right':
            if(orderId == dataCarousel) {
               orderId = 0
            }else{
               orderId += 1
            }
            break
            
            case 'left':
               if(orderId == 0) {
                  orderId = dataCarousel
               }else{
                  orderId -= 1            
               }
               break
            }
         
         this.changeOrderBySetInterval()    
       return this.createElements(this.dataCarousel[card], orderId, carousel)
   }

   alterCard(arrow){
      const {side, card} = this.checkCard(arrow);
      
      const carousel = this.getCarouselElement(arrow)
     
     return this.changeOrderByArrow(side, card, carousel)
   }
}