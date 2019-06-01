import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomePageModule} from './pages/home/home.module';
import {Device} from '@ionic-native/device/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {FileTransferObject, FileTransfer} from '@ionic-native/file-transfer/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {IonicImageLoader} from 'ionic-image-loader';
import {WebView} from '@ionic-native/ionic-webview/ngx';

export function initialize(platform: Platform) {
    return () => {
        platform.is('android');
        console.log('Platform check OK!');
        return Promise.resolve();
    };
}

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        IonicImageLoader.forRoot(),
        AppRoutingModule,
        HomePageModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Device,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        FileTransfer,
        FileTransferObject,
        LocalNotifications,
        WebView,
        {
            provide: APP_INITIALIZER,
            useFactory: initialize,
            deps: [Platform],
            multi: true
        },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
