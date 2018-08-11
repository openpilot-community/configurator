import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vehicles', {
    path: '/v'
  }, function() {
    this.route('make', {
      path: '/:make_slug'
    },function() {
      this.route('model', {
        path: "/:model_slug"
      });
      this.route('edit', {
        path: '/edit'
      });
      this.route('new');
    });
    
  });

  this.route('user', function() {
    this.route('vehicles');
  });
  this.route('login');
});

export default Router;
