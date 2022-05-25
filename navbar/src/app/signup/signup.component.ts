import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  , AbstractControl , ValidationErrors ,ValidatorFn} from '@angular/forms';
import {Router}from '@angular/router'
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return{
        passwordsDontMatch: true
      }
    }
    return null;
  };

}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {validators: passwordMatchValidator() })
  constructor(private router:Router,private authService:AuthService,private toast: HotToastService) { }
   
  goToPage(pagename:string):void{
    this.router.navigate([`${pagename}`]);
  }
  ngOnInit(): void {
  }
   //submit function
  submitData(){
    if (!this.registerForm.valid)return;
    const {name,email,password} = this.registerForm.value;
    this.authService.signup(name, email,password).pipe(
      this.toast.observe({
        success: 'Signup successful!',
        loading: 'Signing Up...',
        error: ({message}) => `${message}`
      })
    ).subscribe(()=>{
      this.router.navigate(['/Home'])
    })
  }

  get name(){
    return this.registerForm.get('name');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  get email(){
    return this.registerForm.get('email');
  }

 
}
