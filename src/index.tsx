import * as React from 'react';
import { Link } from 'react-router-dom';
import { PiletApi } from 'sample-cross-fx';
import './style.scss';

const logoBlazor: React.FC = () => (
  <div className="logo-blazor">
    <img
      src="https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png"
      width="20"
    />
    <small>This page comes from Blazor (but this box is a react extension)</small>
  </div>
);

export function setup(app: PiletApi) {
  //register react extensions like they would come from other pilets
  app.registerExtension('logo-blazor', logoBlazor);

  //define the blazor refs
  app.defineBlazorReferences(require('./refs.codegen'));

  //register the Blazor extensions
  app.registerExtension('rng-blazor', app.fromBlazor('counter-blazor'));
  app.registerExtension('rng-blazor', app.fromBlazor('rng-blazor'));

  app.registerTile(app.fromBlazor('numbers-tile'));
  app.registerTile(() => (
    <div className="tile">
      <Link to="/colors">Colors</Link>
    </div>
  ));

  app.registerPage('/numbers', app.fromBlazor('numbers'));
  app.registerPage('/colors', app.fromBlazor('colors'));
  app.registerPage('/about', app.fromBlazor('about'));
}
