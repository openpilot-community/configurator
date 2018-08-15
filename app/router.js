import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vehicles', function() {
    this.route('show', {
      path: "/:vehicle_slug"
    });
    this.route("edit",{
      path: "/:vehicle_slug/edit"
    });
    this.route("fork",{
      path: "/:vehicle_slug/fork"
    });
  });

  this.route('user', function() {
    this.route('vehicles');
  });

  this.route('login');
  
});

export default Router;
