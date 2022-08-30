export class AppView{
   constructor(){
   }
   
   renderCarousel(elementosCard){

      const carouselCard = elementosCard.carousel.querySelector('.skill-menu-content-carousel-container-card')
      const containerCard = carouselCard.parentElement

      
      // INSERE O CARD
      containerCard.append(elementosCard.card)

      // INSERE O CONTENT TITLE
      containerCard.parentElement.parentElement.querySelector('.content-title').textContent = ''
      elementosCard.divTitle.forEach(element => {
         containerCard.parentElement.parentElement.querySelector('.content-title').append(element)

      })

      
      // REALIZA A TRANSIÇÃO
      setTimeout(function(){
         const side = elementosCard.side || 'right'
         const cardFade = elementosCard.carousel.querySelector('.card-fade')
         const cardLeft = elementosCard.carousel.querySelector(`.card-${side}`) 
   
         if(cardLeft != null) {

            if(!cardFade.classList.contains(`hidden-${side}`)){
               cardFade.classList.add(`hidden-${side}`)
            }

            if(!cardLeft.classList.contains(`visible`)){
               cardLeft.classList.add('visible')
            }

            // cardFade.classList.toggle(`hidden-${side}`)
            // cardLeft.classList.toggle('visible')
            
            setTimeout(function(){
               cardFade.parentNode.removeChild(cardFade)
               cardLeft.className = 'skill-menu-content-carousel-container-card card-fade'
               
            },300)
         }
      },5)
   }

   renderGrid(grid){
      const containerGrid = document.querySelector('.portfolio-grid')

      containerGrid.innerHTML = ''
      grid.forEach(card => {
         containerGrid.append(card)

      })
   }

   renderContainerPortfolio(container){
      const containerGrid = document.querySelector('.portfolio-grid')

      containerGrid.innerHTML = ''
      containerGrid.append(container)

   }
   
   
}