AFRAME.registerComponent("play-on-click", {
   
     schema:{
       isPlaying: {type:"boolean", default:false}
     },
     init:function(){
       this.videoel=this.getAttribute("material").src
       this.onClick=this.onClick.bind(this)
     }, 
     play:function(){
       window.addEventListener("click", this.onClick)
     }, 
     onClick:function(evt){
       if(!this.videoel){
           return
       }
       var isPlaying = this.el.getAttribute("play-on-click").isPlaying;
       this.el.object3D.visible=true
       if(!isPlaying){
           this.el.setAttribute("play-on-click", {
               isPlaying:true
           })
           this.videoel.play()
       }
       else{
           this.el.setAttribute("play-on-click", {
               isPlaying:false
           })
           this.videoel.pause() 
       }
      
     }
   
   });
   