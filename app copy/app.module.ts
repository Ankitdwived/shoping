import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoperFooterComponent } from './shoper-footer/shoper-footer.component';
import { FooterComponent } from './footer/footer.component';
import { ShopperHomeComponent } from './shopper-home/shopper-home.component';
import { ShopperElectronicComponent } from './shopper-electronic/shopper-electronic.component';
import { ShopperMenfashionComponent } from './shopper-menfashion/shopper-menfashion.component';
import { ShopperWomenfashionComponent } from './shopper-womenfashion/shopper-womenfashion.component';
import { ShopperIndexComponent } from './shopper-index/shopper-index.component';
import { ShopperJeweleryComponent } from './shopper-jewelery/shopper-jewelery.component';
import { ShopperNotfoundComponent } from './shopper-notfound/shopper-notfound.component';
//import { ShopperIndexComponent } from './shopper-index/shopper-index.component';
//import {HttpClientModule}
import { HttpClientModule } from '@angular/common/http';
import { ShopperDetailComponent } from './shopper-detail/shopper-detail.component';
import { ShopperMoreDetailComponent } from './shopper-more-detail/shopper-more-detail.component';
import { ShopperLoginComponent } from './shopper-login/shopper-login.component';
//import { ShopperErrorComponent } from './guard/shopper-error/shopper-error.component';
import { ShopperErrorComponent } from './shopper-error/shopper-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoperFooterComponent,
    FooterComponent,
    ShopperHomeComponent,
    ShopperElectronicComponent,
    ShopperMenfashionComponent,
    ShopperWomenfashionComponent,
    ShopperIndexComponent,
    ShopperJeweleryComponent,
    ShopperNotfoundComponent,
    ShopperDetailComponent,
    ShopperMoreDetailComponent,
    ShopperLoginComponent,
    ShopperErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [ShopperIndexComponent]
})
export class AppModule { }
