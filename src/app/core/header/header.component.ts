import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  get isLogged():boolean {
    return this.userService.isLogged;
  }
  constructor(public userService:UserService) { }

  ngOnInit(): void { }
  
  loginHandler() {
    this.userService.isLogged = true;
  }


  logoutHandler() {
    this.userService.isLogged = false;
  }

}
