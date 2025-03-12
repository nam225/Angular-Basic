import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({ 
      name: 'Nam', 
      email: 'qw', 
      message: 'Hello World!' 
    });
    this.insert({ 
      name: 'Nam1', 
      email: 'qw12', 
      message: 'Hello World!' 
    });
    this.insert({ 
      name: 'Nam2', 
      email: 'qw121', 
      message: 'Hello World!' 
    });
  }
  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMessage(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
