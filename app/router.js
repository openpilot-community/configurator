import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('configurations', {
    path: '/c'
  }, function() {
    this.route('index', {
      path: "/"
    }, function() {
      this.route('make', {
        path: '/m/:make_slug'
      });
    });
    this.route('show', {
      path: "/:id"
    });
    this.route('edit', {
      path: '/:id/edit'
    });
    this.route('new');
  });

  this.route('user', function() {
    this.route('vehicles');
  });
  this.route('login');
});

export default Router;
