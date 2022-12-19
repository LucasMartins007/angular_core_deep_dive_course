import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highLighted')
  isHighLighted: boolean = false;

  @Output()
  toogleHighlight = new EventEmitter();

  constructor() {
    console.log("Directive created: ");
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighLighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }

  @HostListener('mouseover', [ '$event' ])
  mouseOver($event: any) {
    console.log($event); 
    
    this.isHighLighted = true;
    this.toogleHighlight.emit(this.isHighLighted);
  }
  
  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighLighted = false;
    this.toogleHighlight.emit(this.isHighLighted);
  }

  toogle() {
    this.isHighLighted = !this.isHighLighted;
    this.toogleHighlight.emit(this.isHighLighted);
  }

}
