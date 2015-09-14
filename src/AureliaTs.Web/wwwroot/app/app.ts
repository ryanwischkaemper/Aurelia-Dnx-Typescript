import {Router, RouterConfiguration, NavigationInstruction} from 'aurelia-router';

export class App {

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router):void {

    config.title = 'AureliaTs';
    config.map([
      { route: ['', 'home'], moduleId: './views/home/home', nav: true, title: 'Home' },
      { route: 'notfound', name: 'notfound', moduleId: './views/notfound', nav: false, title: 'Not Found' }
    ]);

    config.mapUnknownRoutes((instruction: any) => {
      instruction.config.moduleId = './views/notfound';
      return instruction;
    });

    this.router = router;
  }
};