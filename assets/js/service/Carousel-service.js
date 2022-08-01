export class Carousel{
   constructor(controller, elementos){
      this.dataCarousel = elementos
      this.controller = controller
      this.timerInterval
      this.initCarousel = {front: 0, back: 0}
      this.timerSecSetCard = 15
      this.lastChange = {front: new Date(), back: new Date()}
      this.newChange = {front: null, back: null}

      this.createCarousel()
   }

   createCarousel(){
      const arrCarousel = document.querySelectorAll(".skill-menu-content")
      arrCarousel.forEach(carousel => {
         const {card} = this.checkCard(carousel)

         if(this.initCarousel[card] == this.dataCarousel[card].length-1){
            this.initCarousel[card] = 0
         }else{
            this.initCarousel[card] += 1
         }
         
         const elementosCard = this.createElements(this.dataCarousel[card], this.initCarousel[card], carousel)
         this.controller.renderCarousel(elementosCard)

      })
   }

   createCard(){
      const elementosCard = {...arguments[0]}
      let lado = elementosCard.side || 'right'

      const card = document.createElement('div')
      // const title = document.createElement('h3')
      // const hr = document.createElement('hr')
      const desc = document.createElement('div')
      const ul = document.createElement('ul')
      const img = document.createElement('div')

      card.id = 'card'
      card.className = `skill-menu-content-carousel-container-card card-${lado}`

      // title.className = 'skill-menu-content-carousel-container-card-title carousel-title'

     
      desc.className = 'skill-menu-content-carousel-container-card-desc'
      
      ul.className = 'carousel-ul'

      elementosCard.descUl.forEach(li => {
         ul.append(li)
      })
      
      
      img.className = 'skill-menu-content-carousel-container-card-img carousel-img'

      for(let prop in elementosCard.containerImg){
         img.append(elementosCard.containerImg[prop])

      }

      // console.log();
      
      // card.append(title)
      // card.append(hr)
      desc.append(ul)
      card.append(img)
      card.append(desc)


      return card 
      
   }

   createElements(dataCarousel, orderId, carousel, side){

      const dados = dataCarousel[orderId]

      // console.log(orderId);
      // CRIA O MENU COM EVENTO CLICK
      const menuCarousel = [] // RETORNO ESTA VARIAVEL
      dataCarousel.forEach(e => {
         const li = document.createElement('LI')
         const {icon, span} = this.createTitleElement(e.skill)
         li.setAttribute('orderId', menuCarousel.length)
         li.addEventListener('click', () => {
            if(li.classList[0] !== undefined) return
            const carousel = this.getCarouselElement(li)
            const {card} = this.checkCard(carousel);
            const orderId = li.getAttribute('orderid')
            
            const elementosCard = this.createElements(this.dataCarousel[card], orderId, carousel);
            if(elementosCard === null) return
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

      // let linkAcessar = document.createElement('a')
      let linkAcessar
      const img = document.createElement('img')
      const iconExpand = document.createElement('i')

      const divImg = document.createElement('div')

      
      // let containerImg // RETORNO ESTA VARIAVEL

      if(url !== '#'){
         linkAcessar = document.createElement('a')
         linkAcessar.setAttribute('href', url)
         linkAcessar.setAttribute('target', '_blank')
         linkAcessar.innerHTML = 'Acessar'
      }else{
         linkAcessar = document.createElement('li')
         linkAcessar.style.cssText = 'list-style: none; cursor: pointer'
         linkAcessar.innerHTML = 'Indisponível'
      }
      
      img.setAttribute('src', fileImg)
      
      iconExpand.classList.add('fa-solid','fa-expand')
      iconExpand.addEventListener('click', () => {
         
         
         divImg.classList.toggle('active')
         iconExpand.classList.toggle('active')
         iconExpand.classList.toggle('fa-compress')
         iconExpand.classList.toggle('fa-expand')

         if(iconExpand.classList.contains('active')){
            clearInterval(this.timerInterval)
         }else{
            this.changeOrderBySetInterval() 
         }

      })

      divImg.append(img,iconExpand)
      divImg.style.cssText = 'position: relative; width: 70%; margin: 0 auto; transition: .4s'
      const containerImg = {divImg,linkAcessar}
      // const containerImg = {divImg,linkAcessar}


      // INSERE EM divTitle o icone eo titulo da skill

      const divTitle = [] // RETORNO ESTA VARIAVEL
      const {icon, span} = this.createTitleElement(dados.skill)
      divTitle.push(icon, span)
      
      
       // CRIA O MENU
       const ul = carousel.querySelector('.carousel-nav')
       ul.innerHTML = ''
       ul.append(...menuCarousel)
       
       // ATIVA O LINK

       ul.querySelectorAll('li').forEach(lis => {
          if(lis.classList.contains('active')){
             lis.classList.remove('active')
          }
 
          if(lis.querySelector('span').textContent == divTitle[1].textContent){
             lis.classList.add('active')
          }
       })

      
   const card = this.createCard({ descUl, containerImg, divTitle, carousel, side })
   
   this.disableEnableArrow(carousel)
   clearInterval(this.timerInterval)
   this.changeOrderBySetInterval() 

   return {divTitle, carousel, card , side}
}

   intervalChangeCard(ms){
      
      
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
            this.createCarousel()

            
         },this.timerSecSetCard*1000)
   }

   changeOrderByArrow(side, card, carousel){
      let dataCarousel = this.dataCarousel[card].length-1
      let orderId = parseInt(carousel.querySelector('.active').getAttribute('orderid'))

      

      
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
            
         const elementosCard = this.createElements(this.dataCarousel[card], orderId, carousel, side)

         if(elementosCard === null) return


       return elementosCard
   }
   disableEnableArrow(carousel){

      const lis = carousel.querySelectorAll('.carousel-nav li');
      const arrows = carousel.querySelectorAll('.carousel-arrow');


      lis.forEach(li=>{
         li.style.cssText = 'pointer-events: none'
      })

      arrows.forEach(arrow=>{
         arrow.style.cssText = 'pointer-events: none'
      })


      setTimeout(()=>{
         lis.forEach(li=>{
            li.style.cssText = 'pointer-events: visible'
         })

         arrows.forEach(arrow=>{
            arrow.style.cssText = 'pointer-events: visible'
         })
      },250)
   }

   alterCard(arrow){
      const {side, card} = this.checkCard(arrow);
      const carousel = this.getCarouselElement(arrow)

      // this.disableEnableArrow(arrow)
      
     return this.changeOrderByArrow(side, card, carousel)
   }
}