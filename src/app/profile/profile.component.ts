import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isButtonError : boolean = false;
  textColor : string = 'white';
  bgColor : string = 'hsla(346, 100%, 74%, 1)';
  name : string = '';
  constructor (private route : ActivatedRoute){};
  ngOnInit() : void {
    this.name = this.route.snapshot.paramMap.get('name')!;
  }

 

  onInit(){
    this.isButtonError = !this.isButtonError;
    this.textColor = this.isButtonError ? 'hsla(346, 100%, 74%, 1)' : 'white'; 
    this.bgColor = this.isButtonError ? 'white' : 'hsla(346, 100%, 74%, 1)'; 

  }
}
