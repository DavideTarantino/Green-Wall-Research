const {createApp} = Vue

createApp({
    data() {
        return {
            currentImage: 0,
            autoScroll: null,
            esgOption: false,
            slides: [
                    {
                        image: 'https://picsum.photos/id/694/600/400',
                        title: 'Livello 1',
                        text: 'descrizione',
                    }, 
                    {
                        image: 'https://picsum.photos/id/693/600/400',
                        title: 'Livello 2',
                        text: 'descrizione',
                    }, 
                    {
                        image: 'https://picsum.photos/id/692/600/400',
                        title: 'Livello 3',
                        text: "descrizione",
                    }, 
                    {
                        image: 'https://picsum.photos/id/691/600/400',
                        title: 'Livello 4',
                        text: 'descrizione',
                    },
                    {
                        image: 'https://picsum.photos/id/690/600/400',
                        title: "Livello 5",
                        text: 'descrizione',
                    },
                    {
                      image: 'https://picsum.photos/id/689/600/400',
                      title: 'Livello 6',
                      text: "descrizione",
                    }, 
                    {
                      image: 'https://picsum.photos/id/688/600/400',
                      title: 'Livello 7',
                      text: 'descrizione',
                    },
                    {
                      image: 'https://picsum.photos/id/687/600/400',
                      title: "livello 8",
                      text: 'descrizione',
                    }
                ],
                slidesOn: [
                  {
                      image: 'https://picsum.photos/id/684/600/400',
                      title: 'Livello 1',
                      text: 'descrizione',
                  }, 
                  {
                      image: 'https://picsum.photos/id/683/600/400',
                      title: 'Livello 2',
                      text: 'descrizione',
                  }, 
                  {
                      image: 'https://picsum.photos/id/682/600/400',
                      title: 'Livello 3',
                      text: "descrizione",
                  }, 
                  {
                      image: 'https://picsum.photos/id/681/600/400',
                      title: 'Livello 4',
                      text: 'descrizione',
                  },
                  {
                      image: 'https://picsum.photos/id/680/600/400',
                      title: "Livello 5",
                      text: 'descrizione',
                  },
                  {
                    image: 'https://picsum.photos/id/679/600/400',
                    title: 'Livello 6',
                    text: "descrizione",
                  }, 
                  {
                    image: 'https://picsum.photos/id/678/600/400',
                    title: 'Livello 7',
                    text: 'descrizione',
                  },
                  {
                    image: 'https://picsum.photos/id/677/600/400',
                    title: "livello 8",
                    text: 'descrizione',
                  }
              ],
  
        }
    },
    methods: {
      prevImage(){
        this.currentImage--
        
        if( this.currentImage < 0 ){
          this.currentImage = this.slides.length - 1
        }
        
      },
      nextImage(){
        this.currentImage++
        
        if( this.currentImage > this.slides.length - 1  ){
          this.currentImage = 0
        }
        
      },
       activeInterval(){
         this.autoScroll = setInterval( () =>{
           this.nextImage()
         }, 2000 )
      },
      stopInterval(){
        clearInterval(this.autoScroll )
      },
      changeImage(index){
        this.currentImage = index
      },
    },
    created(){
       this.activeInterval
     }
}).mount('#app')