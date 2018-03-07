
export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([{
        route: ['', 'home'],
        name: 'home',
        moduleId: 'home/index'
      },
      {
        route: 'foodTable',
        name: 'foodTable',
        moduleId: 'foodTable/foodTable',
        nav: true
      },
      {
        route: 'foodList',
        name: 'foodList',
        moduleId: 'foodList/foodList',
        nav: true
      },
    ]);
  }
}
