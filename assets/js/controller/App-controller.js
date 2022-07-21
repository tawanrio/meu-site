class AppController{
   constructor(view, service){
      this.view = view;
      this.service = service;
   }

   enviarWhats(name, message){
      this.service.enviarWhats(name, message)
   }
}