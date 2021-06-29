class Security{
    constructor(){
        this.access1 = createInput("Code1")
         this.access1.position(100,100); 
         this.access1.style('background', 'white'); 

         this.button1 = createButton('Check');
          this.button1.position(100,120); 
          this.button1.style('background', 'lightgrey');

          this.access2 = createInput("Code2")
          this.access2.position(250,100); 
          this.access2.style('background', 'white'); 
 
          this.button2 = createButton('Check');
          this.button2.position(250,120); 
          this.button2.style('background', 'lightgrey');

          this.access3 = createInput("Code3")
          this.access3.position(150,170); 
          this.access3.style('background', 'white'); 
 
          this.button3 = createButton('Check');
          this.button3.position(150,190); 
          this.button3.style('background', 'lightgrey');

    }
    display(){
     this.button1.mousePressed(
         ()=>{
             console.log(this.access1.value())
             console.log(code.accessCode1)
             if(this.access1.value()===code.accessCode1){
                this.access1.hide()
               this. button1.hide()
                score+=1

             }
             
         }
     )

     this.button2.mousePressed(
        ()=>{
            if(this.access2.value()===code.accessCode2){
               this.access2.hide()
              this. button2.hide()
               score+=1
            }
            
        }
    )
     
    this.button3.mousePressed(
        ()=>{
            if(this.access3.value()===code.accessCode3){
               this.access3.hide()
              this. button3.hide()
               score+=1
            }
            
        }
    )
    }
}