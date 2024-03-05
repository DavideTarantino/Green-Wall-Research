const {createApp} = Vue

createApp({
    data() {
        return {
            currentImage: 0,
            autoScroll: null,
            slides: [
                    {
                        image: 'https://picsum.photos/id/600/600/400',
                        title: 'Livello 1',
                        text: 'descrizione',
                    }, 
                    {
                        image: 'https://picsum.photos/id/680/600/400',
                        title: 'Livello 2',
                        text: 'descrizione',
                    }, 
                    {
                        image: 'https://picsum.photos/id/682/600/400',
                        title: 'Livello 3',
                        text: "descrizione",
                    }, 
                    {
                        image: 'https://picsum.photos/id/683/600/400',
                        title: 'Livello 4',
                        text: 'descrizione',
                    },
                    {
                        image: 'https://picsum.photos/id/654/600/400',
                        title: "Livello 5",
                        text: 'descrizione',
                    },
                    {
                      image: 'https://picsum.photos/id/684/600/400',
                      title: 'Livello 6',
                      text: "descrizione",
                    }, 
                    {
                      image: 'https://picsum.photos/id/614/600/400',
                      title: 'Livello 7',
                      text: 'descrizione',
                    },
                    {
                      image: 'https://picsum.photos/id/604/600/400',
                      title: "livello 8",
                      text: 'descrizione',
                    }
                ],
        }
    },
    created(){
        this.activeInterval()
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
          }, 3000 )
        },
        stopInterval(){
          clearInterval(this.autoScroll )
        },
        changeImage(index){
          this.currentImage = index
        }
      }
}).mount('#app')