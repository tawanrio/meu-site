export class AppController{
   constructor(view, service){
      this.view = view;
      this.service = service;
      
   }

   enviarWhats(){
      this.service.enviarWhats(...arguments)
   }

   arrowCarousel(arrow, service){
      const elementosCard = service.alterCard(arrow)

      this.renderCarousel(elementosCard)
   }

   renderCarousel(){
      this.view.renderCarousel(...arguments)
   }

   renderGrid(grid){

      this.view.renderGrid(grid)
   }

   renderContainerPortfolio(container){
      
      this.view.renderContainerPortfolio(container)
   }

}