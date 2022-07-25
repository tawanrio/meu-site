class Carousel{
   constructor(){
      this.page = {front: 0, back: 0}
   }
   
   checkCard(arrow, dataCarousel){
      const card = (arrow.classList.contains('front') ? 'front' : 'back')
      const side = (arrow.classList.contains('left') ? 'left' : 'right')

      return this.sunPage(dataCarousel[card], this.page, side, card)
   }
   
   sunPage( dataCarousel, page, side, card){
      switch(side){
         case 'left':
            if(page[card] == dataCarousel.length-1) {
               page[card] = 0
            }else{
               page[card] += 1
            }
            break

         case 'right':
            if(page[card] == 0) {
               page[card] = dataCarousel.length-1
            }else{
               page[card] -= 1            
            }

            break
      }
      return {page: page[card], card: card}
   }

   alter(arrow, dataCarousel){
    return this.checkCard(arrow, dataCarousel);
   }
}