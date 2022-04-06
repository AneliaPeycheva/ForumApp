import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../core/interface/post';
import { PostService } from '../../../core/post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers:  [ PostService ]
})
export class AsideComponent implements OnInit {
  
  constructor(private postService:PostService) { }

  ngOnInit(): void {
   
  }
}
