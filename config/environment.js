'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'openpilot-configurator-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    apollo: {
      apiURL: 'http://localhost:4466/'
      // Optionally, set the credentials property of the Fetch Request interface
      // to control when a cookie is sent:
      // requestCredentials: 'same-origin' // other choices: 'include', 'omit'
    },
    // 'ember-simple-auth': {
    //   authenticationRoute: 'login',
    //   auth0: {
    //     clientID: process.env.AUTH0_CLIENT_ID,
    //     domain: 'vehicledb.auth0.com',
    //     logoutReturnToURL: '/logout',
    //     enableImpersonation: false
    //   }
    // },
    fastboot: {
      hostWhitelist: ['opc.ai', 'opc-vehicledb.herokuapp.com', 'opc-vehicledb-api.herokuapp.com', /^localhost:\d+$/]
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiBaseUrl = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.apiBaseUrl = 'https://opc-vehicledb-api.herokuapp.com';
    // here you can enable a production-specific feature
  }

  return ENV;
};
