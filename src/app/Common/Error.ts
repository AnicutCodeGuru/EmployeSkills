import { Component } from '@angular/core';

@Component({
  selector: 'error',
  template: `<h1>{{errorMsg}}</h1>`,
})
export class Error  { 
        errorMsg = 'Error page'; 
}
