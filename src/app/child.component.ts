import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: ['./child.component.css'],
})
export class ChildComponent {
  // @Input() name: string;
  @Output() updateDataEvent = new EventEmitter<string>();
}
