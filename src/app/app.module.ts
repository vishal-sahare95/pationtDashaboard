import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebhomeModule } from './pages/webhome/webhome.module';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  WebhomeModule ,
  TableModule
  
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
