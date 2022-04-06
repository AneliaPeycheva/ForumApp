import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../../core/interface/post';
import { ITheme } from '../../../core/interface/theme';
import { PostService } from '../../../core/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  posts:IPost[]=[];

  @Input() themeId:any;
  
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(5,this.themeId).subscribe((res) => this.posts = res);
  }

}
