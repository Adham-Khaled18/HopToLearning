import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(public authService:AuthService,private router : Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/login']);
    })
  }
}
