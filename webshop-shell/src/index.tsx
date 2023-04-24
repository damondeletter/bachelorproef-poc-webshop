import "@angular/compiler";
import "core-js/proposals/reflect-metadata";
import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import 'zone.js';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi } from 'piral';
import { layout, errors } from './layout';
import { createNgApi } from 'piral-ng';
import { createVueApi } from "piral-vue";
import { createSvelteApi } from "piral-svelte";
import { createSolidApi } from "piral-solid";

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = process.env.PIRAL_FEED_URL || 'https://feed.piral.cloud/api/v1/pilet/empty';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [...createStandardApi(), createNgApi(), createVueApi(), createSvelteApi(), createSolidApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
