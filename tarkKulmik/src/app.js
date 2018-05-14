
export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Külmik';
    config.map([{
        route: ['', 'home'],
        name: 'home',
        moduleId: 'foodAlerts/foodAlerts'

      },
      {
        route: 'foodAlerts',
        name: 'foodAlerts',
        moduleId: 'foodAlerts/foodAlerts',
        nav: true
      },
      {
        route: 'foodOverview',
        name: 'foodOverview',
        moduleId: 'foodOverview/foodOverview',
        nav: true
      },
      {
        route: 'foodAdd',
        name: 'foodAdd',
        moduleId: 'foodAdd/foodAdd',
        nav: true
      },
    ]);
  }
}
