import { PiletApi } from 'webshop-shell';
import WordFront from './WordFrontPage.svelte';
import OrderPage from './Order.svelte';

export function setup(app: PiletApi) {
  app.registerPage('/order', app.fromSvelte(OrderPage))

  app.registerTile(app.fromSvelte(WordFront), {
    initialColumns: 2,
    initialRows: 2,
  });

}

