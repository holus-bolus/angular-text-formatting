import { Component } from '@angular/core';

@Component({
  selector: 'app-text-formatting',
  templateUrl: './text-formatting.component.html',
  styleUrls: ['./text-formatting.component.css']
})
export class TextFormattingComponent {
  text: string = '';
  textStyle: any = {};

  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;

  toggleBold() {
    this.isBold = !this.isBold;
    this.applyStyles();
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
    this.applyStyles();
  }

  toggleUnderline() {
    this.isUnderline = !this.isUnderline;
    this.applyStyles();
  }

  applyStyles() {
    this.textStyle = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'text-decoration': this.isUnderline ? 'underline' : 'none'
    };
  }
}
