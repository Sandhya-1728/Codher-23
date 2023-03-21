import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupmentor',
  templateUrl: './signupmentor.component.html',
  styleUrls: ['./signupmentor.component.scss']
})
export class SignupmentorComponent implements OnInit {

  type: string = "password"
  isText: boolean =false;
  eyeIcon: string = "fa-eye-slash";
  constructor() { }

  ngOnInit(): void {
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa fa-eye-slash" : this.eyeIcon = "fa fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
}
