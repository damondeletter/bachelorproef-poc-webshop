import type { PiletApi } from 'webshop-shell';

import ConfirmationPage from './Confirmation';
import Footer from './Footer';

export function setup(app: PiletApi) {
  app.registerPage('/order-confirmation', app.fromSolid(ConfirmationPage));
  app.registerExtension('footer', app.fromSolid(Footer));

}
