export class AppService{
   constructor(){
      
   }

   enviarWhats(name, message){
      window.open( `https://api.whatsapp.com/send?phone=5511985373835&text=${
         'Olá Meu nome é '+name+
         '.%0AVim através do seu Site. %0AMensagem: %0A'+message
      }`);
   }
}
