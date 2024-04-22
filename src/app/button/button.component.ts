import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  isButtonError : boolean = false;
  textColor : string = 'white';
  bgColor : string = 'hsla(346, 100%, 74%, 1)';

  ngOnInit() : void {

  }

  onInit(){
    this.isButtonError = !this.isButtonError;
    this.textColor = this.isButtonError ? 'hsla(346, 100%, 74%, 1)' : 'white'; 
    this.bgColor = this.isButtonError ? 'white' : 'hsla(346, 100%, 74%, 1)'; 

  }
}
