import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './pages/user/user.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { BreadcrumbsComponent } from './static/breadcrumbs/breadcrumbs.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,    
    DashboardComponent,
    NotFoundComponent,
    LoginComponent,
    BreadcrumbsComponent,
    CatalogoComponent,
    ProductoComponent,
    PagesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
