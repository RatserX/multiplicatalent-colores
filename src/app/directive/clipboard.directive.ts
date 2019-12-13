import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClipboard]'
})
export class ClipboardDirective {

  @Input('payload')
  payload: string

  @Output('payloadCopied')
  payloadCopied: EventEmitter<string>

  constructor() {
    this.payloadCopied = new EventEmitter<string>();
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    event.preventDefault();

    if (!this.payload) {
      return;
    }

    this.copy(this.payload);

    // This code below does not works on Safari or iOS devices
    /*let listener = (e: ClipboardEvent) => {
      let clipboardData = e.clipboardData || window['clipboardData'];

      clipboardData.setData('text', this.payload);
      e.preventDefault();
      this.payloadCopied.emit(this.payload);
    }

    document.addEventListener('copy', listener, false);
    document.execCommand('copy');
    document.removeEventListener('copy', listener, false);*/
  }

  private copy(value: string) {
    let textArea : HTMLInputElement = (<HTMLInputElement>document.createElement('textArea'));
    textArea.value = value;

    document.body.appendChild(textArea);

    let isIOS = navigator.userAgent.match(/ipad|iphone/i);

    if (isIOS) {
      let range = document.createRange();
      let selection = window.getSelection();

      range.selectNodeContents(textArea);
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, value.length);
    } else {
      textArea.select();
    }
    
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.payloadCopied.emit(value);
  }

}
