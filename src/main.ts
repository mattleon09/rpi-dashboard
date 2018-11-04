import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {hmrBootstrap} from './hmr/hmr';

if (environment.production) {
  enableProdMode();
}


const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.log('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for g serve?');
  }
} else {
  bootstrap().catch(err => console.log(err));
}
