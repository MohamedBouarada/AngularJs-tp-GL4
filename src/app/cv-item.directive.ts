import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCvItem]',
})
export class CvItemDirective {
  @HostBinding('style.borderColor')
  color: string = 'black';

  @HostBinding('style.borderWidth')
  width: string = '2px';

  @HostBinding('style.borderStyle')
  style: string = 'solid';

 @HostBinding('style.marginBottom')
  marginBottom: string = '10px';

  @HostBinding('style.height')
  height: string = '100px';

  @HostBinding('style.display')
  display: string = 'flex';


  @HostBinding('style.alignItems')
  alignItems: string = 'center';

  @HostBinding('style.padding')
  padding: string = '15px';
  


  constructor() {}
}
