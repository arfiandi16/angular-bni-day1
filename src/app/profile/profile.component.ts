import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
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
