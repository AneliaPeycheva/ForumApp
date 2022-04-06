import { RouterModule, Routes } from "@angular/router";
import { ThemesPageComponent } from "./themes-page/themes-page.component";
import { ThemeDetailComponent } from "./theme-detail/theme-detail.component";
import { ThemesNewPageComponent } from "./themes-new-page/themes-new-page.component";
import { AuthGuard } from "src/app/core/guards/auth.guard";

const routes:Routes = [
    {
        path:'themes',
        component:ThemesPageComponent
    },
    {
        path:'themes/new',
        canActivate:[AuthGuard],
        component:ThemesNewPageComponent
    },
    {
        path:'themes/:themeId',
        component:ThemeDetailComponent
    } 
]

export const ThemesRoutingModule = RouterModule.forChild(routes);