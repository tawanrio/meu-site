class Carousel{
   constructor(controller, elementos){
      this.dataCarousel = elementos
      this.controller = controller
      this.page = {front: 0, back: 0}
      this.criaCarousel(controller)
   }

   criaElementos(dadosCarousel, orderId, carousel){
      
      // console.log(dadosCarousel[0]);

      const menuCarousel = []
      dadosCarousel.forEach(e => {
         const li = document.createElement('LI')
         const {icon, span} = this.criaElementoTitulo(e.skill)
         li.setAttribute('orderId', menuCarousel.length)
         li.addEventListener('click', () => {

            const elementosCard = this.alterCard(li)
            this.controller.renderCarousel(elementosCard)
          
         })
         li.append(icon,span)
         menuCarousel.push(li)
      })

      const dados = dadosCarousel[page]

      // INSERE EM titleCard o titulo do card
      const titleCard = dados.title

      // INSERE EM descUl a descricao
      const descUl = []
      dados.descLi.forEach(line => {
         const li = document.createElement('LI')
         li.innerHTML = line
         descUl.push(li)
      })

      // INSERE EM link a imagem e o paragrafo
      const url = dados.imgLink.url
      const fileImg = dados.imgLink.img
      const pAcessar = document.createElement('P')
      const img = document.createElement('IMG')

      let link
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

      const divTitle = []
      const {icon, span} = this.criaElementoTitulo(dados.skill)
      divTitle.push(icon, span)

      
      return { descUl, divTitle, link, titleCard, menuCarousel, carousel }

   }

   criaElementoTitulo(dados){
      const icon = document.createElement('I')
      icon.classList = dados.class
      const span = document.createElement('SPAN')
      span.innerHTML = dados.span

      return {icon, span}
   }
   
   checkCard(element){
      const card = (element.classList.contains('front') ? 'front' : 'back')
      const side = (element.classList.contains('left') ? 'left' : 'right')

      return {side, card}
   }

   criaCarousel(controller){
      const arrCarousel = document.querySelectorAll(".skill-menu-content")

      arrCarousel.forEach(carousel => {
         const {card} = this.checkCard(carousel)

         const elementosCard = this.criaElementos(this.dataCarousel[card], this.page[card], carousel)

         controller.renderCarousel(elementosCard)
      })
   }
   
   sumPage( side, card , reference){
      let dataCarousel = this.dataCarousel[card].length-1
      let page = this.page[card]
      
      switch(side){
         case 'right':
            if(page == dataCarousel) {
               this.page[card] = 0
            }else{
               this.page[card] += 1
            }
            break
            
            case 'left':
               if(page == 0) {
                  this.page[card] = dataCarousel
               }else{
                  this.page[card] -= 1            
               }
               break
            }

      let carousel = reference.parentElement.parentElement;
      while (!carousel.classList.contains('skill-menu-content')) {
         carousel = carousel.parentElement
      }


      return this.criaElementos(this.dataCarousel[card], this.page[card], carousel)
   }

   changeOrder(side, card, reference, orderId){
      let dataCarousel = this.dataCarousel[card].length-1

      console.log(orderId);
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

            // console.log(reference);
       return this.criaElementos(this.dataCarousel[card], orderId, reference)
   }

   alterCard(arrow){
     const {side, card} = this.checkCard(arrow);

     let carousel = arrow.parentElement.parentElement;
     while (!carousel.classList.contains('skill-menu-content')) {
        carousel = carousel.parentElement
     }


     const takeOrder = parseInt(carousel.querySelector('.active').getAttribute('orderid'))

     return this.changeOrder(side, card, carousel, takeOrder)

   //   return this.sumPage(side, card, arrow)
   }


}