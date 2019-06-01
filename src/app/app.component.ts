import { Component } from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ImageLoaderConfigService} from 'ionic-image-loader';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private pages: Array<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuController: MenuController,
    private imageLoaderConfigService: ImageLoaderConfigService
  ) {
    this.initializeApp();
    this.configureImageLoader();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    });

    this.pages = [];
  }

  private configureImageLoader() {
    this.imageLoaderConfigService.setCacheDirectoryName('image-loader-cache');
    this.imageLoaderConfigService.setConcurrency(5);
    this.imageLoaderConfigService.setMaximumCacheSize(20 * 1024 * 1024); // 20MB
    this.imageLoaderConfigService.setMaximumCacheAge(2 * 24 * 60 * 60 * 1000); // 2 days
  }

}
