import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  registerForm:any; 
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "emailId":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required,Validators.minLength(8)]),
      "passwordC":new FormControl(null,[Validators.required])
    });
  }
   //submit function
  submitData(){
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      alert(`Welcome ${this.registerForm.value.name} `);
    }

  }

  get name(){
    return this.registerForm.get('name');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get passwordC(){
    return this.registerForm.get('passwordC');
  }

  get emailId(){
    return this.registerForm.get('emailId');
  }

}
