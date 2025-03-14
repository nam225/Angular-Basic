import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  
  name : string = '';
  email : string = '';
  message : string = '';
  isSubmitted : boolean = false;
  messages: Array<any> = [];
  
  
  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages); 
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessage();
    this.isSubmitted = this.messages.length > 0;
  }
}
