import type { PiletApi } from 'webshop-shell';

import Page from './Page';

export function setup(app: PiletApi) {
  app.registerPage('/pagesolid', app.fromSolid(Page));

}
