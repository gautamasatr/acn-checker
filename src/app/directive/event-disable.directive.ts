import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventDisable]'
})
export class EventDisableDirective {

  constructor() { }

  //disable paste
  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  //disable copy
  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  //disable cut
  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

}
