import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentdata:any

  @Output() chailvalue = new EventEmitter()
  showvalue1(inp1:any){
    this.chailvalue.emit(inp1)
  }

}
