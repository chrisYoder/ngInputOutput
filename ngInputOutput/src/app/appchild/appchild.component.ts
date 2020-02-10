import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-appchild',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppchildComponent {

	@Output() valueChange = new EventEmitter();
	counter: number = 0;
	
	valueChanged(){
		
		this.counter = this.counter + 1;
		this.valueChange.emit(this.counter);
		
	}
  
}
