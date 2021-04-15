import * as React from 'react';
import { PiletApi } from 'demo-piral-blazor-appshell';
import './style.scss';
import { Link } from 'react-router-dom';
import {
  registerDependencies,
  registerBlazorPages,
  registerBlazorExtensions,
  blazorRoutes,
  paths,
} from './blazor.codegen';

const zip: (args) => any[] = (...rows) => [...rows[0]].map((_, c) => rows.map(row => row[c]));

//prettier-ignore
const RouteList: React.FC<{ routes: string[], paths: string[] }> = ({ routes, paths }) => <table style={{fontSize: ".7rem"}}><tbody>{zip(routes, paths).map((x, i) => (<tr key={i}><td>{x[0]}</td><td>&#8594;</td><td>{x[1]}</td></tr>))}</tbody></table>;
const Tile: React.FC<React.PropsWithChildren<any>> = ({ children }) => <div className="tile">{children}</div>;

export function setup(app: PiletApi) {
  // FROM CODEGEN
  registerDependencies(app);
  registerBlazorExtensions(app);
  registerBlazorPages(app);

  // register the Blazor extensions and tiles
  app.registerTile(app.fromBlazor('numbers-tile'));

  // access to all defined blazor routes
  app.registerTile(() => (
    <Tile>
      <code>Blazor.Numbers</code>
      <br />
      <RouteList routes={blazorRoutes} paths={paths} />
    </Tile>
  ));

  // test for route parameters
  app.registerTile(() => (
    <Tile>
      <Link to={`/counter/${Math.floor(Math.random() * 500)}`}>Counter with random start</Link>
    </Tile>
  ));
}
