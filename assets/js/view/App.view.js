export class AppView{
   constructor(){
   }
   
   renderCarousel(elementosCard){

      const carouselCard = elementosCard.carousel.querySelector('.skill-menu-content-carousel-container-card')
      const containerCard = carouselCard.parentElement
      const ul = elementosCard.carousel.querySelector('.carousel-nav')

      
      // INSERE O CARD
      containerCard.append(elementosCard.card)
      
      // CRIA O MENU
      ul.innerHTML = ''
      ul.append(...elementosCard.menuCarousel)
      
      // ATIVA O LINK
      ul.querySelectorAll('li').forEach(lis => {
         if(lis.classList.contains('active')){
            lis.classList.remove('active')
         }

         if(lis.children[1].textContent == elementosCard.divTitle[1].textContent){
            lis.classList.add('active')
         }
      })
      
      setTimeout(function(){
         const side = elementosCard.side || 'right'
         const cardFade = elementosCard.carousel.querySelector('.card-fade')
         const cardLeft = elementosCard.carousel.querySelector(`.card-${side}`) 
   
         if(cardLeft != null) {
            cardFade.classList.toggle(`hidden-${side}`)
            cardLeft.classList.toggle('visible')
            
            setTimeout(function(){
               cardFade.parentNode.removeChild(cardFade)
               cardLeft.className = 'skill-menu-content-carousel-container-card card-fade'
               
            },300)
         }
      },5)
   }
   
   
}