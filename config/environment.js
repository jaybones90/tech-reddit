/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tech-reddit',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

      firebase: {
        apiKey: "AIzaSyAe2o8YJ-7Axwy0aPqda6bJ-iSt2zDwc4U",
        authDomain: "tech-reddit.firebaseapp.com",
        databaseURL: "https://tech-reddit.firebaseio.com",
        projectId: "tech-reddit",
        storageBucket: "tech-reddit.appspot.com"
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
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
