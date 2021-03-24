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

const ReactTile: React.FC<any> = ({ name, url }) => (
  <div className="tile">
    <Link to={url}>{name}</Link>
    <small style={{ color: 'gray' }}>(tile from React)</small>
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

  //register tiles
  app.registerTile(() => <ReactTile name="Colors" url="colors" />); //from react
  app.registerTile(() => <ReactTile name="Jokes" url="jokes" />); //from react
  app.registerTile(() => <ReactTile name="Profile" url="profile" />); //from react
  app.registerTile(() => <ReactTile name="Meaning of Life" url="meaning-of-life" />); //from react
  app.registerTile(app.fromBlazor('numbers-tile')); //from blazor

  //register pages
  app.registerPage('/numbers', app.fromBlazor('numbers'));
  app.registerPage('/colors', app.fromBlazor('colors'));
  app.registerPage('/about', app.fromBlazor('about'));
  app.registerPage('/jokes', app.fromBlazor('jokes'));
  app.registerPage('/profile', app.fromBlazor('profile'));
  app.registerPage('/meaning-of-life', app.fromBlazor('meaning-of-life'));
}
