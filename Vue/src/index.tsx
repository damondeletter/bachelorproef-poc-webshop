import type { PiletApi } from 'webshop-shell';

import Page from './Page.vue'

export function setup(app: PiletApi) {
  app.registerPage('/pagevue', app.fromVue(Page));

  app.showNotification('Hello from Piral! Vue', {
    autoClose: 2000,
  });
}
