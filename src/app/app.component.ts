import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
