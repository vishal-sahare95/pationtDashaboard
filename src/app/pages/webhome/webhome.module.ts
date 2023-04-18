import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebhomeRoutingModule } from './webhome-routing.module';
import { BannerComponent } from './banner/banner.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { ServicesComponent } from './services/services.component';
import { MenusetionsComponent } from './menusetions/menusetions.component';


@NgModule({
  declarations: [
    BannerComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    TopbarComponent,
    HomedetailsComponent,
    ServicesComponent,
    MenusetionsComponent
  ],
  imports: [
    CommonModule,
    WebhomeRoutingModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class WebhomeModule { }
