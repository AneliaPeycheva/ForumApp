import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from '../themes/theme-list/theme-list.component';
import { AsideComponent } from '../themes/aside/aside.component';
import { ThemeListItemComponent } from '../themes/theme-list-item/theme-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';



@NgModule({
  declarations: [
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent,
    PostListComponent,
    ThemesPageComponent,
    ThemeDetailComponent,
    ThemesNewPageComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    SharedModule
  ]
})
export class ThemesModule { }
