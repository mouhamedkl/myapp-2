import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ListproduitsComponent } from './listproduits/listproduits.component';
import { ServiceSService } from './service/service-s.service';

@NgModule({
  declarations: [
    AppComponent,
    ListproduitsComponent
  ],
  imports: [

     BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ServiceSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
