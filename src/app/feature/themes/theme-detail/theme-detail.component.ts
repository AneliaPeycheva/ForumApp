import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/core/interface/post';
import { ITheme } from 'src/app/core/interface/theme';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.css']
})
export class ThemeDetailComponent implements OnInit {

  theme:any = [];

  canSubscribe:boolean = false;  
  isLoggedIn:boolean = this.userService.isLogged;

  constructor(private activatedRoute:ActivatedRoute, private themeService:ThemeService, private userService:UserService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.themeService.getThemeById(id)
      .subscribe((res) => {
        console.log(res);
        this.theme = res;
        this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
    })
  }

  canLike(post:IPost) {
    return !post.likes.includes('5fa64b162183ce1728ff371d');
  }

}
