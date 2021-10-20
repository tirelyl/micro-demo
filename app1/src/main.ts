import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare global {
  interface Window {
    microApp: any;
    __MICRO_APP_NAME__: string;
    __MICRO_APP_ENVIRONMENT__: string;
  }
}

let app = null;
// 将渲染操作放入 mount 函数
function mount () {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .then((ngModuleRef: any) => {
    app = ngModuleRef
  })
  .catch(err => console.error(err))

  console.log('微应用app1渲染了');
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app?.destroy();
  app = null;
  console.log('微应用child-angular11卸载了');
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount();
}
