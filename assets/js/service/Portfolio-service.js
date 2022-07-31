export class Portfolio{
   constructor(controller, dataPortfolio){
      this.dataPortfolio = dataPortfolio
      this.controller = controller

      this.insertGrid()
   }

   createContainer(data){

      const container = document.createElement('div')
      
      const header = document.createElement('div')
      const titleCont = document.createElement('h2')
      const iconClose = document.createElement('i')
      
      const tools = document.createElement('div')
      const titleTools = document.createElement('h3')
      const ulTools = document.createElement('ul')
      
      const description = document.createElement('div')
      const titleDesc = document.createElement('h3')
      const descContent = document.createElement('div')
      const ulDesc = document.createElement('ul')
      const divImg = document.createElement('div')
      const imgDesc = document.createElement('img')
      const iconImg = document.createElement('i')
      const linkDesc = document.createElement('div')
      const link = document.createElement('a')
      const footerDesc = document.createElement('div')

      // insert class

      container.className = "portfolio-container"
      
      header.className = "portfolio-container-header"
      titleCont.className = "portfolio-container-header-titleCont"
      iconClose.className = "fa-solid fa-xmark"

      
      
      tools.className = "portfolio-container-tools"
      titleTools.className = "portfolio-container-tools-titleTools"
      ulTools.className = "portfolio-container-tools-ulTools"
      
      
      description.className = "portfolio-container-description"
      titleDesc.className = "portfolio-container-description-titleDesc"
      descContent.className = "portfolio-container-description-descContent"
      ulDesc.className = "portfolio-container-description-descContent-ulDesc"
      divImg.className = "portfolio-container-description-descContent-divImg"
      linkDesc.className = "portfolio-container-description-linkDesc"
      
      footerDesc.className = "portfolio-container-footerDesc"

      // insert data

      titleCont.innerHTML = data.titleCont

      iconClose.addEventListener('click', () =>{
         container.parentElement.removeChild(container)
         this.insertGrid()
      })
      
      titleTools.innerHTML = 'Ferramentas'
      data.lisTools.forEach(li => {
         const liTools = document.createElement('li')
         liTools.innerHTML = li
         
         ulTools.append(liTools)
      })
      
      titleDesc.innerHTML = 'Descrição do projeto'
      data.lisDesc.forEach(li => {
         const liDesc = document.createElement('li')
         liDesc.innerHTML = li
         
         ulDesc.append(liDesc)
      })

      
      iconImg.classList.add('fa-solid','fa-expand')
      iconImg.addEventListener('click', () => {
         
         if(divImg.classList.contains('active')){
            const imgStatic = document.querySelector('.div-img-static')
            imgStatic.parentElement.removeChild(imgStatic)
         }else{

            
            const expandImg = document.createElement('img')
            const expandDiv = document.createElement('div')
            
            expandImg.setAttribute('src', data.img)
            expandDiv.className = "portfolio-container-description-descContent-divImg div-img-static"
            
               expandDiv.append(expandImg)
               descContent.append(expandDiv)
            }
            divImg.classList.toggle('active')
         iconImg.classList.toggle('active')
         iconImg.classList.toggle('fa-compress')
         iconImg.classList.toggle('fa-expand')
      })
      
      imgDesc.setAttribute('src', data.img)

      link.innerHTML = 'Link do projeto'
      link.setAttribute('href',data.url)
      link.setAttribute('target', '_blank')

      footerDesc.innerHTML = `Período de desenvolvimento: ${data.date}`

      header.append(titleCont,iconClose)
      linkDesc.append(link)
      divImg.append(imgDesc,iconImg)
      descContent.append(ulDesc,divImg)
      description.append(titleDesc,descContent,linkDesc)
      
      tools.append(titleTools,ulTools)
      container.append(header,tools,description,footerDesc)
      
      
      this.controller.renderContainerPortfolio(container)

   }

   createCard(data){
      const card = document.createElement('div')
      const titleCard = document.createElement('h2')

      const divImg = document.createElement('div')
      const img = document.createElement('img')
      const pImg = document.createElement('p')

      card.className = 'portfolio-grid-card'
      titleCard.className = 'portfolio-grid-card-title'
      divImg.className = 'portfolio-grid-card-img'

      titleCard.innerHTML = data.titleCont
      img.setAttribute('src', data.img.replace('gif','png'))
      pImg.innerHTML = 'Visualizar'

      card.addEventListener('click',() =>{
         this.createContainer(data)
      })

      divImg.append(img,pImg)
      card.append(titleCard,divImg)

      return card
   }

   insertGrid(){
     const data = this.dataPortfolio
     const grid = []

     for(let card in data){
      grid.push(this.createCard(data[card]))
     } 

     this.controller.renderGrid(grid)
   }

   offSetMobile(){
      if(document.documentElement.clientWidth > 600){
         
      }
   }
}