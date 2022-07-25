class AppView{
   constructor(){
   }

   renderCarousel(page, dataCarousel, element){
      element.querySelector('.content-title').innerHTML = dataCarousel[page].skill[1]
      element.querySelector('.carousel-title').innerHTML = dataCarousel[page].title ;
      element.querySelector('.carousel-ul').innerHTML = dataCarousel[page].descLi ;
      element.querySelector('.carousel-img').innerHTML = dataCarousel[page].imgLinks ;
         
      this.activeMenu(element.querySelectorAll('.carousel-nav li'), dataCarousel, page)
      
   }
   
   activeMenu(menuUl, dataCarousel, page){
      menuUl.forEach(lis => {
         if(lis.classList.contains('active')){
            lis.classList.remove('active')
         }
         if(lis.children[1].textContent == dataCarousel[page].skill[0]){
            lis.classList.add('active')
         }
      })
   }
}