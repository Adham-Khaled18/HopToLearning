import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }
  goToPage(pagename:string):void{
    this.router.navigate([`${pagename}`]);
  }
  ngOnInit(): void {
  }

}
