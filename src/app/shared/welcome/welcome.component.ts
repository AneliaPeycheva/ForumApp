import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isLoggedIn: boolean = this.userService.isLogged;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.userService.isLogged)
  }

}
