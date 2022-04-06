import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { ITheme } from '../core/interface/theme';

const getThemeURL = environment.apiUrl;


@Injectable()
export class ThemeService {

  constructor(private http:HttpClient) { }

  getThemes():Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${getThemeURL}/themes`);
  }

  getThemeById(themeId:string):Observable<ITheme> {
    return this.http.get<ITheme>(getThemeURL+ '/themes/' + themeId);
  }
}
