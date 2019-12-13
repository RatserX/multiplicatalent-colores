import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClipboard]'
})
export class ClipboardDirective {

  @Input("payload")
  payload: string

  @Output("payloadCopied")
  payloadCopied: EventEmitter<string>

  constructor() {
    this.payloadCopied = new EventEmitter<string>();
  }

  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent) {
    event.preventDefault();

    if (!this.payload) {
      return;
    }

    let listener = (e: ClipboardEvent) => {
      let clipboardData = e.clipboardData || window["clipboardData"];

      clipboardData.setData("text", this.payload);
      e.preventDefault();
      this.payloadCopied.emit(this.payload);
    }

    document.addEventListener("copy", listener, false);
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
  }

}
