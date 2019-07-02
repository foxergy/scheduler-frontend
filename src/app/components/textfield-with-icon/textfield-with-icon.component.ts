import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textfield-with-icon',
  templateUrl: './textfield-with-icon.component.html',
  styleUrls: ['./textfield-with-icon.component.scss'],
})
export class TextfieldWithIconComponent{
  @Input() text: string="";
  @Input() icon: string="";
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  getIconName(){
    return this.icon;
  }

  toClipboard(){
    this.clickEvent.emit();
  }
}
