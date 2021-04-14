import * as React from 'react';
import { PiletApi } from 'demo-piral-blazor-appshell';
import './style.scss';
import { Link } from 'react-router-dom';

interface BlazorPages {
  registerBlazorPages: (app: PiletApi) => void;
  blazorRoutes: string[];
  paths: string[];
}

const zip: (args) => any[] = (...rows) => [...rows[0]].map((_, c) => rows.map(row => row[c]));

//prettier-ignore
const RouteList: React.FC<{ routes: string[], paths: string[] }> = ({ routes, paths }) => <table style={{fontSize: ".7rem"}}><tbody>{zip(routes, paths).map((x, i) => (<tr key={i}><td>{x[0]}</td><td>&#8594;</td><td>{x[1]}</td></tr>))}</tbody></table>;
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
  const { registerBlazorPages, blazorRoutes, paths }: BlazorPages = require('./pages.codegen');
  registerBlazorPages(app);

  // access to all defined blazor routes
  app.registerTile(() => (
    <Tile>
      <code>Blazor.Numbers</code>
      <br />
      <RouteList routes={blazorRoutes} paths={paths} />
    </Tile>
  ));

  app.registerTile(() => (
    <Tile>
      <Link to={`/counter/${Math.floor(Math.random() * 500)}`}>Counter with random start</Link>
    </Tile>
  ));
}
