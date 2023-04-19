import { PiletApi } from 'my-app';
import { TileModule } from './TileModule';
import { AboutPage } from './AboutPage';
import { Link} from "react-router-dom";
import * as React from 'react';

/**
 * Shows an API extension using Angular components.
 */
export function setup(piral: PiletApi) {
  piral.defineNgModule(TileModule);

  piral.registerMenu(() => <Link to="/about">About</Link>)
  piral.registerPage('/about', piral.fromNg(AboutPage));

}