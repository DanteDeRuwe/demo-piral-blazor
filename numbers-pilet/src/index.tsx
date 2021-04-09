import * as React from 'react';
import { Link } from 'react-router-dom';
import { PiletApi } from 'sample-cross-fx';
import './style.scss';

interface BlazorPages {
  registerBlazorPages: (app: PiletApi) => void;
  blazorRoutes: string[];
}

//prettier-ignore
const RouteList: React.FC<{ routes: string[] }> = ({ routes }) => <ul>{routes.map((x, i) => (<li key={i}><Link to={x}>{x}</Link></li>))}</ul>;

const Tile: React.FC<React.PropsWithChildren<any>> = ({ children }) => <div className="tile">{children}</div>;

export function setup(app: PiletApi) {
  // define the blazor refs
  const refs = require('./refs.codegen');
  app.defineBlazorReferences(refs, { includePages: true });

  // register the Blazor extensions
  app.registerExtension('counter-blazor', app.fromBlazor('counter-blazor'));
  app.registerExtension('rng-blazor', app.fromBlazor('rng-blazor'));

  // register tiles
  app.registerTile(app.fromBlazor('numbers-tile')); //from blazor

  // register Blazor pages
  const { registerBlazorPages, blazorRoutes }: BlazorPages = require('./pages.codegen');
  registerBlazorPages(app);

  // access to all defined blazor routes
  app.registerTile(() => (
    <Tile>
      <code>Blazor.Numbers</code>
      <RouteList routes={blazorRoutes} />
    </Tile>
  ));
}
