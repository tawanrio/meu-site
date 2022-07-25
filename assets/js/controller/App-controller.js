class AppController{
   constructor(view, service){
      this.view = view;
      this.service = service;
      
      
   }

   enviarWhats(name, message){
      this.service.enviarWhats(name, message)
   }

   arrowCarousel(arrow, dataCarousel, service){
      
      const page = service.alter(arrow, dataCarousel, this.page)

      this.view.renderCarousel(page.page, dataCarousel[page.card], arrow.parentElement.parentElement)
   }
}