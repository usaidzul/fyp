import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { LocationPageModule} from './location/location.module';

import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';
import { IonicStorageModule } from '@ionic/Storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  	BrowserModule,
    HttpModule,
    LocationPageModule,
    IonicStorageModule.forRoot(), 
  	IonicModule.forRoot(), 
  	AppRoutingModule
  	],
  providers: [
    StatusBar,
    PostProvider,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
