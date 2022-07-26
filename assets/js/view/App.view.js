export class AppView{
   constructor(){
   }
   
   renderCarousel(elementosCard){
      const carouselCard = elementosCard.carousel.querySelector('.skill-menu-content-carousel-card')
      carouselCard.style.cssText = `
      transition: .2s;
      opacity: 0;
      `
      
      setTimeout(() => {
      const ul = elementosCard.carousel.querySelector('.carousel-nav')

      
      // CRIA O CARD
      elementosCard.carousel.querySelector('.carousel-title').innerHTML = elementosCard.titleCard

      elementosCard.carousel.querySelector('.carousel-ul').innerHTML = ''
      elementosCard.descUl.forEach(li => {
         elementosCard.carousel.querySelector('.carousel-ul').append(li)
      })

      elementosCard.carousel.querySelector('.content-title').innerHTML = ''
      elementosCard.carousel.querySelector('.content-title').append(...elementosCard.divTitle)

      elementosCard.carousel.querySelector('.carousel-img').innerHTML =''
      elementosCard.carousel.querySelector('.carousel-img').append(elementosCard.link)
      
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
      
         carouselCard.style.cssText = `
         opacity: 1;
         `
      }, 150);
   }
   
   
}