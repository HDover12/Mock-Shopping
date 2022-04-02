import { Directive, DoCheck, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
})
export class ProductCardDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  @HostBinding('class') card = 'productPic';

  
  @HostListener('mouseenter') hover() {
   
 
    }

ngOnInit(): void {

    this.renderer.listen(this.elRef.nativeElement, 'mouseenter', () => {
    this.card = 'testClass';
    let leftCardButton = this.renderer.createElement('button');
    let rightCardButton = this.renderer.createElement('button');
    this.renderer.appendChild(this.elRef.nativeElement, leftCardButton)
    this.renderer.appendChild(this.elRef.nativeElement, rightCardButton);
    this.renderer.addClass(leftCardButton, 'left-button');
    this.renderer.addClass(rightCardButton, 'right-button');
    this.renderer.listen(leftCardButton, 'click', ()=>{this.picChange('left')});
    this.renderer.listen(rightCardButton, 'click', ()=>{this.picChange('right')});
        })
        
}

picChange(arrow: string) {

    let currentbg = this.elRef.nativeElement.style.backgroundImage;
    let firstPic = `url("assets/pictures/Product${this.elRef.nativeElement.id}.jpg")`;
    let secondPic = `url("assets/pictures/Product${this.elRef.nativeElement.id}a.jpg")`
    let thirdPic = `url("assets/pictures/Product${this.elRef.nativeElement.id}b.jpg")`;
    let picArray = [firstPic, secondPic, thirdPic]
   

       if (arrow == 'left') {
         for (let [i, prop] of picArray.entries()){  
         if (currentbg == prop) {
        this.renderer.setStyle(
          this.elRef.nativeElement,
          'background-image',
          picArray[i-1]
        );
      } }} else if (arrow == 'right') {
         for (let [i, prop] of picArray.entries()){  
         if (currentbg == prop) {
        this.renderer.setStyle(
          this.elRef.nativeElement,
          'background-image',
          picArray[i+1]
        );
      }
      
    }
          }
}
 
  @HostListener('mouseleave') hoverOut() {
    this.card = 'productPic';
    let leftCardButton = this.elRef.nativeElement.childNodes[0]
    let rightCardButton = this.elRef.nativeElement.childNodes[1];
    this.renderer.removeChild(this.elRef.nativeElement, leftCardButton)
    this.renderer.removeChild(this.elRef.nativeElement, rightCardButton);
    this.renderer.setStyle(this.elRef.nativeElement, 'background-image',
      `url("assets/pictures/Product${this.elRef.nativeElement.id}.jpg")`
    );
   
  }

}
