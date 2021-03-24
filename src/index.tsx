import * as React from 'react';
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
  app.registerTile(app.fromBlazor('counter-menu'));
  app.registerPage('/counter', app.fromBlazor('counter'));
  app.registerPage('/about', app.fromBlazor('about'));
}
