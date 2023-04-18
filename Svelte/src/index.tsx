import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'webshop-shell';

import Page from './Page.svelte';

export function setup(app: PiletApi) {
  app.registerPage('/pagesvelte', app.fromSvelte(Page));
}
