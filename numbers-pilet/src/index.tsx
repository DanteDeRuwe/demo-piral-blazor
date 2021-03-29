import { PiletApi } from 'sample-cross-fx';
import './style.scss';

export function setup(app: PiletApi) {
  // define the blazor refs
  const refs = require('./refs.codegen');
  app.defineBlazorReferences(refs);

  //register the Blazor extensions
  app.registerExtension('counter-blazor', app.fromBlazor('counter-blazor'));
  app.registerExtension('rng-blazor', app.fromBlazor('rng-blazor'));

  //register tiles
  app.registerTile(app.fromBlazor('numbers-tile')); //from blazor

  //register pages
  app.registerPage('/numbers', app.fromBlazor('numbers'));
}
