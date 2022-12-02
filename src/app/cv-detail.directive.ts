import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCvDetail]'
})
export class CvDetailDirective {

  @HostBinding('style.padding')
  padding: string = '25px';

  @HostBinding('style.alignItems')
  alignItems: string = 'center';

  @HostBinding('style.width')
  width: string = '100%';
  
  @HostBinding('style.color')
  color: string = 'black';

  @HostBinding('style.display')
  display: string = 'flex';

  @HostBinding('style.flexDirection')
  flexDirection: string = 'column';

  
  
  
  constructor(private el: ElementRef  ) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // console.log('====================================');
    // console.log(this.el);
    // console.log('====================================');
   }

}
