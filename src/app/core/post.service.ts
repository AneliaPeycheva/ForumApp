import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../core/interface/post';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts(limit:number,themeId:string):Observable<IPost[]> {
   return this.http.get<IPost[]>(`${apiUrl}/posts?${limit ? `limit = ${limit}` :'' }` );    
  }
  
  
}
