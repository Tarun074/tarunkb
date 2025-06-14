let highestZ = 1;

class Paper{
    holdingPaper = false;

    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velopcityX = 0;
    velopcityY = 0;

    currentPaperX = 0;  
    currentPaperY = 0;

    init(paper) {
paper.addEventListener('mousedown', (e) => {
        this.holdingPaper = true;
        paper.style.zIndex = highestZ;
        highestZ+=1;

        if( e.button ===0){
            this.prevMouseX =this.mouseX;
            this.prevMouseY =this.mouseY;

            console.log(this.mouseX);
            console.log(this.mouseY);
        }
       })
       document.addEventListener('mousemove',(e) =>{
        this.mouseX = e.clientX
        this.mouseY = e.clientY;

        this.velocityx = this.mouseX - this.prevMouseX;
        this.velocityY = this.mouseY - this.prevMouseY;
         if(this.holdingPaper){
            this.currentPaperX += this.velocityx;
            this.currentPaperY += this.velocityY;

            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
            paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;
         }
       });
       window.addEventListener('mouseup',(e) =>{
        this.holdingPaper = false;
       })
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper=>{
    const p = new Paper();
    p.init(paper);
});