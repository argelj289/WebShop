import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutingRoutes: Routes = [
  {
    path: 'pages', component: PagesComponent, children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'error', component: ErrorPageComponent, children: [
      {
        path: '404', component: NotFoundComponent
      }
    ]
  },
  {
    path: '', redirectTo: 'pages', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'error/404'
  }
];

const appRoutingConfig: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutingRoutes, appRoutingConfig)
  ],
  declarations: [
    /** Components  */
    PagesComponent,
    HomeComponent,
    ErrorPageComponent,
    NotFoundComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
