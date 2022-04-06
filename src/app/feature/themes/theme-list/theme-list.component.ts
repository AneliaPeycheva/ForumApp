import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/theme.service';
import { ITheme} from '../../../core/interface/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
  themes:any;
  
  constructor(private themeService:ThemeService) { }

  ngOnInit(): void {
    this.loadThemes();
  }

  loadThemes() {
    this.themeService.getThemes().subscribe((res) => {
      this.themes = res;
    })
  }
}
