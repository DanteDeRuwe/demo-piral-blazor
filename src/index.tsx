import { PiletApi } from 'sample-cross-fx';

export function setup(app: PiletApi) {
  app.defineBlazorReferences(require('./refs.codegen'));

  app.registerTile(app.fromBlazor('counter-menu'));

  app.registerPage('/counter', app.fromBlazor('counter'));
}
